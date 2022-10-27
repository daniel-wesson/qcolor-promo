<template>
	<section class="section_cases-grid py-28 relative z-20" id="here_our_works">
		<div class="container">
			<h2 class="text-center text-4xl font-semibold text-gray-700">Наше портфолио</h2>
			<ul class="grid grid-cols-2 gap-8 lg:grid-cols-1 mt-10">
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
				},
				{
					image: require('~/static/img/cases/case-natalirusskova.png'),
					name: 'Лендинг для Натальи Руссковой',
					url: 'https://natalirusskova.psyweb.site'
				},
				{
					image: require('~/static/img/cases/case-nborisenko.png'),
					name: 'Лендинг для Надежды Борисенко',
					url: 'https://nborisenko.psyweb.site'
				},
				{
					image: require('~/static/img/cases/case-alinaguseva.png'),
					name: 'Лендинг для Алины Гусевой',
					url: 'https://alinaguseva.psyweb.site'
				},
				{
					image: require('~/static/img/cases/case-annamatari.png'),
					name: 'Лендинг для Анны Матари',
					url: 'https://annamatari.psyweb.site'
				},
				{
					image: require('~/static/img/cases/case-shurinova.png'),
					name: 'Лендинг для Людмилы Шуриновой',
					url: 'https://shurinova.psyweb.site'
				},
				{
					image: require('~/static/img/cases/case-nadezhdaiakovleva.png'),
					name: 'Сайт для Надежды Яковлевой',
					url: 'https://nadezhdaiakovleva.psyweb.site'
				},
				{
					image: require('~/static/img/cases/case-osipova.png'),
					name: 'Сайт для Виктории Осиповой',
					url: 'https://osipova.psyweb.site'
				}
			]
		}
	}
}

</script>
