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
        },
        EGBANK: {
            fullName: {
                en: 'EG Bank',
                ar: 'البنك المصرى الخليجى'
            },
            url: 'https://www.eg-bank.com/Ar/ExchangeRate',
            logo: 'https://www.eg-bank.com/images/Ar_EGB_logo.png'
        },
        NBK: {
            fullName: {
                en: 'National Bank of Kuwait',
                ar: 'بنك الكويت الوطنى'
            },
            url: 'https://www.nbk.com/egypt/personal/currency-rates.html',
            logo: 'https://www.nbk.com/.imaging/default/dam/nbk/logo.png/jcr:content.png'
        },
        BLOM: {
            fullName: {
                en: 'Blom Bank Egypt',
                ar: 'بنك بلوم مصر'
            },
            url: 'https://www.blombankegypt.com/BlomEgypt/Exchange-rates',
            logo: 'https://www.blombankegypt.com/BlomEgypt/images/logo.png'
        },
        AIB: {
            fullName: {
                en: 'Arab International Bank',
                ar: 'المصرف العربى الدولى'
            },
            url: 'https://aib.com.eg/',
            logo: 'https://aib.com.eg/img/logo.bmp'
        },
        NBG: {
            fullName: {
                en: 'National Bank of Greece',
                ar: 'البنك الأهلى اليونانى'
            },
            url: 'http://www.nbg.com.eg/en/exchange-rates',
            logo: 'http://www.nbg.com.eg/en/img/NBGlogo70.svg'
        },
        HDB: {
            fullName: {
                en: 'Housing and Development Bank',
                ar: 'بنك التعمير والإسكان'
            },
            url: 'https://www.hdb-egy.com/index.php/currency-exchange',
            logo: 'https://www.hdb-egy.com/application/themes/hdbeg/images/logo.gif'
        }
    };

    return banks;
};

module.exports = { getInfo };