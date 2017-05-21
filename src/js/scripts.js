//--1.0 - Drum Kit ----------------------------------------------------------------//


// const removeTransition = function(e) {
// 	if (e.propertyName !== 'transform') return;
// 	e.target.classList.remove('playing');
// };

// const playSound = function(e) {
// 	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// 	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

// 	if ( !audio ){
// 		return;
// 	}

// 	audio.currentTime = 0;
// 	audio.play();
// 	key.classList.add("playing");
// }

// const keys = document.querySelectorAll(".key");

// keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// window.addEventListener("keydown", playSound);


//----------------------------------------------------------------------------------//


//--2.0 - Clock --------------------------------------------------------------------//

// const secondHand = document.querySelector('.second-hand');
// const minsHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');


// const setDate = function () {

//   const now = new Date();
//   const seconds = now.getSeconds();
//   const secondsDegrees = ((seconds / 60) * 360) + 90;
//   const mins = now.getMinutes();
//   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
//   const hour = now.getHours();
//   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;

//   //Remove transition if last second
//   if (seconds===59) {
//     secondHand.classList.add("hand-noanimation");
//     minHand.classList.add("hand-noanimation");
//     hourHand.classList.add("hand-noanimation");
//   }
//   //Add animation after second 1'
//   if (seconds===1){
//     secondHand.classList.remove("hand-noanimation");
//     minHand.classList.remove("hand-noanimation");
//     hourHand.classList.remove("hand-noanimation");
//   }

//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);
// setDate();

//----------------------------------------------------------------------------------//

//--3.0 - CSS Variables ------------------------------------------------------------//

	// const inputs = document.querySelectorAll(".controls input");

	// const handleUpdate = function () {
	// 	console.log(this.value);

	// 	const suffix = this.dataset.sizing || '';

	// 	console.log(suffix);

	// 	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	// };

	// inputs.forEach(input => input.addEventListener("change", handleUpdate));
	// inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

//----------------------------------------------------------------------------------//

//--4.0 - Arrays-----------------------------------------------------------//

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with

// const inventors = [
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];
// const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

	// const born1500s = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
	// console.table(born1500s);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

	// const inventorNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
	// console.log(inventorNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

	// const inventorsByAgeDesc = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

	// console.table(inventorsByAgeDesc);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?


	// const totalYears = inventors.reduce((total, inventor) =>{
	// 	return total + (inventor.passed - inventor.year)
	// }, 0);

	// console.log(totalYears);

// 5. Sort the inventors by years lived

	// const inventorsByYearsLived = inventors.sort(function(a, b){
	// 	const firstPerson = a.passed - a.year;
	// 	const secondPerson = b.passed - b.year;

	// 	return firstPerson > secondPerson ? -1 : 1;
	// });

	// console.table(inventorsByYearsLived);



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

	// const category = document.querySelector('.mw-category');
	// const links = Array.from(category.querySelectorAll('a'));

	// const de = links
	// 				.map(link => link.textContent)
	// 				.filter(streetName => streetName.includes('de'));


// 7. sort Exercise
// Sort the people alphabetically by last name

	// const peopleByName = people.sort(function(lastPerson, nextPerson){
	// 	const [aLast, aFirst] = lastPerson.split(",");
	// 	const [bLast, bFirst] = nextPerson.split(",");

	// 	return aLast > bLast ? 1: -1;
	// });

	// console.log(peopleByName);

// 8. Reduce Exercise
// Sum up the instances of each of these
	// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

	// const transportTotals = data.reduce(function(obj, item){

	// 	if ( !obj[item] ) {
	// 		obj[item] = 0;
	// 	}

	// 	obj[item]++;

	// 	return obj;

	// }, {});

	// console.log(transportTotals);

//----------------------------------------------------------------------------------//

//--5.0 - Flex Gallery--------------------------------------------------------------//

	// const panels = document.querySelectorAll('.panel');

	// function toggleOpen() {
	//   console.log('Hello');
	//   this.classList.toggle('open');
	// }

	// function toggleActive(e) {
	//   console.log(e.propertyName);
	//   if (e.propertyName.includes('flex')) {
	//     this.classList.toggle('open-active');
	//   }
	// }

	// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
	// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

