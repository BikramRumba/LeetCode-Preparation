/* // Question 1
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
// Output will be Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' } */

/* // Question 2
function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y); */

// console.log(0.1 + 0.2 === 0.3);
/* var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y); */
//   question 6
/* function foo() {
    return
    {
      message: "Hello World";
    };
  }
  console.log(foo()); */
//   question 7
/* var myChars = 'a', 'b',  'c', 'd';
delete myChars0;
console.log(myChars);
console.log(myChars0);
console.log(myChars.length); */

// question 8
// var array1 = new Array(3);
// console.log(array1);

// var array2 = [];
// array2 = 100;
// console.log(array2);

// var array3 = ,,,;
// console.log(array3);

// question 9
/* prop1: function() { return 0 },
prop2() { return 1 },
'prop' + 3 { return 2 }
const obj = {
}

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3()); */

// question 10
/* console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
 */
 //Question 100 What is an Immediately Invoked Function in JavaScript?
/* It is a JavaScript function that runs as soon as it is defined. It contains two parts: The
first is the anonymous function with lexical scope enclosed within the grouping operator ().
The second part creates the immediately invoked function exression() through wihich the JavaScript engine will directly interpret the function. */
//  const makeWithdraw = balance => (function(copyBalance) {
//   let balance = copyBalance; // This variable is private
//   let doBadThings = function() {
//     console.log("I will do bad things with your money");
//   };
//   doBadThings();
//   return {
//     withdraw: function(amount) {
//       if (balance >= amount) {
//         balance -= amount;
//         return balance;
//       } else {
//         return "Insufficient money";
//       }
//     },
//   }
// })(balance);

// const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// console.log(firstAccount.balance); // undefined
// console.log(firstAccount.withdraw(20)); // 80
// console.log(firstAccount.withdraw(30)); // 50
// console.log(firstAccount.doBadThings); // undefined; this method is private
// const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
// console.log(secondAccount.withdraw(30)); // "Insufficient money"
// console.log(secondAccount.withdraw(20));  // 0
/* for (var i = 0; i < 5; i++) {
  const button = document.createElement("button");
  button.innerText = "BUTTON " + i;
  button.onclick = function () {
    alert(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2 */

/* for (var i = 0; i < 4; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = (function (copyOfI) {
    return function() {alert(copyOfI);};
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
 */

/* for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = function () {
    alert(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined. */

// 101. Explain Higher Order Functions in javascript.
/* function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if(type === 'formal') {
    greetFormal();
  } else if(type === 'casual') {
    greetCasual();
  }
}
// prints 'What's up?'
greet('casual', formalGreeting, casualGreeting); */

/* const arr1 = [1, 2, 3];
// const arr2 = [];

// for(let i=0; i< arr1.length; i++) {
//   arr2.push(arr1[i] *3);
// }
// console.log(arr2);

const arr2 = arr1.map(n => n *3);

console.log(arr2); */
/* 
const birthYear = [1993, 1995, 1996, 1998, 1993];
const ages = birthYear.map(year =>2022-year);
console.log(ages); */
/* const persons = [
  {name: 'Peter', age:16},
  {name: 'Mark', age:26},
  {name: 'John', age:36},
  {name: 'Jane', age:26},
  {name: 'TOny', age:46}
];

// const fullAge = persons.filter(person =>person.age <=20);
// console.log(fullAge);
const fullAge = [];

for(let i =0; i<persons.length; i++){
  if(persons[i].age >=20) {
    fullAge.push(persons[i]);
  }
}
console.log(fullAge); */

/* const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

console.log(average);
 */

 /* bind() method in javaScript function
 ---> This method creates a new function that when called, has its 'this' keyword set to the provided value. 
 This is extremely powerful */

/* var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function() {
      var fullname = this.firstname + ' ' + this.lastname;
      return fullname;
  }
};

var pokemonName = function() {
  console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!' */


/* var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function() {
      var fullname = this.firstname + ' ' + this.lastname;
      return fullname;
  }
};

var pokemonName = function(snack, hobby) {
  console.log(this.getPokeName() + 'I choose you!');
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms */

/* Main differences between call() and apply() is that the 
call() method:
--> Accepts additional parameters as well
--> Executes the function it was called upon right away.
--> The call() method does not make a copy of the function it is being called on.
 ...call() and apply() method serve the exact same purpose. The only difference between how they work is that 
 call() expects all parameters to be passed in individually, whereas apply()  expecets an array of all 
 of our parameters.
 */
/*  var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function() {
      var fullname = this.firstname + ' ' + this.lastname;
      return fullname;
  }
};

var pokemonName = function(snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms */

// 104. What is currying in JavaScript?
/* 
  --> Currying is an advanced technique of working with functions.
  It is used in other languages as well. 
  Currying is a transformation of functions that translates a function from callable as f(a, b, c)
into callable (anything that can be called) as f(a) (b) (c).
    ::: Currying doesn't call a function. It just transforms it.

  */
/*  function curry(f) {
   return function a() {
     return function b() {
       return f(a, b);
     };
   };
 }

 function sum(a, b) {
   return a + b;
 }
 let curriedSum = curry(sum);
 alert(curriedSum(1) (2)); */
/* As you can see, the implementation is straightforward: it’s just two wrappers.

The result of curry(func) is a wrapper function(a).
When it is called like curriedSum(1), the argument is saved in the Lexical Environment, and a new wrapper is returned function(b).
Then this wrapper is called with 2 as an argument, and it passes the call to the original sum. */

// 105. Explain Scope and Scope Chain in javascript.

// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3));
/* 
let arr = ['a', 'b', 'c', 'd'];

newarr = ['start',...arr, 'end'];
console.log(newarr); */

// How do you create a private variable in JavaScript?

// function secretVariable(){
//   let private = 'super secret code';
//   return function(){
//     return private
//   }
// }

// let getPrivateVaraible = secretVariable()

// console.log(getPrivateVaraible());
// console.log(secretVariable());

// function x(){
  
//   for (var i =1; i <=5; i++){
//     function close(x){
//       setTimeout(function(){
//         console.log(x);
//       },*1000)
//     }
//     close(i);
   
//   }

//   console.log('namaste')
// }

// x();


// function statement aka function declaration
// function a(){
//   console.log('a called');
// }



/* Major difference between function statement and expression is hoisting */

// // function expression
// var b = function (){
//   console.log('b called');
// }

// a();
// b();

// anonymous function(function without name)

/* function (){
  
} */

// Names function Expression
/* var b = function xyz(){
  console.log('b called');
} */

// Difference between Parameters and Arguments?
/* var c = function (param1, param2){
  console.log('c called');
}

c(1,2); */

// First Class Functions
// We can pass functions inside functions as an argument.
// ability of using functions value to the another value

// First Class Citizens aka first class functions

// Arrow Functions
  /*  var n = 2 
   function square(num) {
     var ans = num *num;
     return ans;
   }
   var square2 =  square(n);
   var square4 = square(4); */



/* 
   var x = 7; 

 var getName =() =>{
    console.log('Namaste JavaScript');
  }
  getName();
  console.log(x);
 console.log(getName) */

// Hoisting in JavaScript. We can access variable before defining


// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//   var x = 10;
//   console.log(x);
// }

// function b(){
//   var x = 100;
//   console.log(x);
// }

