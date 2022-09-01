//Create a new string from a given string changing the position of first and last characters.

function changeFirstLetterToSecond(string) {
    let arr = string.split("");
    let tempFirst = arr[0];
    let tempLast = arr[arr.length - 1];
    arr[0] = tempLast;
    arr[arr.length - 1] = tempFirst
    string = arr.join("");
    return string
}

console.log(changeFirstLetterToSecond('ioasys') );
