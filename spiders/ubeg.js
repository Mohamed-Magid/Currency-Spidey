const cheerio = require('cheerio');
const { toFloat, getCurrID } = require('../helpers/purifiers');
const { digger } = require('../spiders/digger');

const fetch = async () => {
    const dig = await digger('AAIB', 'https://www.theubeg.com/ub-services/foreign-currency-exchange');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const result = { UBEG: {} };
    const $ = cheerio.load(html);

    for (let i = 1; i <= 6; i++){
        result.UBEG[getCurrID($(`table.exchange-table tbody tr:nth-of-type(${i}) td:nth-of-type(2)`).text())] = {
            BuyRate: toFloat($(`table.exchange-table tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).text()),
            SellRate: toFloat($(`table.exchange-table tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text())
        };
    }
    
    return result;
};

module.exports = { fetch };