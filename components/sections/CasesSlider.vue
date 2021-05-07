<template>
	<section class="section_cases-slider py-28">
		<div class="container">
			<h2 class="text-center text-4xl font-semibold text-gray-700">Лучшие результаты наших клиентов</h2>
			
		</div>
		<div class="slider" ref="slider">
			<div>
				<div class="max-w-5xl mx-auto py-16">
					<div class="case-preview rounded-xl overflow-hidden">
						<img class="w-full" src="/img/mac-os-bar.png" alt="MacOS bar">
						<div class="relative">
							<div class="overlay absolute inset-0 rounded-b-xl bg-black bg-opacity-60 flex justify-center items-center">
								<a href="#" class="btn btn-primary-gradient">
									Перейти на сайт
									<span class="inline-block ml-3.5 w-4 h-4" v-html="require('~/assets/icons/external-link.svg?raw')"></span>
								</a>
							</div>
							<img class="w-full" src="/img/projects/tg_image_4030849595.jpeg" alt="Case image">
						</div>
					</div>
					<div class="mt-10">
						<p class="font-semibold text-2xl text-gray-900">Лендинг для специализированного центра по замене и ремонту автостекол</p>
						<p class="mt-5 text-xl">Задача: сделать продающий лендинг</p>
						<div class="grid grid-cols-3 mt-9">
							<div>
								<div class="text-primary font-semibold text-5xl">13</div>
								<p class="text-xl">
									дней отведено <br>
									на реализацию проекта
								</p>
							</div>
							<div>
								<div class="text-primary font-semibold text-5xl">13</div>
								<p class="text-xl">
									дней отведено <br>
									на реализацию проекта
								</p>
							</div>
							<div class="text-right">
								<a href="#" class="btn btn-primary-gradient">
									Перейти на сайт
									<span class="inline-block ml-3.5 w-4 h-4" v-html="require('~/assets/icons/external-link.svg?raw')"></span>
								</a>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<div>Slide 2</div>
			<div>Slide 3</div>
			<div>Slide 4</div>
			<div>Slide 5</div>
		</div>
	</section>
</template>

<script>
	
	import $ from 'jquery'

	export default {
		data () {
			return {
				slider: null,
				projects: []
			}
		},
		mounted () {
			this.slider = $(this.$refs.slider).slick({
				infinite: true,
				autoplay: false,
				autoplaySpeed: 5000,
				fade: true,
				useTransform: false,
				waitForAnimate: false,
				speed: 700,
				prevArrow: $(this.$refs.prevBtn),
				nextArrow: $(this.$refs.nextBtn),
				dots: true,
				appendDots: $(this.$refs.navigationDots),
			})
		}
	}

</script>