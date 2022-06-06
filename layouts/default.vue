<template>
	<div class="site-wrapper" :style="`opacity: ${loaded ? 1 : 0}`">
		<Header />
		<Nuxt />
		<div
			v-if="isDev"
			class="fixed bottom-0 left-0 text-white bg-gray-900 py-1 px-2 text-sm leading-none rounded-tr-md z-50"
		>
			<span class="xl:hidden">2xl</span>
			<span class="hidden xl:inline lg:hidden">xl</span>
			<span class="hidden lg:inline md:hidden">lg</span>
			<span class="hidden md:inline sm:hidden">md</span>
			<span class="hidden sm:inline">sm</span>
		</div>
	</div>
</template>

<script>

	import Header from '~/components/sections/Header'
	import Aos from 'aos'

	export default {
		components: { Header },
		data () {
			return {
				loaded: false,
				isDev: process.env.NODE_ENV !== 'production'
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
			/* Chatra integration */
			(function(d, w, c) {
				w.ChatraID = '2g6C5gw868fhHqS7K';
				var s = d.createElement('script');
				w[c] = w[c] || function() {
					(w[c].q = w[c].q || []).push(arguments);
				};
				s.async = true;
				s.src = 'https://call.chatra.io/chatra.js';
				if (d.head) d.head.appendChild(s);
			})(document, window, 'Chatra')

			window.setTimeout(() => this.loaded = true, 200)
		}
	}

</script>
