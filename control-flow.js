// *** const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//     return (typeof input !== 'number') ? 'Not a Number'
//     : ((input % 3 === 0) && (input % 5 === 0)) ? 'FizzBuzz'
//     : (input % 3 === 0) ? 'Fizz'
//     : (input % 5 === 0) ? 'Buzz'
//     : input;
// }



// *** // Speed Limit = 70
// // For every additional 5km above speed limit => 1 point
// // 1.3 => 1, Math.floor(1.3) = 1
// // If a driver gets > 12 points => License suspended

// checkSpeed(73);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         return console.log('Ok');
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
//     if (points >= 12) {
//         console.log('License suspended');
//     } else {
//         console.log('Points', points);
//     }



// *** showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//          console.log(i, message);
//     }
// }


// ***const array = [undefined, null, 1, 2, 3, 4, 5];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) 
//         if (value)
//         count++;
//         return count;
// }


// ***const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj)
//     if (typeof obj[key] === 'string')
//     console.log(key, obj[key]);
// }



// ***sum(10);

// function sum(limit) {
//     let sum = 0;
    
//     for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//        sum += i;
    
//     console.log(sum);
// }



// ***const marks = [100, 100, 100];

// console.log(calculateGrade(marks));

// // Mapping an average to a Grade
// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//     return (average < 60) ? 'F'
//     : (average < 70) ? 'D'
//     : (average < 80) ? 'C'
//     : (average < 90) ? 'B'
//     : 'A';
// }

// // Calculating the average of numbers in an Array
// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//       sum += value;
//     return sum/ array.length;
// }



// ***showStars(20);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//         pattern += '*';
//         console.log(pattern); 
//     }
// }



// ***showPrimes(20);
// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0) return false;
     
//     return true;
// }