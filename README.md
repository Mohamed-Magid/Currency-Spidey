# Currency Spidey

A JavaScript/Node.js web crawlers to fetch currency exchange rates from Egyptian banks websites.

# API

I've established an API to fetch data from the app, and here its features for now.

## Features

1. **Fetch** :

* You can fetch data using this end point: ```/api/fetch```.
this end point will return all the available data to you as a JSON response.
* You can also request a specific bank to get data from, you can achieve that using this end point: ```/api/fetch/{bankCode}``` and I'll list all available bank codes at the end.

2. **Info** :

* That's pretty simple. using this end point ```/api/info/``` It'll return to you the available data about the bank itself as a JSON, now it offers the full name of the bank in both English and Arabic and the URL of the currency exchange page on the bank's website. You can also request a specific bank with ```/api/info/{bankCode}```.

## Bank Codes

Here's a list of the available bank codes for now, of course there will be more supported banks later.

* NBE : [National Bank of Egypt](https://www.nbe.com.eg/en/ExchangeRate.aspx).
* BNQMSR : [Banque Misr](http://www.banquemisr.com/en/exchangerates).
* CIB : [Commercial International Bank](https://www.cibeg.com/English/Pages/CIBCurrencies.aspx).
* AAIB : [Arab African International Bank](https://aaib.com/en/rates).
* ALEXBANK : [Alex Bank](https://www.alexbank.com/En/Home/exchangerates).
* AUDI : [Audi Bank](http://www.bankaudi.com.eg/egypt/fx-rates).
* CAEG: [Crédit Agricole](https://www.ca-egypt.com/en/digital-services).
* CBE : [Central Bank of Egypt](https://www.cbe.org.eg/en/EconomicResearch/Statistics/Pages/OfficialRatesListing.aspx).
* UBEG : [The United Bank](https://www.theubeg.com/ub-services/foreign-currency-exchange).
* ADIB : [Abu Dhabi Islamic Bank](https://www.adib.eg/Foreign-Currencies).
* EGBANK : [EG Bank](https://www.eg-bank.com/En/ExchangeRate).
* NBK : [National Bank of Kuwait](https://www.nbk.com/egypt/personal/currency-rates.html).
* BLOM: [Blom Bank Egypt](https://www.blombankegypt.com/BlomEgypt/Exchange-rates).

## Currency Codes

And also here's the available currencies (Note: not all currencies available in every bank).

* USD (United States Dollar).
* EUR (Euro).
* GBP (Pound Sterling).
* CAD (Canadian Dollar).
* DKK (Danish Krone).
* NOK (Norwegian Krone).
* SEK (Swedish Krona).
* CHF (Swiss Franc).
* JPY (Japanese Yen).
* AUD (Australian Dollar).
* KWD (Kuwaiti Dinar).
* SAR (Saudi Riyal).
* AED (UAE Dirham).
* BHD (Bahraini Dinar).
* OMR (Omani Riyal).
* QAR (Qatari Riyal).
* JOD (Jordan Dinar).
* CNY (Chinese Yuan).
* THB (Thai Baht).

# TODOs

1. Setup an endpoint to target one currency and get a response for it's price in all available banks.
2. Refactor the code to reduce complexity.
3. Make smarter error handling.
4. Store the responses in MongoDB to serve the requests from it and update the database every six hours with a cron-job.
5. Make a web app based on the API to show exchange rates.
6. ~~An Android application with [@Mr-Geek11](https://github.com/Mr-Geek11).~~