const axios = require('axios');
const { getCurrID } = require('../helpers/purifiers');
const fetch = async () => {
    try {
        const spider = await axios({
            method: 'post',
            url: 'https://www.cibeg.com/_layouts/15/LINKDev.CIB.CurrenciesFunds/FundsCurrencies.aspx/GetCurrencies',
            data: {
                lang: 'en'
            }
        });
    
        return handler(spider.data.d);
    } catch (e) {
        console.log('Error fetching from CIB');
    }
};

const handler = (data) => {
    const result = {BankCode: 'CIB', currencies:[]};
    data.forEach(currency => {
        result.currencies.push({
            CurrencyID: getCurrID(currency.CurrencyID),
            BuyRate: currency.BuyRate,
            SellRate: currency.SellRate

        });
    });
    return result;
};

module.exports = { fetch };