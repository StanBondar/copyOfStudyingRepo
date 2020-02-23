export default class Card {
    constructor(parent, index){
        this.parent = parent;
        this.index = index;
        this.createCard(this.parent);
    }

    createCard(parent){
        this.card = document.createElement('div');
        this.card.setAttribute('data-index', this.index);
        this.card.classList.add('card');
        this.cardContent = document.createElement('p');
        this.cardContent.classList.add('cardContent');
        this.cardContent.innerText = ' ';
        this.cardContent.setAttribute('contenteditable', 'true');
        this.card.append(this.cardContent);
        parent.append(this.card);
    }
}