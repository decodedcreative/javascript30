export class speechSynth {

	constructor() {
		this.msg = new SpeechSynthesisUtterance();
		this.voices = [];
		this.voicesDropdown = document.querySelector('[name="voice"]');
		this.options = document.querySelectorAll('[type="range"], [name="text"]');
		this.speakButton = document.querySelector('#speak');
		this.stopButton = document.querySelector('#stop');

		this.msg.text = document.querySelector('[name="text"]').value;


		speechSynthesis.addEventListener('voiceschanged', this.populateVoices);
		this.voicesDropdown.addEventListener('change', this.setVoice);
		this.options.forEach(option => option.addEventListener('change', this.setOption));

		this.speakButton.addEventListener('click', this.toggle);
		this.stopButton.addEventListener('click', () => this.toggle(false));
	}


	populateVoices () {
		speech.voices = this.getVoices();

		speech.voicesDropdown.innerHTML = speech.voices
			.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
			.join('');
	}

	setOption () {
		speech.msg[this.name] = this.value;
		speech.toggle();
	}

	setVoice () {
		speech.msg.voice = speech.voices.find(voice => voice.name === this.value);
		speech.toggle();
	}

	toggle (startOver = true) {
		speechSynthesis.cancel();
		if (startOver) {
			speechSynthesis.speak(speech.msg);
		}
	}

}

export let speech = new speechSynth();