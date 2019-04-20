const getInfo = () => {
    const banks = {
        CIB: {
            fullName: {
                en: 'Commercial International Bank',
                ar: 'البنك التجارى الدولى'
            },
            url: 'https://www.cibeg.com/English/Pages/CIBCurrencies.aspx',
            logo: 'https://www.cibeg.com/Style%20Library/CIB_Images/logoWhite.png'
        },
        AAIB: {
            fullName: {
                en: 'Arab African International Bank',
                ar: 'البنك العربى الأفريقى الدولى'
            },
            url: 'https://aaib.com/en/rates',
            logo: 'https://aaib.com/css/css/img/Bigger.png'
        },
        ALEXBANK: {
            fullName: {
                en: 'Alex Bank',
                ar: 'بنك الأسكندرية'
            },
            url: 'https://www.alexbank.com/En/Home/exchangerates',
            logo: 'https://www.alexbank.com/Cms_Data/Sites/AlexBank/Sites/English/Themes/assets/images/alex-bank.png'
        },
        AUDI: {
            fullName: {
                en: 'Audi Bank',
                ar: 'بنك عوده'
            },
            url: 'http://www.bankaudi.com.eg/egypt/fx-rates',
            logo: 'http://www.bankaudi.com.eg/GroupWebsite/images/logo.png'
        },
        BNQMSR: {
            fullName: {
                en: 'Banque Misr',
                ar: 'بنك مصر'
            },
            url: 'http://www.banquemisr.com/en/exchangerates',
            logo: 'https://upload.wikimedia.org/wikipedia/ar/7/79/%D8%A8%D9%86%D9%83_%D9%85%D8%B5%D8%B1.png'
        },
        CAEG: {
            fullName: {
                en: 'Crédit Agricole',
                ar: 'كريدي أجريكول'
            },
            url: 'https://www.ca-egypt.com/en/digital-services',
            logo: 'https://www.ca-egypt.com/wp-content/themes/devdmbootstrap3-child/assets/img/logos/digital-services.jpg'
        },
        CBE: {
            fullName: {
                en: 'Central Bank of Egypt',
                ar: 'البنك المركزى المصرى'
            },
            url: 'https://www.cbe.org.eg/en/EconomicResearch/Statistics/Pages/OfficialRatesListing.aspx',
            logo: 'https://www.cbe.org.eg/style%20library/images/logo.png'
        },
        NBE: {
            fullName: {
                en: 'National Bank of Egypt',
                ar: 'البنك الأهلى المصرى'
            },
            url: 'https://www.nbe.com.eg/en/ExchangeRate.aspx',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/NBE_logo.png'
        },
        UBEG: {
            fullName: {
                en: 'The United Bank',
                ar: 'المصرف المتحد'
            },
            url: 'https://www.theubeg.com/ub-services/foreign-currency-exchange',
            logo: 'https://cdn.theubeg.com/Cms_Data/Sites/TheUnitedBank/Themes/default/images/logo.png'
        },
        ADIB: {
            fullName: {
                en: 'Abu Dhabi Islamic Bank',
                ar: 'مصرف أبو ظبي الإسلامى'
            },
            url: 'https://www.adib.eg/Foreign-Currencies',
            logo: 'https://www.adib.eg/media/146118/logo.png'
        }
    };

    return banks;
};

module.exports = { getInfo };