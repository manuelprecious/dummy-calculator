let numberButtons = [...document.querySelectorAll("[data-number]")];
let displayArea1 = document.querySelector('.display1');
let displayArea2 = document.querySelector('.display2');
let deleteButton = document.querySelector('[data-delete]');
let clearButton = document.querySelector('[data-clear]');
let buttonDataState = document.querySelector('[data-state]');
let buttonPositiveOrNegative = document.querySelector('[data-state]')

let buttonEquals = document.querySelector('[data-equals]');
let operationButtons = [...document.querySelectorAll('[data-operation]')]
let operand = '';

displayArea2.textContent = 0;
let operationState = false;
let pointState = false;
let stateNegativeOrPositive = true;
let zeroAfterSymbol = false;
let myRegex = new RegExp('[0-9.]+', 'g');
let stringOperatorRegex = /\s[-+x÷]\s$/g;
let lastNumberToRegexPattern = /(?<=\s[+-x÷]\s)[.\d-]$/g

// Event listeners for all operand buttons
operationButtons.forEach(button => {
    button.addEventListener('click', event => {
        pointState = false;
        updateState(event);
    })
})

// Function for handling the operands
function updateState(element) {
    if(initSum() !== 0 
    && operationState === false 
    && element.target.textContent.match(stringOperatorRegex) !== displayArea2.textContent.slice(-3)){
        displayArea2.textContent += element.target.textContent;
        operationState = true;
    }
    else if(initSum() !==0
    && operationState === true
    && element.target.textContent.match(stringOperatorRegex)[0].split('').join("") 
    === element.target.textContent.slice(-3).split("").join("")){
        let changeSymbolArr = [...displayArea2.textContent];
        changeSymbolArr.splice(-3, 3);
        displayArea2.textContent = changeSymbolArr.join('') + element.target.textContent;
    }
    // if(initSum() !== 0 && operationState === true && stateNegativeOrPositive === true){
    //     let changeSymbolArr = [...displayArea2.textContent];
    //     changeSymbolArr.splice(-3, 3);
    //     displayArea2.textContent = changeSymbolArr.join('') + element.target.textContent;
    //     console.log([...displayArea2.textContent])
    // }
    // else if (initSum() !== 0 && operationState === false && stateNegativeOrPositive === true) {
    //     displayArea2.textContent = displayArea2.textContent + element.target.textContent;
    //     operationState = true;
    // }
}

//Functionality to check the Initial sum
function initSum() {
    return [...displayArea2.textContent].map(value => Number(value)).reduce((Accum, InitialVal) => Accum += InitialVal, 0);
}


// Functionality to delete one item from the end
deleteButton.addEventListener('click', event => {
    let myString = displayArea2.textContent;
    let stringMatch = myString.match(myRegex);
    let stringNegativePositive = displayArea2.textContent;
    let stringOperatorCheck = displayArea2.textContent;

    if(displayArea2.textContent.length === 1){
        displayArea2.textContent = 0;
        pointState = false;
        return;
    } else if(lastNumberToRegexPattern.test(stringOperatorCheck) === true){
        pointState = false;
        operationState = true;
        stateNegativeOrPositive = true;

    } else if(stringOperatorRegex.test(stringOperatorCheck) === true){
         displayArea2.textContent = displayArea2.textContent.slice(0, -3);
         return;
    } else if(stringNegativePositive[stringNegativePositive.length -1].indexOf('-') !== -1 
    && displayArea2.textContent.slice(-1) === '-'){
        stateNegativeOrPositive = true;
        operationState = true;
    }  else if(stringMatch[stringMatch.length-1].indexOf('.') !== -1){
        pointState = true;
        stateNegativeOrPositive = true;
    } else if(stringMatch[stringMatch.length-1].indexOf('.') === -1 
    && typeof Number(stringMatch.slice(-1))==='number'){
        pointState = false
    }
    displayArea2.textContent = displayArea2.textContent.slice(0, -1);
})

// Functionality to clear Everything from the screen
clearButton.addEventListener('click', event => {
    clrAll();
})

function clrAll() {
    displayArea1.textContent = '';
    displayArea2.textContent = 0;
    operationState = false;
    pointState = false;
    zeroAfterSymbol = false;
    stateNegativeOrPositive = true;
}

function clr() {
    displayArea2.textContent = 0;
}


// Functionality to display numbers on the page
numberButtons.forEach(button => {
    button.addEventListener('click', event => {

        stateNegativeOrPositive = true;
        if(operationState === true && zeroAfterSymbol === true && event.target.textContent === '0'){
            return;
        } else if (operationState === true && zeroAfterSymbol === false && event.target.textContent === '0'){
            displayArea2.textContent += '0'
            zeroAfterSymbol = true;
        } else if(operationState === true && zeroAfterSymbol === true && event.target.textContent !== '0'){
            let replacingZero = [...displayArea2.textContent];
            replacingZero.splice(-1, 1, event.target.textContent);
            operationState = false;
            zeroAfterSymbol = false;
            displayArea2.textContent = replacingZero.join('');
        }
        else if (pointState == false && event.target.textContent === '.'
        && displayArea2.textContent === '0' && displayArea2.textContent.length === 1){
          displayArea2.textContent = '.';
          pointState = true;
        } else if (initSum()===0){
            displayArea2.textContent = event.target.textContent;
            operationState = false;
        } else if(event.target.textContent === '.' && pointState === false){
            displayArea2.textContent += event.target.textContent;
            pointState = true;
            operationState = false;
        } else if (event.target.textContent !== '.'){
            displayArea2.textContent += event.target.textContent;
            operationState = false;
        }
    });
});

buttonPositiveOrNegative.addEventListener('click', e=>{
    if(stateNegativeOrPositive === true && operationState === true){
        displayArea2.textContent += '-';
        stateNegativeOrPositive = false;
    } else if(stateNegativeOrPositive === false && operationState === true){
        return;
    } else if (stateNegativeOrPositive === true && initSum()==0){
        displayArea2.textContent = '-';
    } else if(e.target.textContent === '+/-' && stringOperatorRegex.test(displayArea2.textContent) === true){
        displayArea2.textContent += '-'
        stateNegativeOrPositive = false;
    }
    else{

    }
})