// SETUP VARIABLES
var doneButton = $("#done");
var countDown = 5;
var intervalId;
//======================
// FUNCTIONS
//======================
// MAIN PROCESSESS
//======================

//1. Retrieve user inputs and convert to variables
//2. Use those variables to compare with right answers
//
//this hides temporarly the trivia questions until the start button is clicked
$(document).ready(function(){
    $("#questions").ready(function(){$("#questions").hide();})
});
//once the start button is clicked, it will hide the start
//button and display the trivia questions and activates the countdown.
    $("#start").click(function(){
    $("#questions").show();
    intervalId = setInterval(decrement, 1000);
    $("#start").hide();
});

function decrement(){
    // decrease countDown by one second
    countDown--;
    $("#timeremaining").html("<h2>" + countDown + "</h2>");
    // once countDown hits zero
    if (countDown === 0 ){
        stop();
    }
}

function stop(){
    clearInterval(intervalId);
    $("#questions").hide();
}
//$(document).ready(function(){})
