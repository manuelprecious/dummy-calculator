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



// Event listeners for all operand buttons
operationButtons.forEach(button => {
    button.addEventListener('click', event => {
        pointState = false;
        updateState(event);
    })
})

// Function for handling the operands
function updateState(element) {
    if(initSum() !== 0 && operationState === true){
        let changeSymbolArr = [...displayArea2.textContent];
        changeSymbolArr.splice(-1, 1, element.target.textContent);
        displayArea2.textContent = changeSymbolArr.join('');
    }
    else if (initSum() !== 0 && operationState === false) {
        displayArea2.textContent = displayArea2.textContent + element.target.textContent;
        operationState = true;
    }
}

//Functionality to check the Initial sum
function initSum() {
    return [...displayArea2.textContent].map(value => Number(value)).reduce((Accum, InitialVal) => Accum += InitialVal, 0);
}


// Functionality to delete one item from the end
deleteButton.addEventListener('click', event => {
    if (displayArea2.textContent.length <= 1) {
        displayArea2.textContent = 0;
    } else {
        displayArea2.textContent = displayArea2.textContent.slice(0, -1);
    }
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
    stateNegativeOrPositive = true;
}

function clr() {
    displayArea2.textContent = 0;
}


// Functionality to display numbers on the page
numberButtons.forEach(button => {
    button.addEventListener('click', event => {
        
        stateNegativeOrPositive = true;
        if (pointState == false && event.target.textContent === '.' && displayArea2.textContent === '0' && displayArea2.textContent.length === 1){
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
    }
})