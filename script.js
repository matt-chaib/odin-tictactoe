
const Gameboard = function () {
    let values = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X']
    
    const createCell = (row, value) => {
                var cell = row.insertCell();
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
            createCell(row, value)
        })

        boardElement.appendChild(table)
        
    }

    const setValue = (position, token) => {
        values[position] =  token
    }

    console.log(printBoard());

    return { setValue, printBoard }
};

const Player = (token) => {

    const makeMove = (position) => {
        Gameboard.setValue(position, token)
    }
    return { token, makeMove };
  };
  
const player1 = Player('X');
player1.makeMove(1)

Gameboard.printBoard();