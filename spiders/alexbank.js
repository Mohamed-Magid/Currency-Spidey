const axios = require('axios');
const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { thrower } = require('../helpers/errors');

const fetch = async () => {
    try {
        const spider = await axios({
            method: 'get',
            url: 'https://www.alexbank.com/En/Home/exchangerates'
        });
        return parseHTML(spider.data);
    } catch (e) {
        return thrower('AlexBank', 408);
    }

};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { ALEXBANK: {} };
    for (let i = 2; i <= $('.exchangerate-table tr').length; i++){
        result.ALEXBANK[getCurrID($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(1)`).html())] = {
            BuyRate: toFloat($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(4)`).html()),
            SellRate: toFloat($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(3)`).html())
        };
    }
    return result;
};

module.exports = { fetch };