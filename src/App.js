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
import Dogs from "./components/dogs";
import DogDetail from "./components/dogDetail"
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/shelter" component={RegisterShelter} />
            <Route path="/addDogForm" component={AddDogForm} />
            <Route path="/dogs" component={Dogs} />
            <Route path="/dogDetail" component={DogDetail} />
            <Redirect from="/" exact to="/dogs" />

            {/* <Route
              path="/dogs"
              render={(props) => <Dogs {...props} user={this.state.user} />} //schovanie componentov
            /> */}
            {/*<Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />*/}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
