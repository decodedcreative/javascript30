export class Clock {

	constructor() {
		const secondHand = document.querySelector('.second-hand');
		const minsHand = document.querySelector('.min-hand');
		const hourHand = document.querySelector('.hour-hand');
		
		setInterval(this.setDate, 1000);
		this.setDate();
	}

	setDate() {
		const now = new Date();
		const seconds = now.getSeconds();
		const secondsDegrees = ((seconds / 60) * 360) + 90;
		const mins = now.getMinutes();
		const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
		const hour = now.getHours();
		const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;

		//Remove transition if last second
		if (seconds===59) {
			this.secondHand.classList.add("hand-noanimation");
			this.minHand.classList.add("hand-noanimation");
			this.hourHand.classList.add("hand-noanimation");
		}
		//Add animation after second 1'
		if (seconds===1){
			this.secondHand.classList.remove("hand-noanimation");
			this.minHand.classList.remove("hand-noanimation");
			this.hourHand.classList.remove("hand-noanimation");
		}

		this.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

		this.minsHand.style.transform = `rotate(${minsDegrees}deg)`;

		this.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	}

}

export let clock = new Clock();