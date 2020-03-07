const btn = document.querySelector('#ipFinder');

async function sendRequests(){
    const infoContainer = document.querySelector('.info-container');
    infoContainer.innerHTML = '';
    const ipRequest = await axios.get(`https://api.ipify.org/?format=json`);
    console.log("Your IP: ", ipRequest.data['ip']);
    let getInfoByIp = await axios.get(`http://ip-api.com/json/${ipRequest.data['ip']}?lang=ru&fields=continent,country,region,city,district`);
    console.log("Your location: ", getInfoByIp.data);
    infoContainer.insertAdjacentHTML('afterbegin', `
        <h3>Континент - ${getInfoByIp.data["continent"]}</h3>
        <h3>Страна - ${getInfoByIp.data["country"]}</h3>
        <h3>Регион - ${getInfoByIp.data["region"]}</h3>
        <h3>Город - ${getInfoByIp.data["city"]}</h3>
        <h3>Район города - ${getInfoByIp.data["district"]||"Не удалось определить"}</h3>
    `)
}

btn.addEventListener('click', sendRequests);