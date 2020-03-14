const btn = document.querySelector('#contactUs');
let newUserIndicator = true;

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
        document.cookie = `new-user=${newUserIndicator}`;
    }else{
        document.cookie = `new-user=${!newUserIndicator}`;
    }
}

btn.addEventListener('click', eventHandler);