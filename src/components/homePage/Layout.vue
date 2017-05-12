<template>
	<article>
		<section>
			<homePage-carousel>
			</homePage-carousel>
		</section>
		<section>
			<homePage-content></homePage-content>
		</section>
	</article>
</template>
<script scoped>
	//主页内容
	import Carousel from './Carousel.vue'
	import Content from './Content.vue'
	import { Row, Col } from 'element-ui'
	export default {
		name: 'homePageLayout',
		components: {
			'homePage-carousel':Carousel,
			'homePage-content': Content,
		},
	}
</script>
<style scoped>
	article {
		min-width: 960px;
		max-width: 1200px;
		margin: 20px auto;
	}
</style>