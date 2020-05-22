import React, { Component } from "react";
import { Link } from "react-router-dom";

class DogDetail extends Component {
  state = {
    dog: null
  }

  componentDidMount () {
    console.log(this.props.location.state);
    this.setState({ dog: this.props.location.state.dog });
  }

  render() {
    const {dog} = this.props.location.state
    console.log(dog);
    return (
      <div className = "dogProfile-full">
      <div className = "dogProfile">
        <div className = "picture-container">
        </div>
        <section className = "description">
          Profil psa
        </section>
        <section className = "attributes">
          <p> Meno: <strong> { dog.name } </strong> </p>
          <p> Veková kategória: <strong> { dog.ageName } </strong> </p>
          <p> Rasa: <strong> { dog.breedName } </strong> </p>
          <p> Srsť: <strong> { dog.furTypeName } </strong> </p>
          <p> Pohlavie: <strong> { dog.genderName } </strong> </p>
          <p> Veľkosť: <strong> { dog.sizeName } </strong> </p>
          <p> {dog.additionalInfo} </p>
        </section>
        <section className = "attributes">
        <p>
          Vhodný ku:
           {dog.compatibilityNames.map(name =>
            <strong>{' '}{name}{','}</strong>
              )}
          </p>
         <p>
           Povahové črty: 
           {dog.behaviorTraitNames.map(name =>
            <strong>{' '}{name}{','}</strong>
              )}
          </p>
         <p>
           Farba: 
           {dog.colorNames.map(name =>
            <strong>{' '}{name}{','}</strong>
              )}
          </p>
        </section>
      </div>
      <div className = "navigateBack">
        <Link to = "/"> Späť na zoznam psov </Link>
      </div>
    </div>
    );
  }
}

export default DogDetail;
