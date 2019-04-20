const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../spiders/digger');

const fetch = async () => {
    const dig = await digger('AAIB', 'https://aaib.com/en/rates');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};
const parseHTML = (html) => {
    const result = { AAIB: {} };
    const $ = cheerio.load(html);
    for (let i = 1; i < $('#rates-table tr').length; i++) {
        result.AAIB[getCurrID($(`#rates-table tr:nth-of-type(${i}) td:nth-of-type(1)`))] = {
            BuyRate: toFloat($(`#rates-table tr:nth-of-type(${i}) td:nth-of-type(2)`).html()),
            SellRate: toFloat($(`#rates-table tr:nth-of-type(${i}) td:nth-of-type(3)`).html())
        };
    }
    
    return result;
};

module.exports = { fetch };