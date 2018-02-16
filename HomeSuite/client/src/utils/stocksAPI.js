/** Axios will be used as the api messenger/receiver */
import axios from "axios";

/** API Key to access the api */
const APIKEY = "hkv27C8yymw8ekmbFQas";

/** Export to be able to use in the main app */
export default {
    /** Will retreive stock info on a company provided */
  getStocks: function(company){
        /** Send the entire get request */
        /** If the whole request isn't sent, data cannot be accessed properly */
        return axios.get("https://www.quandl.com/api/v3/datasets/WIKI/" + company + "/data.json?api_key=" + APIKEY)
    }
};