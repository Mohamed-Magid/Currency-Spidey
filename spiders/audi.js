const axios = require('axios');
const cheerio = require('cheerio');
const { toFloat, getCurrID } = require('../helpers/purifiers');
const fetch = async() => {
    const spider = await axios({
        method: 'get',
        url: 'http://www.bankaudi.com.eg/egypt/fx-rates'
    });
    return parseHTML(spider.data);
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { AUDI: {} };
    for (let i = 3; i <= $('.ratesHolderTable tbody tr').length; i++) {
        result.AUDI[getCurrID($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).html())] = {
            BuyRate: toFloat($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(2)`).html()),
            SellRate: toFloat($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).html())
        };
    }
    return result;
};

module.exports = { fetch };
