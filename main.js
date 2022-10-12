// class Calculator {
//     constructor(){





//     }    
// }

let displayArea = document.querySelector(".display2");

let buttons = [...document.querySelectorAll('[data-number]')];

buttons.forEach(button=>{
    button.addEventListener('click', e=>{
        displayArea.textContent += e.target.textContent;
    })
})