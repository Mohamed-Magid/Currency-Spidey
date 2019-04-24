const path = require('path');
const spidersPath = path.join(__dirname, '..', 'spiders');
const fs = require('fs');

const getSpiders = () => {
    const spiders = fs.readdirSync(spidersPath);
    for (let i = 0; i < spiders.length; i++)
        spiders[i] = spiders[i].replace('.js', '');
    return spiders;
};

module.exports = {
    spiders: getSpiders
};