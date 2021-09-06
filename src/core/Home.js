import React from "react";
import Posts from "../post/Posts";

const Home = () => (
  <div>
    <div className="jumbotron bg-transparent">
      <h2>Home</h2>
      <p className="lead">Welcome to React Frontend</p>
    </div>
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default Home;
