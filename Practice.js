// var num=8
// var num=9;
// console.log(num)

// var a=10;
// var b="90"
// console.log(a==b)

// console.log(isNaN("hoo"))
// console.log(isNaN(234))
// console.log(isNaN('1'))
// console.log(isNaN(true))

// (function () {
//     let localVar="This Is local variable"
//     console.log(localVar)
// })()

// (function (name) {
//     // let localVar="This Is local variable"
//     console.log("Hello" +" "+ name)
// })("shivani")

// (function() {
//     var x = 10;
//     var y = 20;
  
//     function add() {
//       return x + y;
//     }
  
//     console.log(add()); // Outputs 30
//   })();
//   var x=10;
//   var y=10;
//   console.log(x+y)

// function higherOrder(fn) {
//     fn();
//   }
     
//   higherOrder(function() { console.log("Hello world") });  
// function higherOrder2() {
//     return function() {
//       return "Do something";
//     }
//   }      
//   var x = higherOrder2();
//   console.log(x())

// function execute(func) {
//     func();
//   }
  
//   function greet() {
//     console.log("Hello, world!");
//   }
  
//   execute(greet);


// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log("my name",this.name);
//   }
// }
   
// obj.getName();

// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
     
// }
       
// var getName = obj.getName;
       
// var obj2 = {name:"akshay", getName };
// obj2.getName();

// function curryAdd(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// // Using the curried function
// const add5 = curryAdd(5);
// console.log(add5(3)); // Output: 8
// // console.log(add5(7));

// const add=curryAdd(2)
// console.log(add(8))

// console.log(curryAdd(2)(9))

// console.log(curryAdd(2)(19))


// var a=10;
//  function one(){
//   console.log(a)
//  }
//  function two(){
//   return one()
//  }

//  two()

// function outerFunction() {
//   var outerVar = "I am in the outer function";

//   function innerFunction() {
//     var innerVar = "I am in the inner function";
//     console.log(outerVar); // Accessing the outer scope variable
//     console.log(innerVar)

//   }
//   innerFunction();
// }

// outerFunction();

var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();