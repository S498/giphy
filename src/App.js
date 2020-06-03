import React, { Component, useState } from "react";
import SearchBar from "./SearchBar";
import giphy from "./api/giphy";
import GifList from "./GifList";
import Editor from "./Quill";
import { Modal, Button } from "react-bootstrap";
import GiphySearch from "./GiphySearch";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Giphy Search
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class App extends Component {
  constructor() {
    super();

    this.state = { GifList: [], modalShow: false };
  }

  printTheResultForApp = async (query, limit) => {
    console.log(query, limit);

    const response = await giphy.get("/gifs/search", {
      params: {
        q: query,
        api_key: "f2HFAPLB9mqdgpVHFo7mfiGnQwVBiNiD",
        limit: limit,
      },
    });
    this.setState({ GifList: response.data.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Quill Text Editor</h1>
        <Editor />
        <br />
        <br />
        <h1>Giphy Search</h1>
        <GiphySearch />
      </div>
    );
  }
}

export default App;
