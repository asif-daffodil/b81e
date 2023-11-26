function findLargestNumber(array) {
    if (array.length === 0) {
        return 0; 
    }

    var largest = array[0]; 
    for (var i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

function numbers(array) {
    var largestNumber = findLargestNumber(array);
    console.log("The largest number is:", largestNumber);
}

numbers("ja ja ja");
