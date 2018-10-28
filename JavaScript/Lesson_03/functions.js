// task 1
function getName () {

	var person = prompt("Please enter your name");

	if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hi " + person + "! How are you today?";
	}
};

var obj = {
	sayHi: function getName () {
	}
};
obj.sayHi();

// this.name = promot || this[name] = prompt

// task 2
function sumTo(n) {
  return n ? n + sumTo(n - 1) : 0;
}
console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));

// task 3
function min(a,b) {
	if (a<b) {
		return a;
	} else if (a>b) {
		return b;
	} else {
		return 'Numbers are equal';
	}
}
console.log(min(7,5));

// task 4
var obj = {};

Object.defineProperty(obj, "number", {
	value: 9,
	enumerable: false,
	configurable: true,
	writable: true
});
for(var key in obj){
	console.log(key);
}

Object.defineProperty(obj, "cantDelete", {
	enumerable: true,
	configurable: false,
	writable: true,
	value: ""
});
console.log(delete obj.cantDelete);

Object.defineProperty(obj, "getDouble", {
	get: function(arg) {return arg/3;},
	set: function(arg) {return arg*2;},
	enumerable: true,
  	configurable: true
});
console.log(obj);

// task 5
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function compareAge(personA, personB) {
  return personA.age - personB.age;
}
people.sort(compareAge);

console.log(people[0].age);


// task 6
function unique(arr) {
  var result = [];

  nextItem:
    for (i = 0; i < arr.length; i++) {
      var str = arr[i]; 
      for (var k = 0; k < result.length; k++) { 
        if (result[k] == str) continue nextItem; 
      }
      result.push(str);
    }
  return result;
}

var strings = ['qwerty', 'qwerty', 'jkl', 'fdsa', 'fdsa', 'jkl'];
console.log(unique(strings));

