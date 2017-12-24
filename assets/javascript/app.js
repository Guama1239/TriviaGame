
// SETUP VARIABLES
var doneButton = $("#done");
var countDown = 35;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var outputMovie = "";
var outputSpice = "";
var outputNba = "";
var outputSong = "";
var outputDmovie = "";
var outputPlate = "";
var outputFriend = "";
var outputPriname = "";
var correctMovie = "Toy Story";
var correctSpice = "Fred Spice";
var correctNba = "Chicago Bulls";
var correctSong = "Nirvana";
var correctDmovie = "The Lion King";
var correctPlate = "Fresh";
var correctFriend = "Skeeter";
var correctPriname = "Mr. Belding";

//======================
// FUNCTIONS
//======================
// MAIN PROCESSESS
//======================

//1. Retrieve user inputs and convert to variables
//2. Use those variables to compare to right answers
//
//this hides temporarly the trivia questions until the start button is clicked
$(document).ready(function(){
    $("#questions").ready(function(){$("#questions").hide();$("#alldone").hide() })
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
    $("#timeremaining").html("Time Remaining : " + countDown);
    // once countDown hits zero
    if (countDown === 0 ){
        stop();
    }
}

function alldone(){
    var form1 = document.querySelector("#movie");
    var data1 = new FormData(form1);
    var form2 = document.querySelector("#spice");
    var data2 = new FormData(form2);
    var form3 = document.querySelector("#NBA");
    var data3 = new FormData(form3);
    var form4 = document.querySelector("#song");
    var data4 = new FormData(form4);
    var form5 = document.querySelector("#dmovie");
    var data5 = new FormData(form5);
    var form6 = document.querySelector("#plate");
    var data6 = new FormData(form6);
    var form7 = document.querySelector("#friend");
    var data7 = new FormData(form7);
    var form8 = document.querySelector("#priname");
    var data8 = new FormData(form8);
    //=====================================
    for (const entry of data1) {
        outputMovie = entry[1];
    }
    if (outputMovie===correctMovie) {
        correctAnswers++;
    } else if (outputMovie==="") {
        unAnswered++;
    } else {incorrectAnswers++;}
    //====================================

    
    
    for (const entry of data2) {
        outputSpice = entry[1];
    }
    if (outputSpice===correctSpice) {
        correctAnswers++;
    } else if (outputSpice==="") {
        unAnswered++;
    } else {incorrectAnswers++;}
    //=======================================
    for (const entry of data3) {
        outputNba = entry[1];
    }
    if (outputNba===correctNba) {
        correctAnswers++;
    } else if (outputNba==="") {
        unAnswered++;
    } else {incorrectAnswers++;}
    //=======================================
    for (const entry of data4) {
        outputSong = entry[1];
    }
    if (outputSong===correctSong) {
        correctAnswers++;
    } else if (outputSong==="") {
        unAnswered++;
    } else {incorrectAnswers++;}
    //=====================================
    for (const entry of data5) {
        outputDmovie = entry[1];
    }
    if (outputDmovie===correctDmovie) {
        correctAnswers++;
    } else if (outputDmovie==="") {
        unAnswered++;
    } else {incorrectAnswers++;}
    //=====================================
    for (const entry of data6) {
        outputPlate = entry[1];
    }
    if (outputPlate===correctPlate) {
        correctAnswers++;
    } else if (outputPlate==="") {
        unAnswered++;
    } else {incorrectAnswers++;}
    //====================================
    for (const entry of data7) {
        outputFriend = entry[1];
    }
    if (outputFriend===correctFriend) {
        correctAnswers++;
    } else if (outputFriend==="") {
        unAnswered++;
    } else {incorrectAnswers++;}
    //====================================
    for (const entry of data8) {
        outputPriname = entry[1];
    }
    if (outputPriname===correctPriname) {
        correctAnswers++;
    } else if (outputPriname==="") {
        unAnswered++;
    } else {incorrectAnswers++;}
    //====================================
    $("#alldone").show();
    $("#CorrectAnswers").html("Correct Answers : " + correctAnswers);
    $("#IncorrectAnswers").html("Incorrect Answers : " + incorrectAnswers);
    $("#Unanswered").html("Unanswered : " + unAnswered);
}

function stop(){
    clearInterval(intervalId);
    $("#questions").hide();
    alldone();
}


// when the button DONE is clicked
$("#done").click(function(){stop()});

 
//$(document).ready(function(){})
