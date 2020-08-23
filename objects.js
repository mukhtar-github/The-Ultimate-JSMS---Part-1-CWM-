// ***
// // Address Object
// const address1 = {
//     street: 'Dorban',
//     city: 'Abuja',
//     zipCode: '+234'
// };

// showAddress(address1);

// function showAddress(address1) {
//     for (let key in address1) console.log(key, address1[key]);
// }

// // Factory Function
// const address2 = createAddress('Dorban', 'Abuja', '+234');
// console.log(address2);

// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// // Constructor Function
// const address3 = new Address('Dorban', 'Abuja', '+234');
// console.log(address3);

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }



// ***//Blog Post Object
// //title
// //body
// //author
// //views
// //comments (author, body)
// //isLive

// let blogPost = new BlogPost('a', 'b', 'c');

// console.log(blogPost);

// function BlogPost(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }