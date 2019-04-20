const axios = require('axios');
const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../spiders/digger');

const fetch = async () => {
    const dig = await digger('NBE', 'https://www.nbe.com.eg/en/ExchangeRate.aspx');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { NBE: {} };
    for (let i = 2; i <= $('#idts_content table tbody tr').length; i++){
        result.NBE[getCurrID($(`#idts_content table tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).text())] = {
            BuyRate: toFloat($(`#idts_content table tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).text()),
            SellRate: toFloat($(`#idts_content table tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text())
        };
    }

    return result;
};

module.exports = { fetch };