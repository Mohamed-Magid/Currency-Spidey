const { getCurrID, toFloat } = require('../helpers/purifiers');
const { digger } = require('../helpers/digger');

const fetch = async () => {
    const dig = await digger('AIB', 'https://aib.com.eg/rates/currencyrates.json');
    if (dig.data)
        return parseJSON(dig.data);
    else
        return dig;
};
const parseJSON = (json) => {
    const result = { BankCode: 'AIB', currencies: [] };
    for (let i = 0; i < json.items.length; i++){
        result.currencies.push({
            CurrencyID: getCurrID(json.items[i].key),
            BuyRate: toFloat(json.items[i].value),
            SellRate: toFloat(json.items[i].value2)
        });
    }
    
    return result;
};

module.exports = { fetch };