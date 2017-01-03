var names = ['Tim', 'Lauren', 'Desmond', 'Darius'];

// names.forEach(function(name){
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Tim'));

var person = {
  name: 'Tim',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

person.greet();

//Chanllenge Area
function add (a, b){
  return a+b;
}

var addStatement = (a,b) => {
  return a+b;
}

var addExpression = (a,b) => a+b;

console.log(add(2, 4));
console.log(addStatement(3, 5));
console.log(addExpression(4,7));
