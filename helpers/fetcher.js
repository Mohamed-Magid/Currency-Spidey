const spiders = require('../helpers/lister').spiders();
const { thrower } = require('../helpers/errors');
let fetcher = {};
for (let i = 0; i < spiders.length; i++) {
    fetcher[spiders[i]] = require(`../spiders/${spiders[i]}`).fetch();
}

const all = async () => {
    let promises = [];
    for (let i = 0; i < spiders.length; i++) {
        eval(`promises[i] = fetcher.${spiders[i]}`);
    }
    return Promise.all(promises);
};

const specific = async (bank) => {
    if (spiders.includes(bank))
        return eval(`fetcher.${bank}`);
    else
        return thrower(bank, 404);
};

module.exports = {
    all,
    specific
};