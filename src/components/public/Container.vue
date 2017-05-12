<template>
	<div>
		<ul class="article-list">
			<li v-for="a in articles">
				<div class="article" v-bind:class="{ 'has-img': a.hasImg}">
					<a href="#" class="a-wrap-img"><img v-bind:src="a.a_wrap_img" /></a>
					<div class="a-content">
						<div class="a-author">
							<a href="#" class="a-head-portrait">
								<img v-bind:src="a.a_head_portrait" />
							</a>
							<div class="a-name">
								<a href="#" class="user-link">{{a.a_name}}</a><span class="time">{{a.time}}</span>
							</div>
						</div>
						<div class="a-title">
							<a href="#">{{a.a_title}}</a>
						</div>
						<div class="a-abstract">
							{{a.a_abstract}}
						</div>
					</div>
					<div class="a-footer">
						<div class="af-tag">
							<el-tag type="danger" color="#fff">{{a.tag}}</el-tag>
						</div>
						<div class="a-meta">
							<a href="#">
								<i class="fa fa-eye"></i> {{a.view}}
							</a>
							<a href="#">
								<i class="fa fa-commenting-o"></i>{{a.comments}}
							</a>
							<span>
						<i class="fa fa-heart"></i>
						{{a.like}}
					</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="load-more-article">
			<el-button size="small" v-on:click="laodMore">加载更多
				<i class="el-icon-arrow-down"></i>
			</el-button>
		</div>
	</div>
</template>
<script>
	//文章列表
	import '../../../static/vendor/font-awesome-4.7.0/css/font-awesome.min.css'
	import { Button, Tag } from 'element-ui'

	export default {
		name: 'container',
		components: {
			'el-button': Button,
			'el-tag': Tag
		},
		props: ['articles'],
		methods: {
			laodMore(){
				alert("加载更多热门文章");
			}
		}
	}
</script>
<style scoped>
	.article-list{
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

	.article .a-wrap-img img {
		width: 140px;
		height: 120px;
	}

	.a-author {
		overflow: hidden;
	}

	.a-head-portrait {
		float: left;
	}

	.a-head-portrait img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #ddd;
	}

	.a-name {
		float: left;
		line-height: 40px;
	}

	.a-name a {
		font-family: "微软雅黑";
		font-size: 15px;
		font-weight: 700;
		margin: 0 10px 0 10px;
	}

	.a-name span {
		font-size: 14px;
		color: #666;
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

	.load-more-article {}

	.load-more-article button {
		margin-top: 20px;
		width: 100%;
		height: 34px;
		color: #999;
	}
</style>