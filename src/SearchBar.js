import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  // onInputChange=(e)=>{
  //     // console.log(e.target.value);
  //     this.setState({
  //         term: e.target.value
  //     })

  //     console.log(this.state.term);
  // }

  onFromSubmitted = (e) => {
    e.preventDefault();

    this.props.fun(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFromSubmitted}>
          <div className="field">
            <label>Gif search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
