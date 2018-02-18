import React from "react";
const Search = props =>
    <form>
        <div className="form-group row center-block">
            <div className="col-md-3"></div>
            <div className="col-md-1">
                <label htmlFor="search">Search:</label>
            </div>
            <div className="col-md-4">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Type a Ticker Symbol"
                    id="search"
                />
            </div>
            <div className="col-md-1">
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </div>
    </form>;
export default Search;