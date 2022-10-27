<template>
	<header class="section_header fixed inset-x-0 top-0 z-30" ref="header">
		<div class="container">
			<div class="flex justify-between items-center py-2">
				<div class="flex lg:block">
					<nuxt-link class="h-16 lg:h-auto flex items-center" :to="{ name: 'index' }">
						<img class="h-8 lg:h-7 mb-1 sm:mb-0" src="~/static/img/logo.png" alt="">
					</nuxt-link>
					<p class="block self-center text-.95 leading-snug ml-8 lg:ml-0 lg:text-sm text-gray-600 max-w-[420px] md:max-w-sm sm:hidden">
						Качественная разработка и комплексное продвижение сайтов для психологов под ключ от 14 дней
					</p>
				</div>
				<div class="flex items-center">
					<a href="tel:+79101127174" class="font-medium text-xl sm:text-base text-gray-500">8 (910) 112 71-74</a>
					<div class="flex ml-10 lg:ml-4">
						<a class="social-link flex items-center justify-center w-10 h-10 rounded-md" href="https://wa.me/79101127174?text=Здравствуйте%2C%20меня%20заинтересовала%20разработка%20сайта" target="_blank">
							<ui-icon name="whatsapp-bg" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

import $ from 'jquery'
import UiIcon from '~/components/Icon'

export default {
	components: { UiIcon },
	mounted () {
		$(document).scroll((e) => {
			const scroll = $(window).scrollTop()
			const header = $(this.$refs.header)
			scroll > 0 ? header.addClass('scrolled') : header.removeClass('scrolled')
		})
	}
}

</script>

<style scoped lang="scss">

.icon-whatsapp-bg {
	animation: whatsapp-ping 2s ease infinite;
	border-radius: 7px;

	@keyframes whatsapp-ping {
		0% {
			box-shadow: 0 0 0 0 #25d366;
		}
		30% {
			box-shadow: 0 0 6px 22px rgba(#25d366, 0);
		}
	}
}

</style>
