<template>
	<el-row>
		<el-col :span="16">
			<article>
				<div class="title">
					<h1>
						{{article.title}}
					</h1>
				</div>
				<div class="label">
					<span v-for="tag in article.tagSet">
						{{tag.name}}
					</span>
				</div>
				<div class="content" v-html="toHtml()">
				</div>
			</article>
		</el-col>
		<el-col :span="8">
			<my-aside class="a-aside"></my-aside>

		</el-col>
	</el-row>

</template>

<script>
	import { Row, Col, Breadcrumb, BreadcrumbItem } from 'element-ui'
	import Aside from '../public/Aside.vue'
	import { markdown } from 'markdown';
	export default {
		name: 'article',
		components: {
			'el-row': Row,
			'el-col': Col,
			'el-breadcrumb': Breadcrumb,
			'el-breadcrumb-item': BreadcrumbItem,
			'my-aside': Aside,
		},
		created() {
			var urlStr = location.search;
			var id = urlStr.substring(urlStr.indexOf("?") + 1, urlStr.length);
			this.getArticle(id);
		},
		methods: {
			toHtml() {
				return markdown.toHTML(this.article.mdContent);
			},
			getArticle(id) {
				this.$http.get('../../../static/testData/article.json').then((response) => {
					console.log(response.data)
					this.article = response.data;
				}, (response) => {
					console.log('获取文章失败');
				});
			}
		},
		data() {
			return {
				article: {},
			}
		}
	}
</script>

<style>
	.el-row {
		max-width: 1200px;
		min-width: 800px;
		margin: 0 auto;
		padding: 0px 0px 40px 0;
		transition: padding ease .5s;
	}

	.el-col:first-child {
		background-color: #FFFFFF;
		padding: 10px;
	}

	@media only screen and (min-width: 0px) and (max-width: 960px) {
		.el-row {
			padding: 0px 0 40px;
		}
	}

	.title h1 {
		font-size: 28px;
		padding: 20px 0 0px;
	}

	article .label span {
		display: inline-block;
		font-size: 12px;
		border: 1px solid #20A0FF;
		padding: 1px 4px;
		border-radius: 40px;
		cursor: pointer;
		color: #1D8CE0;
		margin-right: 10px;
	}

	.content {
		padding-right: 50px;
		min-height: 400px;
	}

	.a-aside {
		padding-top: 100px;
	}
</style>