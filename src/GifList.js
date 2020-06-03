import React from "react";
import "./GifList.css";
import ImageCard from "./GifCard";

const GifList = (props) => {
  console.log(props.gifs);
  const ImageList = props.gifs.map((gif) => {
    return <ImageCard key={gif.id} image={gif.images.original} />;
  });
  {
    /* <img key={img.id} src={img.urls.regular} alt={img.alt_description}/> */
  }
  return <div className="image-list">{ImageList}</div>;
};

// const ImageList = (props)=>{
//     console.log(props.images);

//     const ImageList = props.images.map((img)=>{
//         return <ImageCard key={img.id} image={img}/>
//     })

//     return (
//         <div className="image-list">{ImageList}</div>
//     );
// }

export default GifList;
