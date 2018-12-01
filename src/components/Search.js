import React, { Component } from "react"
import Book from "./Book"
import { Link } from "react-router-dom"
import { getAll, search, update } from "../BooksAPI"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      results: [],
      query: ""
    }
    this.updateQuery = this.updateQuery.bind(this)
    this.makeQuery = this.makeQuery.bind(this)
    this.updateBook = this.updateBook.bind(this)
  }

  componentDidMount() {
    getAll().then(res => {
      this.setState({ books: res })
    })
  }

  updateQuery(query) {
    this.setState({ query }, this.makeQuery)
  }

  makeQuery() {
    const { query, books } = this.state
    if (query.trim().length > 0) {
      search(query.trim()).then(res => {
        if (res && res.error) {
          this.setState({ results: [] })
        } else if (res) {
          res.forEach(cur => {
            const book = books.filter(book => book.id === cur.id)
            cur.shelf = book[0] ? book.shelf : null
          })
          this.setState({ results: res })
        }
      })
    }
  }

  updateBook(book, shelf) {
    update(book, shelf)
  }

  render() {
    const { query, results } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.map((book, key) => (
              <Book book={book} key={key} updateBook={this.updateBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
