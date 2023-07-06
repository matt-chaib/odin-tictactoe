
const Gameboard = (function () {
    let values = Array(9).fill("-")
    
    const createCell = (row, value, index) => {
                var cell = row.insertCell();
                cell.addEventListener("click", (event) => {console.log(`${event.target.innerHTML} ${index}`)});
                cell.classList.add("cell")
                cell.innerHTML = value
    } 
    
    const printBoard = () => {
        const boardElement = document.getElementById("board");
        const table = document.createElement("TABLE");
        let row;
        values.forEach((value, index) => {
            if (index % 3 == 0) {
                row = table.insertRow();
            }
            createCell(row, value, index)
        })

        const previous_table = document.getElementById("table")
        previous_table ? boardElement.replaceChild(previous_table, table) : boardElement.appendChild(table)
        
    }

    const setValue = (position, token) => {
        values[position] =  token
    }

    const moveValid = (position) => {
        return values[position] === "-"
    }

    return { setValue, printBoard, moveValid }
})();

const Player = (token) => {

    const makeMove = (position, board) => {
        board.setValue(position, token)
    }

    return { token, makeMove };
  };

const Game = () => {
    const player1 = Player('X');
    const player2 = Player('O');

    const getPlayerMove = (player) => {
        let input = Number(prompt("Enter a number"))
        while (!Gameboard.moveValid(input)) {
            input = Number(prompt("Invalid move. Enter a number"))
        }
        player.makeMove(input, Gameboard)
    }

    const playGame = () => {
        getPlayerMove(player1)
        getPlayerMove(player2)
    }

    playGame();

    return {}
}

const game = Game()

Gameboard.printBoard();