//----------------------------------------------------------------------------------//

//--6.0 - Type Ahead ---------------------------------------------------------------//

// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [];

// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data));

// console.log(cities);

// function findMatches(wordToMatch, cities) {
// 	return cities.filter(place => {

// 		const regex = new RegExp(wordToMatch, 'gi');
// 		return place.city.match(regex) || place.state.match(regex);

// 	});
// };

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map(place => {

//   	const regex = new RegExp(this.value, 'gi');
//   	const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//   	const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

//     return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);



//----------------------------------------------------------------------------------//

//--6.0 - Arrays 2------------------------------------------------------------------//

    // const people = [
    //   { name: 'Wes', year: 1988 },
    //   { name: 'Kait', year: 1986 },
    //   { name: 'Irv', year: 1970 },
    //   { name: 'Lux', year: 2015 }
    // ];
    // const comments = [
    //   { text: 'Love this!', id: 523423 },
    //   { text: 'Super good', id: 823423 },
    //   { text: 'You are the best', id: 2039842 },
    //   { text: 'Ramen is my fav food ever', id: 123523 },
    //   { text: 'Nice Nice Nice!', id: 542328 }
    // ];
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    // const isAdult = people.some(function(person){

    // 	const currentDate = (new Date()).getFullYear();

    // 	if ( currentYear - person.year >= 19) {
    // 		return true;
    // 	}

    // });

    // const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);

    // console.log(isAdult);

    // const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19);

    // console.log(allAdults);

    // Array.prototype.every() // is everyone 19 or older?
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    // const selectedComment = comments.find(comment => comment.id === 823423);

    // console.log(selectedComment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    // const commentToDelete = comments.findIndex(comment => comment.id === 823423);

    //comments.splice(commentToDelete, 1)

    // const newComments = [
    // 	...comments.slice(0, commentToDelete),
    // 	...comments.slice(commentToDelete + 1)
    // ];

    // console.table(newComments);

//----------------------------------------------------------------------------------//


//--7.0 - Canvas--------------------------------------------------------------------//

	// const canvas = document.querySelector('#draw');
	// const context = canvas.getContext('2d');

	// canvas.width = window.innerWidth;
	// canvas.height = window.innerHeight;

	// context.strokeStyle = '#BADA55';
	// context.lineJoin = 'round';
	// context.lineCap = 'round';
	// context.lineWidth = 20;

	// let isDrawing = false;
	// let lastXPos = 0;
	// let lastYPos = 0;
	// let hue = 0;


	// const draw = function(e){
	// 	if(!isDrawing) return;
	// 	context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	// 	context.beginPath();
	// 	context.moveTo(lastXPos, lastYPos);
	// 	context.lineTo(e.offsetX, e.offsetY);
	// 	context.stroke();

	// 	[lastXPos, lastYPos] = [e.offsetX, e.offsetY];

	// 	hue++;

	// 	if (hue >= 360){
	// 		hue = 0;
	// 	}
	// };

	// canvas.addEventListener('mousedown', (e) => {
	//   isDrawing = true;
	//   [lastXPos, lastYPos] = [e.offsetX, e.offsetY];
	// });
	// canvas.addEventListener('mousemove', draw);
	// canvas.addEventListener('mouseup', () => isDrawing = false);
	// canvas.addEventListener('mouseout', () => isDrawing = false);

//----------------------------------------------------------------------------------//

//--9.0 - Multi-Select Checkboxes---------------------------------------------------//

// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;

// const handleCheck = function (e) {
// 	console.log(e);

// 	let inBetween = false;

// 	if (e.shiftKey && this.checked) {


// 		checkboxes.forEach(checkbox => {
// 				console.log(checkbox);

// 			if (checkbox === this || checkbox === lastChecked){
// 				inBetween = !inBetween;
// 				console.log("starting to check them in between");
// 			}

// 			if(inBetween){
// 				checkbox.checked = true;
// 			}

// 		});
// 	}

// 	lastChecked = this;
// };

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));



//----------------------------------------------------------------------------------//

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
