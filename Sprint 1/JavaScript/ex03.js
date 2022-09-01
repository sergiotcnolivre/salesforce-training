//Write a JavaScript function that reverse a number.

function reverseNumber(num) {

    if (isNaN(num)) {
        throw new Error("NaN")
    }
    
    let rev = 0;
    let lastDigit;

    while(num != 0){
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num/10);
    }

    return rev;
    
}

console.log(reverseNumber(123456))