import Card from './card.js';

export default class Column {
    constructor(name ,parent, index){
        this.name = name;
        this.parent = parent;
        this.cardIndex = index;
        this.cards = [];
        this.createColumn(this.parent);
        this.defineEventListeners();
    }

    createNewCard(){
        this.cards.push(new Card(this.cardsCover, this.cardIndex, this));
        this.cardIndex++;
    }

    createColumn(parent){
        this.column = document.createElement('div');
        this.column.classList.add('column');
        this.createNewCardBtn = document.createElement('button');
        this.createNewCardBtn.classList.add('create-card-btn');
        this.createNewCardBtn.innerText ='Create new card';

        this.cardsCover = document.createElement('div');
        this.cardsCover.classList.add('cards-cover');

        this.columnHeader = document.createElement('div');
        this.columnHeader.classList.add('column-header');
        this.columnTitle = document.createElement('p');
        this.columnTitle.classList.add('column-title');
        this.columnTitle.setAttribute('contenteditable', 'true');
        this.columnTitle.innerText = this.name;
        
        this.sortBtn = document.createElement('button');
        this.sortBtn.innerText = 'A-z';
        this.sortBtn.classList.add('sort-btn');

        this.columnHeader.append(this.columnTitle, this.sortBtn);
        

        this.column.append(this.columnHeader, this.cardsCover, this.createNewCardBtn);
        parent.prepend(this.column);
    }

    defineEventListeners(){
        this.createNewCardBtn.addEventListener('click', () => {
            this.createNewCard();
        })

        this.sortBtn.addEventListener('click',()=>{
            this.cards.sort((prev, next) => {
                if ( prev.card.innerText < next.card.innerText ) return -1;
                if ( prev.card.innerText < next.card.innerText ) return 1;
            });
            $('.cards-cover').fadeTo(400, 0.1,()=> {
                $('.cards-cover').text('');
                this.cards.forEach(element => {
                    this.cardsCover.append(element.card);
                });
            });
            $('.cards-cover').fadeTo(400, 1);
        })
    }
}