//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen Sample Output : "0 is even" "1 is odd" "2 is even"

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

arr.forEach(e => {
    if (e % 2 === 0) {
        console.log(` ${e} is even`)
    } else {
        console.log(` ${e} is odd`)
    }
});