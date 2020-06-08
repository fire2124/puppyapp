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
      {({authParams}) => (
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              {authParams.loggedIn}
              <div className="navbar-nav">
                {!authParams.loggedIn && (
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
                {authParams.loggedIn && authParams.userRole === 'User' && (
                  <React.Fragment>
                    <NavLink className="nav-item nav-link" to="/userProfile">
                      {authParams.userFirstName} Profil
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/logout">
                      Odhlásiť
                    </NavLink>
                  </React.Fragment>
                )}
                {authParams.loggedIn && authParams.userRole === 'ShelterAdmin' && (
                  <React.Fragment>
                    <NavLink className="nav-item nav-link" to="/shelterProfile">
                      {authParams.userFirstName} Profil
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/addDog">
                      Pridať psa
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/logout">
                      Odhlásiť
                    </NavLink>
                  </React.Fragment>
                )}
                {authParams.loggedIn && authParams.userRole === 'Admin' && (
                  <React.Fragment>
                    <NavLink className="nav-item nav-link" to="/shelterRequests">
                      Útulky 
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
