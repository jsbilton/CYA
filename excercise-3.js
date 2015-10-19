

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    for(var i =0; i < args.length; i++) //element,index,array
    // .. do something with each element of args
    // YOUR CODE HERE
    console.log("");
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )



// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */
// I did several of these while I followed along in a tutorial on Treehouse site

// .sort()   //sorts the elements of an array in place and returns the array
arr.sort([compareFunction])

// .concat()
var currentClass = ['Ben', 'Mike', 'Ann', 'Olga'];
var newClass = ['Stan','Dan','Eli','Kay'];
var fullClass = currentClass.concat(newClass);


// .indexOf()
var guns = ['shotgun', 'pistol', 'rifle'];
var location = guns.indexOf('rifle');
//should produce 2

// .split()  //splits string object into an array of strings

var activity = "How are you doing today?";
var resting = string.split(" ");

// .join()
var daysOfWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var dayString = daysOfWeek.join(',');
console.log(dayString);

// .pop()
var numbers = [1,2,3,4,5]
var newNumbers = numbers.pop();//not only removes last item but also can return/retrieve that item

// .push()
var guestList = ['Sandra', 'Omar', 'Magnus', 'Becky'];
var newlist = guestList.push('Dave','Sam');

// .slice()   //returns shallow copy of a portion of an array into new array object
var numbers = [1,2,3,4,5,6];
var newNumber = numbers.slice(2);


// .splice()  //changes the content of an array by removing existing elements and/or adding new elements

var lottoNumber = new Array("8", "43", "22", "19");
lottoNumber.splice(29, "79");
document.write(lottoNumber);

// .shift()
var numbers = [1,2,3,4,5];
var firstItem = numbers.shift(0);
console.log(numbers);
//should remove 1st item from an array

// .unshift
var numbers = [1,2,3,4];
var addNumbers= numbers.unshift(-1, 0);//should be adding 2 numbers to beginning

// .filter()  //creates a new array with all elements that pass the test,

var filteredArray = array.filter(callback [, contextObject])


// .map()  //creates a new array with results of calling a provided function on every element in this array

arr.map(callback[, thisArg]
