import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      limit: 18,
    };
  }
  onFromSubmitted = (e) => {
    e.preventDefault();

    this.props.fun(this.state.term, this.state.limit);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFromSubmitted}>
          <div className="field" style={{ alignItems: "center" }}>
            <label>Gif search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{ margin: "10px" }}
              value={this.state.term}
            />
            <button
              variant="primary"
              onSubmit={this.onFromSubmitted}
              style={{ margin: "10px" }}
            >
              Search
            </button>
            <span>Number of Results: </span>
            <select
              id="number"
              name="Number of Results"
              onChange={(e) => this.setState({ limit: e.target.value })}
            >
              <option value="18">18</option>
              <option value="36">36</option>
              <option value="72">72</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
