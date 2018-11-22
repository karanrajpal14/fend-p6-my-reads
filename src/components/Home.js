import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Shelf from './Shelf';
import { getAll } from '../BooksAPI';

class Home extends Component {
  constructor () {
    super();
    this.state = {
      books: []
    };
  }
  componentDidMount () {
    getAll()
    .then(res => {
      this.setState({ books: res });
    });
  }

  render () {
    const { books } = this.state;
    const currentlyReading = books.filter(cur => cur.shelf === 'currentlyReading');
    const read = books.filter(cur => cur.shelf === 'read');
    const wantToRead = books.filter(cur => cur.shelf === 'wantToRead');
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelf name="Currently Reading" books={currentlyReading} />
        <Shelf name="Read" books={read} />
        <Shelf name="Want to read" books={wantToRead} />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Home;
