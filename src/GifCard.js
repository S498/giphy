import React, { Component } from "react";
import "./GifList.css";

class GifCard extends Component {
  constructor() {
    super();

    this.imageRef = React.createRef();
    this.state = { noOfSpans: 0 };
  }

  correctRowHeights = () => {
    if (this.imageRef.current.clientHeight != null) {
      console.log(this.imageRef.current.clientHeight);

      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      this.setState({ noOfSpans: spans });
    } else {
      const height = 200;
      const spans = Math.ceil(height / 10);
      this.setState({ noOfSpans: spans });
    }
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.correctRowHeights);
  }

  render() {
    const { url } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.noOfSpans}` }}>
        <img ref={this.imageRef} src={url} className="image-list" alt="Gif" />
      </div>
    );
  }
}

export default GifCard;
