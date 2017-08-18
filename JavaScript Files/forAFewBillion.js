var money = .01;
for (var days = 1; days <= 30; days ++) {
    var amount = money * 2;
    money = amount + money;
}
console.log("$" + money + " after 30 days")

var money = .01;
for (var days = 1; days <= 30; days ++) {
    var amount = money * 2;
    money = amount + money;
    if (money > 10000) {
        console.log("At " + days + " days you will have $" + money)
        break
    }
}

var money = .01;
for (var days = 1; days <= Infinity; days ++) {
    var amount = money * 2;
    money = amount + money;
    if (money > 1000000000) {
        console.log("At " + days + " days you will have $" + money)
        break
    }
}

var money = .01;
for (var days = 1; days <= Infinity; days ++) {
    var amount = money * 2;
    money = amount + money;
    if (money == Infinity) {
        console.log("At " + days + " days you will have " + money + " money")
        break
    }
}