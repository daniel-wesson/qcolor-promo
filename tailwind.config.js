module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		container: {
			center: true
		},
		fontFamily: {
			sans: 'TTNorms, sans-serif'
		},
		extend: {
			colors: {
				primary: '#2298ff'
			},
			fontSize: {
				'.95': ['.95rem']
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
