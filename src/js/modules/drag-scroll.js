export class dragScroll {

	constructor() {
		this.slider = document.querySelector('.items');
		this.isDown = false;
		let startX;
		let scrollLeft;

		this.slider.addEventListener('mousedown', (e)=>{
			this.isDown = true;
			this.slider.classList.add('active');
			this.startX = e.pageX - this.slider.offsetLeft;
			this.scrollLeft = this.slider.scrollLeft;

		});

		this.slider.addEventListener('mouseleave', ()=>{
			this.isDown = false;
			this.slider.classList.remove('active');
		});

		this.slider.addEventListener('mouseup', ()=>{
			this.isDown = false;
			this.slider.classList.remove('active');
		});

		this.slider.addEventListener('mousemove', (e)=>{
			
			if (!this.isDown) return; //stop the function from running

			e.preventDefault();

			const x = e.pageX - this.slider.offsetLeft;
			const walk = (x - this.startX) * 3;

			this.slider.scrollLeft = this.scrollLeft - walk;

		});


	}




}

export let dragscroll = new dragScroll();