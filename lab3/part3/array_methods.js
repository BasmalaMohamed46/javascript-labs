//1
//array.concat()
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]




////////////////////////////////////////////////////////////////////////////////////////////////////////



//2
//Array.includes()
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const arr = [1, 2, 3];
console.log(arr.includes(2));
// expected output: true
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false




////////////////////////////////////////////////////////////////////////////////////////////////////////



//3
//Array.join()
//The join() method creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"





////////////////////////////////////////////////////////////////////////////////////////////////////////




//4
//Array.map()
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const num= [1, 4, 9, 16];

// Pass a function to map
const map1 = num.map((x) => x * 2);

console.log(map1);
// Expected output: num [2, 8, 18, 32]




////////////////////////////////////////////////////////////////////////////////////////////////////////



//5
//Array.keys()
//The keys() method returns a new array iterator object that contains the keys for each index in the array.

const letters= ['a', 'b', 'c'];
const iterator = letters.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2




////////////////////////////////////////////////////////////////////////////////////////////////////////




//6
//Array.pop()
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]




////////////////////////////////////////////////////////////////////////////////////////////////////////



//7
//Array.push()
//The push() method adds one or more elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]




////////////////////////////////////////////////////////////////////////////////////////////////////////




//8
//Array.forEach()
//The forEach() method of Array instances executes a provided function once for each array element.

const ar = ['a', 'b', 'c'];

ar.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"



////////////////////////////////////////////////////////////////////////////////////////////////////////



//9
//Array.lastIndexOf()
//The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animal = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animal.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animal.lastIndexOf('Tiger'));
// Expected output: 1




////////////////////////////////////////////////////////////////////////////////////////////////////////




//10
//Array.toString()
//The toString() method returns a string representing the specified array and its elements.

const array = [1, 2, 'a', '1a'];

console.log(array.toString());
// Expected output: "1,2,a,1a"





////////////////////////////////////////////////////////////////////////////////////////////////////////