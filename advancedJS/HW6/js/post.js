class Post {
    constructor(title, body, author, renderTarget, id){
        this.title = title;
        this.body = body;
        this.authorName = author.name;
        this.authorEmail = author.email;
        this.renderTarget = renderTarget;
        this.id = id;
        this.post = document.createElement('div');
        this.renderPost();
    }

    renderPost(){
        this.post.classList = 'card card-item';
        this.post.innerHTML = `<div class="card-header">
                                ${this.authorName}/${this.authorEmail}
                          </div>
                          <div class="card-body">
                                <h5 class="card-title" data-id='${this.id}'>${this.title}</h5>
                                <p class="card-text" data-id='${this.id}'>${this.body}</p>
                          </div>
                          <div class="card-footer">
                                <a href="#" class="btn btn-primary" data-name='edit' data-id='${this.id}'>Edit</a>
                                <a href="#" class="btn btn-primary inactive" data-name='save' data-id='${this.id}'>Save</a>
                                <a href="#" class="btn btn-primary" data-name='delete' data-id='${this.id}'>Delete</a>
                          </div>
                          `;
        this.renderTarget.insertAdjacentElement('afterbegin', this.post);
        this.addEventListeners();
    }

    addEventListeners(){
        function eventHandler(e){
            e.preventDefault();
            if(e.target.getAttribute('data-name')==='edit'){
                this.post.querySelector('.btn[data-name="edit"]').classList.toggle('inactive');
                this.post.querySelector('.btn[data-name="save"]').classList.toggle('inactive');
                this.post.querySelector('.card-body').innerHTML = `
                    <input type='text' class="card-title" data-id='${this.id}' value="${this.title}"></input>
                    <input type='text' class="card-text" data-id='${this.id}' value="${this.body}"></input>
                `;
            }else if(e.target.getAttribute('data-name')==='save'){
                this.title = this.post.querySelector('.card-title').value;
                this.body = this.post.querySelector('.card-text').value;
                this.post.querySelector('.btn[data-name="edit"]').classList.toggle('inactive');
                this.post.querySelector('.btn[data-name="save"]').classList.toggle('inactive');
                this.post.querySelector('.card-body').innerHTML = `
                    <h5 class="card-title" data-id='${this.id}'>${this.title}</h5>
                    <p class="card-text" data-id='${this.id}'>${this.body}</p>
                `;
                board.posts.splice(this.id-1, 1, this);
                let saveRequest = axios.put(`https://jsonplaceholder.typicode.com/posts/${this.id}`, JSON.stringify(this));
            }else if(e.target.getAttribute('data-name')==='delete'){
                this.post.remove();
                board.post.splice(this.id-1, 1);
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.id}`);
            }
        }
        this.post.querySelector('.card-footer').addEventListener('click', eventHandler.bind(this));
    }
}

export {Post};