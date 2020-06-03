import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import GiphySearch from "./GiphySearch";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

const CustomButtom = () => <span>G</span>;

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font" defaultValue="arial">
      <option value="arial" selected>
        Arial
      </option>
      <option value="courier-new">Courier New</option>
    </select>
    <select className="ql-size" defaultValue="small">
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" defaultValue="" />
    <select className="ql-color" defaultValue="" />
    <button className="ql-customButton">
      <CustomButtom />
    </button>
  </div>
);

const Size = Quill.import("formats/size");
Size.whitelist = ["small", "medium", "large"];
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = ["arial", "comic-sans"];
Quill.register(Font, true);

const Editor = (props) => {
  const [editorHtml, setEditorHtml] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleChange(html) {
    setEditorHtml(html);
  }

  useEffect(() => {
    console.log("imgUrl", imgUrl);
  }, [imgUrl]);

  var modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        customButton: () => {
          console.log("g pressed");
          setShowModal(true);
        },
      },
    },
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="text-editor">
      <CustomToolbar />
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
      />
      <Modal
        title="Basic Modal"
        visible={showModal}
        onOk={(e) => {
          e.preventDefault();
          console.log("ok");
        }}
        onCancel={(e) => {
          e.preventDefault();
          setShowModal(false);
        }}
        width="80%"
        centered
      >
        <GiphySearch imgUrl={setImgUrl} />
      </Modal>
    </div>
  );
};

export default Editor;
