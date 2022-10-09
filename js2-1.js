//split, reverse, join, foreach, map

// //concat()
// const array1 = ['a', 'b', 'c'];
// const array2 = ['e', 'f', 'g'];
// const array3 = array1.concat(array2);
// console.log(array3);

// //indexOf()
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));
// console.log(beasts.indexOf('bison', 2));
// console.log(beasts.indexOf('giraffe'));

// //lastIndexOf()
// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));
// console.log(animals.lastIndexOf('Tiger'));

// //pop()
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());
// console.log(plants);

// plants.pop();
// console.log(plants);

// //push()
// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// console.log(animals);

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);

// //shift()
// const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(array1);
// console.log(firstElement);

// //slice()
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));
// console.log(animals.slice());

// //sort()
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

// //toString()
// const array1 = [1, 2, 'a', '1a'];
// console.log(array1.toString());

// //unshift()
// const array1 = [1, 2, 3];
// console.log(array1.unshift(4, 5));
// console.log(array1);

//getMinutes()
const birthday = new Date('March 13, 08 04:20');
console.log(birthday.getMinutes());