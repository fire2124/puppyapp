import React, { Component } from "react";
import { getShelterApplications } from "../services/shelterService";
import { Link } from "react-router-dom";

class ShelterRequests extends Component {

  state = {
    pendingRegistrations: null
  }

  componentDidMount() {
    this._asyncRequest = getShelterApplications().then(
      response => {
        this._asyncRequest = null;
        this.setState({pendingRegistrations: response.data.registrations});
        console.log(this.state);
      }
    );
  }

  render() {
    if (this.state.pendingRegistrations === null) {
      return ('Loading');
    } else {
      return(
        this.state.pendingRegistrations.map(pendingRegistration =>
          <Link to={`/shelterRequest/${pendingRegistration.shelter.id}`}>
              {pendingRegistration.shelter.name}
          </Link>
        )
      )
    }
  }
}
export default ShelterRequests;
