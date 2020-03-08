import {Post} from './post.js';

class Board {
    constructor(parent) {
        this.parent = parent;
        this.users = [];
        this.posts = [];
        this.renderOnload();
        this.getAllUsers();
        this.addEventListeners();
    }

    renderOnload() {
        this.parent.insertAdjacentHTML('afterbegin', `
            <header>
                <a href="#" class="logo"><img src="./img/logo.png" alt="logo image" class="logo-img"></a>
                <button class="create-post btn btn-primary" data-toggle="modal" data-target="#createPost">Write post</button>
            </header>
            <section class="posts-board">
                <div class="container post-container">
                    <div class="sk-chase">
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                    </div>
                </div>
            </section>
            <div class="modal fade" id="createPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create new post</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h5 class="card-title">Title</h5>
                        <input type='text' class="card-title" data-id='newPostTitle' placeholder="Enter title"></input>
                        <p class="card-text">Text</p>
                        <input type='text' class="card-text" data-id='newPostBody' placeholder="Enter post text"></input>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="sendNewPost">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        `)
    }

    addEventListeners(){
        function eventHandler(){
            const newPostTitle = this.parent.querySelector('input[data-id="newPostTitle"]').value;
            const newPostBody = this.parent.querySelector('input[data-id="newPostBody"]').value;
            let newPost = new Post(newPostTitle, newPostBody, this.users[0], document.querySelector('.post-container'), this.posts.length+1);
            this.posts.push(newPost);
            let newPostRequest = axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost);
            $('#createPost').modal('hide')
        }
        const newPostBtn = document.body.querySelector('#sendNewPost');
        newPostBtn.addEventListener('click', eventHandler.bind(this));
    }

    getAllPosts() {
        let postsRequest = axios.get('https://jsonplaceholder.typicode.com/posts');
        const renderTarget = document.querySelector('.post-container');
        postsRequest.then(response => {
            renderTarget.innerHTML = '';
            response.data.forEach(element => {
                this.posts.push(new Post(element.title, element.body, this.users[element.userId-1], renderTarget, element.id));
            });
        });
    }

    async getAllUsers() {
        let usersRequest = axios.get('https://jsonplaceholder.typicode.com/users');
        usersRequest.then(response => {
            this.users = response.data;
            this.getAllPosts();
        })
    }
}

export { Board };