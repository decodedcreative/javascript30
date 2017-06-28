(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var geoLocation = exports.geoLocation = function geoLocation() {
	_classCallCheck(this, geoLocation);

	var arrow = document.querySelector('.arrow');
	var speed = document.querySelector('.speed-value');

	navigator.geolocation.watchPosition(function (data) {
		//console.log(data);
		speed.textContent = data.coords.speed;
		arrow.style.transform = 'rotate(' + data.coords.heading + 'deg)';
	}, function (err) {
		console.error(err);
	});
};

var geolocation = exports.geolocation = new geoLocation();

},{}],2:[function(require,module,exports){
"use strict";

var _geolocation = require("./modules/geolocation.js");

},{"./modules/geolocation.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9nZW9sb2NhdGlvbi5qcyIsInNyYy9qcy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0ksQUNBYSxzQixBQUFBLGNBRVosdUJBQWM7dUJBRWI7O0tBQU0sUUFBUSxTQUFBLEFBQVMsY0FBdkIsQUFBYyxBQUF1QixBQUNyQztLQUFNLFFBQVEsU0FBQSxBQUFTLGNBQXZCLEFBQWMsQUFBdUIsQUFFckM7O1dBQUEsQUFBVSxZQUFWLEFBQXNCLGNBQWMsVUFBQSxBQUFDLE1BQVMsQUFDN0M7QUFDQTtRQUFBLEFBQU0sY0FBYyxLQUFBLEFBQUssT0FBekIsQUFBZ0MsQUFDaEM7UUFBQSxBQUFNLE1BQU4sQUFBWSx3QkFBc0IsS0FBQSxBQUFLLE9BQXZDLEFBQThDLFVBQzlDO0FBSkQsSUFJRyxVQUFBLEFBQUMsS0FBTSxBQUNUO1VBQUEsQUFBUSxNQUFSLEFBQWMsQUFDZDtBQU5ELEFBUUE7QTs7QUFLSyxJQUFJLG9DQUFjLElBQWxCLEFBQWtCLEFBQUk7Ozs7O0FDTDdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBjbGFzcyBnZW9Mb2NhdGlvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRjb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpO1xuXHRcdGNvbnN0IHNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWVkLXZhbHVlJyk7XG5cblx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbigoZGF0YSkgPT4ge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdHNwZWVkLnRleHRDb250ZW50ID0gZGF0YS5jb29yZHMuc3BlZWQ7XG5cdFx0XHRhcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGF0YS5jb29yZHMuaGVhZGluZ31kZWcpYDtcblx0XHR9LCAoZXJyKT0+e1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdH0pO1xuXG5cdH1cblxuXG59XG5cbmV4cG9ydCBsZXQgZ2VvbG9jYXRpb24gPSBuZXcgZ2VvTG9jYXRpb24oKTsiLCIvLyBtYWluLmpzXG5cblxuLy9pbXBvcnQgeyBkcnVta2l0IH0gZnJvbSBcIi4vbW9kdWxlcy9kcnVtLWtpdC5qc1wiO1xuXG4vL2ltcG9ydCB7IGN1c3RvbXZpZGVvIH0gZnJvbSBcIi4vbW9kdWxlcy9jdXN0b20tdmlkZW8uanNcIjtcblxuLy9pbXBvcnQgeyBzbGlkZW9uc2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9zbGlkZS1vbi1zY3JvbGwuanNcIjtcblxuLy9pbXBvcnQgeyBtb3VzZXNoYWRvdyB9IGZyb20gXCIuL21vZHVsZXMvbW91c2Utc2hhZG93LmpzXCI7XG5cbi8vaW1wb3J0IHsgd2ViY2FtIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWJjYW0uanNcIjtcblxuLy9pbXBvcnQgeyBzcGVlY2hyZWNvZ25pdGlvbiB9IGZyb20gXCIuL21vZHVsZXMvc3BlZWNoLXJlY29nbml0aW9uLmpzXCI7XG5cbmltcG9ydCB7IGdlb2xvY2F0aW9uIH0gZnJvbSBcIi4vbW9kdWxlcy9nZW9sb2NhdGlvbi5qc1wiO1xuXG5cbiJdfQ==
