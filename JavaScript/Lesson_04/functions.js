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
	// это тут лишнее
}
console.log(removeEmptyElements([1,, 2,, 3,, 4,, 5,, 6,,]));
// эту функцию нужно сделать рекурсией чтобы она работала с массивами любого уровня вложенности

// task 4
function sortReverse(arr) {
	return arr.reverse();
}
sortReverse([1,2,3,4,5]);

// task 5
var dateObjectName = new Date([]);
console.log(Date());
// тут нужно возвращать объект а не строку даты

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
// эта функция сработает только один раз а должна срабатвать каждые 2 секунды пока имя не подходит в твоему условию






