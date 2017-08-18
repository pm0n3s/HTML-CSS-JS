var HOUR = 11;
var MINUTE = 39;
var PERIOD = "AM";

if (HOUR == 12 && MINUTE == 0) {
    if (PERIOD == "AM") {
        console.log("It's midnight")
    }
    else if (PERIOD == "PM") {
        console.log("It's noon")
    }
}
else if (MINUTE == 5) {
    if (PERIOD == "AM") {
        console.log("It's 5 after " + HOUR + " in the the morning")
    }
    else if (PERIOD == "PM") {
        if (HOUR <= 4 || HOUR == 12) {
            console.log("It's 5 after " + HOUR + " in the the afternoon")
        }
        else if (HOUR >= 8) {
            console.log("It's 5 after " + HOUR + " at night")
        }
        else {
            console.log("It's 5 after " + HOUR + " in the the evening")
        }
    }
}
else if (MINUTE == 15) {
    if (PERIOD == "AM") {
        console.log("It's a quarter after " + HOUR + " in the the morning")
    }
    else if (PERIOD == "PM") {
        if (HOUR <= 4 || HOUR == 12) {
            console.log("It's a quarter after " + HOUR + " in the the afternoon")
        }
        else if (HOUR >= 8) {
            console.log("It's a quarter after " + HOUR + " at night")
        }
        else {
            console.log("It's a quarter after " + HOUR + " in the the evening")
        }
    }
}
else if (MINUTE == 30) {
    if (PERIOD == "AM") {
        console.log("It's half past " + HOUR + " in the the morning")
    }
    else if (PERIOD == "PM") {
        if (HOUR <= 4 || HOUR == 12) {
            console.log("It's half past " + HOUR + " in the the afternoon")
        }
        else if (HOUR >= 8) {
            console.log("It's half past " + HOUR + " at night")
        }
        else {
            console.log("It's half past " + HOUR + " in the the evening")
        }
    }
}
else if (MINUTE > 30) {
    if (HOUR == 12) {
        HOUR = 1;
    }
    else if (HOUR == 11) {
        if (PERIOD == "AM") {
            HOUR = HOUR + 1;
            PERIOD = "PM";
        }
        else if (PERIOD == "PM") {
            HOUR = HOUR + 1;
            PERIOD = "AM";
        }
    }
    else {
        HOUR = HOUR + 1;
    }
    if (PERIOD == "AM") {
        console.log("It's almost " + HOUR + " in the the morning")
    }
    else if (PERIOD == "PM") {
        if (HOUR <= 4 || HOUR == 12) {
            console.log("It's almost " + HOUR + " in the the afternoon")
        }
        else if (HOUR >= 8) {
            console.log("It's almost " + HOUR + " at night")
        }
        else {
            console.log("It's almost " + HOUR + " in the the evening")
        }
    }
}
else if (MINUTE < 30) {
    if (PERIOD == "AM") {
        console.log("It's just after " + HOUR + " in the the morning")
    }
    else if (PERIOD == "PM") {
        if (HOUR <= 4 || HOUR == 12) {
            console.log("It's just after " + HOUR + " in the the afternoon")
        }
        else if (HOUR >= 8) {
            console.log("It's just after " + HOUR + " at night")
        }
        else {
            console.log("It's just after " + HOUR + " in the the evening")
        }
    }
}