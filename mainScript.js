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
