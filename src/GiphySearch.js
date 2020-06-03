import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import giphy from "./api/giphy";

const GiphySearch = (props) => {
  const [gifList, setGifList] = useState([]);

  const printTheResultForApp = async (query, limit) => {
    const response = await giphy.get("/gifs/search", {
      params: {
        q: query,
        api_key: "f2HFAPLB9mqdgpVHFo7mfiGnQwVBiNiD",
        limit: limit,
      },
    });
    setGifList(response.data.data);
  };
  return (
    <div>
      <SearchBar fun={printTheResultForApp} />
      <div>
        {gifList.length > 0 ? <p>Showing {gifList.length} GIF's</p> : null}
        <GifList
          gifs={gifList}
          imgUrl={props.imgUrl}
          showModal={props.showModal}
        />
      </div>
    </div>
  );
  // }
};

export default GiphySearch;
