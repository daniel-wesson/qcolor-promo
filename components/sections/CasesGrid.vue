<template>
	<section class="section_cases-grid py-28 relative z-20">
		<div class="container">
			<ul class="grid grid-cols-2 gap-8">
				<li class="pb-7 bg-white shadow-md relative rounded-xl overflow-hidden" v-for="case_ in cases">
					<!-- <div class="absolute inset-0 z-0 overflow-hidden">
						<img class="opacity-100 filter blur-xl w-full h-full object-cover object-center" :src="case_.image" :alt="`${case_.site} banner backdrop`">
					</div> -->

					<!-- <div class="square">
						<div class="absolute inset-0 flex items-center">
							
						</div>
					</div> -->
					
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
						image: '/img/cases/tg_image_4030849595.jpeg',
						name: 'Женская cпортивная одежда «Black Sand»',
						url: 'https://blcsand.com'
					},
					{
						image: '/img/cases/tg_image_570309526.jpeg',
						name: 'Интернет-магазин шелковой одежды «Zefir»',
						url: 'https://zefir.design'
					},
					{
						image: '/img/cases/tg_image_1243195822.jpeg',
						name: 'Интернет-магазин электроники «Технокультура»',
						url: 'https://tekhnokultura.com'
					},
					{
						image: '/img/cases/tg_image_1295081776.jpeg',
						name: 'Сайт аренды Stripe аккаунтов «Bestpayments»',
						url: 'https://bestpayments.solutions'
					},
					{
						image: '/img/cases/tg_image_1994154273.jpeg',
						name: 'Сайт пекарни «Буханка»',
						url: 'https://buhanka.ru'
					},
					{
						image: '/img/cases/tg_image_3913596754.jpeg',
						name: 'Жилой комплекс «Московский 65»',
						url: 'https://moskovsky65.legenda-dom.ru'
					}
				]
			}
		},
		mounted () {

		}
	}

</script>