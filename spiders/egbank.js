const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');
const fetch = async () => {
    const dig = await digger('EGBANK', 'https://www.eg-bank.com/En/ExchangeRate');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const result = { BankCode: 'EGBANK', currencies: [] };
    const dummyData = [];
    const $ = cheerio.load(html);
    $('.currency label').each((i, el) => {
        dummyData.push($(el).text());
    });
    
    for (let i = 0; i < dummyData.length; i+=4){
        result.currencies.push({
            CurrencyID: getCurrID(dummyData[i]),
            BuyRate: toFloat(dummyData[i + 3]),
            SellRate: toFloat(dummyData[i + 2])
        });
    }

    return result;
};
module.exports = { fetch };