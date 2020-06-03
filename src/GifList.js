import React from "react";
import "./GifList.css";
import ImageCard from "./GifCard";

const GifList = (props) => {
  console.log(props.gifs);
  const ImageList = props.gifs.map((gif) => {
    return <ImageCard key={gif.id} image={gif.images.original} />;
  });
  return <div className="image-list">{ImageList}</div>;
};

export default GifList;
