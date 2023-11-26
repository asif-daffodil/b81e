function findLargestNumber(arr) {
    if(arr.length == 0){
        return "Array is empty";
    }

    let largestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largestNumber) {
        largestNumber = arr[i];
      }
    }
    return largestNumber;
}


let arr = [11,23,34, 56, 57, 89, 90, 32, 12, 45, 67, 78, 89, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 109, 109];
console.log(findLargestNumber(arr));