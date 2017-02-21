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
