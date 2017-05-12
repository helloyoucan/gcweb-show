<template>
	<div class="content">
		<div class="title-coursesList">
			<h2>精品课程</h2>
			<div class="courseSearch">
				<el-input placeholder="查找课程" icon="search" v-model="searchText" :on-icon-click="handleIconClick">
				</el-input>
			</div>
		</div>
		<div class="course-labels">
			<el-row>
				<el-col :span="2">
					<div class="cl-title">
						标签:
					</div>
				</el-col>
				<el-col :span="22">
					<div class="cl-labels">
						<span class="label active">
							全部
						</span>
						<span class="label" v-for="(tag,index) in tags" v-if="index<4">
							{{tag.name}}
						</span>
						<el-button @click="btnShowMordLabel">{{labelMore.btnText}}<i :style="{transform: 'rotate('+labelMore.iconRotate+'deg)'}" class="el-icon-caret-bottom"></i></el-button>
						<div class="cll-more" :class="{showMore:this.labelMore.state}">
							<span class="label" v-for="(tag,index) in tags" v-if="index>=4">
							{{tag.name}}
						</span>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
		<courses-list :searchText="searchText"></courses-list>
	</div>
</template>
<script scoped>
	import coursesList from './coursesList.vue'
	import { Input, Row, Col, Tag, Button } from 'element-ui'
	//主页走马灯下的内容
	export default {
		name: "home-content",
		components: {
			coursesList,
			'el-input': Input,
			'el-row': Row,
			'el-col': Col,
			'el-tag': Tag,
			'el-button': Button,
		},
		data: () => {
			return {
				searchText: '',
				labelMore: {
					state: false,
					btnText: '更多',
					iconRotate: 0,
				},
				tags: []
			}
		},
		methods: {
			handleIconClick(ev) {
				console.log(ev);
			},
			btnShowMordLabel() {
				const l = this.labelMore;
				if(!l.state) {
					//未展开
					l.state = !l.state;
					l.btnText = '收起';
					l.iconRotate = 180;

				} else {
					//已展开
					l.state = !l.state;
					l.btnText = '更多';
					l.iconRotate = 0;
				}
			},
			getAllTags() {
				this.$http.get('../../../static/testData/tags.json').then((response) => {
					//console.log(response.data);
					this.tags=response.data;
				}, (response) => {
					console.log("获取所有标签失败");
				});
			}
		},
		created() {
			this.getAllTags();
		}
	}
</script>
<style>
	.content {
		margin-top: 50px;
	}

	.title-coursesList {
		background-color: #edeff0;
		/*background: linear-gradient(#edeff0, #ffffff);*/
		overflow: hidden;
		padding: 5px 10px;
		height: 46px;
	}

	.title-coursesList h2 {
		float: left;
		font-size: 20px;
		font-weight: 200;
		line-height: 46px;
	}

	.courseSearch {
		float: left;
		/*line-height: 60px;*/
		/*ie9下不行*/
		padding: 3px 40px;
	}

	.courseSearch .el-input__inner {
		border-radius: 40px;
		outline: none;
		height: 40px;
	}

	.course-labels {
		padding-top: 10px;
	}

	.cl-title {
		font-size: 16px;
		font-weight: 200;
		line-height: 27px;
		padding: 5px 5px 5px 15px;
	}

	.cl-labels {
		padding: 5px;
	}

	.cl-labels .label {
		display: inline-block;
		font-size: 13px;
		color: #324057;
		border: 1px solid #D3DCE6;
		padding: 4px 8px;
		border-radius: 40px;
		cursor: pointer;
		margin: 0 20px 20px 0;
	}

	.cl-labels .label:hover ,.cl-labels .label.active{
		border-color: #20A0FF;
		color: #1D8CE0;
	}

	.cl-labels .el-button {
		border: none;
	}

	.cll-more {
		height: 0;
		overflow: hidden;
		transition: all ease .5s;
	}

	.cll-more.showMore {
		height: auto;
		overflow: hidden;
	}

	.cl-labels .el-icon-caret-bottom {
		transition: all ease .5s;
	}
</style>