import Vue from 'vue'
import ArticlesList from './ArticlesList.vue'
import vueResource from 'vue-resource'
Vue.use(vueResource);
new Vue({
	el: "#articlesList",
	render: h => h(ArticlesList)
})