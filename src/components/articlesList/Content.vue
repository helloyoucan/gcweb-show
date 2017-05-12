<template>
	<article>
		<section>
			<div class="search">

				<el-input placeholder="文章名/标签名" icon="search" v-model="searchInput" :on-icon-click="handleIconClick">
				</el-input>
			</div>
			<div class="tag-classify">
				标签&nbsp;&nbsp;:&nbsp;&nbsp;
				<span @click="getArticlesList" :class="{active:'all'==tagId}">全部</span>
				<span v-for="tag in tags" :class="{active:tag.id==tagId}" @click="getArticlesListBytagId(tag.id)">
					{{tag.name}}
				</span>
			</div>
		</section>

		<section>
			<el-row :gutter="20">
				<el-col :span="16">
					<articles-iist :articlesList="articlesList" :isLoadMore="isLoadMore" :laodMore="laodMore"></articles-iist>
				</el-col>
				<el-col :span="8">
					<aside>
						<articles-aside></articles-aside>
					</aside>
				</el-col>
			</el-row>
		</section>
	</article>
</template>
<script>
	import { Row, Col, Input } from 'element-ui'
	import ArticlesList from './ArticlesList.vue'
	import Aside from '../public/Aside.vue'
	export default {
		name: 'articles',
		components: {
			'el-row': Row,
			'el-col': Col,
			'articles-iist': ArticlesList,
			'articles-aside': Aside,
			'el-input': Input,
		},
		data() {
			return {
				tags: [],
				articlesList: [],
				searchInput: "",
				page: 0,
				rows: 10,
				isGetAll: true,
				tagId: 'all',
				isLoadMore: false,
			};
		},

		methods: {
			handleIconClick() {

			},
			getAllTags() {
				this.$http.get('../../../static/testData/tags.json').then((response) => {
					this.tags = response.data;
				}, (response) => {
					console.log("获取所有标签失败");
				});
			},
			getArticlesList() {
				this.isGetAll = true;
				this.tagId = 'all';
				this.$http.get("../../../static/testData/articles.json?page=" + this.page + "&size=" + this.rows).then((response) => {
					this.articlesList = response.data;
				}, (response) => {
					this.$message.error('获取文章失败');
				});
			},
			getArticlesListBytagId(tagId) {
				this.isGetAll = false;
				this.tagId = tagId;
				this.$http.get("../../../static/testData/articles.json?page=" + this.page + "&size=" + this.rows + "&tid=" + tagId).then((response) => {
					this.articlesList = response.data;
				}, (response) => {
					this.$message.error('获取文章失败');
				});
			},
			laodMore() {
				this.rows += 10;
				if(this.isGetAll) {
					this.getArticlesList();
				} else {
					this.getArticlesListBytagId(this.tagId)
				}
				this.isLoadMore = true;

			},
		},
		created() {
			this.getArticlesList();
			this.getAllTags();
		}
	}
</script>
<style scoped>
	.el-row {
		margin: 10px 0 20px 0 !important;
	}

	.el-col {
		border-radius: 4px;
		padding-left: 0 !important;
		padding-right: 0 !important;
	}

	article {
		min-width: 800px;
		max-width: 960px;
		margin: 30px auto 20px;
	}

	.search {
		width: 210px;
	}

	.tag-classify {
		margin-top: 15px;
		font-size: 14px;
		font-weight: 800;
	}

	.tag-classify span {
		display: inline-block;
		cursor: pointer;
		font-family: "微软雅黑";
		margin: 0 10px 10px 0;
		padding: 5px 10px;
		font-weight: 400;
		border-radius: 3px;
	}

	.tag-classify span:hover {
		color: red;
	}

	.tag-classify span.active {
		color: #fff;
		background-color: #2b333b;
	}
</style>