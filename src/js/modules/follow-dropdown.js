export class followDropdown {

	constructor() {
		this.triggers = document.querySelectorAll('.cool > li');
		this.background = document.querySelector('.dropdownBackground');
		this.nav = document.querySelector('.top');

		this.triggers.forEach(trigger => trigger.addEventListener('mouseenter', this.handleEnter));
		this.triggers.forEach(trigger => trigger.addEventListener('mouseleave', this.handleLeave));

	}

	handleEnter () {

		this.classList.add('trigger-enter');
		setTimeout( () => {
			if (this.classList.contains('trigger-enter')) {
				this.classList.add('trigger-enter-active')
			}
		}, 150);
		followdropdown.background.classList.add('open');

		const dropdown = this.querySelector('.dropdown');
		const dropdownCoords = dropdown.getBoundingClientRect();
		const navCoords = followdropdown.nav.getBoundingClientRect();

		const coords = {
			height: dropdownCoords.height,
			width: dropdownCoords.width,
			top: dropdownCoords.top - navCoords.top,
			left: dropdownCoords.left - navCoords.left
		};

		followdropdown.background.style.setProperty('width', `${coords.width}px`);
		followdropdown.background.style.setProperty('height', `${coords.height}px`);
		followdropdown.background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

	}

	handleLeave () {
		this.classList.remove('trigger-enter', 'trigger-enter-active');
		followdropdown.background.classList.remove('open');
	}


}

export let followdropdown = new followDropdown();