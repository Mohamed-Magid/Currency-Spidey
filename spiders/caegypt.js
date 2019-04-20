const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../spiders/digger');

const fetch = async () => {
    const dig = await digger('AAIB', 'https://www.ca-egypt.com/en/digital-services');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { CAEG: {} };

    for (let i = 1; i <= $('#f_box option').length; i++){
        result.CAEG[getCurrID($(`#f_box option:nth-of-type(${i})`).html())] = {
            BuyRate: toFloat($(`#f_box option:nth-of-type(${i})`).attr('data-buy')),
            SellRate: toFloat($(`#f_box option:nth-of-type(${i})`).attr('data-sell'))
        };
    }

    return result;
};

module.exports = { fetch };