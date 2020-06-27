import React, { Component } from "react";
import authService from "./services/authService";

const refreshTokenName = 'RefreshToken';
const accessTokenName = 'AccessToken';

const AuthorizationContext = React.createContext();

class AuthorizationProvider extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.refreshTokens = this.refreshTokens.bind(this);
        this.setCurrentUserData = this.setCurrentUserData.bind(this);
    }

    state = {
        loggedIn: false,
        userFirstName: null,
        userLastName: null,
        userRole: null,
        userId: null,
        tokenExp: null,
    }

    async componentDidMount() {
        let isRefreshSuccesful = await this.refreshTokens(); // TODO response
        if (isRefreshSuccesful) {
            this.setCurrentUserData();
        } else {
            this.logout();
        }
    }

    render() {
        return (
            <AuthorizationContext.Provider value={{
                authParams: this.state,
                login: this.login,
                logout: this.logout
            }}>
                {this.props.children}
            </AuthorizationContext.Provider>
        )
    }

    async login(credentials) {
        const response = await authService.login(credentials);
        if (response !== null) {
            this.setTokens(response.data.accessToken, response.data.refreshToken);
            this.setCurrentUserData();
            return true;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem(accessTokenName);
        localStorage.removeItem(refreshTokenName);

        this.setState({
            loggedIn: false,
            userRole: null,
            userFirstName: null,
            userLastName: null,
            userId: null
        });
    }

    async refreshTokens() {
        if (localStorage.getItem(accessTokenName) !== null && localStorage.getItem(refreshTokenName) !== null) {
            const response = await authService.refresh(localStorage.getItem(accessTokenName), localStorage.getItem(refreshTokenName));
            if (response) {
                if (response.data) {
                    this.setTokens(response.data.accessToken, response.data.refreshToken);
                    return true;
                }
            }
            return false;
        }
    }

    setCurrentUserData() {
        let accessToken = localStorage.getItem(accessTokenName);
        let jwtData = accessToken.split('.')[1];
        let stringJwtJsonData = window.atob(jwtData);
        let decodedJwt = JSON.parse(stringJwtJsonData);
        let role = decodedJwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        let id = decodedJwt['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        let tokenExp = decodedJwt['exp'];
        this.setState({
            loggedIn: true,
            userRole: role,
            userId: id,
            tokenExp: tokenExp
        });
    }

    setTokens(accessToken, refreshToken) {
        localStorage.setItem(accessTokenName, accessToken);
        localStorage.setItem(refreshTokenName, refreshToken);
    }
}

export { AuthorizationProvider, AuthorizationContext };
