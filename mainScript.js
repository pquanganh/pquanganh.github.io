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
        if (newNum < maxNum) {
            if (newNum % 5 === 0 && newNum % 3 === 0) { // divisible by 3 and 5
                fingersDiv.style.backgroundColor = 'red';
                fingersDiv.style.color = 'black';
                toesDiv.style.backgroundColor = 'red';
                toesDiv.style.color = 'black';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 5 === 0) { // divisible by 5
                fingersDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.color = 'black';
                toesDiv.style.backgroundColor = 'red';
                toesDiv.style.color = 'black';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 3 === 0) { // divisible by 3
                toesDiv.style.backgroundColor = 'transparent';
                toesDiv.style.color = 'black';
                fingersDiv.style.backgroundColor = 'red';
                fingersDiv.style.color = 'black';
                displayedNumber.innerHTML = newNum.toString();
            }
            else { // not divisible by 3 or 5
                toesDiv.style.color = 'black';
                fingersDiv.style.color = 'black';
                toesDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.backgroundColor = 'transparent';
                displayedNumber.innerHTML = newNum.toString();
            }
        }
        if (newNum == maxNum) {
            if (newNum % 5 === 0 && newNum % 3 === 0) { // divisible by 3 and 5
                fingersDiv.style.backgroundColor = 'red';
                fingersDiv.style.color = 'black';
                toesDiv.style.backgroundColor = 'red';
                toesDiv.style.color = 'black';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 5 === 0) { // divisible by 5
                fingersDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.color = 'black';
                toesDiv.style.backgroundColor = 'red';
                toesDiv.style.color = 'black';
                displayedNumber.innerHTML = newNum.toString();
            }
            else if (newNum % 3 === 0) { // divisible by 3
                fingersDiv.style.backgroundColor = 'red';
                fingersDiv.style.color = 'black';
                toesDiv.style.backgroundColor = 'transparent';
                toesDiv.style.color = 'black';
                displayedNumber.innerHTML = newNum.toString();
            }
            else { //not divisible by 3 or 5
                fingersDiv.style.color = 'black';
                toesDiv.style.color = 'black';
                toesDiv.style.backgroundColor = 'transparent';
                fingersDiv.style.backgroundColor = 'transparent';
                displayedNumber.innerHTML = newNum.toString();
            }
            displayedNumber.innerHTML = newNum.toString();
            clearInterval(intervalId);
        }
    }, 1000);
}


