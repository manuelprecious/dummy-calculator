let numberButtons = [...document.querySelectorAll("[data-number]")];
let displayArea2 = document.querySelector('.display2');

displayArea2.textContent = 0;



function initSum(){
    return [...displayArea2.textContent].map(value => Number(value)).reduce((Accum, InitialVal) => Accum += InitialVal, 0);
}
console.log(typeof initSum());


numberButtons.forEach(button => {

    button.addEventListener('click', event => {
        if (displayArea2.textContent.indexOf('.') == -1 && event.target.textContent === '.') {
            displayArea2.textContent += '.'
        } else if (event.target.textContent !== '.' && initSum() !== 0) {
            displayArea2.textContent += event.target.textContent;
            console.log(initSum());
        } else if (event.target.textContent !== '.' && initSum() === 0) {
            displayArea2.textContent = event.target.textContent;
            console.log(initSum())
        }
    })
})

