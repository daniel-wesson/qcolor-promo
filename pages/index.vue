<template>
	<div class="page_home">
		 <section-welcome />
		<section-cases-slider />

		<section class="py-14">
			<div class="container overflow-hidden">
				<div class="flex justify-between lg:block">
					<div class="w-1/2 lg:w-full">
						<h2 class="text-6xl xl:text-5xl sm:text-4xl font-semibold"><span class="underline-primary">3 причины</span> заказать разработку сайта именно у нас</h2>
						<p class="mt-8 text-xl xl:text-lg sm:text-md text-gray-400">После запуска проекта, мы остаёмся с вами и бесплатно обслуживаем сайт, если нужно что-то скорректировать или помочь установить плагины, плату за это не берём. И, конечно, чтобы сайт окупился в первый месяц, мы полностью бесплатно настраиваем и ведем рекламу сразу после его запуска.</p>
						<div class="mt-12 lg:mt-8">
							<p class="text-black text-lg">Быстрая загрузка всех страниц</p>
							<div class="mt-2 progress-body">
								<div class="progress-fullness" style="width: 100%">
									<div class="tip">100%</div>
								</div>
							</div>
						</div>
						<div class="mt-12 lg:mt-8">
							<p class="text-black text-lg">Адаптация под все устройства</p>
							<div class="mt-2 progress-body">
								<div class="progress-fullness" style="width: 100%">
									<div class="tip">100%</div>
								</div>
							</div>
						</div>
						<div class="mt-12 lg:mt-8">
							<p class="text-black text-lg">Дополнения для успешных продаж</p>
							<div class="mt-2 progress-body">
								<div class="progress-fullness" style="width: 100%">
									<div class="tip">100%</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-2/5 lg:w-full lg:mt-12">
						<ul class="lg:grid grid-cols-2 gap-10 sm:block sm:space-y-10">
							<li class="mb-9 lg:mb-0">
								<div class="text-primary text-6xl sm:text-5xl font-semibold mb-2.5">01</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Фиксированные цены</h3>
								<p class="text-gray-400">Никаких дополнительных платежей и подводных камней. Вы сразу получаете <span class="text-primary">полный доступ</span> к вашему проекту</p>
							</li>
							<li class="mb-9 lg:mb-0">
								<div class="text-primary text-6xl sm:text-5xl font-semibold mb-2.5">02</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Заинтересованность в проекте</h3>
								<p class="text-gray-400">Каждый проект мы разрабатываем с нуля учитывая пожелания клиента. Мы максимально <span class="text-primary">заинтересованны</span> чтобы он дал результат на <span class="text-primary">начальных этапах</span></p>
							</li>
							<li>
								<div class="text-primary text-6xl sm:text-5xl font-semibold mb-2.5">03</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Реклама — в подарок</h3>
								<p class="text-gray-400">Если цель создания сайта — поиск новых клиентов для вашей компании, настройку рекламы мы предоставим <span class="text-primary">полностью бесплатно</span></p>
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
