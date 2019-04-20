const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../spiders/digger');

const fetch = async () => {
    const dig = await digger('AAIB', 'https://www.cbe.org.eg/en/EconomicResearch/Statistics/Pages/OfficialRatesListing.aspx');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
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