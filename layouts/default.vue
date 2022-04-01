<template>
	<div class="site-wrapper" :style="`opacity: ${loaded ? 1 : 0}`">
		<Header />
		<Nuxt />
		<Footer />
	</div>
</template>

<script>
	
	import Header from '~/components/sections/Header'
	import Footer from '~/components/sections/Footer'
	import Aos from 'aos'

	export default {
		components: { Header, Footer },
		data () {
			return {
				loaded: false
			}
		},
		watch: {
			loaded () {
				Aos.init({
					once: true,
					duration: 800
				})
			}
		},
		mounted () {
			setTimeout(() => {
				this.loaded = true
			}, 200)
		}
	}

</script>