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
        for (let i = 0; i < companies.length; i++){
            /** Make an api call for each element */
            axios.get("https://www.quandl.com/api/v3/datasets/WIKI/" + companies[i] + "/data.json?api_key=" + APIKEY).then(function(data){
                /** Push the name and price as an object into the data */
                /** The name comes straight from the companies array */
                /** While the price comes from the axios data */
                dat.push({name: companies[i], price: data.data.dataset_data.data[0][4]});
            });
        }
    /** This timeout function will allow the asynchronous call above to go to completion */
    /** If the call isn't completed, the data rendered will be incomplete */
    setTimeout(function(){
        /** Return the data as the promise when the promise resolves */
        resolve(dat);
    }, 7000)
  });



/** Export to be able to use in the main app */
export default {
    /** Will retreive stock info on a company provided */
  getStocks: function(company){
        /** Send the entire get request */
        /** If the whole request isn't sent, data cannot be accessed properly */
        return axios.get("https://www.quandl.com/api/v3/datasets/WIKI/" + company + "/data.json?api_key=" + APIKEY)
    },
    /** Will retreive data for each stock in the default companies array */
    getDefaultStocksInfo: function(){
        /** Return the entire promise defined above to perform the then function whenever necessary in outside files */
        return companiesPromise;
    }
};