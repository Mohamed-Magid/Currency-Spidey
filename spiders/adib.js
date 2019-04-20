const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../spiders/digger');
const fs = require('fs');
const fetch = async () => {
    const dig = await digger('ADIB', 'https://www.adib.eg/Foreign-Currencies');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const result = { BankCode: 'ADIB', currencies: [] };

    for (let i = 3; i <= $('table.tbl-analyst tbody tr').length; i++){
        // result.ADIB[getCurrID($(`table.tbl-analyst tbody tr:nth-of-type(${i}) td:nth-of-type(${1})`))] = {
        //     BuyRate: toFloat($(`table.tbl-analyst tbody tr:nth-of-type(${i}) td:nth-of-type(${4})`).text()),
        //     SellRate: toFloat($(`table.tbl-analyst tbody tr:nth-of-type(${i}) td:nth-of-type(${5})`).text())
        // };
        result.currencies.push({
            CurrencyID: getCurrID($(`table.tbl-analyst tbody tr:nth-of-type(${i}) td:nth-of-type(${1})`).text()),
            BuyRate: toFloat($(`table.tbl-analyst tbody tr:nth-of-type(${i}) td:nth-of-type(${4})`).text()),
            SellRate: toFloat($(`table.tbl-analyst tbody tr:nth-of-type(${i}) td:nth-of-type(${5})`).text())
        });
    }
    return result;
};

module.exports = { fetch };