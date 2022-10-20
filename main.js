let numberButtons = [...document.querySelectorAll("[data-number]")];
let displayArea1 = document.querySelector('.display1');
let displayArea2 = document.querySelector('.display2');
let deleteButton = document.querySelector('[data-delete]');
let clearButton = document.querySelector('[data-clear]');
let buttonDataState = document.querySelector('[data-state]');
let buttonAdd = document.querySelector('[data-add]');
let buttonSubtract = document.querySelector('[data-subtract]');
let buttonMultiply = document.querySelector('[data-multiply]');
let buttonEquals = document.querySelector('[data-equals]');
displayArea2.textContent = 0;
let initialState = true;


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
    displayArea1.textContent = 0;
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

// Function for Adding
buttonAdd.addEventListener('click', event=>{
    displayArea1.textContent = Number(displayArea1.textContent) + Number(displayArea2.textContent);
    clr();
});

buttonSubtract.addEventListener('click', event=>{
    displayArea1.textContent = Number(displayArea1.textContent) - Number(displayArea2.textContent);
    clr();
});

buttonMultiply.addEventListener('click', event=>{
    if(displayArea2.textContent.length === 1 && initSum() === 0){
        
    }
    displayArea1.textContent = Number(displayArea1.textContent) * Number(displayArea2.textContent);
    clr();
});

// //Function for subtracting
// buttonSubtract.addEventListener('click', event=>{
//     // displayArea1.textContent = Number(displayArea1.textContent) - Number(displayArea2.textContent);
//     // clr();
//     console.log('My hox')
// });

// Function Equals
buttonEquals.addEventListener('click', event=>{
    if(typeof displayArea2.textContent === 'string' || typeof displayArea1.textContent === 'number'){
        displayArea1.textContent = Number(displayArea2.textContent);
    };
});