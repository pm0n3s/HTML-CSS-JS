function numbersOnly(arr) {
    array = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            array.push(arr[i]);
        }
        else {
            continue;
        }
    }
    return array
}
var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]
console.log(newArray)