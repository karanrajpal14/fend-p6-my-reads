import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  render() {
    const { title, authors, imageLinks, shelf } = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${imageLinks && imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value={shelf || "none"} disabled>Move to...</option>
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
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
