
// 1- Function Declarations and Expressions

//Function Declaration
// walk();

// function walk() {
//     console.log('walk');
// }

//Anonymous Function Expression
//Function expressions can not be called before initilization

// let run = function() {
//     console.log('run');
// };

// run();
// let move = run;
// move();


// 2- HOISTING
// We can call a function that is defined using the 
//function declaration syntax before its definition,
//because Javascript engine moves all the function 
//declarion to the top before executing the code.
//This is what is called Hoisting


// 3- Arguments

// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));


// 4- The rest Operator

// function sum(...args) {
//     console.log(args);
// }

// function sum(...args) {
//     return args.reduce((a, b) => a + b);
// }

//Let's use this function to calculate the total 
//cost of items in a shoping cart
//Let's say we have a discount factor

// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));


// 5- Default Parameters

//There are times we want to supply default values 
//to the parameters of a function
//The default parameters should be set to be the last parameters in the list

// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000));


// 6- Getters and Setters
// getters => access properties
// setters => change (mutate) them 

// const person = {
//     firstName: 'Mukhtar',
//     lastName: 'Garba',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string.');
        
//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error('Enter first and last name.');
        
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// // 7- Try and Catch

// try {
//     person.fullName = '';
// }

// catch (e) {
//     alert(e);
// }

// console.log(person);


// 8- Local vs Global Scope
//Local variables or local constants in a function take presidents 
//over Global variables or constants.
//In general you should avoid defining global variables or constants, 
//that is considered a bad practice.


// 9- Let vs Var
//When you declare a variable with a var key word, 
//it's scope is not limited to the block in which it's defined.
//It's limited to the function in which it's defined, 
//unlike with the let key word.
// Var => function- scoped variables
// ES6 (ES2015): Let, Const => blocked-scoped variables


// 10- The THIS key word
//THIS references the OBJECT that is executing the current function.
//Example: if that function is part of an object, 
//we call that function a method, so if that 
//function is a method in an object: THIS references that OBJECT it-self.
//Other wise, if that function is a regular function, which means
//it's not part of an object, THIS references the GLOBAL OBJECT, 
//which is the WINDOW OBJECT in browsers and GLOBAL in Node.

// method -> object
// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.stop = function() {
//     console.log(this);
// };

// video.stop();

//A Constructor function
//When you use the NEW operator in a Constructor function: 
//the NEW opertor creates a new empty object and set
//THIS in the Constructor function to point to the empty object.

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b');

//A regular function -> global (window, global)
// function playVideo() {
//     console.log(this);
// }

// playVideo();

// const video = {
//         title: 'a',
//         tags: ['a', 'b', 'c'],
//         showTags() {
//             this.tags.forEach(function(tag) {
//                 console.log(this.title, tag);
//             }, this);
            
//         }
//     };

// video.showTags();


// 11- Changing the value of THIS

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag);
//         });
        
//     }
// };

// video.showTags();

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }.bind(this));
        
//     }
// };

// video.showTags();

// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo.call({ name: 'Mukhtar'}, 1, 2);
// playVideo.apply({ name: 'Mukhtar'}, [1, 2]);
// playVideo.bind({ name: 'Mukhtar'})();

// playVideo();

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(tag => console.log(this.title, tag));
        
//     }
// };

// video.showTags();


// 12- Exercise 1- Sum of Arguments

// console.log(sum([1, 2, 3, 4]));

// function sum(...items) {
//     if (items.length === 1 && Array.isArray(items[0]))
//         items = [...items[0]];
//     return items.reduce((a, b) => a + b);
// }


// 13- Exercise 2- Area of Circle

// Should hava a radius property that we can read or write
//circle.radius = 2;
//It should also have an area property that is read only.
//So we should not be able to set the area from the outside,
//like circle.area = 20; but we should be able to read it,
//console.log(circle.area);


// const circle = {
//     radius: 1,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);


// 14- Exercise 3- Error Handling

// try {
//     const numbers = [1, 2, 3, 4, 1, 1];

//     const result = countOccur(null, 1);
//     console.log(result);
// }

// catch (e) {
//     console.log(e.message);
// }

// function countOccur(array, searchElement) {
//     if (!Array.isArray(array))
//         throw new Error('Invalid array');
// //     // let count = 0;
// //     // for (let element of array)
// //     //     if (element === searchElement)
// //     //     count++;
// //     // return count;

//     return array.reduce((acc, curr) => {
//         const occurrences = (curr === searchElement) ? 1 : 0;
//         //console.log(acc, curr, searchElement);
//         return acc + occurrences;
//     },0);
// }
