<template>
	<section class="section_cases-grid py-28 relative z-20">
		<div class="container">
			<ul class="grid grid-cols-2 gap-8">
				<li class="pb-7 bg-white shadow-md relative rounded-xl overflow-hidden" v-for="case_ in cases">
					<div class="relative z-10 text-center">
						<img class="w-full" :src="case_.image" :alt="`${case_.site} banner`">
						<div class="mt-5 font-semibold text-xl text-gray-700" v-html="case_.name"></div>
						<a class="btn btn-sm btn-black-outline mt-4" :href="case_.url" target="_blank">Перейти на сайт</a>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>

	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger"

	export default {
		data () {
			return {
				cases: [
					{
						image: require('~/static/img/cases/case-sapanova.png'),
						name: 'Лендинг для Арайлым Сапановой',
						url: 'https://sapanova.psyweb.site'
					},
					{
						image: require('~/static/img/cases/case-sidorenko.png'),
						name: 'Лендинг для Елены Сидоренко',
						url: 'https://sidorenko.psyweb.site'
					},
					{
						image: require('~/static/img/cases/case-martynuk.png'),
						name: 'Лендинг для Александры Мартынюк',
						url: 'https://martyniuk.psyweb.site'
					},
					{
						image: require('~/static/img/cases/case-zagryadskaya.png'),
						name: 'Сайт для Анастасии Загрядской',
						url: 'https://zagryadskaya.psyweb.site'
					},
					{
						image: require('~/static/img/cases/case-chigdem.png'),
						name: 'Сайт для Александры Чигдэм',
						url: 'https://chihdem.psyweb.site'
					},
					{
						image: require('~/static/img/cases/case-blisost.png'),
						name: 'Сайт для Анастасии Афинской',
						url: 'https://closeness.psyweb.site'
					}
				]
			}
		},
		mounted () {

		}
	}

</script>
