import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Search from "./components/Search"
import { getAll } from "./BooksAPI"
import "./App.css"

class BooksApp extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    getAll().then(res => {
      this.setState({ books: res })
    })
  }
  render() {
    const { books } = this.state
    return (
      <Switch>
        <Route exact path="/" render={props => <Home books={books} />} />
        <Route
          exact
          path="/search"
          render={props => <Search books={books} />}
        />
      </Switch>
    )
  }
}

export default BooksApp
