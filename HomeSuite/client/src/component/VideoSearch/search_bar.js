import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  /** Called by an onChange property */
  /** Takes in a term to search as an argument */
  onInputChange(term) {
    /** Updates state variable */
    this.setState({ term });
    
    this.props.onSearchTermChange(term);
  }
}

