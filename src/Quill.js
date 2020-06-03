import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomButtom = () => <span>G</span>;

function customButton() {
  console.log("G");
}

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
    <select className="ql-align" />
    <select className="ql-color" />
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

class Editor extends React.Component {
  state = { editorHtml: "" };

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  };

  static modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        customButton: customButton,
      },
    },
  };

  render() {
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          value={this.state.editorHtml}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={Editor.modules}
        />
      </div>
    );
  }
}

export default Editor;
