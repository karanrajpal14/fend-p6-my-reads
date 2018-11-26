import React from "react"
import Book from "./Book"
import PropTypes from "prop-types"

const Shelf = ({ name, books, updateBook }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, key) => (
          <Book book={book} key={key} updateBook={updateBook} />
        ))}
      </ol>
    </div>
  </div>
)

Shelf.propTypes = {
  name: PropTypes.string,
  books: PropTypes.array,
  updateBook: PropTypes.func
}

export default Shelf
