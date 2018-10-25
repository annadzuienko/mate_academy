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
	}
	return arr;
	
	Array.isArray([]);
}
console.log(removeEmptyElements([1,, 2,, 3,, 4,, 5,, 6,,]));

// task 4
function sortReverse(arr) {
	return arr.reverse();
}
sortReverse([1,2,3,4,5]);

// task 5
var dateObjectName = new Date([]);
console.log(Date());
// here you should return an object with 3 keys, I didn't see it here

// task 6
function getLength(object) {
	var animal = {
  		name: "dog",
  		canWalk: true,
  		color: 'brown'
	}
	alert(Object.keys(animal).length);
}
setTimeout(getLength, 1000);

// task 7
function getName() {
	var years = prompt('Enter your name', '');
}
getName();
setTimeout(getName, 2000);
// this will only works once, but you should make it work untill the name will have the result you want( eg: some spesific name and you check for it, like: name == "Anna"






