// task 1
var str = "aaa@bbb@ccc";
console.log(str.replace(/@/g, "!"));

// task 2
// через substr, substring, slice
str = "aaa bbb ccc";
console.log(str.substring(0, 3), str.substring(8, 11));
console.log(str.substr(0, 3), str.substr(8, 3));
console.log(str.slice(0, 3), str.slice(8, 11));

// task 3
var date = new Date('2025-12-31');
console.log(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());

// task 4
str = "js";
console.log(str.toUpperCase());

// task 5
str = 'я учу javascript!';
console.log(str.length);

// task 6
str = "я учу javascript!";

var arr = str.split(' '),
	n = 2;

if (arr.length !== n) {
	var res = arr.slice(0, n) + "...";
	console.log(res);
} else {
	console.log(str);
}

// task 7
str = "я учу javascript!";
console.log(str.split(' '));

// task 8
arr = ['я', 'учу', 'javascript', '!'];
console.log(arr.join("+"));

// task 9
str = "я учу javascript!";
console.log(str.charAt(0).toUpperCase() + str.substring(1));

// task 10
var array = str.split(' ');
//console.log(array);
for (var i = 0; i < array.length; i++) {
	array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1);
}
console.log(array);

// task 11
str = 'var_test_text';
var arr = str.split('_');
for (i = 1; i < arr.length; i++) {
	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
console.log(arr.join(""));

// task 12
str = "varTestText";
var arr = str.toLowerCase();

console.log(arr);


// task 13
str = "12345678";
console.log(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));



