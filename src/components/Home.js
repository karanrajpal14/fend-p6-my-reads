import React, { Component } from "react"
import { Link } from "react-router-dom"
import Shelf from "./Shelf"
import PropTypes from "prop-types"
import { update } from "../BooksAPI"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
    this.updateBook = this.updateBook.bind(this)
  }

  updateBook(book, shelf) {
    update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState({
        books: this.state.books.filter(cur => cur.id !== book.id).concat([book])
      })
    })
  }

  render() {
    const { books } = this.props
    const currentlyReading = books.filter(
      cur => cur.shelf === "currentlyReading"
    )
    const read = books.filter(cur => cur.shelf === "read")
    const wantToRead = books.filter(cur => cur.shelf === "wantToRead")
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelf
          updateBook={this.updateBook}
          name="Currently Reading"
          books={currentlyReading}
        />
        <Shelf updateBook={this.updateBook} name="Read" books={read} />
        <Shelf
          updateBook={this.updateBook}
          name="Want to read"
          books={wantToRead}
        />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  books: PropTypes.array.isRequired
}

export default Home
