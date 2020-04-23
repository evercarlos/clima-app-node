const axios = require('axios');

const getClima = async(lat, lng) => {
    // estes es una promesa
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1e9c2eb5bc8c038834c55f14a242335e&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}