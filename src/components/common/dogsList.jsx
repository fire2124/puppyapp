import React, { Component } from "react";
import { Link } from "react-router-dom";
import DogThumbnail from "../common/dogThumbnail";
import image from "../../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";
import image2 from "../../staticImage/hautu/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.png";

class DogsList extends Component {
  render() {
    if (this.props.dogs.length === 0)
      return <p className="mt-5">Nie sú žiadne psy v databáze.</p>;
    return <div className="grid grid-cols-3 gap-4 mt-20 xl:ml-64 w-8/12">
        {this.props.dogs.map((dog) => (
          <Link to={`/dogProfile/${dog.id}`}>
            <DogThumbnail image={image} dogName={dog.name} className="mt-5" />
          </Link>
        ))}   
    </div>;
  }
}

export default DogsList;
