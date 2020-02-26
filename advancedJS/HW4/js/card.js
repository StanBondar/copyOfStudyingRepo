export default class Card {
    constructor(parentElement, index, parentObject) {
        this.parentElement = parentElement;
        this.parentObject = parentObject;
        this.index = index;
        this.createCard(this.parentElement);
        this.addEventlisteners();
    }

    createCard(parentElement) {
        this.card = document.createElement('div');
        this.card.setAttribute('data-index', this.index);
        this.card.setAttribute('draggable', 'true');
        this.card.classList.add('card');
        this.cardContent = document.createElement('p');
        this.cardContent.classList.add('cardContent');
        this.cardContent.innerText = ' ';
        this.cardContent.setAttribute('contenteditable', 'true');
        this.card.append(this.cardContent);
        parentElement.append(this.card);
        this.cardContent.focus();
        console.log(this.index);
    }

    addEventlisteners = () => {
        console.log(this.parentObject);
        this.parentObject.selected = null;

        let dragOver = (e) => {
            if (isBefore(this.parentObject.selected, e.target)) { 
                e.target.parentNode.insertBefore(this.parentObject.selected, e.target) 
            }else if(isBefore(this.parentObject.selected, e.target.parentNode)){
                e.target.closest('.cards-cover').insertBefore(this.parentObject.selected, e.target.parentNode);
            }
            else{
                if(e.target.classList.contains('card')){
                    e.target.parentNode.insertBefore(this.parentObject.selected, e.target.nextSibling)
                }else  e.target.closest('.cards-cover').insertBefore(this.parentObject.selected, e.target.parentNode.nextSibling);
            }
        }

        let dragEnd = () => {
            this.parentObject.selected = null
        }

        let dragStart = (e) => {
            console.log('Drag start');
            console.log(this);
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", null);
            this.parentObject.selected = e.target;
            console.log(event.target);
        }

        let isBefore = (el1, el2) => {
            let cur;
            if (el2.parentNode === el1.parentNode) {
                for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
                    if (cur === el2) return true;
                }
            } else return false;
        }

        this.card.addEventListener('dragstart', function () {
            console.log(this);
            dragStart(event);
        }.bind(this));
        this.card.addEventListener('dragover', function () {
            dragOver(event);
        }.bind(this));
        this.card.addEventListener('dragend', function () {
            console.log(this);
            dragEnd();
        }.bind(this));
    }
}