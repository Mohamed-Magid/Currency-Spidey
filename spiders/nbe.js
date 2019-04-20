const axios = require('axios');
const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const fs = require('fs');

const fetch = async () => {
        const spider = await axios({
            method: 'get',
            url: 'https://www.nbe.com.eg/en/ExchangeRate.aspx'
        });
        return parseHTML(spider.data);
  
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { NBE: {} };
    fs.writeFileSync('html.html', $('#idts_content table tbody').html());
    for (let i = 2; i <= $('#idts_content table tbody tr').length; i++){
        result.NBE[getCurrID($(`#idts_content table tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).text())] = {
            BuyRate: toFloat($(`#idts_content table tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).text()),
            SellRate: toFloat($(`#idts_content table tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text())
        };
    }

    return result;
};

module.exports = { fetch };