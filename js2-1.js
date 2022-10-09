//split, reverse, join, foreach, map

// //concat() digunakan untuk mengabungkan 2 array  atau lebih, concat() tidak mengubah array yang ada tetapi membuat array baru
// const array1 = ['a', 'b', 'c'];
// const array2 = ['e', 'f', 'g'];
// const array3 = array1.concat(array2);
// console.log(array3);

//indexOf() digunakan untuk mengetahui index dari array awal
// const hewan = ['semut', 'bison', 'kelinci', 'bebek', 'bison'];
// console.log(hewan.indexOf('bison'));

// //lastIndexOf() digunakan untuk mengetahui index dari array akhir
// const hewan = ['macan', 'singa', 'pinguin', 'singa'];
// console.log(hewan.lastIndexOf('singa'));

// //pop() digunakan untuk menghapus element terakhir dari array
// const sayuran = ['brokoli', 'wortel', 'cabai', 'tomat', 'sawi'];
// console.log(sayuran.pop());

// //push() digunakan untuk menambahkan 1 atau beberapa element ke akhir array dan membuat array baru
// const hewan = ['ayam', 'kambing', 'sapi'];
// console.log(hewan.push('kerbau'));
// console.log(hewan);

// //shift() digunakan untuk menghapus element pertama pada array
// const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(array1);
// console.log(firstElement);

// //unshift() digunakan untuk menambahkan element pertama pada array
// const array1 = [1, 2, 3];
// console.log(array1.unshift(4, 5));
// console.log(array1);

// //slice() digunakan untuk menyalin sebagian elemen array ke array baru
// const hewan = ['semut', 'bison', 'kelinci', 'bebek', 'kerbau'];
// console.log(hewan.slice(2));
// console.log(hewan.slice(2, 4));

// //sort() digunakan untuk mengurutkan element array da mengembalikan referensi ke array yang sama
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

// //toUpperCase() digunakan untuk mengubah nilai dari string menjadi huruf besar semua
// const kata = 'Hello world';
// console.log(kata.toUpperCase());

// //toLowerCase() digunakan untuk mengubah nilai dari string menjadi huruf kecil semua
// const kata = 'Hello WORld';
// console.log(kata.toLowerCase());

//getMinutes() digunakan untuk mengembalikan nilai menit pada tanggal yang ditentukan 
// const birthday = new Date('March 13, 08 04:20');
// console.log(birthday.getMinutes());