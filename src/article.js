import Vue from 'vue'
import Article from './Article.vue'
import vueResource from 'vue-resource'
Vue.use(vueResource);
new Vue({
	el: "#article",
	render: h => h(Article)
})