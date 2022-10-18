(function blockFunction(){
// JavaScript Local variable environment.


    {                                             // First Block;
        let favoriteFood = "Mouse";               // Declaring a variable in the blockscope
        let animalSound = "Meow";                 // Declaring a variable in the blockscope
        console.log(favoriteFood);                  
        console.log(animalSound);
    }

    {                                             // Second block;
        let favoriteFood = "Grass";               // Declaring a variable in the blockscope
        let animalSound = "Mooo";                 // Declaring a variable in the blockscope
        console.log(favoriteFood);
        console.log(animalSound);
    }
})()

let cat = "Man";