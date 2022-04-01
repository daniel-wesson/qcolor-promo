<template>
	<header class="section_header fixed inset-x-0 top-0 z-30" ref="header">
		<div class="container">
			<div class="flex justify-between">
				<div class="flex">
					<a href="https://deserve.ru" class="h-16 flex items-center">
						<img class="h-8 mb-1" src="~/static/img/logo-deserve-black-dot.svg" alt="">
					</a>
					<p class="lg:block hidden self-center text-.95 leading-snug ml-8 text-gray-600">
						Современная разработка и комплексное <br>
						продвижение сайтов под ключ от 1 дня
					</p>
				</div>
				<div class="lg:hidden h-full">
					<button class="-mr-3 w-16 h-16 flex items-center justify-center">
						<div class="w-8" v-html="require('~/assets/icons/menu.svg?raw')"></div>
						<div class="w-8" v-html="require('~/assets/icons/close.svg?raw')"></div>
					</button>
				</div>
				<div class="lg:flex items-center hidden">
					<a href="tel:+79101127174" class="font-medium text-xl">8 (910) 112 71-74</a>
					<ul class="flex ml-10 ">
						<li class="mr-3">
							<a href="#" target="_blank" class="social-link flex items-center justify-center w-10 h-10 rounded-md">
								<img class="social-image w-5" src="/img/social/telegram.svg" alt="telegram">
							</a>
						</li>
						<li class="mr-3">
							<a href="#" target="_blank" class="social-link flex items-center justify-center w-10 h-10 rounded-md">
								<img class="social-image w-6" src="/img/social/vk.svg" alt="vk">
							</a>
						</li>
						<li>
							<a href="#" target="_blank" class="social-link flex items-center justify-center w-10 h-10 rounded-md">
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