export class followAlong {

	constructor() {

		this.triggers = document.querySelectorAll('a');

		this.highlight = document.createElement('span');

		this.highlight.classList.add('highlight');

		document.body.append(this.highlight);

		this.triggers.forEach(a => a.addEventListener('mouseenter', this.highlightLink));

	}


	highlightLink () {
		const linkCoords = this.getBoundingClientRect();
		//console.log(linkCoords);

		const coords = {
			width: linkCoords.width,
			height: linkCoords.height,
			top: linkCoords.top + window.scrollY,
			left: linkCoords.left + window.scrollX
		}

		follow.highlight.style.width = `${coords.width}px`;
		follow.highlight.style.height = `${coords.height}px`;
		follow.highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
	}

}

export let follow = new followAlong();