//Write a program that inserts multiple arrays (array1, array2, array) into main array (mainArray), then loop mainArray and print each inserted array


let mainArr = ['grape']
let arr1 = ['banana', 'apple']
let arr2 = ['pineapple']
let arr3 = ['orange']
let arrFinal

for (let i = 0; i < 4; i++) {
    arrFinal += mainArr.concat(i)
    console.log(arrFinal)
}