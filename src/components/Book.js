import React, { Component } from "react"
import PropTypes from "prop-types"

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: this.props.book.shelf || "none"
    }
    this.updateBook = this.updateBook.bind(this)
  }

  updateBook(value) {
    const { book } = this.props
    this.setState({ status: value })
    this.props.updateBook(book, value)
  }

  render() {
    const { book } = this.props
    const { title, authors = [], imageLinks } = book
    const { status } = this.state

    const options = (
      <React.Fragment>
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </React.Fragment>
    )
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url("${imageLinks && imageLinks.thumbnail}")`
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={status}
                onChange={e => this.updateBook(e.target.value)}
              >
                {options}
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors[0] || "No author"}</div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func
}

export default Book
