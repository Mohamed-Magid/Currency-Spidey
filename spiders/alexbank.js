const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../spiders/digger');

const fetch = async () => {
    const dig = await digger('AlexBank', 'https://www.alexbank.com/En/Home/exchangerates');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { BankCode: 'ALEXBANK', currencies: [] };
    for (let i = 2; i <= $('.exchangerate-table tr').length; i++){
        // result.ALEXBANK[getCurrID($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(1)`).html())] = {
        //     BuyRate: toFloat($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(4)`).html()),
        //     SellRate: toFloat($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(3)`).html())
        // };
        result.currencies.push({
            CurrencyID: getCurrID($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(1)`).text()),
            BuyRate: toFloat($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(4)`).text()),
            SellRate: toFloat($(`.exchangerate-table tr:nth-of-type(${i}) td:nth-of-type(3)`).text())
        });
    }
    return result;
};

module.exports = { fetch };