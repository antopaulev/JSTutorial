const prompt = require("prompt-sync")()
function getNumber(numString){
    while(true){
    num = parseFloat(prompt("Enter number " + numString + " : "))
    if (isNaN(num))
        console.log("invalid input")
    else
        return num
}
}
const num1 = getNumber("One")
const num2 = getNumber("Two")
const operator = prompt("Enter the Sign: ")

let result ;
let valid = true
switch (operator){
    case "+":
        result = num1 + num2
        break
    case "-":
        result = num1 - num2

        break
    case "*":
        result = num1 + num2 
        break
    case "/":
        if (num2 === 0){
            valid = false
            console.log("Zero division Error !!!")
        }
        result = num1 / num2
        break
    default:
        console.log("Invalid")
        valid = false
        break

}
if (valid)
    console.log( num1, operator, num2, "=", result)
