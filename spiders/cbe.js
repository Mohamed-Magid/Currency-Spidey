const axios = require('axios');
const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');

const fetch = async () => {
    try {
        const spider = await axios({
            method: 'get',
            url: 'https://www.cbe.org.eg/en/EconomicResearch/Statistics/Pages/OfficialRatesListing.aspx'
        });
    
        return parseHTML(spider.data);
    } catch (e) {
        console.log('Error fetching from CBE');
    }
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { CBE: {} };

    for (let i = 1; i <= $('table.table tbody tr').length; i++){
        result.CBE[getCurrID($(`table.table tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).text())] = {
            BuyRate: toFloat($(`table.table tbody tr:nth-of-type(${i}) td:nth-of-type(2)`).text()),
            SellRate: toFloat($(`table.table tbody tr:nth-of-type(${i}) td:nth-of-type(3)`).text())
        };
    }

    return result;
};

module.exports = { fetch };