import React, { Component } from "react";
import SearchBar from "./SearchBar";
import giphy from "./api/giphy";
import GifList from "./GifList";

class App extends Component {
  constructor() {
    super();

    this.state = { GifList: [] };
  }

  printTheResultForApp = async (msg) => {
    console.log(msg);

    const response = await giphy.get("/gifs/search", {
      params: {
        q: msg,
        api_key: "f2HFAPLB9mqdgpVHFo7mfiGnQwVBiNiD",
        limit: 18,
      },
    });

    // .then((response)=>{console.log(response)});

    // console.log(response);
    this.setState({ GifList: response.data.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar fun={this.printTheResultForApp} />
        <div>
          <GifList gifs={this.state.GifList} />
        </div>
      </div>
    );
  }
}

export default App;
