import Column from './column.js';

class Board {
    constructor(parent){
        this.parent = parent;
        this.columns = [];
        this.createBoard(this.parent);
        this.addEventListeners();
    }

    createBoard(){
        this.board = document.createElement('div');
        this.board.classList.add('board');
        this.boardHeader = document.createElement('div');
        this.boardHeader.classList.add('boardHeader');
        this.boardBody = document.createElement('div');
        this.boardBody.classList.add('boardBody');
        this.newColumnNameWrapper = document.createElement('form');
        this.newColumnName = document.createElement('input');
        this.newColumnName.setAttribute('type', 'text');
        this.newColumnName.classList.add('newColumnName');
        this.newColumnName.placeholder = 'New column name...';
        this.newColumnNameWrapper.append(this.newColumnName);
        this.createNewColumnBtn = document.createElement('button');
        this.createNewColumnBtn.classList.add('createNewColumnBtn');
        this.createNewColumnBtn.innerText = 'Create new column';
        this.boardHeader.append(this.newColumnNameWrapper ,this.createNewColumnBtn);
        this.board.append(this.boardHeader, this.boardBody);
        this.parent.append(this.board);
    }

    createNewColumn(){
        this.columns.push(new Column(this.newColumnName.value, this.boardBody, this.columns.length));
    }

    addEventListeners(){
        this.createNewColumnBtn.addEventListener('click', ()=>{
            this.createNewColumn();
            this.newColumnName.value = '';
        })
    }
}
    window.board = new Board(document.body);
