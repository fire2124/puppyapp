import React, { Component } from "react";
import "../../assets/add.scss"

class DogThumbnail extends Component {
  render() {
    return (
      <div >
        <img width="248" height="248" src={this.props.image} alt="Snow" />
        <div className="thumbnailText text-left">{this.props.dogName}</div>
      </div>
    );
  }
}

export default DogThumbnail;
