/** Axios will be used as the api messenger/receiver */
import axios from "axios";
const companies = ["AAPL", "FB", "SBUX", "NKE", "VZ"]

/** API Key to access the api */
const APIKEY = "hkv27C8yymw8ekmbFQas";



/** Create a promise to handle asynchronous rendering of multiple companies data */
let companiesPromise = new Promise((resolve, reject) => {
    /** Will contain the data for each company */
    var dat = [];
    /** Traverse the length of the default companies array */
    for (let i = 0; i < companies.length; i++) {
        /** Make an api call for each element */
        axios.get("https://www.quandl.com/api/v3/datasets/WIKI/" + companies[i] + "/data.json?api_key=" + APIKEY).then(function (data) {
            /** Push the name and price as an object into the data */
            /** The name comes straight from the companies array */
            /** While the price comes from the axios data */
            dat.push({ name: companies[i], price: data.data.dataset_data.data[0][4] });
        });
    }
    /** This timeout function will allow the asynchronous call above to go to completion */
    /** If the call isn't completed, the data rendered will be incomplete */
    setTimeout(function () {
        /** Return the data as the promise when the promise resolves */
        resolve(dat);
    }, 7000)
});
/** This function handles loading all the promises for axios */
/** This needs to be done to not limit the time when this will render */
/** In other words, to avoid using the timeout function */
/** Takes in functions to resolve */
function loadAllAPIFunctionsCalls(funcs) {
    /** Return a reduce(function) */
    /** This is to return values concisely */
    return funcs.reduce(function (accumulated, current) {
        /** Return the function promise */
        /** This promise returns vals that are accessed below */
        return accumulated.then(function (vals) {
            /** Return current function promise */
            return current().then((val) => {
                /** Which returns the concatination of values */
                return vals.concat(val);
            });
        });
    }, Promise.resolve([]));
}
function formatDataAsObject(company, data) {
    /** Return the format to be taken in by the state variable in the stock page */
    return { name: company, price: data.data.dataset_data.data[0][4] };
}

/** Export to be able to use in the main app */
export default {
    /** Will retreive stock info on a company provided */
    getStocks: function (company) {
        /** Send the entire get request */
        /** If the whole request isn't sent, data cannot be accessed properly */
        return axios.get("https://www.quandl.com/api/v3/datasets/WIKI/" + company + "/data.json?api_key=" + APIKEY)
    },
    /** Will retreive data for each stock in the default companies array */
    getDefaultStocksInfo: function (onLoad) {
        return loadAllAPIFunctionsCalls(companies.map(company => {
            return () =>
                axios.get("https://www.quandl.com/api/v3/datasets/WIKI/" + company + "/data.json?api_key=" + APIKEY)
                    .then(function (data) {
                        return formatDataAsObject(company, data);
                    })
                    .then((data) => {
                        if (typeof onLoad === 'function') onLoad(data)
                        return data;
                    })
        })).then(arr => console.log(arr));
    }
};
