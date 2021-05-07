<template>
	<div>
		<Header />
		<Nuxt />
		<Footer />
	</div>
</template>

<script>
	
	import Header from '~/components/sections/Header'
	import Footer from '~/components/sections/Footer'

	export default {
		components: { Header, Footer }
	}

</script>