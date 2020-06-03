import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import giphy from "./api/giphy";

const GiphySearch = (props) => {
  // constructor() {
  //   super();
  //   this.state = { GifList: [], modalShow: false };
  // }
  const [gifList, setGifList] = useState([]);

  const printTheResultForApp = async (query, limit) => {
    console.log(query, limit);

    const response = await giphy.get("/gifs/search", {
      params: {
        q: query,
        api_key: "f2HFAPLB9mqdgpVHFo7mfiGnQwVBiNiD",
        limit: limit,
      },
    });
    // this.setState({ GifList: response.data.data });
    setGifList(response.data.data);
  };
  // render() {
  return (
    <div>
      <SearchBar fun={printTheResultForApp} />
      <div>
        {gifList.length > 0 ? <p>Showing {gifList.length} GIF's</p> : null}
        <GifList gifs={gifList} imgUrl={props.imgUrl} />
      </div>
    </div>
  );
  // }
};

export default GiphySearch;
