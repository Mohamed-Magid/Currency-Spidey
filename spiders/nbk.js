const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');

const fetch = async () => {
    const dig = await digger('NBK', 'https://www.nbk.com/egypt/personal/currency-rates.html');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};
const parseHTML = (html) => {
    const result = { BankCode: 'NBK', currencies: [] };
    const $ = cheerio.load(html);
    for (let i = 2; i <= $('table tbody tr').length; i++){
        result.currencies.push({
            CurrencyID: getCurrID($(`table tbody tr:nth-of-type(${i}) td:nth-of-type(2)`).text()),
            BuyRate: toFloat($(`table tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).text()),
            SellRate: toFloat($(`table tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text())
        });
    }

    return result;
};

module.exports = { fetch };