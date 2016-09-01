require('../styl/main.styl');
// var Vue = require('vue');
// var app = new Vue({
// 	el: '#app',
// 	data:{
// 	},
// 	components:{
// 		'manni': require('./modules/vue-example.vue')
// 	}
// });

// npm i -D masonry
/*var Masonry = require('masonry-layout');
var msnry = new Masonry('.Masonry__grid', {
	// options
	itemSelector: '.Masonry__grid-item',
	columnWidth: '.grid-sizer',
	gutter: 0
});*/

window.onload = function(){
	//msnry.layout() // init masonry when everything is loaded
	console.log('... done ... :) ... wellcome to dreiheiligengestalten.at')
}

document.onreadystatechange = function(){
	//console.log(document.readyState)
	var state = document.readyState
	if ( state == 'complete' ){

		console.log('dom loaded ... now loading images ... ')
	}
}
// document.onreadystatechange = function () {
//   var state = document.readyState
//   if (state == 'interactive') {
//       init()
//   } else if (state == 'complete') {
//       initOnCompleteLoad()
//   }
// }​

