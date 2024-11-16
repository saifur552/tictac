let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
const statusDisplay = document.getElementById("status");

// Winning conditions for Tic Tac Toe
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cell, index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;

        if (checkWin()) {
            statusDisplay.innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }

        if (board.includes("")) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusDisplay.innerText = `Player ${currentPlayer}'s turn`;
        } else {
            statusDisplay.innerText = "It's a draw!";
            gameActive = false;
        }
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusDisplay.innerText = `Player ${currentPlayer}'s turn`;

    // Clear the board display
    document.querySelectorAll(".cell").forEach(cell => (cell.innerText = ""));
}
