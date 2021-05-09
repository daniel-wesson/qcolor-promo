<template>
	<div class="page_home">
		<section-welcome />
		<section-cases-slider />

		<section class="py-14">
			<div class="container">
				<div class="flex justify-between">
					<div class="w-1/2">
						<h2 class="text-5xl font-semibold">Мы работаем по принципу <span class="underline-primary">Сначала результат</span>, а потом оплата</h2>
						<p class="mt-8 text-xl text-gray-400">95% разработчиков не могут себе позволить работать по нашему принципу так как благодаря полученному за 8 лет опыту работы, мы знаем, как важно для клиентов получать максимальный результат от вложеных денег в проект. Агентство Deserve знает как делать проекты качественно и в срок.</p>
						<div class="mt-12">
							<p class="text-black text-lg">Project delivered on time</p>
							<div class="mt-2 progress-body">
								<div class="progress-fullness" style="width: 95%">
									<div class="tip">95%</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-2/5">
						<ul>
							<li class="mb-9">
								<div class="text-primary text-4xl font-semibold mb-2.5">300+</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Branding Strategy</h3>
								<p class="text-gray-400">Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh. Of acceptance insipidity remarkably</p>
							</li>
							<li class="mb-9">
								<div class="text-primary text-4xl font-semibold mb-2.5">300+</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Branding Strategy</h3>
								<p class="text-gray-400">Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh. Of acceptance insipidity remarkably</p>
							</li>
							<li>
								<div class="text-primary text-4xl font-semibold mb-2.5">300+</div>
								<h3 class="mb-5 font-medium text-gray-800 text-2xl">Branding Strategy</h3>
								<p class="text-gray-400">Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh. Of acceptance insipidity remarkably</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section-cases-grid />
	</div>
</template>

<script>
	
	import SectionWelcome from '~/components/sections/Welcome'
	import SectionCasesSlider from '~/components/sections/CasesSlider'
	import SectionCasesGrid from '~/components/sections/CasesGrid'

	export default {
		components: { SectionWelcome, SectionCasesGrid, SectionCasesSlider }
	}

</script>