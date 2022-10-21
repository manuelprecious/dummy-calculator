let numberButtons = [...document.querySelectorAll("[data-number]")];
let displayArea1 = document.querySelector('.display1');
let displayArea2 = document.querySelector('.display2');
let deleteButton = document.querySelector('[data-delete]');
let clearButton = document.querySelector('[data-clear]');
let buttonDataState = document.querySelector('[data-state]');

let buttonEquals = document.querySelector('[data-equals]');
let operationButtons = [...document.querySelectorAll('[data-operation]')]
let operand = '';

displayArea2.textContent = 0;
let operationState = false;

operationButtons.forEach(button=>{
    button.addEventListener('click', event=>{
        
        operand = event.target.textContent;
        updateState(event);
    })
})

function updateState(element){
    if(initSum() === 0 && operationState){

    } else if(initSum() !==0 && operationState === false){
        displayArea2.textContent = displayArea2.textContent + element.target.textContent;
        operationState = true;
    }
}

// Functionality to check the Initial sum
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

function clrAll(){
    displayArea1.textContent = '';
    displayArea2.textContent = 0;
}

function clr(){
    displayArea2.textContent = 0;
}
// Functionality to display numbers on the page
numberButtons.forEach(button => {

    button.addEventListener('click', event => {
        if (displayArea2.textContent.indexOf('.') == -1 && event.target.textContent === '.') {
            displayArea2.textContent += '.'
        } else if (event.target.textContent !== '.' && initSum() !== 0) {
            displayArea2.textContent += event.target.textContent;
        } else if (event.target.textContent !== '.' && initSum() === 0) {
            displayArea2.textContent = event.target.textContent;
        }
    });
});