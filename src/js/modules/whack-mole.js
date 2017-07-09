export class whackMole {

	constructor() {

		this.holes = document.querySelectorAll('.hole');
		this.scoreBoard = document.querySelector('.score');
		this.moles = document.querySelectorAll('.mole');
		this.button = document.querySelector('button');

		this.button.addEventListener('click', this.startGame.bind(this));
		this.moles.forEach(mole => mole.addEventListener('click', this.bonk.bind(this)));

		let lastHole;
		let timeUp = false;
		let score = 0;
	}

	randomTime(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	randomHole(holes) {

		const idx = Math.floor(Math.random() * holes.length);
		const hole = holes[idx];


		if (hole === this.lastHole) {
			return this.randomHole(holes);
		}

		this.lastHole = hole;
		return hole;

	}

	peep () {

		const time = this.randomTime(200, 1000);
		const hole = this.randomHole(this.holes);

		hole.classList.add('up');
		setTimeout(()=>{
			hole.classList.remove('.up');
			if (!this.timeUp) this.peep();
		}, time);
	}

	startGame () {
		this.scoreBoard.textContent = 0;
		this.timeUp = false;
		this.score = 0;
		this.peep();
		setTimeout(()=> this.timeUp = true, 10000);
	}

	bonk (e){
		if (!e.isTrusted) return;
		this.score++;
		e.target.classList.remove('up');
		this.scoreBoard.textContent = this.score;

	}

}

export let whackmole = new whackMole();