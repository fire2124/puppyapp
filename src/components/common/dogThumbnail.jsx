import React, { Component } from "react";

class DogThumbnail extends Component {
    render() {
        return <div className="dogThumbnail">
            <img width="170" height="150" src={this.props.image} alt="Snow" />
            <div className="thumbnailText">{this.props.dogName}</div>
        </div>
    }
}

export default DogThumbnail;