var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var stylus = require('stylus');
var nib = require('nib');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer');
var poststylus = require('poststylus');
// var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var jade = require("jade");

var debug = process.env.NODE_ENV  !== "production";
var path = require('path')

module.exports = {
	context: __dirname + "/src",
	entry: "./js/main.js",
	devtool: debug ? "inline-sourcemap" : null,
    output: {
        // path: path.resolve(__dirname, "src"),
        path: "./dist",
        filename: "js/[name].js"
    },
    module:{
    	loaders:[	
            { test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss?pack=cleaner!stylus-loader")},
            // {test: /\.(png|jpg|woff|woff2|eot|ttf|otf)/, loader: 'url-loader'},
             { test: /\.pug$/, loader: 'pug-static' },
             { test: /\.jade$/, loader: 'jade' },
             // { test: /\.vue$/, loader: 'vue'}
            // { test: /\.pug/, loader: "pug-html-loader" } // pug loader is not working with loops in templates
    	]

    },
    plugins: debug ? [new ExtractTextPlugin("css/[name].css"), new HtmlWebpackPlugin({filename:'index.html',template:'./index.jade'}) ] : [
      new HtmlWebpackPlugin({filename:'index.html',template:'./index.jade'}),
    	new ExtractTextPlugin("css/[name].css"),
    	new webpack.optimize.DedupePlugin(),
		  new webpack.optimize.OccurenceOrderPlugin(),
		  new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
  	stylus:{
  		use: [rupture(), nib(), poststylus('lost', 'rucksack-css')]
  	},
    postcss: function () {
        return {
            default: [autoprefixer({browsers:['last 4 version']})],
            cleaner: [autoprefixer({browsers:['last 4 version']})]
        }
    }

	// module: {
	// 	loaders: [{
	// 		test: /\.styl$/,
	// 		loader: stylusLoader
	// 	}]
	// },
	// plugins: [
	// 	new ExtractTextPlugin("./dist/css/[name].css")
	// ]
};
