let preVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
// Store whether or not decimal was clicked
// Only allow one decimal per value
let decimalClicked = false
// Hold values we want stored in memory
let valMemStored = ''

function numButPress(num) {
    // If a number has already been placed
    if (resultVal) {
        // Start a new number
        newVal = num
        // Reset to create a new result
        resultVal = ''
    } else {
        // Used to block multiple decimals
        if (num === '.') {
            if (decimalClicked != true) {
                //take current value of new value and add character pressed
                newVal += num
                decimalClicked = true
            }
        } else {
            newVal += num
        }
    }
    // Update the display
    document.getElementById('entry').value = newVal
}

function mathButPress(operator) {

}

function equalButPress() {

}

// Clears everything EXCEPT memory
function clearButPress() {
    preVal = ''
    newVal = ''
    resultVal = ''
    mathOperator = ''
    decimalClicked = false
    document.getElementById('entry').value = '0'
}

// To store the current value in entry in val mem stored
function copyButPress() {
    valMemStored = document.getElementById('entry').value
}

// If a value has been stored, paste it in entry window and assign it as new val. 
function pasteButPress() {
    if (valMemStored) {
        document.getElementById('entry').valMemStored
        newVal = valMemStored
    }
}