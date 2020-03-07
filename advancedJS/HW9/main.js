const btn = document.querySelector('#contactUs');
let state = true;

function eventHandler(){
    document.cookie = 'experiment = novalue; max-age=6'
    let cookie = document.cookie.split('; ');
    let newUserCookie = null;
    cookie.forEach(elem => {
        if(elem.includes('new-user')){
            newUserCookie = elem;
        }
    })
    if(!newUserCookie){
        document.cookie = `new-user=${state}`;
    }else{
        document.cookie = `new-user=${!state}`;
    }
}

btn.addEventListener('click', eventHandler);