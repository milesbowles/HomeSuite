export const API = {
    companies: ["AAPL", "FB", "SBUX", "NKE", "VZ"],
    loadAllAPIFunctionsCalls: function(funcs) {
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
    },

}