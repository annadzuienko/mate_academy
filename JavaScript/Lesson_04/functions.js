// task 1
function getLength(arr) {
	return arr.length;
}
getLength([1,2]);

// task 2
function getArgsLength() {
	return arguments.length;
}
getArgsLength(5,4,7);

// task 3
function removeEmptyElements(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == undefined) {
			arr.splice(i, 1);
			i--;
		}
    else if(Array.isArray(arr[i])) {
      return removeEmptyElements(arr[i]);
    }
  }
  return arr;
}
console.log(removeEmptyElements([1,, 2,, 3,, 4,, 5,, 6,,]));


// task 4
function sortReverse(arr) {
	return arr.reverse();
}
sortReverse([1,2,3,4,5]);

// task 5
var date = new Date();

function dataObject(date) {
  var objDate;
  if(date instanceof Date) {
    return objDate = {
      dd: date.getDate(),
      mm: date.getMonth() + 1,
      yy: date.getFullYear()
    };
  }
  return objDate;
};

console.log(dataObject(date));


// task 6
function getLength(object) {
	var animal = {
  		name: "dog",
  		canWalk: true,
  		color: 'brown'
	}
	//alert(Object.keys(animal).length);
}
setTimeout(getLength, 1000);

// task 7
var name = setInterval(function() {
	var user = prompt('Enter your name', '');
  if(user !== "") clearInterval(name);
}, 2000);




