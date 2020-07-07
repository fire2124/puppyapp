import React, { Component } from "react";
import { Link } from "react-router-dom";
import DogThumbnail from "../common/dogThumbnail";
import image from "../../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";

class DogsList extends Component {
  render() {
    let ilustracia2;
    if (this.props.dogs.photo) ilustracia2 = this.props.dogs.photo;
      else ilustracia2= image;
    if (this.props.dogs.length === 0)
      return <p className="mt-5">Nie sú žiadne psy v databáze.</p>;
    return <div className="grid grid-cols-3 gap-4 mt-20 xl:ml-64 w-8/12">
        {this.props.dogs.map((dog) => (
          <Link to={`/dogProfile/${dog.id}`}>
            <DogThumbnail image={ilustracia2} dogName={dog.name} className="mt-5" />
          </Link>
        ))}   
    </div>;
  }
}

export default DogsList;
