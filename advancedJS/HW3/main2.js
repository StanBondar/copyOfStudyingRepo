class Game {
    constructor() {
        this.timeout = null;
        this.cells = function countCells() {
            const cells = document.querySelectorAll('.whole');
            let counter = 0;
            const cellsArray = [];
            cells.forEach(elem => {
                elem.setAttribute('data-number', counter);
                cellsArray.push(elem);
                counter++;
            })
            console.log(cellsArray);
            return cellsArray;
        };
        this.playersCells = [];
        this.computerCells = [];
        this.initialCellsLength = function countCells() {
            const cells = document.querySelectorAll('.whole');
            let counter = 0;
            const cellsArray = [];
            cells.forEach(elem => {
                elem.setAttribute('data-number', counter);
                cellsArray.push(elem);
                counter++;
            })
            return cellsArray.length;
        };
        this.lastCell = null;
        this.interval = null;
        this.initialField = $('.game-field').html();
        this.repeatRandomCellChoosing(this.interval);
        
    }

    // countCells() {
    //     const cells = document.querySelectorAll('.whole');
    //     let counter = 0;
    //     const cellsArray = [];
    //     cells.forEach(elem => {
    //         elem.setAttribute('data-number', counter);
    //         cellsArray.push(elem);
    //         counter++;
    //     })
    //     return cellsArray;
    // }

    chooseRandomCell(cells) {
        const randomCell = this.randomiseCell(cells.length - 1);
        console.log(`Random index = ${randomCell}`);
        this.chooseActiveCell(cells[randomCell]);
        return cells[randomCell];
    }

    randomiseCell(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    lostCell(cell) {
        cell.classList.remove('active-cell');
        cell.classList.add('computers-cell');
    }

    wonCell(cell) {
        cell.classList.remove('active-cell');
        cell.classList.add('players-cell');
    }

    chooseActiveCell(cell) {
        cell.classList.add('active-cell');
    }

    repeatRandomCellChoosing(interval) {
        // console.log(this.cells());
        this.lastCell = this.chooseRandomCell(this.cells());
        this.timeout = setTimeout(function tick() {
            if (this.lastCell) {
                lostCell(this.lastCell);
                // console.log(cells.length);
                this.computerCells.push(this.cells.splice(this.cells.indexOf(this.lastCell), 1));
                console.log(this.computerCells.length);
            }
            if (this.cells.length > 0 && this.computerCells.length<Math.ceil(this.initialCellsLength/2)) {
                this.lastCell = this.chooseRandomCell(this.cells);
                // console.log(`Current cell - ${lastCell}`);
                this.timeout = setTimeout(tick, interval);
            } else {
                clearTimeout(this.timeout);
                showResult();
                console.log('Done');
            }
        }, interval);
    }

    showResult() {
        const playerScore = this.playersCells.length;
        const computerScore = this.computerCells.length;
        if(playerScore>computerScore) {
            $('#totalScoreTitle').text('Player won!');
        }else{
            $('#totalScoreTitle').text('Era of SkyNet begans!');
        }
        $('.player-score').text(`Player score: ${playerScore}`);
        $('.computer-score').text(`Computer score: ${computerScore}`);
        $('#exampleModal').modal('show');
    }

    getInterval() {
        const difficultnessValue = +$('input[type="radio"]:checked').val();
        this.interval = difficultnessValue;
        console.log
        return difficultnessValue;
    }

}

// function getInterval() {
//     const difficultnessValue = +$('input[type="radio"]:checked').val();
//     return difficultnessValue;
// }

const playField = document.querySelector('.game-field');
const startButton = document.querySelector('.start');
let newGame = null;
$('.start').on('click', function(){
    newGame = new Game();
    // newGame.repeatRandomCellChoosing(interval);
})

$(window).ready(function () {
    $('#startGameModal').modal('show');
});

