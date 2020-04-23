//para urls
const axios = require('axios');


const getLugarLatLong = async(dir) => {

    // para direciones con dos nombres espacios o caracteres especiales
    const encodedUrl = encodeURI(dir); // url seguro
    console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': '49d2344b02msh8aed1172038b2ddp1a8fe9jsnd2a2e7e72d51' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) { // no existe una dirección
        throw new Error(`No hay resultado para ${dir}`);
    }
    const data = resp.data.Results[0]; // la priera dirección
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLong
}