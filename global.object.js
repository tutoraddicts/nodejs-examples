// var time = 0;
// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + "sec time passed");

//     if (time > 8) {
//         clearInterval(timer);
//         console.log("Your life is over /... you have to die");
//     }
// }, 2000);

time = 5;
console.log("Your have left " + time + "sec");
setTimeout(function() {
    time -= 1;
    console.log("Lets go you have to die your time is over :(");
}, 5000);