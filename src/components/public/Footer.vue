<template>
	<footer>
		<p>
			<a href="#">关于本站</a>
			&nbsp;-&nbsp;
			<a href="#">联系我们</a>
			&nbsp;-&nbsp;
			<a href="#">加入我们</a>
			&nbsp;-&nbsp;
			<a href="#">问题反馈</a>
			&nbsp;-&nbsp;
			<a href="">帮助</a>
		</p>
		<p>
			版权所有&#169;helloyoucan-2017
		</p>
	</footer>

</template>
<script>
	export default {
		name: 'footer'
	}
</script>
<style scoped>
	footer {
		max-width: 1200px;
		margin: 0 auto;
		padding: 15px 0;
		font-size: 12px;
		font-weight: 700;
		color: #888;
		line-height: 18px;
	}

	footer a:link,
	footer a:visited {
		color: #888;
	}
</style>