<template>
	<el-carousel :interval="4000" type="card" height="350px">
		<el-carousel-item v-for="img in imgs">
			<img :src="img" />
		</el-carousel-item>
	</el-carousel>
</template>
<script>
	import { Carousel, CarouselItem } from 'element-ui'
	//走马灯
	export default {
		name: 'carousel',
		components: {
			'el-carousel': Carousel,
			'el-carousel-item': CarouselItem,
		},
		data: () => {
			let imgs = [
				"../../../../static/img/carousel.jpg",
				"../../../../static/img/carousel.jpg",
				"../../../../static/img/carousel.jpg"
			];
			return {
				imgs
			};
		}
	}
</script>
<style scoped>
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.el-carousel__item img {
		height: 100%;
		width: 100%;
	}
</style>