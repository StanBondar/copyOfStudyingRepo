import Episode from './episode.js';
const renderTarget = document.querySelector('.main-container');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://swapi.co/api/films/');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', function requestHandler () {
    renderTarget.innerHTML = '';
    for(let element in xhr.response.results){
        const episode = new Episode(xhr.response.results[element], renderTarget);
        console.log(episode._characters);
    }
})

xhr.addEventListener('progress', function progressHandler() {
    
    const loader = `<div class="sk-chase">
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                    </div>`;

    renderTarget.innerHTML = loader;
})