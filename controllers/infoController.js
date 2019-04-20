const { getInfo } = require('../helpers/info');

const all = (req, res) => {
    res.send(getInfo());
};

const specified = (req, res) => {
    const bank = req.params.bank;
    res.send(getInfo()[bank.toUpperCase()]);
}

module.exports = {
    all,
    specified
};