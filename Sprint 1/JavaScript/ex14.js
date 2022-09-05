//Write a program that inserts multiple arrays (array1, array2, array) into main array (mainArray), then loop mainArray and print each inserted array


let mainArr = ['grape']
arr1 = ['banana', 'apple']
arr2 = ['pineapple']
arr3 = ['orange']

function joinArrays(mainArr, arr1, arr2, arr3) {
    for (let index = 0; index < 3; index++) {
        
        mainArr.concat(arr2)
        console.log(mainArr)
        
    }
}

joinArrays(arr1, arr2, arr3)