import Card from './card';

export default class Column {
    constructor(parent, index){
        this.parent = parent;
        this.index = index;
        this.cards = [];
        this.createColumn(this.parent);
    }

    createColumn(parent){
        this.column = document.createElement('div');
        this.column.classList.add('column');
        parent.append(this.column);
    }

    createNewCard
}