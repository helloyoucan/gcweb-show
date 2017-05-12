import Vue from 'vue'
import course from './Course.vue'
import vueResource from 'vue-resource'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(vueResource);

new Vue({
	el: "#course",
	render: h => h(course)
})