import React, { Component } from "react";
import authService from "./services/authService";

const refreshToken = 'RefreshToken';
const accessToken = 'AccessToken';
const AuthorizationContext = React.createContext();
class AuthorizationProvider extends Component {
    state = {
        loggedIn: null,
        userFirstName: null,
        userLastName: null,
        userRole: null
    }

    async componentDidMount() {
        if (localStorage.getItem(accessToken) !== 'null' &&
            localStorage.getItem(refreshToken) !== 'null' &&
            localStorage.getItem(accessToken) !== null &&
            localStorage.getItem(refreshToken) !== null) {
            const response = await authService.refresh(localStorage.getItem(accessToken), localStorage.getItem(refreshToken));

            if (response.data.succeeded === true) {
                let jwtData = response.data.accessToken.split('.')[1];
                let stringJwtJsonData = window.atob(jwtData);
                let decodedJwt = JSON.parse(stringJwtJsonData);
                let role = decodedJwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
                localStorage.setItem(accessToken, response.data.accessToken);
                localStorage.setItem(refreshToken, response.data.refreshToken);

                this.setState({
                    loggedIn: true,
                    userFirstName: response.data.userFirstName,
                    userLastName: response.data.userLastName,
                    userRole: role
                });
            }
        }
    }

    render() {
        return (
            <AuthorizationContext.Provider value={{
                userRole: this.state.userRole,
                userFirstName: this.state.userFirstName,
                loggedIn: this.state.loggedIn,
                login: async (credentials) => {
                    const response = await authService.login(credentials);
                    if (response.data.succeeded === true) {

                        let jwtData = response.data.accessToken.split('.')[1];
                        let stringJwtJsonData = window.atob(jwtData);
                        let decodedJwt = JSON.parse(stringJwtJsonData);
                        let role = decodedJwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
                        localStorage.setItem(accessToken, response.data.accessToken);
                        localStorage.setItem(refreshToken, response.data.refreshToken);

                        this.setState({
                            loggedIn: true,
                            userFirstName: response.data.userFirstName,
                            userLastName: response.data.userLastName,
                            userRole: role
                        });
                    }
                },
                logout: async () => {
                    localStorage.removeItem(accessToken);
                    localStorage.removeItem(refreshToken);

                    this.setState({
                        loggedIn: false,
                        userRole: null,
                        userFirstName: null,
                        userLastName: null
                    });
                }

            }}>
                {this.props.children}
            </AuthorizationContext.Provider>
        )
    }
}

export { AuthorizationProvider, AuthorizationContext };