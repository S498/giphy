import React, { Component } from "react";
import SearchBar from "./SearchBar";
import giphy from "./api/giphy";
import GifList from "./GifList";
import Editor from "./Quill";

class App extends Component {
  constructor() {
    super();

    this.state = { GifList: [] };
  }

  printTheResultForApp = async (query, limit) => {
    console.log(query, limit);

    const response = await giphy.get("/gifs/search", {
      params: {
        q: query,
        api_key: "f2HFAPLB9mqdgpVHFo7mfiGnQwVBiNiD",
        limit: limit,
      },
    });
    this.setState({ GifList: response.data.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Editor />
        <SearchBar fun={this.printTheResultForApp} />
        <div>
          {this.state.GifList.length > 0 ? (
            <p>Showing {this.state.GifList.length} GIF's</p>
          ) : null}
          <GifList gifs={this.state.GifList} />
        </div>
      </div>
    );
  }
}

export default App;
