const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');

const fetch = async () => {
    const dig = await digger('AAIB', 'https://aaib.com/en/rates');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};
const parseHTML = (html) => {
    const result = { BankCode: 'AAIB', currencies: [] };
    // const result = { AAIB: {} };
    const $ = cheerio.load(html);
    for (let i = 1; i < $('#rates-table tr').length; i++) {
        result.currencies.push({
            CurrencyID: getCurrID($(`#rates-table tr:nth-of-type(${i}) td:nth-of-type(1)`).text()),
            BuyRate: toFloat($(`#rates-table tr:nth-of-type(${i}) td:nth-of-type(2)`).text()),
            SellRate:toFloat($(`#rates-table tr:nth-of-type(${i}) td:nth-of-type(3)`).text())
        });
    }
    
    return result;
};

module.exports = { fetch };