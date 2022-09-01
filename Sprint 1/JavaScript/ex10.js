//Write a JavaScript function to calculate the sum of values in an array

function sumArr(arr) {
  let sum = 0;

  arr.forEach(i => {
    sum += i;
  });

  console.log(sum);
  return sum;
}

sumArr([1, 4, 0, 9, -3]);