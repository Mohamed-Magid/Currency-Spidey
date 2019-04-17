const axios = require('axios');
const cheerio = require('cheerio');
const sanitizer = require('./sanitizer');
const fetch = async () => {
    const html = await axios({
        method: 'get',
        url: 'https://www.theubeg.com/ub-services/foreign-currency-exchange'
    });
    return parseHTML(html.data);
};

const parseHTML = (html) => {
    const result = { UBEG: {} };
    const $ = cheerio.load(html);


    for (let i = 1; i <= 6; i++){
        result.UBEG[$(`table.exchange-table tbody tr:nth-of-type(${i}) td:nth-of-type(2)`).text()] = {
            BuyRate: sanitizer.regulator($(`table.exchange-table tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).text()),
            SellRate: sanitizer.regulator($(`table.exchange-table tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text())
        };
    }
};

module.exports = { fetch };