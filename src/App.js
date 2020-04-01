import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import RegisterForm from "./components/pages/registerform";
import LoginForm from "./components/pages/loginform";
import RegisterFormShelter from "./components/pages/registerFormShelter";

import http from "./services/httpService";
import config from "./config.json";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    // pending > resolved (success) OR rejected (failure)
    const { data: posts } = await http.get(config.apiEndpoint); //
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj); // creating data
    console.log(post);

    const posts = [post, ...this.state.posts]; // adding data to table
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "UPDATED";
    await http.put(config.apiEndpoint + "/" + post.id, post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    try {
      await http.delete(config.apiEndpoint + "/" + post.id);
      throw new Error("");
    } catch (ex) {
      //Expected (404: notFound, 400: bad request) - client ERRORS
      //- Display a specific error message
      if (ex.response && ex.response.status === 404)
        alert("This post has already beed deleted");
      this.setState({ posts: originalPosts });

      //Unexpected (network down, server down, database down, bug)
      //- Log them
      //- Display a generic and friendly error message
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/shelter" component={RegisterFormShelter} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
