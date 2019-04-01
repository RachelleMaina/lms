import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import Footer from "./components/Footer";
import People from "./components/People";
import Todo from "./components/Todo";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path="/" component={Article} />
          <Route path="/people" component={People} />
          <Route path="/todo" component={Todo} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
