const cheerio = require('cheerio');
const { toFloat, getCurrID } = require('../helpers/purifiers');
const { digger } = require('../spiders/digger');

const fetch = async () => {
    const dig = await digger('Audi', 'http://www.bankaudi.com.eg/egypt/fx-rates');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { BankCode: 'AUDI', currencies:[] };
    for (let i = 3; i <= $('.ratesHolderTable tbody tr').length; i++) {
        // result.AUDI[getCurrID($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).html())] = {
        //     BuyRate: toFloat($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(2)`).html()),
        //     SellRate: toFloat($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).html())
        // };
        result.currencies.push({
            CurrencyID: getCurrID($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).text()),
            BuyRate: toFloat($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(2)`).text()),
            SellRate: toFloat($(`.ratesHolderTable tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).text())
        });
    }
    return result;
};

module.exports = { fetch };
