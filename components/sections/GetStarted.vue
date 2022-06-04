<template>
	<div class="section_get-started h-screen relative z-10" ref="section">
		<div class="backdrop absolute inset-0 z-10 bg-no-repeat bg-center bg-cover" ref="bg"></div>
		<div class="absolute inset-0 z-20 flex items-center">
			<div class="container" ref="container">
				<img class="mb-5 h-20 mx-auto" src="/img/background-logo.png" alt="" ref="logo">
				<h2 class="text-center text-7xl font-semibold" ref="title">Давайте обсудим <br>Ваш проект.</h2>
				<p class="text-center text-2xl font-medium mt-7 leading-tight" ref="subtitle">Оставьте заявку на бесплатную консультацию </p>
				<div class="flex justify-center">
					<a href="https://wa.me/79101127174" target="_blank" class="btn btn-white btn-sm mt-7" ref="button">Оставить заявку</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger"

	export default {
		mounted () {
			gsap.registerPlugin(ScrollTrigger)

			const tl = gsap.timeline()
			tl.from(this.$refs.section, {opacity: 0, duration: 0.5, ease: 'linear'}, '-=1')
			tl.from(this.$refs.button, {opacity: 0, duration: 0.03, ease: 'linear'}, '0.185')
			tl.from(this.$refs.subtitle, {opacity: 0, duration: 0.03, ease: 'linear'}, '0.200')
			tl.from(this.$refs.title, {opacity: 0, duration: 0.03, ease: 'linear'}, '0.230')
			tl.from(this.$refs.logo, {opacity: 0, duration: 0.03, ease: 'linear'}, '0.250')
			tl.from(this.$refs.logo, {scale: 0.85, duration: 0.06, ease: 'linear'}, '0.265')
			tl.from(this.$refs.container, {translateY: 150, duration: 0.09, ease: 'linear'}, '0.275')

			ScrollTrigger.create({
				animation: tl,
				trigger: this.$refs.section,
				start: 'top top',
				end: '+=200%',
				pin: true,
				scrub: true,
			})
		}
	}

</script>
