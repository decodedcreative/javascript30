//--10.0 - Custom Video-------------------------------------------------------------//

	const player = document.querySelector(".player");
	const video = player.querySelector('.viewer');
	const progress = player.querySelector('.progress');
	const progressBar = player.querySelector('.progress__filled');
	const toggle = player.querySelector('.toggle');
	const skipButtons = player.querySelectorAll('[data-skip]');
	const ranges = player.querySelectorAll('.player__slider');

	const togglePlay = function (){
		const method = video.paused ? 'play' : 'pause';

		video[method]();

	};

	const updateButton = function () {
		const icon = this.paused ? '►' : '❚ ❚';
		console.log(icon);
		toggle.textContent = icon;
	};


	const skip = function () {
		video.currentTime += parseFloat(this.dataset.skip);
	};

	const handleRangeUpdate = function () {
		video[this.name] = this.value;
	};

	const handleProgress = function () {
		const percent = (video.currentTime / video.duration) * 100;

		progressBar.style.flexBasis = `${percent}%`;
	};

	const userClickedSkip = function (e) {
		const skipTime = (e.offsetX / progress.offsetWidth) * video.duration;
		video.currentTime = skipTime;
	};

	video.addEventListener('click', togglePlay);
	video.addEventListener('play', updateButton);
	video.addEventListener('pause', updateButton);
	video.addEventListener('timeupdate', handleProgress);

	toggle.addEventListener('click', togglePlay);

	skipButtons.forEach(button => button.addEventListener('click', skip));
	ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
	ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

	let mousedown = false;

	progress.addEventListener('click', userClickedSkip);
	progress.addEventListener('mousemove', (e) => mousedown && userClickedSkip(e));
	progress.addEventListener('mousedown', () => mousedown = true);
	progress.addEventListener('mouseup', () => mousedown = false);

//----------------------------------------------------------------------------------//