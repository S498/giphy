import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import GiphySearch from "./GiphySearch";
import { Modal } from "antd";
import "antd/dist/antd.css";

const Editor = () => {
  const CustomButtom = () => <span onClick={() => setShowModal(true)}>G</span>;

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

  const [imgUrl, setImgUrl] = useState("");

  // var handleChange = () => {
  //   console.log(imgUrl);
  //   setText({
  //     ops: [
  //       {
  //         insert: {
  //           image: imgUrl,
  //         },
  //       },
  //     ],
  //   });
  // };

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
        value={{
          ops: [
            {
              insert: {
                image: imgUrl,
              },
            },
          ],
        }}
        /* onChange={handleChange}*/ modules={modules}
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
        style={{ maxHeight: "50%" }}
        destroyOnClose
      >
        <GiphySearch imgUrl={setImgUrl} showModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default Editor;
