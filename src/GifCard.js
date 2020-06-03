/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import "./GifList.css";
import { Popconfirm } from "antd";
import "antd/dist/antd.css";

const GifCard = (props) => {
  const imageRef = useRef();
  const [noOfSpans, setNoOfSpans] = useState(0);

  useEffect(() => {
    const { current } = imageRef;
    const correctRowHeights = () => {
      if (imageRef.current.clientHeight != null) {
        const height = imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        setNoOfSpans(spans);
      } else {
        const height = 200;
        const spans = Math.ceil(height / 10);
        setNoOfSpans(spans);
      }
    };
    current.addEventListener("load", correctRowHeights);
  }, []);

  const { url } = props.image;

  return (
    <div style={{ gridRowEnd: `span ${noOfSpans}` }}>
      <Popconfirm
        title="Do you want to copy this image?"
        cancelText="No"
        okText="Yes"
        onConfirm={(e) => {
          e.preventDefault();
          props.imgUrl(url);
          props.showModal(false);
        }}
        getPopupContainer={(trigger) => trigger.parentNode}
        onCancel={(e) => {
          e.preventDefault();
          console.log("cancel");
          props.showModal(false);
        }}
      >
        <img ref={imageRef} src={url} className="image-list" alt="Gif" />
      </Popconfirm>
    </div>
  );
};

export default GifCard;
