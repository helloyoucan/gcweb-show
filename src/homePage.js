import Vue from 'vue'
import Home from './HomePage.vue'
import vueResource from 'vue-resource'
Vue.use(vueResource);
new Vue({
	el: "#home",
	render: h => h(Home)
})