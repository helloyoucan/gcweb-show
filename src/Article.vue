<template>
	<div class="outer">
		<navigation :active-index='index'></navigation>
		<article-content></article-content>
		<page-footer></page-footer>
	</div>
</template>

<script>
	import ArticleContent from './components/article/Content.vue'
	import Nav from './components/public/Nav.vue'
	import Footer from './components/public/Footer.vue'
	export default {
		components: {
			'article-content': ArticleContent,
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

	a:link,
	a:visited {
		text-decoration: none;
		color: #000;
	}
	/* 设置链接字体 */

	a:hover {
		text-decoration: none;
	}

	body {
		margin: 0;
		/*background-color: #f7f8fa;*/
		font-family: "微软雅黑", "宋体", "新宋体";
	}
</style>