import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../dogo.jpg"
import DogThumbnail from "../common/dogThumbnail"

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
                    <DogThumbnail image={image} dogName={dog.name} />
                </Link>
            )}
        </ul>
    }
}

export default DogsList;