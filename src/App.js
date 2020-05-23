import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import RegisterShelter from "./components/registerShelter";
import auth from "./services/authService";
import AddDogForm from "./components/addDogForm";
import AllDogs from "./components/allDogs";
import DogDetail from "./components/dogDetail"
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {LookupDataProvider} from "./lookupDataProvider"

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    console.log(user);
  }

  render() {
    const { user } = this.state;

    return (

      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <LookupDataProvider>
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route path="/shelter" component={RegisterShelter} />
              <Route path="/addDogForm" component={AddDogForm} />
              <Route path="/dogs" component={AllDogs} />
              <Route path="/dogDetail" component={DogDetail} />
              <Redirect from="/" exact to="/dogs" />
            </Switch>
          </LookupDataProvider>
        </main>
      </React.Fragment>

    );
  }
}

export default App;
