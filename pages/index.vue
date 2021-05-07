<template>
	<div class="page_home">
		<section-welcome />
		<section-cases-slider />
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