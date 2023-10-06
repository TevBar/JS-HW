//! Content: Basic Data Structures

// Reading: EJS 5-6
// HW:
//* 1. Number Filter
// Given a list as a parameter,write a function that returns a list of numbers 
//that are less than ten

function numbers(arr){
    const array= [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 10){
            array.push(arr[i]);
        }
    }

    return array;
}
function mergeAndSortLists(list1, list2){
    const mergedList = list1.concat(list2)
    const sortedList = mergedList.sort(( a, b) => a - b );
}

console.log(numbers([1,11,5,4,9,13,8]))



// For example: Say your input parameter to the function is [1,11,14,5,8,9]...
// Your output should [1,5,8,9]
// Write a function that takes in two lists and returns the two lists
// merged together and sorted


//* 2. Build a Shopping Cart
// You can use either lists or dictionaries. The program should have the 
// following capabilities:

// 1) Takes in input
// 2) Stores user input into a dictionary or list
// 3) The User can add or delete items
// 4) The User can see current shopping list
// 5) The program Loops until user 'quits'
// 6) Upon quitting the program, print out all items in the user's list

//  answer is in index.html1 file. 
