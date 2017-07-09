export class videoSpeed {

	constructor() {

		this.speed = document.querySelector('.speed');
		this.bar = document.querySelector('.speed-bar');
		this.video = document.querySelector('.flex');

		this.speed.addEventListener('mousemove', this.handleMove);

	}


	handleMove (e) {
		const y = e.pageY - this.offsetTop;
		const percent = y / this.offsetHeight;
		const min = 0.4;
		const max = 4;
		const height = Math.round(percent * 100) + '%';
		videospeed.bar.style.height = height;
		const playbackRate = percent * (max - min) + min;
		videospeed.bar.textContent = playbackRate.toFixed(2) + 'x';
		videospeed.video.playbackRate = playbackRate;
	}



}

export let videospeed = new videoSpeed();