// task 1

var a = 10,
	b = 3,
	res = 0;
res = a % b;
console.log(res);

// task 2

a = 12,
b = 2,
res = 0;

if (a / b === a % b) {
	res = a / b;
	console.log("Делится " + res);
} else {
	res = a % b;
	console.log("Делится с остатком " + res);
}

// task 3

function difference(a, b) {
  return Math.abs(a - b);
}
console.log(difference(10, 6));

// task 4
function square(a) {
	return Math.sqrt(a);
}
console.log(Math.floor(square(379)));
console.log(square(379).toFixed(1));
console.log(square(379).toFixed(2));

// task 5
console.log(Math.floor(Math.random() * 100) + 1  );

// task 6
// x^2 + 4x + 9 = 0
var D = 0,
	x = 0,
	x1 = 0,
	x2 = 0;
function discriminant(a, b, c) {
	D = (Math.pow(b,2)) - 4*a*c;

	if (D > 0) {
		x1 = ( (-b + Math.sqrt(D)) / (2 * a) );
		x2 = ( (-b - Math.sqrt(D)) / (2 * a) );
		return x1, x2;
	} else if (D === 0) {
		return x = ( (-b + Math.sqrt(D)) / (2 * a) );
	} else {
		return 'Equation has no roots';
	}
}
console.log(discriminant(1, -8, 12));

// task 7
var n = 90;

if (isFinite(n / 1) && isFinite(n / n)) {
	console.log(true);
} else {
	console.log(false);
}

// task 8

for (var i = 1; i <= 1000; i++) {
	if (isFinite(i / 1) && isFinite(i / n)) {
		console.log(true);
	} else {
		console.log(false);
	}
}

// task 9

function makeString() {
  var item = "";
  var possible = "0123456789";

  for (i = 0; i < 10; i++)
    item += possible.charAt(Math.floor(Math.random() * possible.length));

  return item;
}
console.log(makeString());

// task 10

var date = new Date();

console.log(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate());

// task 11
var	date = new Date(),
	month = date.getMonth(),
	months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
console.log(months[month]);

// task 12

var date = new Date();

function getNull(n){
	if (n > 0 && n < 10) { 
		return '0' + n;
	} else {
		return n;
	}
}

console.log(getNull(date.getHours()) + ":" + getNull(date.getMinutes()) + ":" + getNull(date.getSeconds()) + " " + getNull(date.getDate()) + "." + getNull((date.getMonth()+1)) + "." + date.getFullYear());

// task 13
// день 7-го января 2015 года
var date = new Date(2015, 0, 7),
	day = date.getDay();
function getDay(day) {
	var days = ['Sunday', 'Monday', 'Tuersday', 'Wednesday', 'Thursday', 'Friday', 'Suterday'];
	return days[day];
}

console.log(getDay(day));

// task 14
// c 1-го января 1970 года
var date = new Date();
var minutes = Math.floor(date.getTime() / (1000 * 60));
console.log(minutes);

// task 15

var sec = 1000000,
	min = Math.floor(sec / 60),
	hours = Math.floor(min / 60),
	days = (hours / 24);
console.log(days + ' days, ' + hours + ' hours, ' + minutes + ' min');
















