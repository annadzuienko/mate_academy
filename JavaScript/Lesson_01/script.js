// operators
// task 1
var r = '9' + 0; // 90 string

var r = 9 + '0'; // 90 string

var r = 4 + 9; // 13 num

var r = null + 7; // 7 num

var r = '6' + null; // 6null string

var r = '6' + []; // 6 string

var r = '6' + null; // 6null string

// task 2
2/3 + 1 + 1/3 == 2 // false
// if the division of numbers does not form an integer - this is an infinite number,
// so when added to an infinite number there will be an infinite number

// task 3
var r = 6 && 0 && 7; // 0

var r = -9 && -8; // -8

var r = 6 && 0 && 7; // 0

var r = "string" && 0; // 0

var r = [] && {} && 7; // 7

var r = [] || 7; // []

var r = {} || 0; // {}

var r = false || true; // true

var r = "2" > "3"; // false

var r = "ab" <= "fg"; // true

var r = "2k" <= "8l"; // true

var r = "2" != 2; // false

var r = "2" !== 2; // true

//var r = ++2 + 2; // 5

//var r = ++2 + 2--; // 5

//var r = 1++ - 2--; // -1

// passing-by-reference
// task 1
var t = {
    y: 9
};
var number = t.y;
number += 5;
console.log(t.y, number); // 9, 14

// task 2
var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}
console.log(number); // 5

// task 3
var t = 9;
var obj = {
    number: t
};
obj.number++;
console.log(obj.number, t); // 10, 9

// task 4
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;
obj.number++;

var str = object1.str;

object1.str.name = "Kolya";

console.log(str, object1.str.number); // {name: "Kolya", number: 67} 67

// task 5
var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya"
};

object2.str.number = object2.str.number;

object2.str.number++;

console.log(object2.str.number); // undefined














