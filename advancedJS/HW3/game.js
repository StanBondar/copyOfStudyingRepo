import Cell from './cell.js';

// $('.table-container').ready(function(){
//     $('.table-container').after(``);
// })

export default class Game {
    constructor(side, parent) {
        this.side = side;
        this.cells = [];
        this.playersCells = [];
        this.computerCells = [];
        this.initialCellsLength = this.cells.length;
        this.timeout = null;
        this.lastCell = null;
        this.interval = +$('input[type="radio"]:checked').val();
        this.parent = parent;
        this.render(this.parent);
        this.startGame(this.interval);
        this.addFieldEventListeners(this.target);
    }

    render(parent) {
        this.target = document.createElement('table');
        this.target.classList.add('game-field');
        parent.innerHTML = '';
        let counter = 0;
        for (let i = 0; i < this.side; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < this.side; j++) {
                this.cells.push(new Cell(row, counter));
                counter++;
            }
            this.target.append(row);
            parent.append(this.target);
        }
        this.initialCellsLength = this.cells.length;
        console.log(this.cells.length);
    }

    chooseRandomCell(cells) {
        const randomCell = this.randomiseCellIndex(cells.length - 1);
        console.log(`Random index = ${randomCell}`);
        // chooseActiveCell(cells[randomCell]);
        cells[randomCell].activateCell();
        return cells[randomCell];
    }

    randomiseCellIndex(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    startGame = (interval) => {
        console.log('new Game');
        this.lastCell = this.chooseRandomCell(this.cells);
        this.timeout = setTimeout(function tick() {
            console.log(this);
            if (this.lastCell) {
                this.lastCell.lostCell();
                // lostCell(lastCell);
                // console.log(cells.length);
                this.computerCells.push(this.cells.splice(this.cells.indexOf(this.lastCell), 1));
                console.log(this.computerCells.length);
            }
            if (this.cells.length > 0 && this.computerCells.length < Math.ceil(this.initialCellsLength / 2)) {
                this.lastCell = this.chooseRandomCell(this.cells);
                // console.log(`Current cell - ${lastCell}`);
                this.timeout = setTimeout(tick.bind(this), this.interval);
            } else {
                clearTimeout(this.timeout);
                this.showResult();
                console.log('Done');
            }
        }.bind(this), this.interval);
    };

    addFieldEventListeners(parent) {
        // parent.removeEventListener('click', clickEventHandler);
        console.log(this);
        parent.addEventListener('click', function clickEventHandler(event) {
            console.log(this);
            if (event.target.classList.contains('active-cell')) {
                clearTimeout(this.timeout);
                this.cells[this.cells.indexOf(this.cells.find(element => element.index == event.target.getAttribute('data-number')))].wonCell();
                this.playersCells.push(this.cells.splice(this.cells.indexOf(this.lastCell), 1));
                if (this.cells.length > 0 && this.playersCells.length < Math.ceil(this.initialCellsLength / 2)) {
                    this.startGame(this.interval);
                } else {
                    this.showResult();
                }
            }
        }.bind(this))
    }


    showResult() {
        // $('.game-field').off();
        const playerScore = this.playersCells.length;
        const computerScore = this.computerCells.length;
        if (playerScore > computerScore) {
            $('#totalScoreTitle').text('Player won!');
        } else {
            $('#totalScoreTitle').text('Era of SkyNet begans!');
        }
        $('.player-score').text(`Player score: ${playerScore}`);
        $('.computer-score').text(`Computer score: ${computerScore}`);
        $('#exampleModal').modal('show');
    }
}


// window.game = null;

$('.start').on('click', () => {
    let game = null;
    let sideSize = $('#sideSize').val().trim();
    if (sideSize.length === 0 || Number.isNaN(+sideSize)) {
        sideSize = 10;
    }
    const parent = document.querySelector('.table-container');
    game = new Game(sideSize, parent);
})

$('#newGameBtn').click(() => {
    $('#exampleModal').modal('hide');
    $('#sideSize').val("");
    $('#startGameModal').delay(1000).modal('show');
});

$(window).ready(function () {
    $('#startGameModal').modal('show');
});


