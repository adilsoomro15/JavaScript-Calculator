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
    // Check if there was a previous calculation by seeing uf resultVal has a value. If result does not have a value then store the current val as a previous for the next calculation
    if (!resultVal) {
        preVal = newVal
    } else {
        // If there is a current result store that as the previous value entered
        preVal = resultVal
    }
    // Restart creation of new number
    newVal = ''
    // Reset decimalClicked
    decimalClicked = false
    // Store operator clicked
    mathOperator = operator
    // Prepare entry for receiving new numbers
    resultVal = ''
    document.getElementById('entry').value = ''
}

function equalButPress() {
    // Reset decimalClicked
    decimalClicked = false
    // Convert string to floats
    preVal = parseFloat(preVal)
    newVal = parseFloat(newVal)
    // Perform calculations based on stored operator
    switch(mathOperator){
        case '+':
            resultVal = preVal + newVal
        break
        case '-':
            resultVal = preVal - newVal
        break
        case '*':
            resultVal = preVal * newVal
        break
        case '/':
            resultVal = preVal / newVal
        break
        // If equals is hit without an operator, leave everything as is
        default:
            resultVal = newVal
    }
    // Store the current value as the previous
    preVal = newVal
    // Put the calculation result in the entry window
    document.getElementById('entry').value = resultVal
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