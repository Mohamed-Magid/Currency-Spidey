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
    switch(bank){
        case 'cib':
            res.send(await fetcher.cib);
            break;
        case 'nbe':
            res.send(await fetcher.nbe);
    }
};

module.exports = {
    fetchAll,
    fetchBank
};