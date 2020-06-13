import React, { Component } from "react";
import authService from "./services/authService";

const refreshToken = "RefreshToken";
const accessToken = "AccessToken";
const AuthorizationContext = React.createContext();
class AuthorizationProvider extends Component {
  state = {
    loggedIn: false,
    userFirstName: null,
    userLastName: null,
    userRole: null,
    userId: null,
  };

  async componentDidMount() {
    if (
      localStorage.getItem(accessToken) !== "null" &&
      localStorage.getItem(refreshToken) !== "null" &&
      localStorage.getItem(accessToken) !== null &&
      localStorage.getItem(refreshToken) !== null
    ) {
      const response = await authService.refresh(
        localStorage.getItem(accessToken),
        localStorage.getItem(refreshToken)
      );

      // this.login(response);
    }
  }

  render() {
    return (
      <AuthorizationContext.Provider
        value={{
          authParams: this.state,
          login: async (credentials) => {
            const response = await authService.login(credentials);
            this.login(response);
          },
          logout: async () => {
            localStorage.removeItem(accessToken);
            localStorage.removeItem(refreshToken);

            this.setState({
              loggedIn: false,
              userRole: null,
              userFirstName: null,
              userLastName: null,
              userId: null,
            });
          },
        }}
      >
        {this.props.children}
      </AuthorizationContext.Provider>
    );
  }
  login(response) {
    if (response.data.succeeded === true) {
      localStorage.setItem(accessToken, response.data.accessToken);
      localStorage.setItem(refreshToken, response.data.refreshToken);
      let jwtData = response.data.accessToken.split(".")[1];
      let stringJwtJsonData = window.atob(jwtData);
      let decodedJwt = JSON.parse(stringJwtJsonData);
      let role =
        decodedJwt[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
      let id =
        decodedJwt[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ];
      this.setState({
        loggedIn: true,
        userFirstName: response.data.userFirstName,
        userLastName: response.data.userLastName,
        userRole: role,
        userId: id,
      });
    }
  }
}

export { AuthorizationProvider, AuthorizationContext };
