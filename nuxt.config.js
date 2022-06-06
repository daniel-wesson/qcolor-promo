export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	globalName: 'psyweb.site',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'psyweb.site - разработка продающих сайтов для психологов',
		htmlAttrs: {
			lang: 'ru'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'slick-carousel/slick/slick.css',
		'aos/dist/aos.css',
		'@/assets/sass/theme.scss',
		'@/assets/sass/app.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/slick', ssr: false },
		{ src: '~/plugins/smooth-scroll.js', ssr: false },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxt/postcss8'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {

	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true,
		publicPath: '/assets/',
		transpile: ['gsap'],
		postcss: {
			plugins: {
				// https://tailwindcss.nuxtjs.org/options
				tailwindcss: {
					config: './tailwind.config.js',
					// cssPath: resolve(__dirname, 'assets/tailwind.css'),
					exposeConfig: true
				},
				autoprefixer: {},
			},
		},
	},

	vue: {
		config: {
			productionTip: false,
			devtools: false
		}
	},

	server: {
		// host: '192.168.0.19'
	}
}
