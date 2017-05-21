(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

var player = document.querySelector(".player");
var video = player.querySelector('.viewer');
var progress = player.querySelector('.progress');
var progressBar = player.querySelector('.progress__filled');
var toggle = player.querySelector('.toggle');
var skipButtons = player.querySelectorAll('[data-skip]');
var ranges = player.querySelectorAll('.player__slider');

var togglePlay = function togglePlay() {
	var method = video.paused ? 'play' : 'pause';

	video[method]();
};

var updateButton = function updateButton() {
	var icon = this.paused ? '►' : '❚ ❚';
	console.log(icon);
	toggle.textContent = icon;
};

var skip = function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
};

var handleRangeUpdate = function handleRangeUpdate() {
	video[this.name] = this.value;
};

var handleProgress = function handleProgress() {
	var percent = video.currentTime / video.duration * 100;

	progressBar.style.flexBasis = percent + '%';
};

var userClickedSkip = function userClickedSkip(e) {
	var skipTime = e.offsetX / progress.offsetWidth * video.duration;
	video.currentTime = skipTime;
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(function (button) {
	return button.addEventListener('click', skip);
});
ranges.forEach(function (range) {
	return range.addEventListener('change', handleRangeUpdate);
});
ranges.forEach(function (range) {
	return range.addEventListener('mousemove', handleRangeUpdate);
});

var mousedown = false;

progress.addEventListener('click', userClickedSkip);
progress.addEventListener('mousemove', function (e) {
	return mousedown && userClickedSkip(e);
});
progress.addEventListener('mousedown', function () {
	return mousedown = true;
});
progress.addEventListener('mouseup', function () {
	return mousedown = false;
});

//----------------------------------------------------------------------------------//

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVDO0FBQ0E7OztBQUdEO0FBQ0E7O0FBRUM7QUFDQTs7QUFFRDtBQUNBOztBQUVDOztBQUVBOztBQUVEO0FBQ0E7OztBQUdDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFRDs7QUFFQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBSUQ7QUFDQTs7QUFFQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0Q7QUFDQTs7QUFFQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFRDtBQUNBO0FBQ0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVEOztBQUVBOztBQUVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QU0saUJBQU4sQUFBdUIsU0FBdkIsQUFBZ0M7QUFDaEMsTUFBQSxBQUFNLGlCQUFOLEFBQXVCLFFBQXZCLEFBQStCO0FBQy9CLE1BQUEsQUFBTSxpQkFBTixBQUF1QixTQUF2QixBQUFnQztBQUNoQyxNQUFBLEFBQU0saUJBQU4sQUFBdUIsY0FBdkIsQUFBcUM7O0FBRXJDLE9BQUEsQUFBTyxpQkFBUCxBQUF3QixTQUF4QixBQUFpQzs7QUFFakMsWUFBQSxBQUFZLFFBQVEsa0JBQUE7UUFBVSxPQUFBLEFBQU8saUJBQVAsQUFBd0IsU0FBbEMsQUFBVSxBQUFpQztBQUEvRDtBQUNBLE9BQUEsQUFBTyxRQUFRLGlCQUFBO1FBQVMsTUFBQSxBQUFNLGlCQUFOLEFBQXVCLFVBQWhDLEFBQVMsQUFBaUM7QUFBekQ7QUFDQSxPQUFBLEFBQU8sUUFBUSxpQkFBQTtRQUFTLE1BQUEsQUFBTSxpQkFBTixBQUF1QixhQUFoQyxBQUFTLEFBQW9DO0FBQTVEOztBQUVBLElBQUksWUFBSixBQUFnQjs7QUFFaEIsU0FBQSxBQUFTLGlCQUFULEFBQTBCLFNBQTFCLEFBQW1DO0FBQ25DLFNBQUEsQUFBUyxpQkFBVCxBQUEwQixhQUFhLFVBQUEsQUFBQyxHQUFEO1FBQU8sYUFBYSxnQkFBcEIsQUFBb0IsQUFBZ0I7QUFBM0U7QUFDQSxTQUFBLEFBQVMsaUJBQVQsQUFBMEIsYUFBYSxZQUFBO1FBQU0sWUFBTixBQUFrQjtBQUF6RDtBQUNBLFNBQUEsQUFBUyxpQkFBVCxBQUEwQixXQUFXLFlBQUE7UUFBTSxZQUFOLEFBQWtCO0FBQXZEOztBQUVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vLS0xLjAgLSBEcnVtIEtpdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4vLyBjb25zdCByZW1vdmVUcmFuc2l0aW9uID0gZnVuY3Rpb24oZSkge1xuLy8gXHRpZiAoZS5wcm9wZXJ0eU5hbWUgIT09ICd0cmFuc2Zvcm0nKSByZXR1cm47XG4vLyBcdGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlpbmcnKTtcbi8vIH07XG5cbi8vIGNvbnN0IHBsYXlTb3VuZCA9IGZ1bmN0aW9uKGUpIHtcbi8vIFx0Y29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xuLy8gXHRjb25zdCBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAua2V5W2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XG5cbi8vIFx0aWYgKCAhYXVkaW8gKXtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblxuLy8gXHRhdWRpby5jdXJyZW50VGltZSA9IDA7XG4vLyBcdGF1ZGlvLnBsYXkoKTtcbi8vIFx0a2V5LmNsYXNzTGlzdC5hZGQoXCJwbGF5aW5nXCIpO1xuLy8gfVxuXG4vLyBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5rZXlcIik7XG5cbi8vIGtleXMuZm9yRWFjaChrZXkgPT4ga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZVRyYW5zaXRpb24pKTtcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHBsYXlTb3VuZCk7XG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4vLy0tMi4wIC0gQ2xvY2sgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLyBjb25zdCBzZWNvbmRIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1oYW5kJyk7XG4vLyBjb25zdCBtaW5zSGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4taGFuZCcpO1xuLy8gY29uc3QgaG91ckhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91ci1oYW5kJyk7XG5cblxuLy8gY29uc3Qgc2V0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuLy8gICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuLy8gICBjb25zdCBzZWNvbmRzID0gbm93LmdldFNlY29uZHMoKTtcbi8vICAgY29uc3Qgc2Vjb25kc0RlZ3JlZXMgPSAoKHNlY29uZHMgLyA2MCkgKiAzNjApICsgOTA7XG4vLyAgIGNvbnN0IG1pbnMgPSBub3cuZ2V0TWludXRlcygpO1xuLy8gICBjb25zdCBtaW5zRGVncmVlcyA9ICgobWlucyAvIDYwKSAqIDM2MCkgKyAoKHNlY29uZHMvNjApKjYpICsgOTA7XG4vLyAgIGNvbnN0IGhvdXIgPSBub3cuZ2V0SG91cnMoKTtcbi8vICAgY29uc3QgaG91ckRlZ3JlZXMgPSAoKGhvdXIgLyAxMikgKiAzNjApICsgKChtaW5zLzYwKSozMCkgKyA5MDtcblxuLy8gICAvL1JlbW92ZSB0cmFuc2l0aW9uIGlmIGxhc3Qgc2Vjb25kXG4vLyAgIGlmIChzZWNvbmRzPT09NTkpIHtcbi8vICAgICBzZWNvbmRIYW5kLmNsYXNzTGlzdC5hZGQoXCJoYW5kLW5vYW5pbWF0aW9uXCIpO1xuLy8gICAgIG1pbkhhbmQuY2xhc3NMaXN0LmFkZChcImhhbmQtbm9hbmltYXRpb25cIik7XG4vLyAgICAgaG91ckhhbmQuY2xhc3NMaXN0LmFkZChcImhhbmQtbm9hbmltYXRpb25cIik7XG4vLyAgIH1cbi8vICAgLy9BZGQgYW5pbWF0aW9uIGFmdGVyIHNlY29uZCAxJ1xuLy8gICBpZiAoc2Vjb25kcz09PTEpe1xuLy8gICAgIHNlY29uZEhhbmQuY2xhc3NMaXN0LnJlbW92ZShcImhhbmQtbm9hbmltYXRpb25cIik7XG4vLyAgICAgbWluSGFuZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGFuZC1ub2FuaW1hdGlvblwiKTtcbi8vICAgICBob3VySGFuZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGFuZC1ub2FuaW1hdGlvblwiKTtcbi8vICAgfVxuXG4vLyAgIHNlY29uZEhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3NlY29uZHNEZWdyZWVzfWRlZylgO1xuXG4vLyAgIG1pbnNIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHttaW5zRGVncmVlc31kZWcpYDtcblxuLy8gICBob3VySGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7aG91ckRlZ3JlZXN9ZGVnKWA7XG4vLyB9XG5cbi8vIHNldEludGVydmFsKHNldERhdGUsIDEwMDApO1xuLy8gc2V0RGF0ZSgpO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLy0tMy4wIC0gQ1NTIFZhcmlhYmxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cdC8vIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udHJvbHMgaW5wdXRcIik7XG5cblx0Ly8gY29uc3QgaGFuZGxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXHQvLyBcdGNvbnNvbGUubG9nKHRoaXMudmFsdWUpO1xuXG5cdC8vIFx0Y29uc3Qgc3VmZml4ID0gdGhpcy5kYXRhc2V0LnNpemluZyB8fCAnJztcblxuXHQvLyBcdGNvbnNvbGUubG9nKHN1ZmZpeCk7XG5cblx0Ly8gXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0aGlzLm5hbWV9YCwgdGhpcy52YWx1ZSArIHN1ZmZpeCk7XG5cdC8vIH07XG5cblx0Ly8gaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVVcGRhdGUpKTtcblx0Ly8gaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVVcGRhdGUpKTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8tLTQuMCAtIEFycmF5cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8gR2V0IHlvdXIgc2hvcnRzIG9uIC0gdGhpcyBpcyBhbiBhcnJheSB3b3Jrb3V0IVxuLy8gIyMgQXJyYXkgQ2FyZGlvIERheSAxXG4vLyBTb21lIGRhdGEgd2UgY2FuIHdvcmsgd2l0aFxuXG4vLyBjb25zdCBpbnZlbnRvcnMgPSBbXG4vLyAgIHsgZmlyc3Q6ICdBbGJlcnQnLCBsYXN0OiAnRWluc3RlaW4nLCB5ZWFyOiAxODc5LCBwYXNzZWQ6IDE5NTUgfSxcbi8vICAgeyBmaXJzdDogJ0lzYWFjJywgbGFzdDogJ05ld3RvbicsIHllYXI6IDE2NDMsIHBhc3NlZDogMTcyNyB9LFxuLy8gICB7IGZpcnN0OiAnR2FsaWxlbycsIGxhc3Q6ICdHYWxpbGVpJywgeWVhcjogMTU2NCwgcGFzc2VkOiAxNjQyIH0sXG4vLyAgIHsgZmlyc3Q6ICdNYXJpZScsIGxhc3Q6ICdDdXJpZScsIHllYXI6IDE4NjcsIHBhc3NlZDogMTkzNCB9LFxuLy8gICB7IGZpcnN0OiAnSm9oYW5uZXMnLCBsYXN0OiAnS2VwbGVyJywgeWVhcjogMTU3MSwgcGFzc2VkOiAxNjMwIH0sXG4vLyAgIHsgZmlyc3Q6ICdOaWNvbGF1cycsIGxhc3Q6ICdDb3Blcm5pY3VzJywgeWVhcjogMTQ3MywgcGFzc2VkOiAxNTQzIH0sXG4vLyAgIHsgZmlyc3Q6ICdNYXgnLCBsYXN0OiAnUGxhbmNrJywgeWVhcjogMTg1OCwgcGFzc2VkOiAxOTQ3IH0sXG4vLyAgIHsgZmlyc3Q6ICdLYXRoZXJpbmUnLCBsYXN0OiAnQmxvZGdldHQnLCB5ZWFyOiAxODk4LCBwYXNzZWQ6IDE5NzkgfSxcbi8vICAgeyBmaXJzdDogJ0FkYScsIGxhc3Q6ICdMb3ZlbGFjZScsIHllYXI6IDE4MTUsIHBhc3NlZDogMTg1MiB9LFxuLy8gICB7IGZpcnN0OiAnU2FyYWggRS4nLCBsYXN0OiAnR29vZGUnLCB5ZWFyOiAxODU1LCBwYXNzZWQ6IDE5MDUgfSxcbi8vICAgeyBmaXJzdDogJ0xpc2UnLCBsYXN0OiAnTWVpdG5lcicsIHllYXI6IDE4NzgsIHBhc3NlZDogMTk2OCB9LFxuLy8gICB7IGZpcnN0OiAnSGFubmEnLCBsYXN0OiAnSGFtbWFyc3Ryw7ZtJywgeWVhcjogMTgyOSwgcGFzc2VkOiAxOTA5IH1cbi8vIF07XG4vLyBjb25zdCBwZW9wbGUgPSBbJ0JlY2ssIEdsZW5uJywgJ0JlY2tlciwgQ2FybCcsICdCZWNrZXR0LCBTYW11ZWwnLCAnQmVkZG9lcywgTWljaycsICdCZWVjaGVyLCBIZW5yeScsICdCZWV0aG92ZW4sIEx1ZHdpZycsICdCZWdpbiwgTWVuYWNoZW0nLCAnQmVsbG9jLCBIaWxhaXJlJywgJ0JlbGxvdywgU2F1bCcsICdCZW5jaGxleSwgUm9iZXJ0JywgJ0JlbmVuc29uLCBQZXRlcicsICdCZW4tR3VyaW9uLCBEYXZpZCcsICdCZW5qYW1pbiwgV2FsdGVyJywgJ0Jlbm4sIFRvbnknLCAnQmVubmluZ3RvbiwgQ2hlc3RlcicsICdCZW5zb24sIExlYW5hJywgJ0JlbnQsIFNpbGFzJywgJ0JlbnRzZW4sIExsb3lkJywgJ0JlcmdlciwgUmljJywgJ0JlcmdtYW4sIEluZ21hcicsICdCZXJpbywgTHVjaWFubycsICdCZXJsZSwgTWlsdG9uJywgJ0JlcmxpbiwgSXJ2aW5nJywgJ0Jlcm5lLCBFcmljJywgJ0Jlcm5oYXJkLCBTYW5kcmEnLCAnQmVycmEsIFlvZ2knLCAnQmVycnksIEhhbGxlJywgJ0JlcnJ5LCBXZW5kZWxsJywgJ0JldGhlYSwgRXJpbicsICdCZXZhbiwgQW5ldXJpbicsICdCZXZlbCwgS2VuJywgJ0JpZGVuLCBKb3NlcGgnLCAnQmllcmNlLCBBbWJyb3NlJywgJ0Jpa28sIFN0ZXZlJywgJ0JpbGxpbmdzLCBKb3NoJywgJ0Jpb25kbywgRnJhbmsnLCAnQmlycmVsbCwgQXVndXN0aW5lJywgJ0JsYWNrLCBFbGsnLCAnQmxhaXIsIFJvYmVydCcsICdCbGFpciwgVG9ueScsICdCbGFrZSwgV2lsbGlhbSddO1xuXG4vLyBBcnJheS5wcm90b3R5cGUuZmlsdGVyKClcbi8vIDEuIEZpbHRlciB0aGUgbGlzdCBvZiBpbnZlbnRvcnMgZm9yIHRob3NlIHdobyB3ZXJlIGJvcm4gaW4gdGhlIDE1MDAnc1xuXG5cdC8vIGNvbnN0IGJvcm4xNTAwcyA9IGludmVudG9ycy5maWx0ZXIoaW52ZW50b3IgPT4gKGludmVudG9yLnllYXIgPj0gMTUwMCAmJiBpbnZlbnRvci55ZWFyIDwgMTYwMCkpO1xuXHQvLyBjb25zb2xlLnRhYmxlKGJvcm4xNTAwcyk7XG5cblxuLy8gQXJyYXkucHJvdG90eXBlLm1hcCgpXG4vLyAyLiBHaXZlIHVzIGFuIGFycmF5IG9mIHRoZSBpbnZlbnRvcnMnIGZpcnN0IGFuZCBsYXN0IG5hbWVzXG5cblx0Ly8gY29uc3QgaW52ZW50b3JOYW1lcyA9IGludmVudG9ycy5tYXAoaW52ZW50b3IgPT4gYCR7aW52ZW50b3IuZmlyc3R9ICR7aW52ZW50b3IubGFzdH1gKTtcblx0Ly8gY29uc29sZS5sb2coaW52ZW50b3JOYW1lcyk7XG5cbi8vIEFycmF5LnByb3RvdHlwZS5zb3J0KClcbi8vIDMuIFNvcnQgdGhlIGludmVudG9ycyBieSBiaXJ0aGRhdGUsIG9sZGVzdCB0byB5b3VuZ2VzdFxuXG5cdC8vIGNvbnN0IGludmVudG9yc0J5QWdlRGVzYyA9IGludmVudG9ycy5zb3J0KChhLCBiKSA9PiBhLnllYXIgPiBiLnllYXIgPyAxIDogLTEpO1xuXG5cdC8vIGNvbnNvbGUudGFibGUoaW52ZW50b3JzQnlBZ2VEZXNjKTtcblxuLy8gQXJyYXkucHJvdG90eXBlLnJlZHVjZSgpXG4vLyA0LiBIb3cgbWFueSB5ZWFycyBkaWQgYWxsIHRoZSBpbnZlbnRvcnMgbGl2ZT9cblxuXG5cdC8vIGNvbnN0IHRvdGFsWWVhcnMgPSBpbnZlbnRvcnMucmVkdWNlKCh0b3RhbCwgaW52ZW50b3IpID0+e1xuXHQvLyBcdHJldHVybiB0b3RhbCArIChpbnZlbnRvci5wYXNzZWQgLSBpbnZlbnRvci55ZWFyKVxuXHQvLyB9LCAwKTtcblxuXHQvLyBjb25zb2xlLmxvZyh0b3RhbFllYXJzKTtcblxuLy8gNS4gU29ydCB0aGUgaW52ZW50b3JzIGJ5IHllYXJzIGxpdmVkXG5cblx0Ly8gY29uc3QgaW52ZW50b3JzQnlZZWFyc0xpdmVkID0gaW52ZW50b3JzLnNvcnQoZnVuY3Rpb24oYSwgYil7XG5cdC8vIFx0Y29uc3QgZmlyc3RQZXJzb24gPSBhLnBhc3NlZCAtIGEueWVhcjtcblx0Ly8gXHRjb25zdCBzZWNvbmRQZXJzb24gPSBiLnBhc3NlZCAtIGIueWVhcjtcblxuXHQvLyBcdHJldHVybiBmaXJzdFBlcnNvbiA+IHNlY29uZFBlcnNvbiA/IC0xIDogMTtcblx0Ly8gfSk7XG5cblx0Ly8gY29uc29sZS50YWJsZShpbnZlbnRvcnNCeVllYXJzTGl2ZWQpO1xuXG5cblxuLy8gNi4gY3JlYXRlIGEgbGlzdCBvZiBCb3VsZXZhcmRzIGluIFBhcmlzIHRoYXQgY29udGFpbiAnZGUnIGFueXdoZXJlIGluIHRoZSBuYW1lXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DYXRlZ29yeTpCb3VsZXZhcmRzX2luX1BhcmlzXG5cblx0Ly8gY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXctY2F0ZWdvcnknKTtcblx0Ly8gY29uc3QgbGlua3MgPSBBcnJheS5mcm9tKGNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSk7XG5cblx0Ly8gY29uc3QgZGUgPSBsaW5rc1xuXHQvLyBcdFx0XHRcdC5tYXAobGluayA9PiBsaW5rLnRleHRDb250ZW50KVxuXHQvLyBcdFx0XHRcdC5maWx0ZXIoc3RyZWV0TmFtZSA9PiBzdHJlZXROYW1lLmluY2x1ZGVzKCdkZScpKTtcblxuXG4vLyA3LiBzb3J0IEV4ZXJjaXNlXG4vLyBTb3J0IHRoZSBwZW9wbGUgYWxwaGFiZXRpY2FsbHkgYnkgbGFzdCBuYW1lXG5cblx0Ly8gY29uc3QgcGVvcGxlQnlOYW1lID0gcGVvcGxlLnNvcnQoZnVuY3Rpb24obGFzdFBlcnNvbiwgbmV4dFBlcnNvbil7XG5cdC8vIFx0Y29uc3QgW2FMYXN0LCBhRmlyc3RdID0gbGFzdFBlcnNvbi5zcGxpdChcIixcIik7XG5cdC8vIFx0Y29uc3QgW2JMYXN0LCBiRmlyc3RdID0gbmV4dFBlcnNvbi5zcGxpdChcIixcIik7XG5cblx0Ly8gXHRyZXR1cm4gYUxhc3QgPiBiTGFzdCA/IDE6IC0xO1xuXHQvLyB9KTtcblxuXHQvLyBjb25zb2xlLmxvZyhwZW9wbGVCeU5hbWUpO1xuXG4vLyA4LiBSZWR1Y2UgRXhlcmNpc2Vcbi8vIFN1bSB1cCB0aGUgaW5zdGFuY2VzIG9mIGVhY2ggb2YgdGhlc2Vcblx0Ly8gY29uc3QgZGF0YSA9IFsnY2FyJywgJ2NhcicsICd0cnVjaycsICd0cnVjaycsICdiaWtlJywgJ3dhbGsnLCAnY2FyJywgJ3ZhbicsICdiaWtlJywgJ3dhbGsnLCAnY2FyJywgJ3ZhbicsICdjYXInLCAndHJ1Y2snIF07XG5cblx0Ly8gY29uc3QgdHJhbnNwb3J0VG90YWxzID0gZGF0YS5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBpdGVtKXtcblxuXHQvLyBcdGlmICggIW9ialtpdGVtXSApIHtcblx0Ly8gXHRcdG9ialtpdGVtXSA9IDA7XG5cdC8vIFx0fVxuXG5cdC8vIFx0b2JqW2l0ZW1dKys7XG5cblx0Ly8gXHRyZXR1cm4gb2JqO1xuXG5cdC8vIH0sIHt9KTtcblxuXHQvLyBjb25zb2xlLmxvZyh0cmFuc3BvcnRUb3RhbHMpO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLy0tNS4wIC0gRmxleCBHYWxsZXJ5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cdC8vIGNvbnN0IHBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpO1xuXG5cdC8vIGZ1bmN0aW9uIHRvZ2dsZU9wZW4oKSB7XG5cdC8vICAgY29uc29sZS5sb2coJ0hlbGxvJyk7XG5cdC8vICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG5cdC8vIH1cblxuXHQvLyBmdW5jdGlvbiB0b2dnbGVBY3RpdmUoZSkge1xuXHQvLyAgIGNvbnNvbGUubG9nKGUucHJvcGVydHlOYW1lKTtcblx0Ly8gICBpZiAoZS5wcm9wZXJ0eU5hbWUuaW5jbHVkZXMoJ2ZsZXgnKSkge1xuXHQvLyAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuLWFjdGl2ZScpO1xuXHQvLyAgIH1cblx0Ly8gfVxuXG5cdC8vIHBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlT3BlbikpO1xuXHQvLyBwYW5lbHMuZm9yRWFjaChwYW5lbCA9PiBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdG9nZ2xlQWN0aXZlKSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vLS02LjAgLSBUeXBlIEFoZWFkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vIGNvbnN0IGVuZHBvaW50ID0gJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vTWlzZXJsb3UvYzVjZDgzNjRiZjliMjQyMGJiMjkvcmF3LzJiZjI1ODc2M2NkZGRkNzA0ZjhmZmQzZWE5YTNlODFkMjVlMmM2ZjYvY2l0aWVzLmpzb24nO1xuXG4vLyBjb25zdCBjaXRpZXMgPSBbXTtcblxuLy8gZmV0Y2goZW5kcG9pbnQpXG4vLyAgIC50aGVuKGJsb2IgPT4gYmxvYi5qc29uKCkpXG4vLyAgIC50aGVuKGRhdGEgPT4gY2l0aWVzLnB1c2goLi4uZGF0YSkpO1xuXG4vLyBjb25zb2xlLmxvZyhjaXRpZXMpO1xuXG4vLyBmdW5jdGlvbiBmaW5kTWF0Y2hlcyh3b3JkVG9NYXRjaCwgY2l0aWVzKSB7XG4vLyBcdHJldHVybiBjaXRpZXMuZmlsdGVyKHBsYWNlID0+IHtcblxuLy8gXHRcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh3b3JkVG9NYXRjaCwgJ2dpJyk7XG4vLyBcdFx0cmV0dXJuIHBsYWNlLmNpdHkubWF0Y2gocmVnZXgpIHx8IHBsYWNlLnN0YXRlLm1hdGNoKHJlZ2V4KTtcblxuLy8gXHR9KTtcbi8vIH07XG5cbi8vIGZ1bmN0aW9uIG51bWJlcldpdGhDb21tYXMoeCkge1xuLy8gICByZXR1cm4geC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlNYXRjaGVzKCkge1xuLy8gICBjb25zdCBtYXRjaEFycmF5ID0gZmluZE1hdGNoZXModGhpcy52YWx1ZSwgY2l0aWVzKTtcbi8vICAgY29uc3QgaHRtbCA9IG1hdGNoQXJyYXkubWFwKHBsYWNlID0+IHtcblxuLy8gICBcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh0aGlzLnZhbHVlLCAnZ2knKTtcbi8vICAgXHRjb25zdCBjaXR5TmFtZSA9IHBsYWNlLmNpdHkucmVwbGFjZShyZWdleCwgYDxzcGFuIGNsYXNzPVwiaGxcIj4ke3RoaXMudmFsdWV9PC9zcGFuPmApO1xuLy8gICBcdGNvbnN0IHN0YXRlTmFtZSA9IHBsYWNlLnN0YXRlLnJlcGxhY2UocmVnZXgsIGA8c3BhbiBjbGFzcz1cImhsXCI+JHt0aGlzLnZhbHVlfTwvc3Bhbj5gKTtcblxuLy8gICAgIHJldHVybiBgXG4vLyAgICAgICA8bGk+XG4vLyAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7Y2l0eU5hbWV9LCAke3N0YXRlTmFtZX08L3NwYW4+XG4vLyAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdWxhdGlvblwiPiR7bnVtYmVyV2l0aENvbW1hcyhwbGFjZS5wb3B1bGF0aW9uKX08L3NwYW4+XG4vLyAgICAgICA8L2xpPlxuLy8gICAgIGA7XG4vLyAgIH0pLmpvaW4oJycpO1xuLy8gICBzdWdnZXN0aW9ucy5pbm5lckhUTUwgPSBodG1sO1xuLy8gfVxuXG4vLyBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcbi8vIGNvbnN0IHN1Z2dlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Z2dlc3Rpb25zJyk7XG5cbi8vIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRpc3BsYXlNYXRjaGVzKTtcbi8vIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGlzcGxheU1hdGNoZXMpO1xuXG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8tLTYuMCAtIEFycmF5cyAyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgIC8vIGNvbnN0IHBlb3BsZSA9IFtcbiAgICAvLyAgIHsgbmFtZTogJ1dlcycsIHllYXI6IDE5ODggfSxcbiAgICAvLyAgIHsgbmFtZTogJ0thaXQnLCB5ZWFyOiAxOTg2IH0sXG4gICAgLy8gICB7IG5hbWU6ICdJcnYnLCB5ZWFyOiAxOTcwIH0sXG4gICAgLy8gICB7IG5hbWU6ICdMdXgnLCB5ZWFyOiAyMDE1IH1cbiAgICAvLyBdO1xuICAgIC8vIGNvbnN0IGNvbW1lbnRzID0gW1xuICAgIC8vICAgeyB0ZXh0OiAnTG92ZSB0aGlzIScsIGlkOiA1MjM0MjMgfSxcbiAgICAvLyAgIHsgdGV4dDogJ1N1cGVyIGdvb2QnLCBpZDogODIzNDIzIH0sXG4gICAgLy8gICB7IHRleHQ6ICdZb3UgYXJlIHRoZSBiZXN0JywgaWQ6IDIwMzk4NDIgfSxcbiAgICAvLyAgIHsgdGV4dDogJ1JhbWVuIGlzIG15IGZhdiBmb29kIGV2ZXInLCBpZDogMTIzNTIzIH0sXG4gICAgLy8gICB7IHRleHQ6ICdOaWNlIE5pY2UgTmljZSEnLCBpZDogNTQyMzI4IH1cbiAgICAvLyBdO1xuICAgIC8vIFNvbWUgYW5kIEV2ZXJ5IENoZWNrc1xuICAgIC8vIEFycmF5LnByb3RvdHlwZS5zb21lKCkgLy8gaXMgYXQgbGVhc3Qgb25lIHBlcnNvbiAxOSBvciBvbGRlcj9cblxuICAgIC8vIGNvbnN0IGlzQWR1bHQgPSBwZW9wbGUuc29tZShmdW5jdGlvbihwZXJzb24pe1xuXG4gICAgLy8gXHRjb25zdCBjdXJyZW50RGF0ZSA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuXG4gICAgLy8gXHRpZiAoIGN1cnJlbnRZZWFyIC0gcGVyc29uLnllYXIgPj0gMTkpIHtcbiAgICAvLyBcdFx0cmV0dXJuIHRydWU7XG4gICAgLy8gXHR9XG5cbiAgICAvLyB9KTtcblxuICAgIC8vIGNvbnN0IGlzQWR1bHQgPSBwZW9wbGUuc29tZShwZXJzb24gPT4gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkgLSBwZXJzb24ueWVhciA+PSAxOSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpc0FkdWx0KTtcblxuICAgIC8vIGNvbnN0IGFsbEFkdWx0cyA9IHBlb3BsZS5ldmVyeShwZXJzb24gPT4gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkgLSBwZXJzb24ueWVhciA+PSAxOSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhhbGxBZHVsdHMpO1xuXG4gICAgLy8gQXJyYXkucHJvdG90eXBlLmV2ZXJ5KCkgLy8gaXMgZXZlcnlvbmUgMTkgb3Igb2xkZXI/XG4gICAgLy8gQXJyYXkucHJvdG90eXBlLmZpbmQoKVxuICAgIC8vIEZpbmQgaXMgbGlrZSBmaWx0ZXIsIGJ1dCBpbnN0ZWFkIHJldHVybnMganVzdCB0aGUgb25lIHlvdSBhcmUgbG9va2luZyBmb3JcbiAgICAvLyBmaW5kIHRoZSBjb21tZW50IHdpdGggdGhlIElEIG9mIDgyMzQyM1xuXG4gICAgLy8gY29uc3Qgc2VsZWN0ZWRDb21tZW50ID0gY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuaWQgPT09IDgyMzQyMyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZENvbW1lbnQpO1xuXG4gICAgLy8gQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCgpXG4gICAgLy8gRmluZCB0aGUgY29tbWVudCB3aXRoIHRoaXMgSURcbiAgICAvLyBkZWxldGUgdGhlIGNvbW1lbnQgd2l0aCB0aGUgSUQgb2YgODIzNDIzXG5cbiAgICAvLyBjb25zdCBjb21tZW50VG9EZWxldGUgPSBjb21tZW50cy5maW5kSW5kZXgoY29tbWVudCA9PiBjb21tZW50LmlkID09PSA4MjM0MjMpO1xuXG4gICAgLy9jb21tZW50cy5zcGxpY2UoY29tbWVudFRvRGVsZXRlLCAxKVxuXG4gICAgLy8gY29uc3QgbmV3Q29tbWVudHMgPSBbXG4gICAgLy8gXHQuLi5jb21tZW50cy5zbGljZSgwLCBjb21tZW50VG9EZWxldGUpLFxuICAgIC8vIFx0Li4uY29tbWVudHMuc2xpY2UoY29tbWVudFRvRGVsZXRlICsgMSlcbiAgICAvLyBdO1xuXG4gICAgLy8gY29uc29sZS50YWJsZShuZXdDb21tZW50cyk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuLy8tLTcuMCAtIENhbnZhcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXHQvLyBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhdycpO1xuXHQvLyBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0Ly8gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdC8vIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cblx0Ly8gY29udGV4dC5zdHJva2VTdHlsZSA9ICcjQkFEQTU1Jztcblx0Ly8gY29udGV4dC5saW5lSm9pbiA9ICdyb3VuZCc7XG5cdC8vIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XG5cdC8vIGNvbnRleHQubGluZVdpZHRoID0gMjA7XG5cblx0Ly8gbGV0IGlzRHJhd2luZyA9IGZhbHNlO1xuXHQvLyBsZXQgbGFzdFhQb3MgPSAwO1xuXHQvLyBsZXQgbGFzdFlQb3MgPSAwO1xuXHQvLyBsZXQgaHVlID0gMDtcblxuXG5cdC8vIGNvbnN0IGRyYXcgPSBmdW5jdGlvbihlKXtcblx0Ly8gXHRpZighaXNEcmF3aW5nKSByZXR1cm47XG5cdC8vIFx0Y29udGV4dC5zdHJva2VTdHlsZSA9IGBoc2woJHtodWV9LCAxMDAlLCA1MCUpYDtcblx0Ly8gXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xuXHQvLyBcdGNvbnRleHQubW92ZVRvKGxhc3RYUG9zLCBsYXN0WVBvcyk7XG5cdC8vIFx0Y29udGV4dC5saW5lVG8oZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuXHQvLyBcdGNvbnRleHQuc3Ryb2tlKCk7XG5cblx0Ly8gXHRbbGFzdFhQb3MsIGxhc3RZUG9zXSA9IFtlLm9mZnNldFgsIGUub2Zmc2V0WV07XG5cblx0Ly8gXHRodWUrKztcblxuXHQvLyBcdGlmIChodWUgPj0gMzYwKXtcblx0Ly8gXHRcdGh1ZSA9IDA7XG5cdC8vIFx0fVxuXHQvLyB9O1xuXG5cdC8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHQvLyAgIGlzRHJhd2luZyA9IHRydWU7XG5cdC8vICAgW2xhc3RYUG9zLCBsYXN0WVBvc10gPSBbZS5vZmZzZXRYLCBlLm9mZnNldFldO1xuXHQvLyB9KTtcblx0Ly8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYXcpO1xuXHQvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IGlzRHJhd2luZyA9IGZhbHNlKTtcblx0Ly8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gaXNEcmF3aW5nID0gZmFsc2UpO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLy0tOS4wIC0gTXVsdGktU2VsZWN0IENoZWNrYm94ZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLyBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG4vLyBsZXQgbGFzdENoZWNrZWQ7XG5cbi8vIGNvbnN0IGhhbmRsZUNoZWNrID0gZnVuY3Rpb24gKGUpIHtcbi8vIFx0Y29uc29sZS5sb2coZSk7XG5cbi8vIFx0bGV0IGluQmV0d2VlbiA9IGZhbHNlO1xuXG4vLyBcdGlmIChlLnNoaWZ0S2V5ICYmIHRoaXMuY2hlY2tlZCkge1xuXG5cbi8vIFx0XHRjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuLy8gXHRcdFx0XHRjb25zb2xlLmxvZyhjaGVja2JveCk7XG5cbi8vIFx0XHRcdGlmIChjaGVja2JveCA9PT0gdGhpcyB8fCBjaGVja2JveCA9PT0gbGFzdENoZWNrZWQpe1xuLy8gXHRcdFx0XHRpbkJldHdlZW4gPSAhaW5CZXR3ZWVuO1xuLy8gXHRcdFx0XHRjb25zb2xlLmxvZyhcInN0YXJ0aW5nIHRvIGNoZWNrIHRoZW0gaW4gYmV0d2VlblwiKTtcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0aWYoaW5CZXR3ZWVuKXtcbi8vIFx0XHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHR9KTtcbi8vIFx0fVxuXG4vLyBcdGxhc3RDaGVja2VkID0gdGhpcztcbi8vIH07XG5cbi8vIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNoZWNrKSk7XG5cblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLy0tMTAuMCAtIEN1c3RvbSBWaWRlby0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cdGNvbnN0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuXHRjb25zdCB2aWRlbyA9IHBsYXllci5xdWVyeVNlbGVjdG9yKCcudmlld2VyJyk7XG5cdGNvbnN0IHByb2dyZXNzID0gcGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpO1xuXHRjb25zdCBwcm9ncmVzc0JhciA9IHBsYXllci5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NfX2ZpbGxlZCcpO1xuXHRjb25zdCB0b2dnbGUgPSBwbGF5ZXIucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xuXHRjb25zdCBza2lwQnV0dG9ucyA9IHBsYXllci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1za2lwXScpO1xuXHRjb25zdCByYW5nZXMgPSBwbGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcl9fc2xpZGVyJyk7XG5cblx0Y29uc3QgdG9nZ2xlUGxheSA9IGZ1bmN0aW9uICgpe1xuXHRcdGNvbnN0IG1ldGhvZCA9IHZpZGVvLnBhdXNlZCA/ICdwbGF5JyA6ICdwYXVzZSc7XG5cblx0XHR2aWRlb1ttZXRob2RdKCk7XG5cblx0fTtcblxuXHRjb25zdCB1cGRhdGVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgaWNvbiA9IHRoaXMucGF1c2VkID8gJ+KWuicgOiAn4p2aIOKdmic7XG5cdFx0Y29uc29sZS5sb2coaWNvbik7XG5cdFx0dG9nZ2xlLnRleHRDb250ZW50ID0gaWNvbjtcblx0fTtcblxuXG5cdGNvbnN0IHNraXAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgKz0gcGFyc2VGbG9hdCh0aGlzLmRhdGFzZXQuc2tpcCk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUmFuZ2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmlkZW9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWU7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgcGVyY2VudCA9ICh2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uKSAqIDEwMDtcblxuXHRcdHByb2dyZXNzQmFyLnN0eWxlLmZsZXhCYXNpcyA9IGAke3BlcmNlbnR9JWA7XG5cdH07XG5cblx0Y29uc3QgdXNlckNsaWNrZWRTa2lwID0gZnVuY3Rpb24gKGUpIHtcblx0XHRjb25zdCBza2lwVGltZSA9IChlLm9mZnNldFggLyBwcm9ncmVzcy5vZmZzZXRXaWR0aCkgKiB2aWRlby5kdXJhdGlvbjtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9IHNraXBUaW1lO1xuXHR9O1xuXG5cdHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUGxheSk7XG5cdHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB1cGRhdGVCdXR0b24pO1xuXHR2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIHVwZGF0ZUJ1dHRvbik7XG5cdHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBoYW5kbGVQcm9ncmVzcyk7XG5cblx0dG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUGxheSk7XG5cblx0c2tpcEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2tpcCkpO1xuXHRyYW5nZXMuZm9yRWFjaChyYW5nZSA9PiByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVSYW5nZVVwZGF0ZSkpO1xuXHRyYW5nZXMuZm9yRWFjaChyYW5nZSA9PiByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVSYW5nZVVwZGF0ZSkpO1xuXG5cdGxldCBtb3VzZWRvd24gPSBmYWxzZTtcblxuXHRwcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVzZXJDbGlja2VkU2tpcCk7XG5cdHByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiBtb3VzZWRvd24gJiYgdXNlckNsaWNrZWRTa2lwKGUpKTtcblx0cHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gbW91c2Vkb3duID0gdHJ1ZSk7XG5cdHByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiBtb3VzZWRvd24gPSBmYWxzZSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4iXX0=
