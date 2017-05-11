(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i];
		}return arr2;
	} else {
		return Array.from(arr);
	}
}

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

//--5.0 - Type Ahead ---------------------------------------------------------------//

var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];

fetch(endpoint).then(function (blob) {
	return blob.json();
}).then(function (data) {
	return cities.push.apply(cities, _toConsumableArray(data));
});

console.log(cities);

function findMatches(wordToMatch, cities) {
	return cities.filter(function (place) {

		var regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
};

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	var _this = this;

	var matchArray = findMatches(this.value, cities);
	var html = matchArray.map(function (place) {

		var regex = new RegExp(_this.value, 'gi');
		var cityName = place.city.replace(regex, '<span class="hl">' + _this.value + '</span>');
		var stateName = place.state.replace(regex, '<span class="hl">' + _this.value + '</span>');

		return '\n      <li>\n        <span class="name">' + cityName + ', ' + stateName + '</span>\n        <span class="population">' + numberWithCommas(place.population) + '</span>\n      </li>\n    ';
	}).join('');
	suggestions.innerHTML = html;
}

var searchInput = document.querySelector('.search');
var suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

//----------------------------------------------------------------------------------//

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQztBQUNBOzs7QUFHRDtBQUNBOztBQUVDO0FBQ0E7O0FBRUQ7QUFDQTs7QUFFQzs7QUFFQTs7QUFFRDtBQUNBOzs7QUFHQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUQ7O0FBRUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUlEO0FBQ0E7O0FBRUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdEO0FBQ0E7O0FBRUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUQ7QUFDQTtBQUNDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFRDs7QUFFQTs7QUFFQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFRDs7QUFFQTs7QUFFQSxJQUFNLFdBQU4sQUFBaUI7O0FBRWpCLElBQU0sU0FBTixBQUFlOztBQUVmLE1BQUEsQUFBTSxVQUFOLEFBQ0csS0FBSyxnQkFBQTtRQUFRLEtBQVIsQUFBUSxBQUFLO0FBRHJCLEdBQUEsQUFFRyxLQUFLLGdCQUFBO1FBQVEsT0FBQSxBQUFPLHNDQUFmLEFBQVEsQUFBZTtBQUYvQjs7QUFJQSxRQUFBLEFBQVEsSUFBUixBQUFZOztBQUVaLFNBQUEsQUFBUyxZQUFULEFBQXFCLGFBQXJCLEFBQWtDLFFBQVEsQUFDekM7ZUFBTyxBQUFPLE9BQU8saUJBQVMsQUFFN0I7O01BQU0sUUFBUSxJQUFBLEFBQUksT0FBSixBQUFXLGFBQXpCLEFBQWMsQUFBd0IsQUFDdEM7U0FBTyxNQUFBLEFBQU0sS0FBTixBQUFXLE1BQVgsQUFBaUIsVUFBVSxNQUFBLEFBQU0sTUFBTixBQUFZLE1BQTlDLEFBQWtDLEFBQWtCLEFBRXBEO0FBTEQsQUFBTyxBQU1QLEVBTk87OztBQVFSLFNBQUEsQUFBUyxpQkFBVCxBQUEwQixHQUFHLEFBQzNCO1FBQU8sRUFBQSxBQUFFLFdBQUYsQUFBYSxRQUFiLEFBQXFCLHlCQUE1QixBQUFPLEFBQThDLEFBQ3REOzs7QUFFRCxTQUFBLEFBQVMsaUJBQWlCO2FBQ3hCOztLQUFNLGFBQWEsWUFBWSxLQUFaLEFBQWlCLE9BQXBDLEFBQW1CLEFBQXdCLEFBQzNDO0tBQU0sa0JBQU8sQUFBVyxJQUFJLGlCQUFTLEFBRXBDOztNQUFNLFFBQVEsSUFBQSxBQUFJLE9BQU8sTUFBWCxBQUFnQixPQUE5QixBQUFjLEFBQXVCLEFBQ3JDO01BQU0sV0FBVyxNQUFBLEFBQU0sS0FBTixBQUFXLFFBQVgsQUFBbUIsNkJBQTJCLE1BQTlDLEFBQW1ELFFBQXBFLEFBQ0E7TUFBTSxZQUFZLE1BQUEsQUFBTSxNQUFOLEFBQVksUUFBWixBQUFvQiw2QkFBMkIsTUFBL0MsQUFBb0QsUUFBdEUsQUFFQzs7dURBQUEsQUFFeUIsa0JBRnpCLEFBRXNDLDJEQUNQLGlCQUFpQixNQUhoRCxBQUcrQixBQUF1QixjQUd2RDtBQVpZLEVBQUEsRUFBQSxBQVlWLEtBWkgsQUFBYSxBQVlMLEFBQ1I7YUFBQSxBQUFZLFlBQVosQUFBd0IsQUFDekI7OztBQUVELElBQU0sY0FBYyxTQUFBLEFBQVMsY0FBN0IsQUFBb0IsQUFBdUI7QUFDM0MsSUFBTSxjQUFjLFNBQUEsQUFBUyxjQUE3QixBQUFvQixBQUF1Qjs7QUFFM0MsWUFBQSxBQUFZLGlCQUFaLEFBQTZCLFVBQTdCLEFBQXVDO0FBQ3ZDLFlBQUEsQUFBWSxpQkFBWixBQUE2QixTQUE3QixBQUFzQzs7QUFJdEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8tLTEuMCAtIERydW0gS2l0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbi8vIGNvbnN0IHJlbW92ZVRyYW5zaXRpb24gPSBmdW5jdGlvbihlKSB7XG4vLyBcdGlmIChlLnByb3BlcnR5TmFtZSAhPT0gJ3RyYW5zZm9ybScpIHJldHVybjtcbi8vIFx0ZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuLy8gfTtcblxuLy8gY29uc3QgcGxheVNvdW5kID0gZnVuY3Rpb24oZSkge1xuLy8gXHRjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XG4vLyBcdGNvbnN0IGtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5rZXlbZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcblxuLy8gXHRpZiAoICFhdWRpbyApe1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXG4vLyBcdGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbi8vIFx0YXVkaW8ucGxheSgpO1xuLy8gXHRrZXkuY2xhc3NMaXN0LmFkZChcInBsYXlpbmdcIik7XG4vLyB9XG5cbi8vIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmtleVwiKTtcblxuLy8ga2V5cy5mb3JFYWNoKGtleSA9PiBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlVHJhbnNpdGlvbikpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcGxheVNvdW5kKTtcblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbi8vLS0yLjAgLSBDbG9jayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vIGNvbnN0IHNlY29uZEhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWhhbmQnKTtcbi8vIGNvbnN0IG1pbnNIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1oYW5kJyk7XG4vLyBjb25zdCBob3VySGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VyLWhhbmQnKTtcblxuXG4vLyBjb25zdCBzZXREYXRlID0gZnVuY3Rpb24gKCkge1xuXG4vLyAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4vLyAgIGNvbnN0IHNlY29uZHMgPSBub3cuZ2V0U2Vjb25kcygpO1xuLy8gICBjb25zdCBzZWNvbmRzRGVncmVlcyA9ICgoc2Vjb25kcyAvIDYwKSAqIDM2MCkgKyA5MDtcbi8vICAgY29uc3QgbWlucyA9IG5vdy5nZXRNaW51dGVzKCk7XG4vLyAgIGNvbnN0IG1pbnNEZWdyZWVzID0gKChtaW5zIC8gNjApICogMzYwKSArICgoc2Vjb25kcy82MCkqNikgKyA5MDtcbi8vICAgY29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpO1xuLy8gICBjb25zdCBob3VyRGVncmVlcyA9ICgoaG91ciAvIDEyKSAqIDM2MCkgKyAoKG1pbnMvNjApKjMwKSArIDkwO1xuXG4vLyAgIC8vUmVtb3ZlIHRyYW5zaXRpb24gaWYgbGFzdCBzZWNvbmRcbi8vICAgaWYgKHNlY29uZHM9PT01OSkge1xuLy8gICAgIHNlY29uZEhhbmQuY2xhc3NMaXN0LmFkZChcImhhbmQtbm9hbmltYXRpb25cIik7XG4vLyAgICAgbWluSGFuZC5jbGFzc0xpc3QuYWRkKFwiaGFuZC1ub2FuaW1hdGlvblwiKTtcbi8vICAgICBob3VySGFuZC5jbGFzc0xpc3QuYWRkKFwiaGFuZC1ub2FuaW1hdGlvblwiKTtcbi8vICAgfVxuLy8gICAvL0FkZCBhbmltYXRpb24gYWZ0ZXIgc2Vjb25kIDEnXG4vLyAgIGlmIChzZWNvbmRzPT09MSl7XG4vLyAgICAgc2Vjb25kSGFuZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGFuZC1ub2FuaW1hdGlvblwiKTtcbi8vICAgICBtaW5IYW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJoYW5kLW5vYW5pbWF0aW9uXCIpO1xuLy8gICAgIGhvdXJIYW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJoYW5kLW5vYW5pbWF0aW9uXCIpO1xuLy8gICB9XG5cbi8vICAgc2Vjb25kSGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7c2Vjb25kc0RlZ3JlZXN9ZGVnKWA7XG5cbi8vICAgbWluc0hhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke21pbnNEZWdyZWVzfWRlZylgO1xuXG4vLyAgIGhvdXJIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtob3VyRGVncmVlc31kZWcpYDtcbi8vIH1cblxuLy8gc2V0SW50ZXJ2YWwoc2V0RGF0ZSwgMTAwMCk7XG4vLyBzZXREYXRlKCk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vLS0zLjAgLSBDU1MgVmFyaWFibGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblx0Ly8gY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250cm9scyBpbnB1dFwiKTtcblxuXHQvLyBjb25zdCBoYW5kbGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIFx0Y29uc29sZS5sb2codGhpcy52YWx1ZSk7XG5cblx0Ly8gXHRjb25zdCBzdWZmaXggPSB0aGlzLmRhdGFzZXQuc2l6aW5nIHx8ICcnO1xuXG5cdC8vIFx0Y29uc29sZS5sb2coc3VmZml4KTtcblxuXHQvLyBcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RoaXMubmFtZX1gLCB0aGlzLnZhbHVlICsgc3VmZml4KTtcblx0Ly8gfTtcblxuXHQvLyBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVVwZGF0ZSkpO1xuXHQvLyBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVVwZGF0ZSkpO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLy0tNC4wIC0gQXJyYXlzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLyBHZXQgeW91ciBzaG9ydHMgb24gLSB0aGlzIGlzIGFuIGFycmF5IHdvcmtvdXQhXG4vLyAjIyBBcnJheSBDYXJkaW8gRGF5IDFcbi8vIFNvbWUgZGF0YSB3ZSBjYW4gd29yayB3aXRoXG5cbi8vIGNvbnN0IGludmVudG9ycyA9IFtcbi8vICAgeyBmaXJzdDogJ0FsYmVydCcsIGxhc3Q6ICdFaW5zdGVpbicsIHllYXI6IDE4NzksIHBhc3NlZDogMTk1NSB9LFxuLy8gICB7IGZpcnN0OiAnSXNhYWMnLCBsYXN0OiAnTmV3dG9uJywgeWVhcjogMTY0MywgcGFzc2VkOiAxNzI3IH0sXG4vLyAgIHsgZmlyc3Q6ICdHYWxpbGVvJywgbGFzdDogJ0dhbGlsZWknLCB5ZWFyOiAxNTY0LCBwYXNzZWQ6IDE2NDIgfSxcbi8vICAgeyBmaXJzdDogJ01hcmllJywgbGFzdDogJ0N1cmllJywgeWVhcjogMTg2NywgcGFzc2VkOiAxOTM0IH0sXG4vLyAgIHsgZmlyc3Q6ICdKb2hhbm5lcycsIGxhc3Q6ICdLZXBsZXInLCB5ZWFyOiAxNTcxLCBwYXNzZWQ6IDE2MzAgfSxcbi8vICAgeyBmaXJzdDogJ05pY29sYXVzJywgbGFzdDogJ0NvcGVybmljdXMnLCB5ZWFyOiAxNDczLCBwYXNzZWQ6IDE1NDMgfSxcbi8vICAgeyBmaXJzdDogJ01heCcsIGxhc3Q6ICdQbGFuY2snLCB5ZWFyOiAxODU4LCBwYXNzZWQ6IDE5NDcgfSxcbi8vICAgeyBmaXJzdDogJ0thdGhlcmluZScsIGxhc3Q6ICdCbG9kZ2V0dCcsIHllYXI6IDE4OTgsIHBhc3NlZDogMTk3OSB9LFxuLy8gICB7IGZpcnN0OiAnQWRhJywgbGFzdDogJ0xvdmVsYWNlJywgeWVhcjogMTgxNSwgcGFzc2VkOiAxODUyIH0sXG4vLyAgIHsgZmlyc3Q6ICdTYXJhaCBFLicsIGxhc3Q6ICdHb29kZScsIHllYXI6IDE4NTUsIHBhc3NlZDogMTkwNSB9LFxuLy8gICB7IGZpcnN0OiAnTGlzZScsIGxhc3Q6ICdNZWl0bmVyJywgeWVhcjogMTg3OCwgcGFzc2VkOiAxOTY4IH0sXG4vLyAgIHsgZmlyc3Q6ICdIYW5uYScsIGxhc3Q6ICdIYW1tYXJzdHLDtm0nLCB5ZWFyOiAxODI5LCBwYXNzZWQ6IDE5MDkgfVxuLy8gXTtcbi8vIGNvbnN0IHBlb3BsZSA9IFsnQmVjaywgR2xlbm4nLCAnQmVja2VyLCBDYXJsJywgJ0JlY2tldHQsIFNhbXVlbCcsICdCZWRkb2VzLCBNaWNrJywgJ0JlZWNoZXIsIEhlbnJ5JywgJ0JlZXRob3ZlbiwgTHVkd2lnJywgJ0JlZ2luLCBNZW5hY2hlbScsICdCZWxsb2MsIEhpbGFpcmUnLCAnQmVsbG93LCBTYXVsJywgJ0JlbmNobGV5LCBSb2JlcnQnLCAnQmVuZW5zb24sIFBldGVyJywgJ0Jlbi1HdXJpb24sIERhdmlkJywgJ0JlbmphbWluLCBXYWx0ZXInLCAnQmVubiwgVG9ueScsICdCZW5uaW5ndG9uLCBDaGVzdGVyJywgJ0JlbnNvbiwgTGVhbmEnLCAnQmVudCwgU2lsYXMnLCAnQmVudHNlbiwgTGxveWQnLCAnQmVyZ2VyLCBSaWMnLCAnQmVyZ21hbiwgSW5nbWFyJywgJ0JlcmlvLCBMdWNpYW5vJywgJ0JlcmxlLCBNaWx0b24nLCAnQmVybGluLCBJcnZpbmcnLCAnQmVybmUsIEVyaWMnLCAnQmVybmhhcmQsIFNhbmRyYScsICdCZXJyYSwgWW9naScsICdCZXJyeSwgSGFsbGUnLCAnQmVycnksIFdlbmRlbGwnLCAnQmV0aGVhLCBFcmluJywgJ0JldmFuLCBBbmV1cmluJywgJ0JldmVsLCBLZW4nLCAnQmlkZW4sIEpvc2VwaCcsICdCaWVyY2UsIEFtYnJvc2UnLCAnQmlrbywgU3RldmUnLCAnQmlsbGluZ3MsIEpvc2gnLCAnQmlvbmRvLCBGcmFuaycsICdCaXJyZWxsLCBBdWd1c3RpbmUnLCAnQmxhY2ssIEVsaycsICdCbGFpciwgUm9iZXJ0JywgJ0JsYWlyLCBUb255JywgJ0JsYWtlLCBXaWxsaWFtJ107XG5cbi8vIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoKVxuLy8gMS4gRmlsdGVyIHRoZSBsaXN0IG9mIGludmVudG9ycyBmb3IgdGhvc2Ugd2hvIHdlcmUgYm9ybiBpbiB0aGUgMTUwMCdzXG5cblx0Ly8gY29uc3QgYm9ybjE1MDBzID0gaW52ZW50b3JzLmZpbHRlcihpbnZlbnRvciA9PiAoaW52ZW50b3IueWVhciA+PSAxNTAwICYmIGludmVudG9yLnllYXIgPCAxNjAwKSk7XG5cdC8vIGNvbnNvbGUudGFibGUoYm9ybjE1MDBzKTtcblxuXG4vLyBBcnJheS5wcm90b3R5cGUubWFwKClcbi8vIDIuIEdpdmUgdXMgYW4gYXJyYXkgb2YgdGhlIGludmVudG9ycycgZmlyc3QgYW5kIGxhc3QgbmFtZXNcblxuXHQvLyBjb25zdCBpbnZlbnRvck5hbWVzID0gaW52ZW50b3JzLm1hcChpbnZlbnRvciA9PiBgJHtpbnZlbnRvci5maXJzdH0gJHtpbnZlbnRvci5sYXN0fWApO1xuXHQvLyBjb25zb2xlLmxvZyhpbnZlbnRvck5hbWVzKTtcblxuLy8gQXJyYXkucHJvdG90eXBlLnNvcnQoKVxuLy8gMy4gU29ydCB0aGUgaW52ZW50b3JzIGJ5IGJpcnRoZGF0ZSwgb2xkZXN0IHRvIHlvdW5nZXN0XG5cblx0Ly8gY29uc3QgaW52ZW50b3JzQnlBZ2VEZXNjID0gaW52ZW50b3JzLnNvcnQoKGEsIGIpID0+IGEueWVhciA+IGIueWVhciA/IDEgOiAtMSk7XG5cblx0Ly8gY29uc29sZS50YWJsZShpbnZlbnRvcnNCeUFnZURlc2MpO1xuXG4vLyBBcnJheS5wcm90b3R5cGUucmVkdWNlKClcbi8vIDQuIEhvdyBtYW55IHllYXJzIGRpZCBhbGwgdGhlIGludmVudG9ycyBsaXZlP1xuXG5cblx0Ly8gY29uc3QgdG90YWxZZWFycyA9IGludmVudG9ycy5yZWR1Y2UoKHRvdGFsLCBpbnZlbnRvcikgPT57XG5cdC8vIFx0cmV0dXJuIHRvdGFsICsgKGludmVudG9yLnBhc3NlZCAtIGludmVudG9yLnllYXIpXG5cdC8vIH0sIDApO1xuXG5cdC8vIGNvbnNvbGUubG9nKHRvdGFsWWVhcnMpO1xuXG4vLyA1LiBTb3J0IHRoZSBpbnZlbnRvcnMgYnkgeWVhcnMgbGl2ZWRcblxuXHQvLyBjb25zdCBpbnZlbnRvcnNCeVllYXJzTGl2ZWQgPSBpbnZlbnRvcnMuc29ydChmdW5jdGlvbihhLCBiKXtcblx0Ly8gXHRjb25zdCBmaXJzdFBlcnNvbiA9IGEucGFzc2VkIC0gYS55ZWFyO1xuXHQvLyBcdGNvbnN0IHNlY29uZFBlcnNvbiA9IGIucGFzc2VkIC0gYi55ZWFyO1xuXG5cdC8vIFx0cmV0dXJuIGZpcnN0UGVyc29uID4gc2Vjb25kUGVyc29uID8gLTEgOiAxO1xuXHQvLyB9KTtcblxuXHQvLyBjb25zb2xlLnRhYmxlKGludmVudG9yc0J5WWVhcnNMaXZlZCk7XG5cblxuXG4vLyA2LiBjcmVhdGUgYSBsaXN0IG9mIEJvdWxldmFyZHMgaW4gUGFyaXMgdGhhdCBjb250YWluICdkZScgYW55d2hlcmUgaW4gdGhlIG5hbWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhdGVnb3J5OkJvdWxldmFyZHNfaW5fUGFyaXNcblxuXHQvLyBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdy1jYXRlZ29yeScpO1xuXHQvLyBjb25zdCBsaW5rcyA9IEFycmF5LmZyb20oY2F0ZWdvcnkucXVlcnlTZWxlY3RvckFsbCgnYScpKTtcblxuXHQvLyBjb25zdCBkZSA9IGxpbmtzXG5cdC8vIFx0XHRcdFx0Lm1hcChsaW5rID0+IGxpbmsudGV4dENvbnRlbnQpXG5cdC8vIFx0XHRcdFx0LmZpbHRlcihzdHJlZXROYW1lID0+IHN0cmVldE5hbWUuaW5jbHVkZXMoJ2RlJykpO1xuXG5cbi8vIDcuIHNvcnQgRXhlcmNpc2Vcbi8vIFNvcnQgdGhlIHBlb3BsZSBhbHBoYWJldGljYWxseSBieSBsYXN0IG5hbWVcblxuXHQvLyBjb25zdCBwZW9wbGVCeU5hbWUgPSBwZW9wbGUuc29ydChmdW5jdGlvbihsYXN0UGVyc29uLCBuZXh0UGVyc29uKXtcblx0Ly8gXHRjb25zdCBbYUxhc3QsIGFGaXJzdF0gPSBsYXN0UGVyc29uLnNwbGl0KFwiLFwiKTtcblx0Ly8gXHRjb25zdCBbYkxhc3QsIGJGaXJzdF0gPSBuZXh0UGVyc29uLnNwbGl0KFwiLFwiKTtcblxuXHQvLyBcdHJldHVybiBhTGFzdCA+IGJMYXN0ID8gMTogLTE7XG5cdC8vIH0pO1xuXG5cdC8vIGNvbnNvbGUubG9nKHBlb3BsZUJ5TmFtZSk7XG5cbi8vIDguIFJlZHVjZSBFeGVyY2lzZVxuLy8gU3VtIHVwIHRoZSBpbnN0YW5jZXMgb2YgZWFjaCBvZiB0aGVzZVxuXHQvLyBjb25zdCBkYXRhID0gWydjYXInLCAnY2FyJywgJ3RydWNrJywgJ3RydWNrJywgJ2Jpa2UnLCAnd2FsaycsICdjYXInLCAndmFuJywgJ2Jpa2UnLCAnd2FsaycsICdjYXInLCAndmFuJywgJ2NhcicsICd0cnVjaycgXTtcblxuXHQvLyBjb25zdCB0cmFuc3BvcnRUb3RhbHMgPSBkYXRhLnJlZHVjZShmdW5jdGlvbihvYmosIGl0ZW0pe1xuXG5cdC8vIFx0aWYgKCAhb2JqW2l0ZW1dICkge1xuXHQvLyBcdFx0b2JqW2l0ZW1dID0gMDtcblx0Ly8gXHR9XG5cblx0Ly8gXHRvYmpbaXRlbV0rKztcblxuXHQvLyBcdHJldHVybiBvYmo7XG5cblx0Ly8gfSwge30pO1xuXG5cdC8vIGNvbnNvbGUubG9nKHRyYW5zcG9ydFRvdGFscyk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vLS01LjAgLSBGbGV4IEdhbGxlcnktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblx0Ly8gY29uc3QgcGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJyk7XG5cblx0Ly8gZnVuY3Rpb24gdG9nZ2xlT3BlbigpIHtcblx0Ly8gICBjb25zb2xlLmxvZygnSGVsbG8nKTtcblx0Ly8gICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcblx0Ly8gfVxuXG5cdC8vIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShlKSB7XG5cdC8vICAgY29uc29sZS5sb2coZS5wcm9wZXJ0eU5hbWUpO1xuXHQvLyAgIGlmIChlLnByb3BlcnR5TmFtZS5pbmNsdWRlcygnZmxleCcpKSB7XG5cdC8vICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tYWN0aXZlJyk7XG5cdC8vICAgfVxuXHQvLyB9XG5cblx0Ly8gcGFuZWxzLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVPcGVuKSk7XG5cdC8vIHBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0b2dnbGVBY3RpdmUpKTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8tLTUuMCAtIFR5cGUgQWhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NaXNlcmxvdS9jNWNkODM2NGJmOWIyNDIwYmIyOS9yYXcvMmJmMjU4NzYzY2RkZGQ3MDRmOGZmZDNlYTlhM2U4MWQyNWUyYzZmNi9jaXRpZXMuanNvbic7XG5cbmNvbnN0IGNpdGllcyA9IFtdO1xuXG5mZXRjaChlbmRwb2ludClcbiAgLnRoZW4oYmxvYiA9PiBibG9iLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiBjaXRpZXMucHVzaCguLi5kYXRhKSk7XG5cbmNvbnNvbGUubG9nKGNpdGllcyk7XG5cbmZ1bmN0aW9uIGZpbmRNYXRjaGVzKHdvcmRUb01hdGNoLCBjaXRpZXMpIHtcblx0cmV0dXJuIGNpdGllcy5maWx0ZXIocGxhY2UgPT4ge1xuXG5cdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHdvcmRUb01hdGNoLCAnZ2knKTtcblx0XHRyZXR1cm4gcGxhY2UuY2l0eS5tYXRjaChyZWdleCkgfHwgcGxhY2Uuc3RhdGUubWF0Y2gocmVnZXgpO1xuXG5cdH0pO1xufTtcblxuZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyh4KSB7XG4gIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1hdGNoZXMoKSB7XG4gIGNvbnN0IG1hdGNoQXJyYXkgPSBmaW5kTWF0Y2hlcyh0aGlzLnZhbHVlLCBjaXRpZXMpO1xuICBjb25zdCBodG1sID0gbWF0Y2hBcnJheS5tYXAocGxhY2UgPT4ge1xuXG4gIFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHRoaXMudmFsdWUsICdnaScpO1xuICBcdGNvbnN0IGNpdHlOYW1lID0gcGxhY2UuY2l0eS5yZXBsYWNlKHJlZ2V4LCBgPHNwYW4gY2xhc3M9XCJobFwiPiR7dGhpcy52YWx1ZX08L3NwYW4+YCk7XG4gIFx0Y29uc3Qgc3RhdGVOYW1lID0gcGxhY2Uuc3RhdGUucmVwbGFjZShyZWdleCwgYDxzcGFuIGNsYXNzPVwiaGxcIj4ke3RoaXMudmFsdWV9PC9zcGFuPmApO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgIDxsaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtjaXR5TmFtZX0sICR7c3RhdGVOYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1bGF0aW9uXCI+JHtudW1iZXJXaXRoQ29tbWFzKHBsYWNlLnBvcHVsYXRpb24pfTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgYDtcbiAgfSkuam9pbignJyk7XG4gIHN1Z2dlc3Rpb25zLmlubmVySFRNTCA9IGh0bWw7XG59XG5cbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xuY29uc3Qgc3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VnZ2VzdGlvbnMnKTtcblxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGlzcGxheU1hdGNoZXMpO1xuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkaXNwbGF5TWF0Y2hlcyk7XG5cblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4iXX0=
