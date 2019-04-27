const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');

const fetch = async () => {
    const dig = await digger('BLOM', 'https://www.blombankegypt.com/BlomEgypt/Exchange-rates');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};
const parseHTML = (html) => {
    const result = { BankCode: 'BLOM', currencies: [] };
    const $ = cheerio.load(html);
    // fs.writeFileSync('html.html', $('table').html());
    for (let i = 3; i <= $('table:has(.titlesRow) tbody tr').length; i++) {
        result.currencies.push({
            CurrencyID: getCurrID($(`table:has(.titlesRow) tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).text()),
            BuyRate: toFloat($(`table:has(.titlesRow) tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).text()),
            SellRate: toFloat($(`table:has(.titlesRow) tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text()),
        });
    }
    
    return result;
};

module.exports = { fetch };