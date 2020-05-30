import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Login from "./components/login";
import Logout from "./components/logout";
import RegisterUser from "./components/registerUser";
import RegisterShelter from "./components/registerShelter";
import AddDog from "./components/addDog";
import AllDogs from "./components/allDogs";
import DogDetail from "./components/dogDetail"
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { LookupDataProvider } from "./lookupDataProvider"
import { AuthorizationProvider } from "./authorizationProvider"

class App extends Component {

  render() {
    return (

      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <AuthorizationProvider>
            <LookupDataProvider>
            <NavBar/>
              <Switch>
                <Route path="/register" component={RegisterUser} />
                <Route path="/shelter" component={RegisterShelter} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/dogs" component={AllDogs} />
                <Route path="/addDogForm" component={AddDog} />
                <Route path="/dogDetail" component={DogDetail} />
                <Route component={NotFound} />
                <Redirect from="/" exact to="/dogs" />
              </Switch>
            </LookupDataProvider>
          </AuthorizationProvider>
        </main>
      </React.Fragment>

    );
  }
}

export default App;
