<template>
	<div class="course-prompt">
		课程提示
		<div class="prompt-content">
			{{promptContent}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'courseAside',
		props: ['promptContent'],
		components: {}
	}
</script>

<style scoped>
	.course-prompt {
		padding: 20px  10px 0 90px;
		font-size: 20px;
	}

	.prompt-content {
		font-size: 13px;
		color: #333;
		line-height: 24px;
		background-color: #EEEEEE;
		padding: 20px;
		margin-top: 30px;
	}

	.prompt-content:before {
		content: '';
		display: block;
		width: 0px;
		margin-top: -40px;
		margin-bottom: 20px;
		border-bottom: 20px solid #EEEEEE;
		border-top: 0px solid #fff;
		border-left: 20px solid #fff;
		border-right: 20px solid #fff;
	}
</style>