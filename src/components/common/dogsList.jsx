import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../dogo.jpg"

class DogsList extends Component {
    render() {
      return <ul>
            {this.props.dogs.map(dog =>
              <Link to={{
                pathname: '/dogDetail',
                state: {
                  dog: dog
                }
              }}>
                <div className="dogThumbnail">
                  <img width="170" height="150" src={image} alt="Snow" />
                  <div className="thumbnailText">{dog.name}</div>
                </div>
              </Link>
            )}
          </ul>;
    }
  }

  export default DogsList;