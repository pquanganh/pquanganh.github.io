// By Quang Anh Phan
// Define variables
var fingersDiv = document.getElementById('fingers-box');
var toesDiv = document.getElementById('toes-box');

// Function to start the counter when press start button
function startCounter() {
    var inputNumber = document.getElementById('number-input').value;
    console.log('Here is the input number');
    console.log(inputNumber);
    countUp(inputNumber);
}

// Function to restart the counter when press restart button
function restartCounter() {
    var inputNumber = document.getElementById('number-input').value;
    document.getElementById('displayed-number').innerHTML = "0";
    countUp(inputNumber);
}

// Make sure to clear out all old intervals to restart or start again
function clearAllIntervals() {
    for (var i = 1; i < 99999; i++) {
        clearInterval(i);
    }
}

// Function to reset the counter and input when press reset button
function resetCounter() {
    clearAllIntervals();
    document.getElementById('number-input').value = "";
    document.getElementById('displayed-number').innerHTML = "0";
    fingersDiv.style.color = 'black';
    toesDiv.style.color = 'black';
    toesDiv.style.backgroundColor = 'transparent';
    fingersDiv.style.backgroundColor = 'transparent';
}

// Function for the counter and the highlighted blocks
function countUp(maxNum) {
    clearAllIntervals();
    var startNum = 1; // set variable start counting number as 1
    var displayedNumber = document.getElementById('displayed-number');
    var intervalId = setInterval(function(){
        console.log(intervalId);
        console.log('interval gets called');
        var newNum = startNum++; //counting up by 1
        console.log(newNum);


