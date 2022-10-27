<template>
	<div class="py-14">
		<div class="container mt-20">
			<h1 class="text-7xl lg:text-5xl sm:text-4xl font-medium relative tracking-tight leading-none">
				<span class="inline-flex gap-4">
					<span>Создаем сайты с любовью</span>
					<img style="transform: rotate(20deg)" class="w-[74px] sm:w-[68px] lg:absolute md:top-auto md:bottom-0 top-0 right-0" :src="require('~/static/img/love.png')">
				</span>
				<br>
				<span class="text-neutral-500 sm:inline-block pr-[68px]">и вниманием к каждой детали</span>
			</h1>
			<p class="mt-6 text-xl">Лендинги для экспертов, заточенные для привлечения новых клиентов. Цели разные, результат всегда один — делаем классные сайты, нравящиеся клиентам и психологам.</p>
			<section-cases-grid />
		</div>
	</div>

</template>

<script>

import SectionCasesGrid from '~/components/CasesGrid'

export default {
	components: { SectionCasesGrid }
}

</script>
