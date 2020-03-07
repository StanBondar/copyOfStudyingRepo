export default class Episode {
    constructor(response, renderTarget) {
        this.data = response;
        this._title = response['title'];
        this._episodeId = response['episode_id'];
        this._description = response['opening_crawl'];
        this._charactersLinks = response['characters'];
        this._characters = [];
        this._renderTarget = renderTarget;
        this.renderEpisode();
    }

    renderEpisode() {
        console.log(this.data['characters']);
        let episode = document.createElement('div');
        episode.classList.add('episode-container');
        const charactersList = document.createElement('ul');
        charactersList.classList.add('characters-list');
        episode.innerHTML = `
            <h2 class="episode-title">${this._title}</h2>
            <h3 class="episode-id">Episode #${this._episodeId}</h3>
            <p class="episode-description">${this._description}</p>
            <h3>Characters in movie:</h3>

        `;
        episode.insertAdjacentElement('beforeend', charactersList);
        this._renderTarget.insertAdjacentElement('beforeend', episode);
        this.loadCharacters(charactersList);
    }

    loadCharacters(target) {

        this._charactersLinks.forEach(element => {
            let characterRequest = new XMLHttpRequest();
            characterRequest.open('GET', element);
            characterRequest.responseType = 'json';
            characterRequest.send();
            target.innerHTML = `<div class="sk-chase">
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                    <div class="sk-chase-dot"></div>
                                </div>`;

            characterRequest.addEventListener('load', () => {
                this._characters.push(characterRequest.response['name']);
                if (this._characters.length === this._charactersLinks.length) {
                    console.log(`All characters of ${this._title} - `, this._characters);
                    target.innerHTML = '';
                    this._characters.forEach(element => {
                        target.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
                    })
                }
            });
        });
    }
}