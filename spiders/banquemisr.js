const axios = require('axios');
const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');

const fetch = async () => {
    try {
        const spider = await axios({
            method: 'get',
            url: 'http://www.banquemisr.com/en/exchangerates'
        });

        return parseHTML(spider.data);
    } catch (e) {
        console.log('Error fetching from Banque Misr');
    }
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { BNQMSR: {} };
    for (let i = 3; i <= $('table.exchangeRates tbody tr').length; i++) {
        result.BNQMSR[getCurrID($(`table.exchangeRates tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).text())] = {
            BuyRate: toFloat($(`table.exchangeRates tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text()),
            SellRate: toFloat($(`table.exchangeRates tbody tr:nth-of-type(${i}) td:nth-of-type(5)`).text())
        };
    }

    return result;
};

module.exports = { fetch };