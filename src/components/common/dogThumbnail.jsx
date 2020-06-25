import React, { Component } from "react";
import "../../assets/add.scss"
class DogThumbnail extends Component {
  render() {
    return (
      <li>
        {/* className="dogThumbnail"*/}
        <img width="248" height="248" src={this.props.image} alt="Snow" />
        <div className="thumbnailText text-left">{this.props.dogName}</div>
      </li>
    );
  }
}

export default DogThumbnail;
