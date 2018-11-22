import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component {
  render() {
    const { name, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map((book, key) => <Book book={book} key={key} />)
            }
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  name: PropTypes.string,
  books: PropTypes.array
};

export default Shelf;
