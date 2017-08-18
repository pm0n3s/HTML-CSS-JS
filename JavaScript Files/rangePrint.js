function printRange(x, y, z) {
    if (z == null || z === 0){
        for (var i = x; i < y; i++) {
            console.log(i)
        }
    }
    else {
        if (z > 0) {
            for (var i = x; i < y; i += z) {
                console.log(i)
            }
        }
        else if (z < 0) {
            for (var i = x; i > y; i += z) {
                console.log(i)
            }
        }
    }
}