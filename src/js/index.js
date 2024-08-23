import Vue from 'vue'
import index from '../index.vue'

new Vue({
	el: '#app',
	mounted : function(){
		console.log('Hello World');
	},
	components: { index },
	template: '<index/>'
})