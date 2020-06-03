import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import GiphySearch from "./GiphySearch";
import { Modal, Button } from "react-bootstrap";

const CustomButtom = () => <span>G</span>;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GiphySearch />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
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
  customButton(showModal) {
    console.log("g");
    // setState({ showModal: true });
    // showModal = true;
  }
  constructor(props) {
    super(props);

    // this.setState = {
    //   setModalShow: customButton,
    // };
  }
  state = { editorHtml: "", showModal: false };

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  };

  static modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        customButton: () => {
          console.log("g pressed");
          // this.customButton();
        },
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
          // placeholder={this.props.placeholder}
          modules={Editor.modules}
        />
        {/* <Button onClick={() => this.setState({ showModal: true })}>Hell</Button> */}
        <MyVerticallyCenteredModal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        />
      </div>
    );
  }
}

export default Editor;
