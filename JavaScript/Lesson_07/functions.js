function isContextEqualTo(contextLink, currentContext) {
   console.log(contextLink === currentContext);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.getName = function () {
       isContextEqualTo(window, this); // true
       isContextEqualTo(user, this); // false
       return this.name;
    };
}

Person.getAge = function () {
    isContextEqualTo(window, this); // false
    return this.age;
};

var user = new Person("erer", 45);

var getAge = Person.getAge;
var getName = user.getName;

console.log(getAge()); // window
console.log(getName()); // window
console.log(user.getName()); // object user

Person.getAge = function() {
    isContextEqualTo(Person, this); // true
    return this.name;
}

user.getAge = getAge;
console.log(user.getAge()); // object user


// task 1

function getName() {
  return this.name;
}

var object = {
  name: "Jon"
}

console.log(getName.call(object));
console.log(getName.call(window));

// task 2
var object = {
  number: 4
}

function getDouble() {
  return this.number * 2;
}
console.log(getDouble.call(object));

function getDoubledTrippled() {
  return getDouble.call(this) * 3;
}
console.log(getDoubledTrippled.call(object));

// task 3
function City(name, population, country) {
  this.name = name;
  this.population = population;
  this.country = country;
  this.getPopulation = function() {
    return this.population;
  };
  this.getCityName = function() {
    return this.name;
  };
  this.AREA = "";
  Object.defineProperty(this, "AREA", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'east coast'
  });
  this.addCitizen = function() {
    return ++this.population;
  };
}
var Kiev = new City('Kiev', 2884000, 'Ukraine');
Kiev.addCitizen();
console.log(Kiev);

// task 4 we did in the previous homework



