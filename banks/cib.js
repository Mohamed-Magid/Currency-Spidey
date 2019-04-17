const axios = require('axios');
const fetch = async () => {
    const res = await axios({
        method: 'post',
        url: 'https://www.cibeg.com/_layouts/15/LINKDev.CIB.CurrenciesFunds/FundsCurrencies.aspx/GetCurrencies',
        data: {
            lang: 'en'
        }
    });

    return handler(res.data.d);
};

const handler = (data) => {
    const result = {CIB:{}};
    data.forEach(currency => {
        result.CIB[currency.CurrencyID] = {
            BuyRate: currency.BuyRate,
            SellRate: currency.SellRate
        };
    });
    return result;
};

module.exports = { fetch };