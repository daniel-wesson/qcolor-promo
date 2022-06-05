<template>
	<header class="section_header fixed inset-x-0 top-0 z-30 lg:absolute" ref="header">
		<div class="container">
			<div class="flex justify-between items-center py-2">
				<div class="flex lg:block">
					<a href="https://deserve.ru" class="h-16 lg:h-auto flex items-center">
						<img class="h-8 lg:h-7 mb-1 sm:mb-0" src="~/static/img/logo.png" alt="">
					</a>
					<p class="block self-center text-.95 leading-snug ml-8 lg:ml-0 lg:text-sm text-gray-600 max-w-[420px] md:max-w-sm sm:hidden">
						Качественная разработка и комплексное продвижение сайтов для психологов под ключ от 14 дней
					</p>
				</div>
				<div class="flex items-center sm:opacity-60">
					<a href="tel:+79101127174" class="font-medium text-xl sm:text-lg">8 (910) 112 71-74</a>
					<div class="flex ml-10 lg:ml-2">
						<a href="https://wa.me/79101127174" target="_blank" class="social-link flex items-center justify-center w-10 h-10 rounded-md">
							<img class="social-image w-6 sm:w-5" src="/img/social/whatsapp.svg" alt="whatsapp">
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

	import $ from 'jquery'

	export default {
		mounted () {
			$(document).scroll((e) => {
				const scroll = $(window).scrollTop()
				const header = $(this.$refs.header)
				scroll > 0 ? header.addClass('scrolled') : header.removeClass('scrolled')
			})
		}
	}

</script>
