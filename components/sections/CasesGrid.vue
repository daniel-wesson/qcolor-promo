<template>
	<section class="section_cases-grid py-28">
		<div class="container">
			<ul class="grid grid-cols-2 gap-8">
				<li v-for="case_ in cases" class="pb-7 shadow-md relative rounded-xl overflow-hidden">
					<!-- <div class="absolute inset-0 z-0 overflow-hidden">
						<img class="opacity-100 filter blur-xl w-full h-full object-cover object-center" :src="case_.image" :alt="`${case_.site} banner backdrop`">
					</div> -->

					<!-- <div class="square">
						<div class="absolute inset-0 flex items-center">
							
						</div>
					</div> -->
					
					<div class="relative z-10 text-center">
						<img class="w-full" :src="case_.image" :alt="`${case_.site} banner`">
						<div class="mt-5 font-semibold text-xl text-gray-700">{{ case_.name }}</div>
						<a class="btn btn-sm border-2 border-primary mt-4" :href="case_.url" target="_blank">{{ case_.site }}</a>
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
						image: '/img/cases/case-01.jpg',
						name: 'Сайт «Школы Блогеров» Дарьи Кананухи',
						site: 'apple.com',
						url: 'https://apple.com'
					},
					{
						image: '/img/cases/case-01.jpg',
						name: 'Сайт «Школы Блогеров» Дарьи Кананухи',
						site: 'apple.com',
						url: 'https://apple.com'
					},
					{
						image: '/img/cases/case-01.jpg',
						name: 'Сайт «Школы Блогеров» Дарьи Кананухи',
						site: 'apple.com',
						url: 'https://apple.com'
					},
					{
						image: '/img/cases/case-01.jpg',
						name: 'Сайт «Школы Блогеров» Дарьи Кананухи',
						site: 'apple.com',
						url: 'https://apple.com'
					},
					{
						image: '/img/cases/case-01.jpg',
						name: 'Сайт «Школы Блогеров» Дарьи Кананухи',
						site: 'apple.com',
						url: 'https://apple.com'
					}
				]
			}
		}
	}

</script>