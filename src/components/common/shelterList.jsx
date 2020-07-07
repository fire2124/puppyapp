import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../staticImage/hautu/brown-and-white-short-coated-puppy-1805164.png";
import ShelterThumbnail from "./shelterThumbnail";


class ShelterList extends Component {
  
  render() {

    if (this.props.shelters.length === 0)
      return <p className="mt-5">Nie sú žiadne útulky v databáze.</p>;
    return <div className="grid grid-cols-3 gap-4 mt-20 xl:ml-64 w-8/12">
        {this.props.shelters.map((shelter) => (
          
          <Link to={`/shelterProfile/${shelter.id}`}>
            <ShelterThumbnail image={image} shelterName={shelter.name} className="mt-5" />
          </Link>
        ))}   
    </div>;
  }
}

export default ShelterList;