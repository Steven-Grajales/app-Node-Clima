const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=10&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);
    return resp.data.list[0].main.temp;
    // return resp.list[0].main.temp;
}

module.exports = {
    getClima
}