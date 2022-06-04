<template>
	<section class="section_cases-slider py-28">
		<div class="container">
			<h2 class="text-center text-4xl font-semibold text-gray-700">Лучшие результаты наших клиентов</h2>
		</div>
		<div class="relative">
			<div class="slider" ref="slider">
				<div v-for="(project, idx) in projects" :key="`project-${idx}`">
					<div class="max-w-5xl mx-auto py-16 px-5">
						<div class="case-preview rounded-xl overflow-hidden">
							<img class="w-full" src="/img/mac-os-bar.png" alt="MacOS bar">
							<div class="relative">
								<div class="overlay absolute inset-0 rounded-b-xl bg-black bg-opacity-60 flex justify-center items-center">
									<a :href="project.url" target="_blank" class="btn btn-black">
										<span>Посмотреть работу</span>
										<ui-icon class="ml-4" name="external-link" width="16px" />
									</a>
								</div>
								<img class="w-full" :src="project.image" alt="Case image">
							</div>
						</div>
						<div class="mt-10">
							<p class="font-semibold text-2xl text-gray-900">{{ project.title }}</p>
							<p class="mt-5 text-xl">{{ project.taskDesc }}</p>
							<div class="grid grid-cols-3 mt-9">
								<div class="max-w-[200px]" v-for="(col, colIdx) in project.bottom" :key="`bottom-${colIdx}`">
									<div class="text-primary font-semibold text-5xl">{{ col.title }}</div>
									<p class="text-xl">{{ col.desc }}</p>
								</div>
								<div class="text-right">
									<a :href="project.url" target="_blank" class="btn btn-black">
										<span>Посмотреть работу</span>
										<ui-icon class="ml-4" name="external-link" width="16px" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="absolute inset-0 pointer-events-none block">
				<div class="container h-full relative">
					<div class="absolute left-0 w-12 flex h-full items-center">
						<button class="slider-nav-arrow w-12 h-12 pointer-events-auto flex justify-center items-center" title="Предыдущий слайд" ref="prevBtn">
							<ui-icon class="chevron-icon w-5 text-gray-400" name="chevron-left" />
						</button>
					</div>
					<div class="absolute right-0 w-12 flex h-full items-center">
						<button class="slider-nav-arrow w-12 h-12 pointer-events-auto flex justify-center items-center" title="Следующий слайд" ref="nextBtn">
							<ui-icon class="chevron-icon w-5 text-gray-400" name="chevron-right" />
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="slider-dots" ref="sliderDots"></div>
	</section>
</template>

<script>

	import $ from 'jquery'
	import UiIcon from '~/components/Icon'
import Icon from '../Icon.vue'

	export default {
		components: { UiIcon, Icon },
		data () {
			return {
				slider: null,
				projects: [
					{
						image: require('~/static/img/cases/case-sapanova.png'),
						title: 'Лендинг для психолога, карьерного консультанта и профориентатора Арайлым Сапановой',
						taskDesc: 'Задача: сделать экслюзивный высококонверсионный лендинг для продвижения услуг квалифицированного психолога для привлечения новых клиентов из онлайн-среды',
						url: 'https://sapanova.psyweb.site',
						bottom: [
							{ title: '14', desc: 'дней отведено на реализацию проекта' },
							{ title: '+15', desc: 'новых клиентов за первый месяц' },
						]
					},
					{
						image: require('~/static/img/cases/case-sidorenko.png'),
						title: 'Лендинг для психолога, занимающимся отношениями внутри супружеской пары - Елены Сидоренко',
						taskDesc: 'Задача: сделать экслюзивный высококонверсионный лендинг для продвижения услуг квалифицированного психолога для привлечения новых клиентов из онлайн-среды',
						url: 'https://sidorenko.psyweb.site',
						bottom: [
							{ title: '9', desc: 'дней отведено на реализацию проекта' },
							{ title: '+11', desc: 'новых клиентов за первый месяц' },
						]
					},
					{
						image: require('~/static/img/cases/case-martynuk.png'),
						title: 'Лендинг для психолога, помогающего принять себя и повысить личностный рост - Александры Мартынюк',
						taskDesc: 'Задача: сделать экслюзивный высококонверсионный лендинг для продвижения услуг квалифицированного психолога для привлечения новых клиентов из онлайн-среды',
						url: 'https://martyniuk.psyweb.site',
						bottom: [
							{ title: '17', desc: 'дней отведено на реализацию проекта' },
							{ title: '+20', desc: 'новых клиентов за первый месяц' },
						]
					},
					{
						image: require('~/static/img/cases/case-zagryadskaya.png'),
						title: 'Лендинг для Анастасии Загрядской - психолога, занимающейся индивидуальными консультациями для взрослых, которые хотят вернуть душевный покой и равновесие',
						taskDesc: 'Задача: сделать экслюзивный высококонверсионный сайт для продвижения услуг квалифицированного психолога для привлечения новых клиентов из онлайн-среды',
						url: 'https://zagryadskaya.psyweb.site/',
						bottom: [
							{ title: '19', desc: 'дней отведено на реализацию проекта' },
							{ title: '+27', desc: 'новых заявок за первый месяц' },
						]
					},
					{
						image: require('~/static/img/cases/case-chigdem.png'),
						title: 'Сайт для психолога Александры Чигдэм, занимающейся мотивацией и личностным ростом своих клиентов',
						taskDesc: 'Задача: сделать экслюзивный высококонверсионный сайт для продвижения услуг квалифицированного психолога для привлечения новых клиентов из онлайн-среды',
						url: 'https://chihdem.psyweb.site',
						bottom: [
							{ title: '21', desc: 'дней отведено на реализацию проекта' },
							{ title: '+24', desc: 'новых заявок за первый месяц' },
						]
					},
					{
						image: require('~/static/img/cases/case-blisost.png'),
						title: 'Лендинг для коуча и психолога Анастасии Афинской, которая преподает онлайн-тренинги по принятию себя и любви к себе',
						taskDesc: 'Задача: сделать экслюзивный высококонверсионный сайт для продвижения услуг квалифицированного психолога для привлечения новых клиентов из онлайн-среды',
						url: 'https://closeness.psyweb.site',
						bottom: [
							{ title: '24', desc: 'дней отведено на реализацию проекта' },
							{ title: '+32', desc: 'новых заявок за первый месяц' },
						]
					}
				]
			}
		},
		mounted () {
			this.slider = $(this.$refs.slider).slick({
				infinite: true,
				autoplay: process.env.NODE_ENV !== 'development',
				autoplaySpeed: 5000,
				fade: true,
				useTransform: false,
				waitForAnimate: false,
				speed: 300,
				prevArrow: $(this.$refs.prevBtn),
				nextArrow: $(this.$refs.nextBtn),
				dots: true,
				appendDots: $(this.$refs.sliderDots),
			})
		}
	}

</script>
