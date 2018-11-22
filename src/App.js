import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import './App.css';

class BooksApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} /> 
      </React.Fragment>
    );
  }
}

export default BooksApp
