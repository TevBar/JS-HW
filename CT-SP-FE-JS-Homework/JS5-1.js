//! Content: Algos and intermediate DSA, Searching, linked lists etc

// Reading: None, feel free to peruse the rest of the book as you please

// HW: 
// * 1. Reverse the list below in-place using an in-place algorithm.
// For extra credit: Reverse the strings at the same time.
// words = ['this' , 'is', 'a', 'sentence', '.']
// # Output: words = ['.', 'ecnetnes', 'a', 'si', 'sith']



function reversWordsInPlace(words){
    function reverseStr(str){
        str.split('').reverse('').join('')
        console.log(str)
        return str 
    }
    // reversing entire array 
    words.reverse()
    console.log(words);
    // reverse each word in the array 
    for(let i = 0; i < words.length; i++){
        words[i] = reverseStr(words[i])
    }
    console.log(words);
    return words;
}

const words = ['this' , 'is', 'a', 'sentence', '.']
reversWordsInPlace(words)











//* 2. Create a function that counts how many distinct words are in the string 
// * below, then outputs a dictionary with the words as the key and the value 
//* as the amount of times that word appears in the string.
// Should output:
// {'a': 5,
// 'abstract': 1,
// 'an': 3,
// 'array': 2, ... etc…
//! Input: 
// let a_text = 'In computing, a hash table hash map is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots from which the desired value can be found'

// # create a function that counts how many distinct words are in the string
let a_text = ('In computing, a hash table hash map is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots from which the desired value can be found')
function countWords(str){
    // split the string into an array of words
    let words_text = str.split(' ');  
    // create a dictionary to store the words_text and their counts
    let my_wordcounts = {};
    // loop through the words_text
    for(let i = 0; i < words_text.length; i++){
        // remove punctuation and convert to lowercase for consistent counting
        let word = words_text[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()
        // if the word is not in the dictionary, add it
        if(!my_wordcounts[words_text[i]]){  
            my_wordcounts[words_text[i]] = 1
        } else {
            // if the word is in the dictionary, increment its count
            my_wordcounts[words_text[i]]++;
        }
    }
    // return the dictionary
    return my_wordcounts;
}
// call the function with the input text
let my_wordcounts = countWords(a_text);

console.log(my_wordcounts);











//* 4.  Write a program to implement a Linear Search Algorithm. 
//* Also in a comment, write the Time Complexity of the following algorithm.


// # Linear Search Algorithm
timeComplexity = 'O(n)'
function linearSearch(arr, target){
    // loop through the array
    for(let i = 0; i < arr.length; i++){
        // if the element at the current index is the target, return the index
        if(arr[i] === target){
            return i
        }
    }
    // if the target is not found, return -1
    return -1
}
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 5));


// for the code above we console.log the linear search function to be applied to the arr and the target
// for this we will use our OWN array to test and select a target to search for


