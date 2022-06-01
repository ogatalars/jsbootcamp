// Write a function to find the average value in an array of numbers
function avgValue(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let media = total / arr.length;
  return media;
}
console.log(avgValue([1, 2, 3, 4, 5]));
