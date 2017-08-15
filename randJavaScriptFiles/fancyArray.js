var arr = ["James", "Jill", "Jane", "Jack"];

function fancyArray(array, spacer) {
    if (spacer == null) {
        for (var i = 0; i < array.length; i++) {
            console.log(i + " -> " + arr[i])           
        }
    }
    else {
        for (var i = 0; i < array.length; i++) {
            console.log(i + " " + spacer + " " + arr[i])
        }
    }    
}

fancyArray(arr)
fancyArray(arr, "=>>")