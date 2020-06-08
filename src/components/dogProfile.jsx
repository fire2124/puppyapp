import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDogDetail } from "../services/dogService";

class DogProfile extends Component {
  state = {
    dog: null
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    let response = await getDogDetail(params.dogId)
    if(response){
      const { data } = response;
      this.setState({dog: data});
    }
  }

  render() {
    if (this.state.dog === null) {
      return ('Loading');
    } else {
      // Render real UI ...
      const { dog } = this.state.dog
      return (
       <div className="dogProfile-full">
         <div className="dogProfile">
           <div className="picture-container">
           </div>
           <section className="description">
             Profil psa
         </section>
           <section className="attributes">
             <p> Meno: <strong> {dog.name} </strong> </p>
             <p> Veková kategória: <strong> {dog.ageName} </strong> </p>
             <p> Rasa: <strong> {dog.breedName} </strong> </p>
             <p> Srsť: <strong> {dog.furTypeName} </strong> </p>
             <p> Pohlavie: <strong> {dog.genderName} </strong> </p>
             <p> Veľkosť: <strong> {dog.sizeName} </strong> </p>
             <p> {dog.additionalInfo} </p>
           </section>
           <section className="attributes">
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
         <div className="navigateBack">
           <Link to="/"> Späť na zoznam psov </Link>
         </div>
       </div>
     );
    }

  }
}

export default DogProfile;
