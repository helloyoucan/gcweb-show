<template>
	<div class="courseslist">
		<a href="course.html" target="view_window" class="c-item" v-for="c in courseslist">
			<img class="c-img" :src="c.imgUrl" />
			<div class="course">
				<div class="c-title">{{c.name}}</div>
				<div class="c-describe">
					{{c.description}}
				</div>
			</div>
			<div class="c-label">
			</div>
		</a>
		<div class="getMode">
			<el-button type="primary" @click="getModeCourse" :loading="loadMoreCourse">加载更多</el-button>
		</div>

	</div>
</template>

<script>
	import { Button } from 'element-ui'
	export default {
		name: 'courseList',
		props: ['searchText'],
		data() {
			return {
				loadMoreCourse: false,
				courseslist: [],
				page: 0,
				rows: 10,

			}
		},
		components: {
			'el-button': Button,
		},
		created() {
			this.getCourses();
		},
		methods: {
			getCourses() { //获取数据(页数，每页多少条，关键词)
				this.$http.get("../../../static/testData/courses.json?searchStr=" + this.searchText + "&page=" + this.page + "&size=" + this.rows).then((response) => {
					//this.courseslist = response.data.data.content;
					console.log(response.data);
					response.data.forEach((c) => {
						this.courseslist.push(c)
					})
					this.loadMoreCourse = false;
				}, (response) => {
					this.$message.error('获取课程失败');
				});
			},
			getModeCourse() {
				this.page++;
				this.row += 10;
				this.loadMoreCourse = true;
				this.getCourses()
			},
		}
	}
</script>

<style>
	.courseslist {
		overflow: hidden;
		margin-bottom: 20px;
		position: relative;
		padding-bottom: 60px;
	}

	.c-item {
		width: 260px;
		height: 272px;
		background: #fff;
		display: inline-block;
		position: relative;
		cursor: pointer;
		border-radius: 4px;
		-webkit-box-shadow: 0 8px 16px rgba(7, 17, 27, .2);
		-moz-box-shadow: 0 8px 16px rgba(7, 17, 27, .2);
		box-shadow: 0 8px 16px rgba(7, 17, 27, .2);
		overflow: hidden;
		margin: 20px 20px 30px;
	}

	.c-item:hover .course {
		top: 50px;
	}

	.c-img {
		width: 100%;
		height: 142px;
		border-radius: 4px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.c-label {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 29px;
		background-color: #FFFFFF;
		padding: 15px 28px 0;
		overflow: hidden;
		color: #324057;
	}

	.course {
		background-color: #FFFFFF;
		position: absolute;
		left: 0;
		right: 0;
		top: 110px;
		height: 150px;
		transition: top .5s;
		padding: 30px 28px 0;
		text-align: left;
	}

	.c-title {
		max-height: 48px;
		font-size: 16px;
		line-height: 24px;
		color: #07111b;
		font-weight: 700;
		margin-bottom: 6px;
		padding-bottom: 15px;
		border-bottom: 1px solid #d9dde1;
	}

	.c-describe {
		color: #93999f;
		font-size: 12px;
		line-height: 20px;
	}

	.getMode {
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 120px;
		margin-left: -60px;
	}

	.courseslist .el-button {
		width: 120px;
		text-align: center;
	}
</style>