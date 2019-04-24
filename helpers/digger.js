const axios = require('axios');
const { thrower } = require('./errors');

const digger = async (bank, url) => {
    try {
        const spider = await axios({
            method: 'get',
            url
        });
        return spider;
    } catch (e) {
        return thrower(bank, 408);
    }
};

module.exports = { digger };