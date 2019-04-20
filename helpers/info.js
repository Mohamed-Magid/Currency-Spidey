const getInfo = () => {
    const banks = {
        CIB: {
            fullName: {
                en: 'Commercial International Bank',
                ar: 'البنك التجارى الدولى'
            },
            url: 'https://www.cibeg.com/English/Pages/CIBCurrencies.aspx'
        },
        AAIB: {
            fullName: {
                en: 'Arab African International Bank',
                ar: 'البنك العربى الأفريقى الدولى'
            },
            url: 'https://aaib.com/en/rates'
        },
        ALEXBANK: {
            fullName: {
                en: 'Alex Bank',
                ar: 'بنك الأسكندرية'
            },
            url: 'https://www.alexbank.com/En/Home/exchangerates'
        },
        AUDI: {
            fullName: {
                en: 'Audi Bank',
                ar: 'بنك عوده'
            },
            url: 'http://www.bankaudi.com.eg/egypt/fx-rates'
        },
        BNQMSR: {
            fullName: {
                en: 'Banque Misr',
                ar: 'بنك مصر'
            },
            url: 'http://www.banquemisr.com/en/exchangerates'
        },
        CAEG: {
            fullName: {
                en: 'Crédit Agricole',
                ar: 'كريدي أجريكول'
            },
            url: 'https://www.ca-egypt.com/en/digital-services'
        },
        CBE: {
            fullName: {
                en: 'Central Bank of Egypt',
                ar: 'البنك المركزى المصرى'
            },
            url: 'https://www.cbe.org.eg/en/EconomicResearch/Statistics/Pages/OfficialRatesListing.aspx'
        },
        NBE: {
            fullName: {
                en: 'National Bank of Egypt',
                ar: 'البنك الأهلى المصرى'
            },
            url: 'https://www.nbe.com.eg/en/ExchangeRate.aspx'
        },
        UBEG: {
            fullName: {
                en: 'The United Bank',
                ar: 'المصرف المتحد'
            },
            url: 'https://www.theubeg.com/ub-services/foreign-currency-exchange'
        }
    };

    return banks;
};

module.exports = { getInfo };