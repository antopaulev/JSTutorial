const prompt = require('prompt-sync')()
const name = prompt('What is your name? ')
console.log(`Hello, ${name}! Welcome to the Game!!!.`)
const shouldWePlay = prompt('should we play? ')
if (shouldWePlay.toLowerCase() === 'yes'){
    const leftOrRight = prompt("u enter a maze now u choose where u wanna go lelft or right? ").toLocaleLowerCase()
    if (leftOrRight === "right"){
        const bridge = prompt("u see a bridge u u want to cross that !!!!!   ").toLocaleLowerCase()
        if (bridge === "yes" || bridge === "y" ||bridge ===  "cross")
            console.log("u fell from the bridge .... ur out")
        else
            console.log("congarts u didnt cross, dead end u win!!")
    }else if (leftOrRight === "straight"){
        const monster = prompt("u see a monster do u want to fight it? ").toLocaleLowerCase()
        if (monster === "yes" || monster === "y" || monster === "fight")
            console.log("u fought the monster but u lost, ur out!!")
        else
            console.log("u ran from the monster, u win!!")
    }
    else
        console.log("u chose left it was a wrong path. ur out!!")
    
} 
else if(shouldWePlay.toLowerCase() === 'no') {
    console.log('No worries! Maybe next time.')
}
else {
    console.log('Invalid input. Please answer with "yes" or "no".')
}