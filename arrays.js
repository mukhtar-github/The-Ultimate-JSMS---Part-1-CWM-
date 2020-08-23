
// //Adding and Removing Elements from an Array
// //const numbers = [1, 2, 3, 4];
// //Add to the End of an Array
// //numbers.push(5, 6);

// //Remove at the End of the Array
// // const last = numbers.pop();
// // console.log(numbers);
// // console.log(last);


// //Add to the Beginning of an Array
// //numbers.unshift(1, 2);

// //Remove at the Beginning of the Array
// // const first = numbers.shift();
// // console.log(numbers);
// // console.log(first);

// //Add to the Middle of an Array
// //numbers.splice(2, 0, 'a', 'b');
// //console.log(numbers);

// //Remove at the Middle of the Array
// // const middle = numbers.splice(2, 1);
// // console.log(numbers);
// // console.log(middle);


// //Finding Elements in an Array (Primitive Types)
// // const numbers = [1, 2, 3, 1, 4];
// // console.log(numbers.indexOf(1, 2));
// // console.log(numbers.lastIndexOf(1));
// // console.log(numbers.includes(1));


// //Finding Elements in an Array (Reference Types)
// // const courses = [
// //     { id: 1, name: 'a'},
// //     { id: 2, name: 'b'},
// // ];

// // const course = courses.find(course => course.name === 'a');
// // console.log(course);


// //Emptying an Array
// // let numbers = [1, 2, 3, 4];
// // let another = numbers;

// // Solution 1
// //numbers = [];

// //Solution 2
// //numbers.length = 0;

// //Solution 3
// //numbers.splice(0, numbers.length);

// //Solution 4
// // while (numbers.length > 0) numbers.pop();

// // console.log(numbers);
// // console.log(another);


// //Combinining and Slicing Arrays

// // const first = [1, 2, 3];
// // const second = [4, 5, 6];

// // const combined = first.concat(second);
// // console.log(combined);

// // const slice = combined.slice(2, 4);
// // console.log(slice);


// //The Spread Operator
// // const combined = [...first, ...second];
// // console.log(combined);

// // const copy = combined.slice();
// // console.log(copy);


// //Iterating an Array

// // for (let number of numbers) 
// // console.log(number);

// // numbers.forEach(number => console.log(number));

// // numbers.forEach((number, index) => console.log(number, index));


// //Joining Arrays
// // const joined = numbers.join(',');
// // console.log(joined);

// // const message = 'This is my first message';
// // const parts = message.split(' ');
// // console.log(parts);

// // const combine = parts.join('-');
// // console.log(combine);


// //Sorting Arrays
// // numbers.sort();
// // console.log(numbers);

// // numbers.reverse();
// // console.log(numbers);

// // const courses = [
// //     { id: 1, name:'Node.js'},
// //     { id: 2, name:'javaScript'}
// // ];

// // courses.sort((a, b) => {
// //     const nameA = a.name.toLowerCase();
// //     const nameB = b.name.toLowerCase();
// //     if (nameA < nameB) return -1;
// //     if (nameA > nameB) return 1;
// //     return 0;
// // });
// // console.log(courses);


// //Testing Elements of an Array

// // const allPositive = numbers.every(value => value >= 0);

// // const atLeastOnePositive = numbers.some(value => value >= 0);

// // console.log(atLeastOnePositive);


// //Filtering an Array
//  //const numbers = [1, -1, 2, 3];

//  //const filtered = numbers.filter(value => value >= 0);


//  //Mappin an Array

//  //const items = filtered.map(n => '<li>' + n + '</li>');

//  //const html = '<ul>' + items.join('') + '</ul>';

//  //const items = filtered.map(n => ({ value: n }));


//  //Chaining both Filtering and Mapping Methods in an Array
 
// //  const items = numbers
// //  .filter(n => n >= 0)
// //  .map(n => ({ value: n }))
// //  .filter(obj => obj.value > 1)
// //  .map(obj => obj.value);
 
// //  console.log(items);


//  //Reducing an Array
// //  let sum = 0;
// //  for (let n of numbers) sum+= n;

// // const sum = numbers.reduce((a, b) => a + b);

// //  console.log(sum);


// //Exercise 1 - Array from Range

// // const numbers = arrayFromRange(1, -4);
// // console.log(numbers);


// // function arrayFromRange(min, max) {
// //     const outPut = [];

// //     for (let i = min; i <= max; i++) 
// //     outPut.push(i);
// //     return outPut;
// // }


// //Exercise 2 - Includes

// // console.log(includes(numbers, 5));

// // function includes(array, searchElement) {
// //     for (let element of array) 
// //         if (element === searchElement)
// //             return true;
// //     return false;
// // }


// //Exercise 3 - Except

// // const result = except(numbers, [1, 2]);
// // console.log(result);

// // function except(array, exclude) {
// //     const output = [];
// //     for (let element of array) 
// //         if (!exclude.includes(element))
// //             output.push(element);
// //     return output;
// // }


// //Exercise 4 - Moving an Element

// // const output = move(numbers, 0, 1);

// // console.log(output);

// // function move(array, index, offset) {
// //     const position = index + offset;
// //     if (position >= array.length || position < 0) {
// //         console.error('Invalid Offset');
// //         return;
// //     }

// //     const output = [...numbers];
// //     const element = output.splice(index, 1)[0];
// //     output.splice(position, 0, element);
// //     return output;
// // }


// //Exercise 5 - Count Occurrences
// //Basic Implementation and Reduced Method Implementation
// // const numbers = [1, 2, 3, 4, 1, 1];

// // const result = countOccur(numbers, 1);
// // console.log(result);

// // function countOccur(array, searchElement) {
// //     // let count = 0;
// //     // for (let element of array)
// //     //     if (element === searchElement)
// //     //     count++;
// //     // return count;

// //     return array.reduce((acc, curr) => {
// //         const occurrences = (curr === searchElement) ? 1 : 0;
// //         //console.log(acc, curr, searchElement);
// //         return acc + occurrences;
// //     },0);
// // }


// //Exercise 6 - Get Max

// // const numbers = [1, 2, 3, 4];
// // const max = getMax(numbers);
// // console.log(max);

// // function getMax(array) {
// //     if (array.length === 0) return undefined;
    
// //     // let max = array[0];

// //     // for (let i = 1; i < array.length; i++)
// //     //     if (array[i] > max)
// //     //         max = array[i];
// //     // return max;

// //     return array.reduce((a, b) => (a > b) ? a : b);
// // }


// //Exercise 7 - Movies

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5},
//     { title: 'b', year: 2018, rating: 4.7},
//     { title: 'c', year: 2018, rating: 3},
//     { title: 'd', year: 2017, rating: 4.5},
// ]; 

// //All the movies in 2018 with rating > 4
// //Sort them by their rating
// //Descending order
// //Pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
    console.log(titles);
