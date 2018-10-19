// task1
myname = "global";
function func() {
    console.log(myname); // undefind
    var myname = "local";
    console.log(myname); // local
}
func();

// task 2
var a = 90100;
function someFunc(){
  if(false){
    var a = 1;
  } else {
    var b = 2;
  }
  console.log(b); // 2
  console.log(a); // undefind
}
someFunc();

// task 3
// функция, объявленная как Function Declaration, создается интерпретатором до выполнения кода, поэтому ее можно вызывать до объявления

// task 4
var i = 0;
for (; i< 10; i ++) {
  console.log(i)
}
// 0 1 2 3 4 5 6 7 8 9

// task 5, 6
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

// task 6
console.time("Execution time took");
  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  console.log(factorial(5));
console.timeEnd("Execution time took");

// task 7
function makeString() {
  var item = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (i = 0; i < 10; i++)
    item += possible.charAt(Math.floor(Math.random() * possible.length));

  return item;
}
console.log(makeString());

// task 8
var a = [1,2,3],
    b = [101, 2, 1, 10],
    c = [1,101,12],
    d = a.concat(b).concat(c);
    e = d.filter(function (item, pos) {
                  return d.indexOf(item) == pos
                  }
                );
console.log(e);

// task 9
function flatten(arr) {
    var res = [];

    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(flatten([1, [2], [3, [[[4]]]]]));

// task 10
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

var strings = [1,2,3,2,3,4,4,5,6];
console.log(unique(strings));






