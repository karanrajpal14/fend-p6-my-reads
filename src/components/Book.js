import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, updateBook }) => {
  const { title, authors = [], imageLinks, shelf } = book;
  return (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${imageLinks && imageLinks.thumbnail}")` }}></div>
        <div className="book-shelf-changer">
          <select value={shelf || "none"} onChange={(e) => updateBook(book, e.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors[0] || "No author"}</div>
    </div>
  </li>);
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func
};

export default Book;
