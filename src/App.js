import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./stylesheets/styles.css";
import "./stylesheets/profile.css";
import "./stylesheets/home.css";
import "./stylesheets/createPost.css";

import Home from "./components/screens/home";
import Login from "./components/screens/login";
import Signup from "./components/screens/signup";
import Profile from "./components/screens/profile";
import CreatePost from "./components/screens/createPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/createPost">
          <CreatePost />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
