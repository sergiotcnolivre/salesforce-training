//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string

function letterFrequency(word, char) {

    const arr = word.split("");
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] == char) {
            count++;
        }
    }
    
    return count
}

console.log(letterFrequency('banana', 'a'));