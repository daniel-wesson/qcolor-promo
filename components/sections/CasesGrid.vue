<template>
	<section class="section_cases-grid py-28 relative z-20" id="here_our_works">
		<div class="container">
			<h2 class="text-center text-4xl font-semibold text-gray-700">Наше портфолио</h2>
			<cases-grid />
		</div>
	</section>
</template>

<script>

import CasesGrid from '~/components/CasesGrid'

export default {
	components: { CasesGrid }
}

</script>
