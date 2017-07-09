export class countDown {

	constructor() {
		let countdown;
		this.timerDisplay = document.querySelector('.display__time-left');
		this.buttons = document.querySelectorAll('[data-time]');
		this.endTime = document.querySelector('.display__end-time');
		this.buttons.forEach(button => button.addEventListener('click', this.startTimer));

		document.customForm.addEventListener('submit', function(e){
			e.preventDefault();

			console.log(e);

			const mins = e.target.minutes.value;

			console.log(mins);

			this.timer(mins * 60);

			e.target.reset();
		}.bind(this));
	}

	timer (seconds) {


		clearInterval(countdown);

		const now = Date.now();
		const then = now + seconds * 1000;
		this.displayTimeLeft(seconds);
		this.displayEndTime(then);
		countdown = setInterval(() =>{
			const secondsLeft = Math.round((then - Date.now()) / 1000);

			if ( secondsLeft < 0) {

				clearInterval(countdown);

				return;

			}

			this.displayTimeLeft(secondsLeft);

		}, 1000);

	}

	displayTimeLeft (seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainderSeconds = seconds % 60;
		const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

		this.timerDisplay.textContent = display;

		document.title = "Countdown Timer - " + display;
	}


	displayEndTime (timestamp) {

		const end = new Date(timestamp);
		const hour = end.getHours();
		const minutes = end.getMinutes();
		this.endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;

	}


	startTimer () {
		const seconds = parseInt(this.dataset.time);
		countdown.timer(seconds);
	}

}

export let countdown = new countDown();