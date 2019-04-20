const { thrower } = require('../helpers/errors');

const { all, fetcher } = require('../helpers/fetcher');

const fetchAll = async (req, res) => {
    try {
        res.send(await all());
    } catch (e) {
        res.status(503).send({
            code: 503,
            message: 'Unable to fetch at the moment'
        });
    }
};

const fetchBank = async (req, res) => {
    const bank = req.params.bank;
    switch (bank.toLowerCase()) {
        case 'cib':
            res.send(await fetcher.cib);
            break;
        case 'nbe':
            res.send(await fetcher.nbe);
            break;
        case 'aaib':
            res.send(await fetcher.aaib);
            break;
        case 'audi':
            res.send(await fetcher.audi);
            break;
        case 'bnqmsr':
            res.send(await fetcher.banquemisr);
            break;
        case 'caeg':
            res.send(await fetcher.caegypt);
            break;
        case 'cbe':
            res.send(await fetcher.cbe);
            break;
        case 'alexbank':
            res.send(await fetcher.alexbank);
            break;
        case 'ubeg':
            res.send(await fetcher.ubeg);
            break;
        case 'adib':
            res.send(await fetcher.adib);
        default:
            res.status(404).send(thrower(bank, 404));
    }
};

module.exports = {
    fetchAll,
    fetchBank
};