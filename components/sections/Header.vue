<template>
	<header class="section_header fixed inset-x-0 top-0 z-30" ref="header">
		<div class="container">
			<div class="flex justify-between py-2">
				<div class="flex">
					<a href="https://deserve.ru" class="h-16 flex items-center">
						<img class="h-8 mb-1" src="~/static/img/logo.png" alt="">
					</a>
					<p class="block self-center text-.95 leading-snug ml-8 text-gray-600">
						Качественная разработка и комплексное <br>
						продвижение сайтов для психологов под ключ от 14 дней
					</p>
				</div>
				<div class="flex items-center">
					<a href="tel:+79101127174" class="font-medium text-xl">8 (910) 112 71-74</a>
					<ul class="flex ml-10 ">
						<li>
							<a href="https://wa.me/79101127174" target="_blank" class="social-link flex items-center justify-center w-10 h-10 rounded-md">
								<img class="social-image w-6" src="/img/social/whatsapp.svg" alt="whatsapp">
							</a>
						</li>
					</ul>
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
