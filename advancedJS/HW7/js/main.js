import Episode from './episode.js';
const renderTarget = document.querySelector('.main-container');
const loader = `<div class="sk-chase">
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                    </div>`;
renderTarget.innerHTML = loader;

let axiosRequest = axios.get('https://swapi.co/api/films/');
axiosRequest.then(response => {
    renderTarget.innerHTML = '';
    for (let item in response.data.results) {
        const episode = new Episode(response.data.results[item], renderTarget);
    }
});