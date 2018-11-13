// task 1
var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
arr.reverse();
arr.splice(0, 1);
arr.splice(5, 1);
console.log (arr);

// task 2
function isPal(string) {
  let stringReverse = string.replace(/\s+/g, '').toLowerCase();
  if (stringReverse == string.replace(/\s+/g, '').toLowerCase().split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
console.log(isPal('Аnna'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('Вася'));
console.log(isPal('12321'));
console.log(isPal('123212'));

// task 3
function anClean(arr1) {
  var obj = {};

  for (var i = 0; i < arr1.length; i++) {
    var arr1Sort = arr1[i].toLowerCase().split('').sort().join('');
    obj[arr1Sort] = arr1[i];
  }
  var result = [];

  for (var key in obj) result.push(obj[key]);

    return result;
}
var arr1 = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(anClean(arr1));

// task 4
var arr2 = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ],
arr2String = arr2.reverse().sort().join('' + ' ');
console.log(arr2String);

// task 5
var result = 0;

for(var j = 1; j <= 100; j ++){
    if(j > 0){
      result += j;
    }
  }
console.log(result);

result = 0;

  for(j = 0; j <= 100; j ++){
    if(j % 2){
      result += j;
    }
  }
console.log(result);

// task 6
result = 0;

function callMe(num1, num2, num3) {
  if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
    console.log(result = num1 + num2 + num3);
  } 
  else {
    console.error("ERROR! Enter numbers");
  }

}
callMe(1, 2, 3);

// task 7
newArr=['qwerty'];

function callMeAgain(arr) {
	arr = arr.join(',').replace(/,/g, '').split('').sort();
	return arr;
}

console.log(callMeAgain(newArr));

// task 8
var arr = [
   {name: "L1", age: 45},
   {name: "L1", age: 20},
   {name: "L1", age: 10},
   {name: "L1", age: 78},
   {name: "L1", age: 41},
   {name: "L1", age: 10}
];

function compareAge(name1, name2) {
  return name1.age - name2.age;
}

arr.sort(compareAge);

for(i = 0; i < arr.length; i++) {
  console.log(arr[i].name, arr[i].age);
}

// task 9
function addUser() {
  var arr = [
     {name: "L1", age: 45},
     {name: "L1", age: 20},
     {name: "L1", age: 10},
     {name: "L1", age: 78},
     {name: "L1", age: 41},
     {name: "L1", age: 10}
  ];
  var name = prompt("Enter your name");
  var age = prompt("Enter your age");
  var exist = false;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].name == name && arr[i].age == age) {
      alert("User already exists"); 
      exist = true;
      break;
    }
  }
  if (!exist) {
    arr.push({name: name, age: +age});
  }
  return arr;
}
console.log(addUser());

// task 10
var myArr = [13, 35, 3, 443],
    res = "",
    counter = 0;

  for (i = 0; i < myArr.length; i++) {
    if (myArr[i] = 3) {
        counter ++;
    }
  }
console.log("Количество цифр 3 в массиве:", counter);

// task 11
var arrComb = ['1', '2', '3', '4', '5', '6'];

function combinate(arr) {
	var newArrComb = [];
	for (i = 0; i < arr.length / 2; i++) {
		newArrComb.push(arr[i] + arr[arr.length - i - 1]);
	}
	return newArrComb.toString(newArrComb).replace(/,/g, '-')
};
console.log(combinate(arrComb));

// task 12
var arr1 = [1,2,3], 
    arr2 = [4,5,6],
    arr3 = [];    
for (i = 0; i < arr.length; i++) {
  arr3.push(arr1[i] + arr2[i]);
}
console.log(arr3);

// task 13
// first variant
var myArray = [1,2,3,4,3,3];
for (i = 0; i < arr.length; i++) {
      if (myArray[i] == 3) {
        delete myArray[i];
      }
}
console.log(myArray);

// second variant
function arrayRemoveNull(arr1) {
  return arr1.filter(function (item) {
    return item !== 0;
  });
}

var arr = [1,2,0,4,5,6,0,7,0];

console.log(arrayRemoveNull(arr));

// task 14

var arr1 = [1,2,3],
	arr2 = [2,33,4],
	arr3 = [3,4,5],
	arr4 = arr1.concat(arr2, arr3),
	duplicates = arr4.reduce(function(accumulator, currentValue, currentIndex, array) {
  		if (array.indexOf(currentValue) !== currentIndex) accumulator.push(currentValue);
  		return accumulator;
	}, []);

console.log(duplicates);

// task 15
var arr = [2, 3, 1, 4], 
    newArr = [],
    num;

function add(arr){
  for (var i = 0; i < arr.length; i++){
    num = arr[i];
    for (var j = 0; j < num; j++) {
         newArr.push(num);
    }
  }
  return newArr;
  }
console.log(add(arr));

// task 16
var arrayWithNull = [1, 2, 3];

arrayWithNull.splice(3, 0, 0, 0, 0);
console.log(arrayWithNull);

// task 17
var arr = [-1, -2, -3, 0, 1, 2, 3, -1, -2, -6, 0, 1, 2, 3];
// Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы)
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr);
var newArr = Array.from(new Set(arr));
console.log(newArr.slice(0, 3));

// Первые 3 отрицательных числа в массиве (по порядку следования)
var arr = [-10, -2, -3, 0, 1, 2, 3, -1, -2, -6, 0, 1, 2, 3];
var newArray = arr.filter(function(number) {
  return number < 0;
});
console.log(newArray.slice(0,3));







