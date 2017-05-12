<template>
	<div class="course">
		<div class="title-background" :style="{'background-image':'url(../'+(course.imgUrl&&course.imgUrl)+')'}">
			<div class="c-title">
				{{course.name}}
			</div>
		</div>

		<el-row>
			<el-col :span="16">
				<div class="c-describe">
					简介：{{course.description}}
				</div>
				<el-collapse>
					<el-collapse-item v-for="(s,i) in course.sections" :title="(i+1+'.')+s.name" :name="i">
						{{s.description}}
						<div class="labels">
							<span v-for="tag in s.tags">
							{{tag.name}}
							</span>
						</div>
						<div class="articles-title">
							<div v-for="tag in s.tags">
								<a href="article.html" target="view_window" v-for="(a,j) in tag.articles">{{(i+1)+'.'+(j+1)+a.title}}</a>
							</div>
							<span class="getMore-articles-title" title="获取更多">
								获取更多<i class="el-icon-caret-bottom"></i>
							</span>
						</div>
					</el-collapse-item>
				</el-collapse>
			</el-col>
			<el-col :span="8">
				<course-aside :prompt-content="course.prompt"></course-aside>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import { Collapse, CollapseItem, Row, Col } from 'element-ui'
	import CourseAside from './Aside.vue'
	export default {
		name: 'courseContehtmlnt',
		components: {
			'el-collapse': Collapse,
			'el-collapse-item': CollapseItem,
			'el-col': Col,
			'el-row': Row,
			'course-aside': CourseAside,
		},
		created() {
			var urlStr = location.search;
			var id = urlStr.substring(urlStr.indexOf("?") + 1, urlStr.length);
			this.getCourse(id);
		},
		data() {
			return {
				course: {},
			};
		},
		methods: {
			getCourse(id) {
				this.$http.get('../../../static/testData/course.json').then((response) => {
					this.course = response.data;
				}, (response) => {
					console.log('获取课程失败');
				});
			},
		}
	}
</script>
<style>
	.course {
		margin: 0 auto;
		min-height: 800px;
	}

	.title-background {
		height: 200px;
		width: 100%;
		background-color: rgba(0, 0, 0, .4);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.c-title {
		font-size: 48px;
		line-height: 137px;
		color: #FFFFFF;
	}

	.c-title,
	.el-row {
		max-width: 1200px;
		min-width: 800px;
		margin: 0 auto;
	}

	.c-describe {
		font-size: 14px;
		font-weight: 400;
		color: #888;
		padding: 30px 0 30px;
		line-height: 30px;
	}

	div.el-collapse {
		border-left-width: 0;
		border-right-width: 0;
	}

	div.el-collapse-item__header {
		padding: 7px 10px 7px 10px;
		font-weight: 700;
		font-size: 14px;
	}

	.course .labels {
		margin: 10px 0 5px;
	}

	.course .labels span {
		display: inline-block;
		font-size: 13px;
		border: 1px solid #20A0FF;
		padding: 0 8px;
		margin-right: 5px;
		border-radius: 40px;
		cursor: pointer;
		color: #1D8CE0;
	}

	.articles-title a {
		display: block;
		font-size: 16px;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 3px 0;
	}

	.articles-title a:hover {
		color: #888;
	}

	.getMore-articles-title {
		cursor: pointer;
		display: block;
		width: 70px;
		margin: 0 auto;
		font-size: 14px;
		transition: color ease .3s;
	}

	.getMore-articles-title:hover {
		color: #999;
	}

	.articles-title a:hover {
		color: red;
	}
</style>