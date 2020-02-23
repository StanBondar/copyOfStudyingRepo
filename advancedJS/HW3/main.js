
// Creates array with tables and adds attribute 'data-number' to each table
let timeout = null;
const cells = countCells();
const playersCells = [];
const computerCells = [];
const initialCellsLength = cells.length;
let lastCell = null;
let interval = null;

function countCells() {
    const cells = document.querySelectorAll('.whole');
    let counter = 0;
    let cellsArray = [];
    cells.forEach(elem => {
        elem.setAttribute('data-number', counter);
        cellsArray.push(elem);
        counter++;
    })
    return cellsArray;
}

//Chooses random cell ,calls 'chooseActiveCell' func and returns random cell. Accepts array with cells
function chooseRandomCell(cells) {
    const randomCell = randomiseCell(cells.length - 1);
    console.log(`Random index = ${randomCell}`);
    chooseActiveCell(cells[randomCell]);
    return cells[randomCell];
}

//generates integer number between 0 and given number and returns it
function randomiseCell(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function lostCell(cell) {
    cell.classList.remove('active-cell');
    cell.classList.add('computers-cell');
}

function wonCell(cell) {
    cell.classList.remove('active-cell');
    cell.classList.add('players-cell');
}

function chooseActiveCell(cell) {
    cell.classList.add('active-cell');
}

function repeatRandomCellChoosing(interval) {
    lastCell = chooseRandomCell(cells);
    timeout = setTimeout(function tick() {
        if (lastCell) {
            lostCell(lastCell);
            // console.log(cells.length);
            computerCells.push(cells.splice(cells.indexOf(lastCell), 1));
            console.log(computerCells.length);
        }
        if (cells.length > 0 && computerCells.length < Math.ceil(initialCellsLength / 2)) {
            lastCell = chooseRandomCell(cells);
            // console.log(`Current cell - ${lastCell}`);
            timeout = setTimeout(tick, interval);
        } else {
            clearTimeout(timeout);
            showResult();
            console.log('Done');
        }
    }, interval);
}

function getInterval() {
    const difficultnessValue = +$('input[type="radio"]:checked').val();
    return difficultnessValue;
}

function showResult() {
    const playerScore = playersCells.length;
    const computerScore = computerCells.length;
    if (playerScore > computerScore) {
        $('#totalScoreTitle').text('Player won!');
    } else {
        $('#totalScoreTitle').text('Era of SkyNet begans!');
    }
    $('.player-score').text(`Player score: ${playerScore}`);
    $('.computer-score').text(`Computer score: ${computerScore}`);
    $('#exampleModal').modal('show');
}

const playField = document.querySelector('.game-field');
const startButton = document.querySelector('.start');

playField.addEventListener('click', function (event) {
    if (event.target.classList.contains('active-cell')) {
        clearTimeout(timeout);
        wonCell(event.target);
        playersCells.push(cells.splice(cells.indexOf(lastCell), 1));
        if (cells.length > 0 && playersCells.length < Math.ceil(initialCellsLength / 2)) {
            repeatRandomCellChoosing(interval);
        } else {
            showResult();
        }
    }
})

startButton.addEventListener('click', function () {
    interval = getInterval();
    console.log(interval);
    repeatRandomCellChoosing(interval);
})

$(window).ready(function () {
    $('#startGameModal').modal('show');
});


                // class Player {
                //     constructor(name) {
                //         this._name = name;
                //         this._score = 0;
                //     }

                //     get name() {
                //         return this._name;
                //     }

                //     get score() {
                //         return this._score;
                //     }

                //     set name(value) {
                //         this._name = value;
                //     }

                //     increaseScore() {
                //         this._score += 1;
                //     }
                // }