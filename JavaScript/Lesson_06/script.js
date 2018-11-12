// task 1

var animal = { };
var rabbit = { };

rabbit.__proto__ = animal;

animal.eat = function() {
    this.full = true;
};

rabbit.eat();
// запишет в rabbit, так как вызов был только rabbit.eat();


// task 2

var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

//alert( rabbit.jumps ); // true

delete rabbit.jumps;
//alert( rabbit.jumps ); // null

delete animal.jumps;
//alert( rabbit.jumps);  // undefined


// task 3

var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);


// task 4

function Rabbit() { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype = {};

//alert(rabbit.eats); // true


// А если код будет такой? (заменена одна строка):

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype.eats = false; // (*)

//alert(rabbit.eats); // false, перезаписано свойство eats (#79)


// А такой? (заменена одна строка)

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

//alert(rabbit.eats); // undefined, удалено свойство eats (#91)

// task 5

function Rabbit() { }
Rabbit.prototype.test = function() { alert(this); }

var rabbit = new Rabbit();
// console.log(rabbit);

//rabbit.test();
//rabbit.__proto__.test();
//Rabbit.prototype.test();
//Object.getPrototypeOf(rabbit).test();
// выводит [object Object] в Chrome
// выводит в IE9+

// task 6

function Hamster() {  

	this.food = [ ]; // пустой "живот"

	this.found = function(something) {
    this.food.push(something);
	};
}

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length); // 2
console.log(lazy.food.length);   // 0

// task 7

class Person {
  constructor (name) {
    this.legs = 2;
    this.arms = 2;
    this.canWalk = true;
  }
}

class Programmer extends Person {
  constructor() {
    super();
    this.writeCod = true;
    this.knowJS = true;
    this.say = function () {
      console.log("I can write clean cod on JS");
    };
  }
}

var js = new Programmer("Jon");
var css = new Programmer("Kate");

console.log(js);
console.log(css);

// task 8
var res = 0;
function Adder(startingValue) {
  this.value = startingValue;
  this.addInput = function() {
    var add = prompt("Enter your value");
      return res = add + this.value;
  };
  this.showValue = function() {
    return this.value;
  };
}
var adder = new Adder(2);
console.log(adder.showValue());
console.log(adder.addInput());

/*adder.addInput();
adder.addInput();
adder.showValue();*/

// task 9

function sum(n) {
  let res = n;
  function f(m) {
    res += m;
    return f;
  }
  f.toString = function() {
    return res;
  };
  return f;
}
console.log( sum(2)(3)(4)(5) );

// task 10
let el = document.getElementById("run"),
    text = el.innerHTML;

setInterval (function (){
  text = text[text.length - 1] + text.substring(0, text.length - 1);
  el.innerHTML = text;
}, 100);






