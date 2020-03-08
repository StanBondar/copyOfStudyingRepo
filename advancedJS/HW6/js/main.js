import {Board} from './board.js';

const renderTarget = document.querySelector('.maint-container');
window.board = new Board(renderTarget);