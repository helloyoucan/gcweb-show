<template>
	<aside>
		<div class="aside">
			<div class="course-title">
				{{course.title}}
			</div>
			<div class="course-content">
				<ul>
					<li class="chapters" v-for="(cc,i) in course.chapters">
						{{(i+1+'.')+cc.title}}
						<ul v-for="(s,j) in cc.sections">
							<li class="sections">
								<a href="javascript:;">{{(i+1+'.'+(j+1)+'.')+s}}</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</aside>
</template>

<script>
	export default {
		name: 'articleAside',
		props: ['course'],
		components: {},
		methods: {

		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.aside {
		background-color: #f7f8fa;
		border: 2px solid #EEEEEE;
		padding: 20px;
		margin-top: 100px;
		margin-left: 60px;
		border-radius: 5px;
	}

	@media only screen and (min-width: 960px) and (max-width: 1024px) {
		.aside {
			margin-left: 50px;
		}
	}

	@media only screen and (min-width: 800px) and (max-width: 960px) {
		.aside {
			margin-left: 40px;
		}
	}

	@media only screen and (min-width: 0px) and (max-width: 800px) {
		.aside {
			margin-left: 30px;
		}
	}

	.course-title {
		font-size: 16px;
		font-weight: 700;
	}

	.course-content ul,
	.course-content li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li.chapters {
		margin: 10px 0 0 15px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 13px;
	}

	li.sections {
		margin: 0 0 0 10px;
	}

	li.sections a {
		width: 100%;
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>