const prompt = require("prompt-sync")()
function makeMove(turn, board){
    while(true){
        const row = parseInt(prompt("Enter the row: "))
        const col = parseInt(prompt("Enter the col: "))
        if ( isNaN(row) || row < 1 || row > 3)
            console.log("Invalid row")
        if (isNaN(col) || col < 1 || col >3)
            console.log("Invalid column")
        else if (board[row - 1][col -1] !== " ")
            console.log("Invalid Position")
        else{
            board[row - 1][col - 1] = turn 
            break
        }
    }
}
function printBoard(board){
    for (let i = 0; i < board.length ; i++){
        const row = board[i]
        let rowString = ""
        for (let j = 0; j < row.length; j++){
            rowString += row[j]
            if (j!== row.length - 1)
                rowString += " | "
        }
        console.log(rowString)
        if ( i !== board.length -1)
            console.log("----------")
    }
}



const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]
let turn = "X"
let turnCount = 0
while(turnCount < 9 ){
    makeMove(turn, board)
    printBoard(board)
    if (turn === "X")
        turn = "O"
    else
        turn = "X"
    turnCount++;
}
