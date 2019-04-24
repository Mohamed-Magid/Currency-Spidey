const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');

const fetch = async () => {
    const dig = await digger('BanqueMisr', 'http://www.banquemisr.com/en/exchangerates');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { BankCode: 'BNQMSR', currencies: [] };
    for (let i = 3; i <= $('table.exchangeRates tbody tr').length; i++) {
        result.currencies.push({
            CurrencyID: getCurrID($(`table.exchangeRates tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).text()),
            BuyRate: toFloat($(`table.exchangeRates tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text()),
            SellRate: toFloat($(`table.exchangeRates tbody tr:nth-of-type(${i}) td:nth-of-type(5)`).text())
        });
    }

    return result;
};

module.exports = { fetch };