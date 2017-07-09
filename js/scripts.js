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

var whackMole = exports.whackMole = function () {
	function whackMole() {
		var _this = this;

		_classCallCheck(this, whackMole);

		this.holes = document.querySelectorAll('.hole');
		this.scoreBoard = document.querySelector('.score');
		this.moles = document.querySelectorAll('.mole');
		this.button = document.querySelector('button');

		this.button.addEventListener('click', this.startGame.bind(this));
		this.moles.forEach(function (mole) {
			return mole.addEventListener('click', _this.bonk.bind(_this));
		});

		var lastHole = void 0;
		var timeUp = false;
		var score = 0;
	}

	_createClass(whackMole, [{
		key: 'randomTime',
		value: function randomTime(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		}
	}, {
		key: 'randomHole',
		value: function randomHole(holes) {

			var idx = Math.floor(Math.random() * holes.length);
			var hole = holes[idx];

			if (hole === this.lastHole) {
				return this.randomHole(holes);
			}

			this.lastHole = hole;
			return hole;
		}
	}, {
		key: 'peep',
		value: function peep() {
			var _this2 = this;

			var time = this.randomTime(200, 1000);
			var hole = this.randomHole(this.holes);

			hole.classList.add('up');
			setTimeout(function () {
				hole.classList.remove('.up');
				if (!_this2.timeUp) _this2.peep();
			}, time);
		}
	}, {
		key: 'startGame',
		value: function startGame() {
			var _this3 = this;

			this.scoreBoard.textContent = 0;
			this.timeUp = false;
			this.score = 0;
			this.peep();
			setTimeout(function () {
				return _this3.timeUp = true;
			}, 10000);
		}
	}, {
		key: 'bonk',
		value: function bonk(e) {
			if (!e.isTrusted) return;
			this.score++;
			e.target.classList.remove('up');
			this.scoreBoard.textContent = this.score;
		}
	}]);

	return whackMole;
}();

