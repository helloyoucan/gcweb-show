<template>
	<div class="content">
		<div class="tabs">
			<ul>
				<li>
					<span :class="{ active: isActive }" v-on:click="newTab">
					最新
					</span>
				</li>
				<li>
					<span :class="{ active: !isActive }" v-on:click="hotTab">
					热门
					</span>
				</li>
			</ul>
			<div class="tabs-bottom" :style="{ transform: 'translateX('+translateX+ 'px)'}">

			</div>
		</div>
		<div>
			<ul class="article-list">
				<li v-for="a in articlesList">
					<div class="article" :class="{ 'has-img': false}">
						<a href="article.html" target="view_window" class="a-wrap-img"><img :src="a.a_wrap_img" /></a>

						<div class="a-title">
							<a href="#">{{a.title}}</a>
						</div>
						<div class="a-content">

							<div class="a-abstract">
								{{getAbstracts(a.mdContent)}}
							</div>

						</div>
						<div class="a-footer">
							<div class="af-tag">
								<el-tag type="danger" color="#fff" v-for="tag in a.tagSet">{{tag.name}}</el-tag>
							</div>
							<div class="a-meta">
								<a href="javascript:;">
									<i class="fa fa-eye"></i> {{a.view}}
								</a>
								<a href="javascript:;">
									<i class="fa fa-commenting-o"></i>{{a.comments}}
								</a>
								<span>
								<i class="fa fa-heart"></i>
								{{a.like}}
								<a href="javascript:;">
									{{a.time}}
								</a>
							</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<div class="load-more-article">
				<el-button size="small" :loading="isLoadMore" v-on:click="laodMore">加载更多
					<i class="el-icon-arrow-down"></i>
				</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../../static/vendor/font-awesome-4.7.0/css/font-awesome.min.css'
	import { Button, Tag } from 'element-ui'
	import { markdown } from 'markdown';
	export default {
		name: 'articlesListContent',
		components: {
			'el-button': Button,
			'el-tag': Tag
		},
		props: ['articlesList', "isLoadMore"],
		data() {
			return {
				isActive: true,
				translateX: 0,
			}
		},
		methods: {
			newTab() {
				this.isActive = true;
				this.translateX = 0;

			},
			hotTab() {
				this.isActive = false;
				this.translateX = 80;
			},
			laodMore() {
				this.$emit("laodMore");

			},
			getAbstracts(mdContent) { //获取文章前面的200个子非鱼并过滤
				return markdown.toHTML(mdContent).replace(/<[^>]+>/g, "").substring(0, 200);
			},
		}
	}
</script>

<style scoped>
	.tabs {
		border-bottom: 1px solid #d1dbe5;
		position: relative;
	}

	.tabs ul {
		overflow: hidden;
		padding: 0 10px;
	}

	.tabs li {
		float: left;
	}

	.tabs span {
		cursor: pointer;
		padding: 0 26px;
		height: 42px;
		box-sizing: border-box;
		line-height: 42px;
		display: inline-block;
		list-style: none;
		font-size: 14px;
		color: #8391a5;
	}

	.tabs span.active {
		color: #20a0ff;
	}

	.tabs-bottom {
		position: absolute;
		bottom: 0;
		left: 10px;
		height: 3px;
		background-color: #20a0ff;
		z-index: 1;
		transition: transform .3s cubic-bezier(.645, .045, .355, 1);
		list-style: none;
		width: 80px;
	}

	.article-list {
		padding: 0 10px;
	}

	.has-img .a-content {
		padding-right: 150px;
	}

	.has-img .a-wrap-img {
		display: block;
	}

	.a-content {
		padding-right: 0px;
	}

	.article {
		border-top: 1px solid #EEEEEE;
		padding: 20px 0 20px;
	}

	.a-wrap-img {
		float: right;
		padding: 40px 0 0;
		display: none;
	}

	.a-title {
		font-family: "微软雅黑";
		font-size: 18px;
		font-weight: 800;
		padding: 5px 0 5px;
	}

	.a-abstract {
		font-family: "微软雅黑";
		font-size: 13px;
		line-height: 26px;
	}

	.a-footer {
		overflow: hidden;
		padding: 5px 0 0;
	}

	.af-tag {
		float: left;
	}

	.af-tag .el-tag {
		margin-right: 5px;
	}

	.a-meta {
		padding-left: 10px;
		font-size: 14px;
		float: left;
		line-height: 24px;
	}

	.a-meta a:link,
	.a-meta a:visited,
	.a-meta span {
		font-family: "微软雅黑";
		color: #787878;
		margin: 0 5px 0 0;
	}

	.a-meta a:hover {
		color: #000;
	}

	.a-meta a:last-child {
		margin-left: 20px;
	}

	.load-more-article {}

	.load-more-article button {
		margin-top: 20px;
		width: 100%;
		height: 34px;
		color: #999;
	}
</style>