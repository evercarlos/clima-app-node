const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;


// argv.direccion
/*lugar.getLugarLatLong(argv.direccion)
    .then(console.log);*/
/*clima.getClima(-5.710000, -79.279999)
    .then(console.log)
    .catch(console.log)*/
// tarea
const getInfo = async(direccion) => {

    try {
        const coodenadas = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coodenadas.lat, coodenadas.lng);

        return `El clima de ${coodenadas.direccion} es de ${temp}`;

    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)