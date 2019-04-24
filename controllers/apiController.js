const { thrower } = require('../helpers/errors');

const { all, specific } = require('../helpers/fetcher');

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
    res.send(await specific(bank.toLowerCase()));
};

module.exports = {
    fetchAll,
    fetchBank
};