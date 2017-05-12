<template>
	<div class="home-aside">
		<div class="recommend-title">推荐文章</div>
		<ul class="recommend-articles-list">
			<li v-for="a in articles">
				<a class="ral-article">
					<span class="ralar-article-title">
						{{a.title}}
					</span>
					<span class="ralar-new-content">
						{{a.content}}
					</span>
				</a>
			</li>

		</ul>
		<div class="load-more-article">
			<el-button size="small" @click="laodMore">查看更多
				<i class="el-icon-arrow-right"></i>
			</el-button>
		</div>
	</div>
</template>
<script scoped>
	//文章列表和文章中引用
	import { Button } from 'element-ui'
	export default {
		name: 'Adide',
		components: {
			'el-button': Button,
		},
		data: () => {
			let articles = [{
				title: "App Store 狠抓精神文明建设，JSPatch要亡了？",
				content: "最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章"
			}, {
				title: "App Store 狠抓精神文明建设，JSPatch要亡了？",
				content: "233最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章最新文章"
			}];
			return {
				articles
			}
		},
		methods: {
			laodMore: () => {
				alert("加载更多推荐文章");
			}
		}
	}
</script>
<style>
	.home-aside {
		padding-left: 50px;
		font-size: 15px;
	}

	.recommend-title {
		padding: 0 0 10px;
		color: #999;
		font-size: 16px;
	}

	.recommend-articles-list {
		overflow: hidden;
		padding: 0;
		margin: 0;
	}

	.recommend-articles-list li {
		list-style: none;
		margin: 0;
		padding: 0;
		margin: 5px 0;
	}

	.ral-article {
		cursor: pointer;
		position: relative;
		padding: 10px 0;
	}

	a:hover .ralar-article-title,
	a:hover .ralar-new-content {
		color: red;
	}

	.ralar-article-title {
		display: inline-block;
		width: 100%;
		line-height: 22px;
		height: 22px;
		font-weight: 600;
		color: #555;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.ralar-new-content {
		font-size: 12px;
		color: #777;
		display: inline-block;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.load-more-article button {
		margin-top: 20px;
		width: 100%;
		height: 34px;
		color: #999;
	}
</style>