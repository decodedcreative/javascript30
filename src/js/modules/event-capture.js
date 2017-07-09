export class eventCapture {

	constructor() {

        this.divs = document.querySelectorAll('div');
        this.divs.forEach(div => div.addEventListener('click', this.logText));

	}


    logText (e) {
        console.log(this.classList.value);
    }

}

export let eventcapture = new eventCapture();