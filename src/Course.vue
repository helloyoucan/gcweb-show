<template>
	<div class="outer">
		<navigation :active-index='index'></navigation>
		<course-contsnt></course-contsnt>
		<page-footer></page-footer>
	</div>
</template>

<script>
	import './assets/css/reset1.2.css'
	import Layout from './components/course/Content.vue'
	import Nav from './components/public/Nav.vue'
	import Footer from './components/public/Footer.vue'
	export default {
		name: 'course',
		components: {
			'course-contsnt': Layout,
			'page-footer': Footer,
			'navigation': Nav,
		},
		data: () => {
			return {
				index: "2",
			}
		}
	}
</script>

<style>
	.outer {
		min-width: 800px;
	}
</style>