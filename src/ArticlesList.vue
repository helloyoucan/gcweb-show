<template>
	<div class="outer">
		<navigation :active-index='index'></navigation>
		<articlesList-content></articlesList-content>
		<page-footer></page-footer>
	</div>
</template>

<script>
	import './assets/css/reset1.2.css'
	import Content from './components/articlesList/Content.vue'
	import Nav from './components/public/Nav.vue'
	import Footer from './components/public/Footer.vue'
	export default {
		name: 'articles',
		components: {
			'articlesList-content': Content,
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