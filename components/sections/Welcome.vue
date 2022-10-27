<template>
	<section class="section_welcome h-screen flex items-center relative overflow-hidden sm:pb-16">
		<div class="absolute inset-x-0 top-0"  data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
			<img src="/img/gradient-background.jpg" alt="" class="w-full">
		</div>
		<div class="container relative z-10">
			<h1 class="font-semibold leading-none text-7xl xl:text-6xl lg:text-5xl sm:text-[2.5rem]" data-aos="fade-down" data-aos-duration="1000">
				Разработка сайта <br>
				<span class="underline-primary">для психологов</span>
			</h1>
			<div class="flex mt-10 text-2xl lg:text-xl sm:text-lg space-x-8 sm:block sm:space-x-0 sm:space-y-1.5 font-semibold" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
				<p class="">От <span class="text-gray-500">9990 рублей</span></p>
				<p class="font-semibold">Разработка <span class="text-gray-500">без рисков</span></p>
			</div>
			<p class="mt-11 text-lg text-gray-600 max-w-xl" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
				Наше агентство специализируется на разработке продающих сайтов для психологов, которые приводят новых клиентов уже через месяц. <nuxt-link :to="{ name: 'cases' }" class="font-medium underline">Здесь</nuxt-link> вы можете посмотреть лучшие наши работы.
			</p>
			<div class="mt-12 inline-block" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
				<a class="btn text-xl h-[60px] lg:h-[50px] px-7 lg:text-md btn-primary btn-ping-primary" href="https://wa.me/79101127174?text=Здравствуйте%2C%20меня%20заинтересовала%20разработка%20сайта" target="_blank">Обсудить проект</a>
			</div>
		</div>

		<div class="absolute inset-x-0 md:-left-24 md:-right-14" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
			<div class="container text-right lg:opacity-20">
				<div class="mt-28 w-3/5 lg:w-full animate-floating inline-block">
					<img class="inline-block w-full" src="/img/pedestal.png" alt="deserve banner">
				</div>
			</div>
		</div>
	</section>
</template>
