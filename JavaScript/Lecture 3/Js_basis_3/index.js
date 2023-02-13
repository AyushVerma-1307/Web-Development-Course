console.log('Hello');

// let firstname = 'gungun';
// let lastname = new String('gupta')
// let message =
//     ${lastname} is my lastname;
// let words = message.split(' ');
// console.log(words);

// let date = new Date();
// let date2 = new Date('June 20 1998 07:15');
// let date3 = new Date(1998, 6, 20, 7);
// console.log(date3);

let numbers = [1, 4, 5, 7];
console.log(numbers);

numbers.push(9); //end insertion
console.log(numbers);
numbers.unshift(10); //first insertion
console.log(numbers);
numbers.splice(2, 0, 'a', 'b', 'c', 'd') //middle insertion
console.log(numbers);
console.log(numbers.indexOf(199));
if (numbers.indexOf(10) != -1)
    console.log('present');
console.log(numbers.includes(7));
console.log(numbers.indexOf(4, 2));

let courses = [{ no: 1, name: 'love' }, { no: 2, name: 'Gungun' }];
console.log(courses);
console.log(courses.indexOf({ no: 1, name: 'love' })); //answer is -1, becaus it has a different reference, it is different object
console.log(courses.includes({ no: 1, name: 'love' })); //answer is false, becaus it has a different reference, it is different object

let course = courses.find(function(course) {
    return course.name == 'love';
}); //method1 of writing callback functions
console.log(course)

let cpurse = courses.find(course => course.name == 'Gungun'); //method2 of writing callback function agr sb single h single parameters,single line of code etc.
console.log(cpurse);

numbers.pop(); //removes last
console.log(numbers);
numbers.shift(); //removes first
console.log(numbers);
numbers.splice(2, 1); //removes from between(index,number of element u want to delete)
console.log(numbers);


let numbers2 = numbers;
numbers.length = 0;
// while (numbers.length > 0) {
//     numbers.pop();
// }for emptying an array
//numbers.slice(0,numbers.length)//another working way of emptying an array
// numbers = [];issue in this method because number2 is still getting printed
console.log(numbers);
console.log(numbers2);

//combining and slicing arrays
let first = [1, 3, 5];
let second = [2, 4, 6];
let combined = first.concat(second);
console.log(combined);

console.log(combined.slice(1, 3)); //(included,exluded)
console.log(combined.slice(3));
console.log(combined.slice()); //makes a copy of original array

console.log([...first, 'a', ...second]); //... are called spread operator
let another = [...combined] //copy of an arrays

let arr = [10, 20, 30, 40, 50]
for (let value of arr) {
    console.log(value); //prints all the value of the array that are stored in it
}
arr.forEach(function(numbers) {
    console.log(numbers);
})

arr.forEach(numbers => console.log(numbers)); //another method


//joining arrays
let arra = [1, 2, 3];
const joined = arra.join(',');
console.log(joined);

//splitting joined arrays
let message = 'This is my last message';
let parts = message.split(' ');
console.log(parts); // creates an array
let joinn = parts.join('_');
console.log(joinn);

//sorting an array
let letnum = [4, 5, 3, 6, 2, 8, 9, 7, 7];
let sorted = letnum.sort();
console.log(sorted);

//filtering arrays
let numbers1 = [1, -2, 3, -6];
let filtered = numbers1.filter(function(value) {
    return value >= 0;
})
console.log(filtered);

let fil = numbers1.filter(value => value >= 0);
console.log(fil); //arrow functions

//mapping arrays (maps each element of array to something else)
let no = [7, 8, 9, 10];
let a = no.map(function(value) {
    return 'student_no' + ' ' + value;
})
console.log(a);

let a1 = no.map(value => 'student_no' + ' ' + value);
console.log(a1); //arrow functions

//mapping with objects
let numm = [1, -2, 3, 4, -5];
let filll = numm.filter(value => value >= 0);
let items = filll.map(function(numm) {
    return { value: numm };
});
console.log(items);

//chaining
let items1 = numm.filter(value => value >= 0).map(function(numm) {
    return { value: numm };
});
console.log(items);