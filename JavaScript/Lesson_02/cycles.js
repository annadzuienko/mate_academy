// cycles

// task 1
for (var i=1; i <= 50; i++) {
	console.log(i);
}

// task 2
var array = [1, 2, 3, 4, 5];
for (i = array[0]; i <= array.length; i++) {
	console.log(i);
}

//task 3
var numArray = [2, 3, 4, 5];
var mult = 1;
for (var j = 0; j < numArray.length; j++) {
	mult = mult * numArray[j];
}
console.log(mult);

// task 4
var obj = {
	'Минск'	: 'Беларусь',
	'Москва': 'Россия',
	'Киев'	: 'Украина'
}
for (var prop in obj) {
	console.log(prop + " - это " + obj[prop]);
}

// task 5
var n = 1000,
	num = 0;
do {
	n = n / 2;
	num++;
}
while (n > 50);
console.log(num);

// task 6
var arr = [2, 5, 9, 15, 0, 4];

for (var e = 0; e <= arr.length; e++) {
	if (arr[e] > 3 && arr[e] < 10){
		console.log(arr[e]);
	}
}

// task 7
Date.prototype.monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

Date.prototype.getMonthName = function() {
    return this.monthNames[this.getMonth()];
};

var d = new Date();
console.log(d.getMonthName().bold);
console.log(Date.prototype.monthNames);


