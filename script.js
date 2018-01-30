function numbersOnly (arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}
numbersOnly([1, "apple", -3, "orange", 0.5]);

function removeOthers (arr) {
    for (var i = 0; i < arr.length; i++) {
        while (typeof (arr[i]) !== "number") {
            for (var y = i; y < arr.length; y++) {
                arr[y] = arr[y+1]
            }
            arr.pop();
        }
    }
    console.log(arr);
}
removeOthers([1, "apple", -3, "orange", 0.5]);