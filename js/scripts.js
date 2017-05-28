(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var Clock = exports.Clock = function () {
	function Clock() {
		_classCallCheck(this, Clock);

		var secondHand = document.querySelector('.second-hand');
		var minsHand = document.querySelector('.min-hand');
		var hourHand = document.querySelector('.hour-hand');

		setInterval(this.setDate, 1000);
		this.setDate();
	}

	_createClass(Clock, [{
		key: 'setDate',
		value: function setDate() {
			var now = new Date();
			var seconds = now.getSeconds();
			var secondsDegrees = seconds / 60 * 360 + 90;
			var mins = now.getMinutes();
			var minsDegrees = mins / 60 * 360 + seconds / 60 * 6 + 90;
			var hour = now.getHours();
			var hourDegrees = hour / 12 * 360 + mins / 60 * 30 + 90;

			//Remove transition if last second
			if (seconds === 59) {
				this.secondHand.classList.add("hand-noanimation");
				this.minHand.classList.add("hand-noanimation");
				this.hourHand.classList.add("hand-noanimation");
			}
			//Add animation after second 1'
			if (seconds === 1) {
				this.secondHand.classList.remove("hand-noanimation");
				this.minHand.classList.remove("hand-noanimation");
				this.hourHand.classList.remove("hand-noanimation");
			}

			this.secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';

			this.minsHand.style.transform = 'rotate(' + minsDegrees + 'deg)';

			this.hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
		}
	}]);

	return Clock;
}();

var clock = exports.clock = new Clock();

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var DrumKit = exports.DrumKit = function () {
	function DrumKit() {
		var _this = this;

		_classCallCheck(this, DrumKit);

		var keys = document.querySelectorAll(".key");
		keys.forEach(function (key) {
			return key.addEventListener("transitionend", _this.removeTransition);
		});
		window.addEventListener("keydown", this.playSound);
	}

	_createClass(DrumKit, [{
		key: "removeTransition",
		value: function removeTransition(e) {
			if (e.propertyName !== 'transform') return;
			e.target.classList.remove('playing');
		}
	}, {
		key: "playSound",
		value: function playSound(e) {
			var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
			var key = document.querySelector(".key[data-key=\"" + e.keyCode + "\"]");

			if (!audio) {
				return;
			}

			audio.currentTime = 0;
			audio.play();
			key.classList.add("playing");
		}
	}]);

	return DrumKit;
}();

var drumkit = exports.drumkit = new DrumKit();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;

var _drumKit = require("./modules/drum-kit.js");

var _clock = require("./modules/clock.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
} // main.js


var Main = exports.Main = function Main() {
  _classCallCheck(this, Main);
};

document.addEventListener("DOMContentLoaded", function (e) {
  return new Main();
});

},{"./modules/clock.js":1,"./modules/drum-kit.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9jbG9jay5qcyIsInNyYy9qcy9tb2R1bGVzL2RydW0ta2l0LmpzIiwic3JjL2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUNBYSxnQixBQUFBLG9CQUVaO2tCQUFjO3dCQUNiOztNQUFNLGFBQWEsU0FBQSxBQUFTLGNBQTVCLEFBQW1CLEFBQXVCLEFBQzFDO01BQU0sV0FBVyxTQUFBLEFBQVMsY0FBMUIsQUFBaUIsQUFBdUIsQUFDeEM7TUFBTSxXQUFXLFNBQUEsQUFBUyxjQUExQixBQUFpQixBQUF1QixBQUV4Qzs7Y0FBWSxLQUFaLEFBQWlCLFNBQWpCLEFBQTBCLEFBQzFCO09BQUEsQUFBSyxBQUNMOzs7Ozs0QkFFUyxBQUNUO09BQU0sTUFBTSxJQUFaLEFBQVksQUFBSSxBQUNoQjtPQUFNLFVBQVUsSUFBaEIsQUFBZ0IsQUFBSSxBQUNwQjtPQUFNLGlCQUFtQixVQUFELEFBQVcsS0FBWixBQUFrQixNQUF6QyxBQUFnRCxBQUNoRDtPQUFNLE9BQU8sSUFBYixBQUFhLEFBQUksQUFDakI7T0FBTSxjQUFnQixPQUFELEFBQVEsS0FBVCxBQUFlLE1BQVMsVUFBRCxBQUFTLEtBQWhDLEFBQW9DLElBQXhELEFBQTZELEFBQzdEO09BQU0sT0FBTyxJQUFiLEFBQWEsQUFBSSxBQUNqQjtPQUFNLGNBQWdCLE9BQUQsQUFBUSxLQUFULEFBQWUsTUFBUyxPQUFELEFBQU0sS0FBN0IsQUFBaUMsS0FBckQsQUFBMkQsQUFFM0Q7O0FBQ0E7T0FBSSxZQUFKLEFBQWMsSUFBSSxBQUNqQjtTQUFBLEFBQUssV0FBTCxBQUFnQixVQUFoQixBQUEwQixJQUExQixBQUE4QixBQUM5QjtTQUFBLEFBQUssUUFBTCxBQUFhLFVBQWIsQUFBdUIsSUFBdkIsQUFBMkIsQUFDM0I7U0FBQSxBQUFLLFNBQUwsQUFBYyxVQUFkLEFBQXdCLElBQXhCLEFBQTRCLEFBQzVCO0FBQ0Q7QUFDQTtPQUFJLFlBQUosQUFBYyxHQUFFLEFBQ2Y7U0FBQSxBQUFLLFdBQUwsQUFBZ0IsVUFBaEIsQUFBMEIsT0FBMUIsQUFBaUMsQUFDakM7U0FBQSxBQUFLLFFBQUwsQUFBYSxVQUFiLEFBQXVCLE9BQXZCLEFBQThCLEFBQzlCO1NBQUEsQUFBSyxTQUFMLEFBQWMsVUFBZCxBQUF3QixPQUF4QixBQUErQixBQUMvQjtBQUVEOztRQUFBLEFBQUssV0FBTCxBQUFnQixNQUFoQixBQUFzQix3QkFBdEIsQUFBNEMsaUJBRTVDOztRQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0Isd0JBQXBCLEFBQTBDLGNBRTFDOztRQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0Isd0JBQXBCLEFBQTBDLGNBQzFDOzs7Ozs7O0FBSUssSUFBSSx3QkFBUSxJQUFaLEFBQVksQUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFDMUNWLGtCLEFBQUEsc0JBRVo7b0JBQWM7Y0FBQTs7d0JBQ2I7O01BQU0sT0FBTyxTQUFBLEFBQVMsaUJBQXRCLEFBQWEsQUFBMEIsQUFDdkM7T0FBQSxBQUFLLFFBQVEsZUFBQTtVQUFPLElBQUEsQUFBSSxpQkFBSixBQUFxQixpQkFBaUIsTUFBN0MsQUFBTyxBQUEyQztBQUEvRCxBQUNBO1NBQUEsQUFBTyxpQkFBUCxBQUF3QixXQUFXLEtBQW5DLEFBQXdDLEFBQ3hDOzs7OzttQyxBQUVnQixHQUFHLEFBQ25CO09BQUksRUFBQSxBQUFFLGlCQUFOLEFBQXVCLGFBQWEsQUFDcEM7S0FBQSxBQUFFLE9BQUYsQUFBUyxVQUFULEFBQW1CLE9BQW5CLEFBQTBCLEFBQzFCOzs7OzRCLEFBRVMsR0FBRyxBQUNaO09BQU0sUUFBUSxTQUFBLEFBQVMsb0NBQWlDLEVBQTFDLEFBQTRDLFVBQTFELEFBQ0E7T0FBTSxNQUFNLFNBQUEsQUFBUyxtQ0FBZ0MsRUFBekMsQUFBMkMsVUFBdkQsQUFFQTs7T0FBSyxDQUFMLEFBQU0sT0FBTyxBQUNaO0FBQ0E7QUFFRDs7U0FBQSxBQUFNLGNBQU4sQUFBb0IsQUFDcEI7U0FBQSxBQUFNLEFBQ047T0FBQSxBQUFJLFVBQUosQUFBYyxJQUFkLEFBQWtCLEFBQ2xCOzs7Ozs7O0FBSUssSUFBSSw0QkFBVSxJQUFkLEFBQWMsQUFBSTs7Ozs7Ozs7OztBQzNCekI7O0FBQ0E7Ozs7OztFQUZBOzs7SSxBQUlhLGUsQUFBQSxPQUNYLGdCQUFjO3dCQUViO0E7O0FBSUgsU0FBQSxBQUFTLGlCQUFULEFBQTBCLG9CQUFvQixVQUFBLEFBQUMsR0FBRDtTQUFPLElBQVAsQUFBTyxBQUFJO0FBQXpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBjbGFzcyBDbG9jayB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Y29uc3Qgc2Vjb25kSGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtaGFuZCcpO1xuXHRcdGNvbnN0IG1pbnNIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1oYW5kJyk7XG5cdFx0Y29uc3QgaG91ckhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91ci1oYW5kJyk7XG5cdFx0XG5cdFx0c2V0SW50ZXJ2YWwodGhpcy5zZXREYXRlLCAxMDAwKTtcblx0XHR0aGlzLnNldERhdGUoKTtcblx0fVxuXG5cdHNldERhdGUoKSB7XG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBzZWNvbmRzID0gbm93LmdldFNlY29uZHMoKTtcblx0XHRjb25zdCBzZWNvbmRzRGVncmVlcyA9ICgoc2Vjb25kcyAvIDYwKSAqIDM2MCkgKyA5MDtcblx0XHRjb25zdCBtaW5zID0gbm93LmdldE1pbnV0ZXMoKTtcblx0XHRjb25zdCBtaW5zRGVncmVlcyA9ICgobWlucyAvIDYwKSAqIDM2MCkgKyAoKHNlY29uZHMvNjApKjYpICsgOTA7XG5cdFx0Y29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpO1xuXHRcdGNvbnN0IGhvdXJEZWdyZWVzID0gKChob3VyIC8gMTIpICogMzYwKSArICgobWlucy82MCkqMzApICsgOTA7XG5cblx0XHQvL1JlbW92ZSB0cmFuc2l0aW9uIGlmIGxhc3Qgc2Vjb25kXG5cdFx0aWYgKHNlY29uZHM9PT01OSkge1xuXHRcdFx0dGhpcy5zZWNvbmRIYW5kLmNsYXNzTGlzdC5hZGQoXCJoYW5kLW5vYW5pbWF0aW9uXCIpO1xuXHRcdFx0dGhpcy5taW5IYW5kLmNsYXNzTGlzdC5hZGQoXCJoYW5kLW5vYW5pbWF0aW9uXCIpO1xuXHRcdFx0dGhpcy5ob3VySGFuZC5jbGFzc0xpc3QuYWRkKFwiaGFuZC1ub2FuaW1hdGlvblwiKTtcblx0XHR9XG5cdFx0Ly9BZGQgYW5pbWF0aW9uIGFmdGVyIHNlY29uZCAxJ1xuXHRcdGlmIChzZWNvbmRzPT09MSl7XG5cdFx0XHR0aGlzLnNlY29uZEhhbmQuY2xhc3NMaXN0LnJlbW92ZShcImhhbmQtbm9hbmltYXRpb25cIik7XG5cdFx0XHR0aGlzLm1pbkhhbmQuY2xhc3NMaXN0LnJlbW92ZShcImhhbmQtbm9hbmltYXRpb25cIik7XG5cdFx0XHR0aGlzLmhvdXJIYW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJoYW5kLW5vYW5pbWF0aW9uXCIpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2Vjb25kSGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7c2Vjb25kc0RlZ3JlZXN9ZGVnKWA7XG5cblx0XHR0aGlzLm1pbnNIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHttaW5zRGVncmVlc31kZWcpYDtcblxuXHRcdHRoaXMuaG91ckhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2hvdXJEZWdyZWVzfWRlZylgO1xuXHR9XG5cbn1cblxuZXhwb3J0IGxldCBjbG9jayA9IG5ldyBDbG9jaygpOyIsImV4cG9ydCBjbGFzcyBEcnVtS2l0IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5rZXlcIik7XG5cdFx0a2V5cy5mb3JFYWNoKGtleSA9PiBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcy5yZW1vdmVUcmFuc2l0aW9uKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMucGxheVNvdW5kKTtcblx0fVxuXG5cdHJlbW92ZVRyYW5zaXRpb24oZSkge1xuXHRcdGlmIChlLnByb3BlcnR5TmFtZSAhPT0gJ3RyYW5zZm9ybScpIHJldHVybjtcblx0XHRlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG5cdH1cblxuXHRwbGF5U291bmQoZSkge1xuXHRcdGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcblx0XHRjb25zdCBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAua2V5W2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XG5cblx0XHRpZiAoICFhdWRpbyApe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcblx0XHRhdWRpby5wbGF5KCk7XG5cdFx0a2V5LmNsYXNzTGlzdC5hZGQoXCJwbGF5aW5nXCIpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGxldCBkcnVta2l0ID0gbmV3IERydW1LaXQoKTsiLCIvLyBtYWluLmpzXG5pbXBvcnQgeyBkcnVta2l0IH0gZnJvbSBcIi4vbW9kdWxlcy9kcnVtLWtpdC5qc1wiO1xuaW1wb3J0IHsgY2xvY2sgfSBmcm9tIFwiLi9tb2R1bGVzL2Nsb2NrLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChlKSA9PiBuZXcgTWFpbigpKTsiXX0=
