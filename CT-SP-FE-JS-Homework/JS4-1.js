//! Content: Functional programming and higher order 
// TODO: Note to students - these questions are experimental & may not all be 
// TODO: possible presently - do to best of ability using tools from lectures

// Reading: Review EJS 5, review other chapters as needed

// HW:
// * 1.  Filter out all of the empty strings from the list below
// Input: let places = [" ","Argentina", " ", "San Diego","","  ","","Boston","New York"]
// Output: ['Argentina', 'San Diego', 'Boston', 'New York']

let places = ["", 'Argentina', " ", "san diego", "  ", "", "Boston", "New York"]

let filteredPlaces = places.filter(place => place.trim !== " ");

console.log(filteredPlaces);





// * 2. Write an anonymous function that sorts this list by the last name
// Input: let author = ["Joel Carter", "Victor aNisimov", "Andrew P. Garfield","David hassELHOFF","Gary A.J. Bernstein"]
// Output: ['Victor aNisimov', 'Gary A.J. Bernstein', 'Joel Carter', 'Andrew P. Garfield', 'David hassELHOFF']



let author = ["Joel Carter", " Victor aNisimov", " Andrew p. Garfield", "David hassELHOFF", "Gary A.J. Bernstein"]

let sortedAuthors = author.sort(function(a,b){
    let lastNameA = a.split(" " ).pop().toLowerCase();
    let lastNameB = b.split(" ").pop().toLowerCase();

    if(lastNameA < lastNameB) return -1;
    if(lastNameA > lastNameB) return 1;

    return 0;

})
console.log(sortedAuthors);


// * 3. Convert the list below from Celsius to Farhenheit, using the map function
// # F = (9/5)*C + 32
// places = [('Nashua',32),("Boston",12),("Los Angelos",44),("Miami",29)]


function celsiusToFarhenheit(celsius){
    return (9/5) * C + 32;
}

const places = [
    ["Nashua", 32]
    ["boston", 12]
    ["los angeles", 44]
    ["Miami", 29]
]

const convertedPlaces =  places.map(place => [place[0] , celsiusToFarhenheit(place[1])]);
 
// Output: [('Nashua', 89.6), ('Boston', 53.6), ('Los Angelos', 111.2), ('Miami', 84.2)]


//* 4. Write a recursion function to perform the fibonacci sequence up to the number passed in.
//? You don't need to log out 'iteration 0' etc if you don't want to. 
//? Just log the final values for each iteration
// Output for fib(5) => 
// Iteration 0: 1
// Iteration 1: 1
// Iteration 2: 2
// Iteration 3: 3
// Iteration 4: 5
// Iteration 5: 8


function fibonacci(num) {
    if(num < 2){
        return num
    } else{
        return fibonacci(n-1) + fibonacci(n - 2);
    }
}

const nTerms = prompt('Enter the number of terms: ');

if(nTerms <= 0 ) {
    console.log('Enter a positive integer')
} else { 
    for(let i = 0; i < nTerms; i++){
        console.log(fibonacci(i));
    }
}

