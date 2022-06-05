import SmoothScroll from 'smooth-scroll'

export default ({ app }, inject) => {
	const SCREEN_LG = 1023
	const DESKTOP_OFFSET = 0
	const MOBILE_OFFSET = -50

	const smoothScroll = new SmoothScroll('a[href*="#"]', {
		header: '.section-header',
		offset: () => window.innerWidth > SCREEN_LG ? DESKTOP_OFFSET : MOBILE_OFFSET,
		speedAsDuration: true
	})

	inject('smoothScroll', smoothScroll)
}
