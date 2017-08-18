function randomChance(quarters) {
    var numOfQuarters = 0;
    for (var i = quarters; i > 0; i--) {
        var num1 = 50;
        var num2 = Math.floor(Math.random()*100);
        if (num1 == num2) {
            var win = Math.floor((Math.random()*50) + 50);
            numOfQuarters = i + win;
            console.log(i + " coins left when you won " + win + " coins. New total is " + numOfQuarters);
            return numOfQuarters;
        }
        else {
            console.log("lost " + (i - 1) + " coins left")
            continue
        }
    }
    console.log("Out of Coins")
}
randomChance(100)