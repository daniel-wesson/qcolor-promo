<template>
	<div class="page_home">
		 <section-welcome />
		<section-cases-slider />

		<section class="py-14">
			<div class="container">
				<div class="flex justify-between">
					<div class="w-1/2">
						<h2 class="text-6xl font-semibold"><span class="underline-primary">3 причины</span> заказать разработку сайта именно у нас</h2>
						<p class="mt-8 text-xl text-gray-400">На рынке много агентств с впечатляющими результатами, но Deserve - это особенный путь. Хотите построить что-то, что будет жить вечно? Мы здесь.</p>
						<div class="mt-12">
							<p class="text-black text-lg">Быстрая загрузка всех страниц</p>
							<div class="mt-2 progress-body">
								<div class="progress-fullness" style="width: 100%">
									<div class="tip">100%</div>
								</div>
							</div>
						</div>
						<div class="mt-12">
							<p class="text-black text-lg">Адаптация под все устройства</p>
							<div class="mt-2 progress-body">
								<div class="progress-fullness" style="width: 100%">
									<div class="tip">100%</div>
								</div>
							</div>
						</div>
						<div class="mt-12">
							<p class="text-black text-lg">Дополнения для успешных продаж</p>
							<div class="mt-2 progress-body">
								<div class="progress-fullness" style="width: 100%">
									<div class="tip">100%</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-2/5">
						<ul>
							<li class="mb-9">
								<div class="text-primary text-6xl font-semibold mb-2.5">01</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Фиксированные цены</h3>
								<p class="text-gray-400">Все условия прописываются в договоре. Никаких дополнительных платежей и подводных камней. Вы сразу получаете <span class="text-primary">полный доступ</span> к вашему проекту</p>
							</li>
							<li class="mb-9">
								<div class="text-primary text-6xl font-semibold mb-2.5">02</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Никаких шаблонов</h3>
								<p class="text-gray-400">Мы <span class="text-primary">не используем</span> готовые дизайны сайтов — все элементы страницы будут уникальными и сделаны с нуля</p>
							</li>
							<li>
								<div class="text-primary text-6xl font-semibold mb-2.5">03</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Реклама — в подарок</h3>
								<p class="text-gray-400">Если цель создания сайта — поиск новых клиентов для вашей компании, настройку рекламы мы предоставим <span class="text-primary">в подарок</span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		
		<section-cases-grid /> 
		<section-get-started />
	</div>
</template>

<script>
	
	import SectionWelcome from '~/components/sections/Welcome'
	import SectionCasesSlider from '~/components/sections/CasesSlider'
	import SectionCasesGrid from '~/components/sections/CasesGrid'
	import SectionGetStarted from '~/components/sections/GetStarted'

	export default {
		components: { SectionWelcome, SectionCasesGrid, SectionCasesSlider, SectionGetStarted }
	}

</script>