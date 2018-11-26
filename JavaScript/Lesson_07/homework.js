// task 1

function User(fullName) {
  this.fullName = fullName;
  Object.defineProperty(this, 'firstName', {
    get: function() {
            var name = fullName.split(' ');
            return name[0]; 
         },
    set: function(newName) {
            this.fullName = newName + ' ' + this.lastName;
         }
  });
   Object.defineProperty(this, 'lastName', {
    get: function() {
            var surename = this.fullName.split(' ');
            return surename[1]; 
         },
    set: function(newSurename) {
            this.fullName = this.firstName + ' ' + newSurename;
         }
  });
}

var vasya = new User('Александр Пушкин');
console.log(vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);

vasya.lastName = 'Толстой';
console.log(vasya.fullName);


/*var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
language.current = 'FA';

console.log(language.log);


var o = {}; // Создаём новый объект

Object.defineProperty(o, 'a', {
  value : 37,
  writable : true
});

console.log(o.a); // Выведет 37
o.a = 25; // Исключение не будет выброшено (будет выброшено только в 
          // строгом режиме, даже если значение будет тем же самым)
console.log(o.a); // Выведет 37. Присваивание не сработало.
*/


// task 2
function Calculator() {
  var method = {
    '+': function(a, b) {
      return a + b;
    },
    '-': function(a, b) {
      return a - b;
    },
  };
  this.calculate = function(str) {
    var arr = str.split(' '),
        a = +arr[0],
        operand = arr[1],
        b = +arr[2];
    return method[operand](a, b);
  };
  this.addMethod = function(name, func) {
    method[name] = func; 
  };
}

var calc = new Calculator;
console.log( calc.calculate('3 + 7') );

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
powerCalc.addMethod('/', function(a, b) {
  return a / b;
});
powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result );
console.log(powerCalc.calculate('2 * 3'));
console.log(powerCalc.calculate('2 / 3'));
console.log(powerCalc.calculate('2 - 3'));




