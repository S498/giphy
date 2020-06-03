import React from "react";
import "./GifList.css";
import GifCard from "./GifCard";

const GifList = (props) => {
  const ImageList = props.gifs.map((gif) => {
    return (
      <GifCard
        key={gif.id}
        image={gif.images.original}
        imgUrl={props.imgUrl}
        showModal={props.showModal}
      />
    );
  });
  return <div className="image-list">{ImageList}</div>;
};

export default GifList;
