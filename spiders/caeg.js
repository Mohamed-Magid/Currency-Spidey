const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');

const fetch = async () => {
    const dig = await digger('CaEgypt', 'https://www.ca-egypt.com/en/digital-services');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { BankCode: 'CAEG', currencies:[] };

    for (let i = 1; i <= $('#f_box option').length; i++){
        result.currencies.push({
            CurrencyID: getCurrID($(`#f_box option:nth-of-type(${i})`).text()),
            BuyRate: toFloat($(`#f_box option:nth-of-type(${i})`).attr('data-buy')),
            SellRate: toFloat($(`#f_box option:nth-of-type(${i})`).attr('data-sell'))
        });
    }

    return result;
};

module.exports = { fetch };