import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../dogo.jpg"
import DogThumbnail from "../common/dogThumbnail"

class DogsList extends Component {
    render() {
        if (this.props.dogs.length === 0)
            return <p>Nie sú žiadne psy v databáze.</p>;
        return <ul>
            {this.props.dogs.map(dog =>
                <Link to={`/dogProfile/${dog.id}`}>
                    <DogThumbnail image={image} dogName={dog.name} />
                </Link>
            )}
        </ul>
    }
}

export default DogsList;