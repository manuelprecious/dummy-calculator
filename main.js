// class Calculator {
//     constructor(){





//     }    
// }

let displayArea = document.querySelector(".display2");

let buttons = [...document.querySelectorAll('[data-number]')];

let pointOn = false;

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