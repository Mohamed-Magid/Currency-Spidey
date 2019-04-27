const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');

const fetch = async () => {
    const dig = await digger('NBG', 'http://www.nbg.com.eg/en/exchange-rates');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};
const parseHTML = (html) => {
    const result = { BankCode: 'NBG', currencies: [] };
    const $ = cheerio.load(html);
    for (let i = 2; i < $('#exchange tr').length; i++){
        result.currencies.push({
            CurrencyID: getCurrID($(`#exchange tr:nth-of-type(${i}) td:nth-of-type(2)`).text()),
            BuyRate: toFloat($(`#exchange tr:nth-of-type(${i}) td:nth-of-type(5)`).text()),
            SellRate: toFloat($(`#exchange tr:nth-of-type(${i}) td:nth-of-type(6)`).text())
        });
    }
    
    return result;
};
fetch()
module.exports = { fetch };