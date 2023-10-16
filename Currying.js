//? It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.

function calculateVolume1(length, breadth, height) {
	return length * breadth * height;
}
console.log(calculateVolume1(4, 5, 6));

function calculateVolume2(length) {
	return function (breadth) {
		return function (height) {
			return length * breadth * height;
		}
	}
}
console.log(calculateVolume2(4)(5)(6));
