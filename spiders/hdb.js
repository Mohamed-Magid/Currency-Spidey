const cheerio = require('cheerio');
const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');

const fetch = async () => {
    const dig = await digger('HDB', 'https://www.hdb-egy.com/index.php/currency-exchange');
    if (dig.data)
        return parseHTML(dig.data);
    else
        return dig;
};
const parseHTML = (html) => {
    const result = { BankCode: 'HDB', currencies: [] };
    const $ = cheerio.load(html);
    for (let i = 1; i <= $('#ccm-block-express-entry-list-table-616 tbody tr').length; i++) {
        result.currencies.push({
            CurrencyID: getCurrID($(`#ccm-block-express-entry-list-table-616 tbody tr:nth-of-type(${i}) td:nth-of-type(1)`).text()),
            BuyRate: toFloat($(`#ccm-block-express-entry-list-table-616 tbody tr:nth-of-type(${i}) td:nth-of-type(4)`).text()),
            SellRate:toFloat($(`#ccm-block-express-entry-list-table-616 tbody tr:nth-of-type(${i}) td:nth-of-type(5)`).text())
        });
    }
    
    return result;
};
fetch();

module.exports = { fetch };