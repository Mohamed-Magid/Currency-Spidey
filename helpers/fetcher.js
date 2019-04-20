const fetcher = {
    cib: require('../spiders/cib').fetch(),
    aaib: require('../spiders/aaib').fetch(),
    alexbank: require('../spiders/alexbank').fetch(),
    audi: require('../spiders/audi').fetch(),
    banquemisr: require('../spiders/banquemisr').fetch(),
    caegypt: require('../spiders/caegypt').fetch(),
    cbe: require('../spiders/cbe').fetch(),
    nbe: require('../spiders/nbe').fetch(),
    ubeg: require('../spiders/ubeg').fetch(),
    adib: require('../spiders/adib').fetch()
};

const all = async () => {
    const result = await Promise.all([
        fetcher.cib,
        fetcher.aaib,
        fetcher.alexbank,
        fetcher.audi,
        fetcher.banquemisr,
        fetcher.caegypt,
        fetcher.cbe,
        fetcher.nbe,
        fetcher.ubeg,
        fetcher.adib
    ]);
    // let response = {};

    // result.forEach((bank) => {
    //     response[Object.keys(bank)[0]] = bank[Object.keys(bank)[0]];
    // });

    // return response;
    return result;

};

module.exports = {
    all,
    fetcher
};