var whackmole = exports.whackmole = new whackMole();

},{}],2:[function(require,module,exports){
"use strict";

var _whackMole = require("./modules/whack-mole.js");

},{"./modules/whack-mole.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy93aGFjay1tb2xlLmpzIiwic3JjL2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUNBYSxvQixBQUFBLHdCQUVaO3NCQUFjO2NBQUE7O3dCQUViOztPQUFBLEFBQUssUUFBUSxTQUFBLEFBQVMsaUJBQXRCLEFBQWEsQUFBMEIsQUFDdkM7T0FBQSxBQUFLLGFBQWEsU0FBQSxBQUFTLGNBQTNCLEFBQWtCLEFBQXVCLEFBQ3pDO09BQUEsQUFBSyxRQUFRLFNBQUEsQUFBUyxpQkFBdEIsQUFBYSxBQUEwQixBQUN2QztPQUFBLEFBQUssU0FBUyxTQUFBLEFBQVMsY0FBdkIsQUFBYyxBQUF1QixBQUVyQzs7T0FBQSxBQUFLLE9BQUwsQUFBWSxpQkFBWixBQUE2QixTQUFTLEtBQUEsQUFBSyxVQUFMLEFBQWUsS0FBckQsQUFBc0MsQUFBb0IsQUFDMUQ7T0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLGdCQUFBO1VBQVEsS0FBQSxBQUFLLGlCQUFMLEFBQXNCLFNBQVMsTUFBQSxBQUFLLEtBQUwsQUFBVSxLQUFqRCxBQUFRO0FBQTNCLEFBRUE7O01BQUksZ0JBQUosQUFDQTtNQUFJLFNBQUosQUFBYSxBQUNiO01BQUksUUFBSixBQUFZLEFBQ1o7Ozs7OzZCLEFBRVUsSyxBQUFLLEtBQUssQUFDcEI7VUFBTyxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssWUFBWSxNQUFqQixBQUF1QixPQUF6QyxBQUFPLEFBQXlDLEFBQ2hEOzs7OzZCLEFBRVUsT0FBTyxBQUVqQjs7T0FBTSxNQUFNLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUFXLE1BQXZDLEFBQVksQUFBaUMsQUFDN0M7T0FBTSxPQUFPLE1BQWIsQUFBYSxBQUFNLEFBR25COztPQUFJLFNBQVMsS0FBYixBQUFrQixVQUFVLEFBQzNCO1dBQU8sS0FBQSxBQUFLLFdBQVosQUFBTyxBQUFnQixBQUN2QjtBQUVEOztRQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjtVQUFBLEFBQU8sQUFFUDs7Ozt5QkFFTztnQkFFUDs7T0FBTSxPQUFPLEtBQUEsQUFBSyxXQUFMLEFBQWdCLEtBQTdCLEFBQWEsQUFBcUIsQUFDbEM7T0FBTSxPQUFPLEtBQUEsQUFBSyxXQUFXLEtBQTdCLEFBQWEsQUFBcUIsQUFFbEM7O1FBQUEsQUFBSyxVQUFMLEFBQWUsSUFBZixBQUFtQixBQUNuQjtjQUFXLFlBQUksQUFDZDtTQUFBLEFBQUssVUFBTCxBQUFlLE9BQWYsQUFBc0IsQUFDdEI7UUFBSSxDQUFDLE9BQUwsQUFBVSxRQUFRLE9BQUEsQUFBSyxBQUN2QjtBQUhELE1BQUEsQUFHRyxBQUNIOzs7OzhCQUVZO2dCQUNaOztRQUFBLEFBQUssV0FBTCxBQUFnQixjQUFoQixBQUE4QixBQUM5QjtRQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7UUFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO1FBQUEsQUFBSyxBQUNMO2NBQVcsWUFBQTtXQUFLLE9BQUEsQUFBSyxTQUFWLEFBQW1CO0FBQTlCLE1BQUEsQUFBb0MsQUFDcEM7Ozs7dUIsQUFFSyxHQUFFLEFBQ1A7T0FBSSxDQUFDLEVBQUwsQUFBTyxXQUFXLEFBQ2xCO1FBQUEsQUFBSyxBQUNMO0tBQUEsQUFBRSxPQUFGLEFBQVMsVUFBVCxBQUFtQixPQUFuQixBQUEwQixBQUMxQjtRQUFBLEFBQUssV0FBTCxBQUFnQixjQUFjLEtBQTlCLEFBQW1DLEFBRW5DOzs7Ozs7O0FBSUssSUFBSSxnQ0FBWSxJQUFoQixBQUFnQixBQUFJOzs7OztBQ2hDM0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIHdoYWNrTW9sZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLmhvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbGUnKTtcblx0XHR0aGlzLnNjb3JlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcblx0XHR0aGlzLm1vbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vbGUnKTtcblx0XHR0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG5cdFx0dGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm1vbGVzLmZvckVhY2gobW9sZSA9PiBtb2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib25rLmJpbmQodGhpcykpKTtcblxuXHRcdGxldCBsYXN0SG9sZTtcblx0XHRsZXQgdGltZVVwID0gZmFsc2U7XG5cdFx0bGV0IHNjb3JlID0gMDtcblx0fVxuXG5cdHJhbmRvbVRpbWUobWluLCBtYXgpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuXHR9XG5cblx0cmFuZG9tSG9sZShob2xlcykge1xuXG5cdFx0Y29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaG9sZXMubGVuZ3RoKTtcblx0XHRjb25zdCBob2xlID0gaG9sZXNbaWR4XTtcblxuXG5cdFx0aWYgKGhvbGUgPT09IHRoaXMubGFzdEhvbGUpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhbmRvbUhvbGUoaG9sZXMpO1xuXHRcdH1cblxuXHRcdHRoaXMubGFzdEhvbGUgPSBob2xlO1xuXHRcdHJldHVybiBob2xlO1xuXG5cdH1cblxuXHRwZWVwICgpIHtcblxuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLnJhbmRvbVRpbWUoMjAwLCAxMDAwKTtcblx0XHRjb25zdCBob2xlID0gdGhpcy5yYW5kb21Ib2xlKHRoaXMuaG9sZXMpO1xuXG5cdFx0aG9sZS5jbGFzc0xpc3QuYWRkKCd1cCcpO1xuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdGhvbGUuY2xhc3NMaXN0LnJlbW92ZSgnLnVwJyk7XG5cdFx0XHRpZiAoIXRoaXMudGltZVVwKSB0aGlzLnBlZXAoKTtcblx0XHR9LCB0aW1lKTtcblx0fVxuXG5cdHN0YXJ0R2FtZSAoKSB7XG5cdFx0dGhpcy5zY29yZUJvYXJkLnRleHRDb250ZW50ID0gMDtcblx0XHR0aGlzLnRpbWVVcCA9IGZhbHNlO1xuXHRcdHRoaXMuc2NvcmUgPSAwO1xuXHRcdHRoaXMucGVlcCgpO1xuXHRcdHNldFRpbWVvdXQoKCk9PiB0aGlzLnRpbWVVcCA9IHRydWUsIDEwMDAwKTtcblx0fVxuXG5cdGJvbmsgKGUpe1xuXHRcdGlmICghZS5pc1RydXN0ZWQpIHJldHVybjtcblx0XHR0aGlzLnNjb3JlKys7XG5cdFx0ZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTtcblx0XHR0aGlzLnNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSB0aGlzLnNjb3JlO1xuXG5cdH1cblxufVxuXG5leHBvcnQgbGV0IHdoYWNrbW9sZSA9IG5ldyB3aGFja01vbGUoKTsiLCIvLyBtYWluLmpzXG5cblxuLy9pbXBvcnQgeyBkcnVta2l0IH0gZnJvbSBcIi4vbW9kdWxlcy9kcnVtLWtpdC5qc1wiO1xuXG4vL2ltcG9ydCB7IGN1c3RvbXZpZGVvIH0gZnJvbSBcIi4vbW9kdWxlcy9jdXN0b20tdmlkZW8uanNcIjtcblxuLy9pbXBvcnQgeyBzbGlkZW9uc2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9zbGlkZS1vbi1zY3JvbGwuanNcIjtcblxuLy9pbXBvcnQgeyBtb3VzZXNoYWRvdyB9IGZyb20gXCIuL21vZHVsZXMvbW91c2Utc2hhZG93LmpzXCI7XG5cbi8vaW1wb3J0IHsgd2ViY2FtIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWJjYW0uanNcIjtcblxuLy9pbXBvcnQgeyBzcGVlY2hyZWNvZ25pdGlvbiB9IGZyb20gXCIuL21vZHVsZXMvc3BlZWNoLXJlY29nbml0aW9uLmpzXCI7XG5cbi8vaW1wb3J0IHsgZ2VvbG9jYXRpb24gfSBmcm9tIFwiLi9tb2R1bGVzL2dlb2xvY2F0aW9uLmpzXCI7XG5cblxuLy9pbXBvcnQgeyBmb2xsb3cgfSBmcm9tIFwiLi9tb2R1bGVzL2ZvbGxvdy1hbG9uZy5qc1wiO1xuXG4vL2ltcG9ydCB7IHNwZWVjaCB9IGZyb20gXCIuL21vZHVsZXMvc3BlZWNoLXN5bnRoZXNpcy5qc1wiO1xuXG4vL2ltcG9ydCB7IHN0aWNreSB9IGZyb20gXCIuL21vZHVsZXMvc3RpY2t5LW5hdi5qc1wiO1xuXG4vL2ltcG9ydCB7IGV2ZW50Y2FwdHVyZSB9IGZyb20gXCIuL21vZHVsZXMvZXZlbnQtY2FwdHVyZS5qc1wiO1xuXG4vL2ltcG9ydCB7IGZvbGxvd2Ryb3Bkb3duIH0gZnJvbSBcIi4vbW9kdWxlcy9mb2xsb3ctZHJvcGRvd24uanNcIjtcblxuLy9pbXBvcnQgeyBkcmFnc2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9kcmFnLXNjcm9sbC5qc1wiO1xuXG4vL2ltcG9ydCB7IGRyYWdzY3JvbGwgfSBmcm9tIFwiLi9tb2R1bGVzL3ZpZGVvLXNwZWVkLmpzXCI7XG5cbi8vaW1wb3J0IHsgY291bnRkb3duIH0gZnJvbSBcIi4vbW9kdWxlcy9jb3VudC1kb3duLmpzXCI7XG5cbmltcG9ydCB7IHdoYWNrbW9sZSB9IGZyb20gXCIuL21vZHVsZXMvd2hhY2stbW9sZS5qc1wiOyJdfQ==
