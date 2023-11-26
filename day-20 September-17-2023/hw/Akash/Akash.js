var numbersArray = [10, "Abul", 5, 23, 45, 8, 67, 89, 420, 12];

function findLargestNumber(numbers) {
  var largest = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

var largestNumber = findLargestNumber(numbersArray);
console.log(`The largest number is: ${largestNumber}`);