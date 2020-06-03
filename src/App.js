import React, { Component } from "react";
import giphy from "./api/giphy";
import Editor from "./Quill";
import GiphySearch from "./GiphySearch";

class App extends Component {
  constructor() {
    super();

    this.state = { GifList: [], modalShow: false };
  }

  printTheResultForApp = async (query, limit) => {
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
        <h1>Quill Text Editor</h1>
        <Editor />
      </div>
    );
  }
}

export default App;
