//loops-statements

// task 1

for (var i = 0; i <= 15; i++) {
	if (i % 2 == 0) {
		console.log(i + " is even");
	}
	else {
		console.log(i + " is odd");
	}
}

// task 2

for (i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
		console.log("Fizz");
	}
	else if (i % 5 == 0) {
		console.log("Buzz");
	}
	else if (i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
	}
	else {
		console.log(i);
	}
}

// task 3

function nod(n, m) {
  if(m > 0) { 
    var k = n%m;
    return nod(m, k); 
  } 
  else { 
    return Math.abs(n);  
  }
}
console.log(nod(56, 24));

// task 4

var result = 0;
for (i = 0; i <= 1000; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		result += i;
	}
}
console.log(result);

// task 5

result = 0;
for (i = 10; i <= 90; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log(i);
	}
}

// task 6

result = "";
for(i = 70; i >= 11; i--){
	/*  эти числа и так находяться в промежутке между 11 и 70, не обязательно это каждый раз проверят это тут лишнее ) */
	if(i <= 70 && i >= 11 && !(i%2)){
		result += i + " ";
	}
}
console.log(result);

// task 7

result = "";
for(i = 78; i >= 13; i--){
	/*  эти числа и так находяться в промежутке между 13 и 78, тоже лишнее ) */
	if(i <= 78 && i >= 13 && !(i%2) && !(i%3)){
		result += i + " ";
	}
}
console.log(result);

