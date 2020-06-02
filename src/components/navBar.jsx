import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthorizationContext } from "../authorizationProvider";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        PuppyApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <AuthorizationContext.Consumer>
      {({loggedIn, userFirstName}) => (
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {loggedIn !== true && (
                  <React.Fragment>
                    <NavLink className="nav-item nav-link" to="/registerShelter">
                      Registrácia útulku
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/login">
                      Prihlásanie
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/registerUser">
                      Registrácia používateľa
                    </NavLink>
                  </React.Fragment>
                )}
                {loggedIn === true && (
                  <React.Fragment>
                    <NavLink className="nav-item nav-link" to="/userProfile">
                      {userFirstName} Profil
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/logout">
                      Odhlásiť
                    </NavLink>
                  </React.Fragment>
                )}
              </div>
            </div>
      )}

      </AuthorizationContext.Consumer>
    </nav>
  );
};
NavBar.contextType = AuthorizationContext;
export default NavBar;
