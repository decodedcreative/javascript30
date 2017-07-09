export class stickyNav {

	constructor() {
		this.nav = document.querySelector('#main');
		window.addEventListener('scroll', this.fixNav);
		this.navTop = this.nav.offsetTop;
	}

	fixNav () {
		if (window.scrollY >= sticky.navTop) {
			document.body.classList.add('fixed-nav');
		} else{
			document.body.classList.remove('fixed-nav');
		}
	}

}

export let sticky = new stickyNav();