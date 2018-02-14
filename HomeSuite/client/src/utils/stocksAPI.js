/** Axios will be used as the api messenger/receiver */
import axios from "axios";

/** API Key to access the api */
const APIKEY = "hkv27C8yymw8ekmbFQas";

/** Export to be able to use in the main app */
export default {
    /** Will retreive stock info on a company provided */
  getStocks: function(company){
        /** Send a get request to the URL provided */
        axios.get("https://www.quandl.com/api/v3/datasets/WIKI/" + company + "/data.json?api_key=" + APIKEY).then(function(response){
            console.log(response);
        });
    }
};