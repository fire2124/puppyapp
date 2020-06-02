import React, { Component } from 'react';
import { getUserProfile } from "../services/authService";
import { AuthorizationContext } from "../authorizationProvider";

class UserProfile extends Component {

  state = {
    profile: null
  }

  componentDidMount() {
    this._asyncRequest = getUserProfile(this.context.userId).then(
      response => {
        this._asyncRequest = null;
        this.setState({ profile: response.data.userProfile });
      }
    );
  }

  render() {
    if (this.state.profile === null) {
      return ('Loading');
    } else {
      return (
        <div>
          <p> Meno: <strong> {this.state.profile.firstName} </strong> </p>
          <p> Priezvisko: <strong> {this.state.profile.lastName} </strong> </p>
          <p> Email: <strong> {this.state.profile.email} </strong> </p>
        </div>
      );
    }
  }
}
UserProfile.contextType = AuthorizationContext;
export default UserProfile;
