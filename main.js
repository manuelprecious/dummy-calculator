// class Calculator {
//     constructor(){





//     }    
// }

let displayArea = document.querySelector(".display2");

let buttons = [...document.querySelectorAll('[data-number]')];
let buttonClear = document.querySelector('[data-clear]');
let buttonDelete = document.querySelector('[data-delete]');


let pointOn = false;

// method to push text to display.
buttons.forEach(button=>{
    
    button.addEventListener('click', e=>{

        if(button.textContent === '.' && pointOn === false){
            displayArea.textContent += button.textContent;
            pointOn = true;
        } else if(button.textContent === '.' && pointOn === true){
            return;
        } else{
            displayArea.textContent += button.textContent;
        }
    })
})

//method to clear everything and clear the display area.
buttonClear.addEventListener('click', e=>{
    displayArea.textContent = '';
})

// method to delete everything from the end of the display area.
buttonDelete.addEventListener('click', e=>{
    displayArea.textContent = displayArea.textContent.toString().slice(0, -1);
})

