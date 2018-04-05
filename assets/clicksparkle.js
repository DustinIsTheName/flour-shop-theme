'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = function (_mojs$CustomShape) {
	_inherits(Star, _mojs$CustomShape);

	function Star() {
		_classCallCheck(this, Star);

		return _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).apply(this, arguments));
	}

	_createClass(Star, [{
		key: 'getShape',
		value: function getShape() {
			return '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.4 105.8"><style>.st0{fill:#F3DF06;stroke:#211E1F;stroke-width:11;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><path class="st0" d="M50.9 100.3C45.7 77.3 28.1 59.1 5.5 53c22.6-6.2 40.1-24.5 45-47.5 5.1 23 22.8 41.2 45.4 47.2-22.6 6.2-40.1 24.5-45 47.6z"/></svg>';
		}
	}]);

	return Star;
}(mojs.CustomShape);

mojs.addShape('star', Star);

var swirl1 = new mojs.ShapeSwirl({
	left: 0, top: 0,
	shape: 'star',
	duration: 'rand(600, 1200)',
	radius: 40,
	pathScale: 'rand(.5, 1.25)',
	swirlFrequency: 'rand(2,4)',
	swirlSize: 'rand(6,14)',
	degreeShift: 'rand(-15,15)'
});

var swirl2 = new mojs.ShapeSwirl({
	left: 0, top: 0,
	shape: 'star',
	duration: 'rand(600, 1200)',
	radius: 40,
	pathScale: 'rand(.5, 1.25)',
	swirlFrequency: 'rand(2,4)',
	swirlSize: 'rand(6,14)',
	degreeShift: 'rand(-15,15)',
	direction: -1
});

var swirl3 = new mojs.ShapeSwirl({
	left: 0, top: 0,
	shape: 'star',
	duration: 'rand(600, 1200)',
	radius: 40,
	pathScale: 'rand(.5, 1.25)',
	swirlFrequency: 'rand(2,4)',
	swirlSize: 'rand(6,14)',
	degreeShift: 'rand(-15,15)'
});

var swirl4 = new mojs.ShapeSwirl({
	left: 0, top: 0,
	shape: 'star',
	duration: 'rand(600, 1200)',
	radius: 40,
	pathScale: 'rand(.5, 1.25)',
	swirlFrequency: 'rand(2,4)',
	swirlSize: 'rand(6,14)',
	degreeShift: 'rand(-15,15)'
});

swirl1.el.style.zIndex = 1000;
swirl2.el.style.zIndex = 1000;
swirl3.el.style.zIndex = 1000;
swirl4.el.style.zIndex = 1000;

document.addEventListener('click', function (e) {
	var x = e.pageX,
	    y = _defineProperty({}, e.pageY, e.pageY - 150);
	swirl1.tune({ x: x, y: y }).generate().replay();

	swirl2.tune({ x: x, y: y }).generate().replay();

	swirl3.tune({ x: x, y: y }).generate().replay();

	swirl4.tune({ x: x, y: y }).generate().replay();
});