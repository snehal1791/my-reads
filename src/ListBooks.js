import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static props = {
   books: PropTypes.array.isRequired,
   onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const { books, onShelfChange } = this.props;
    // categorize books based on their shelf
    let currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    let wantToRead = books.filter(book => book.shelf === 'wantToRead');
    let read = books.filter(book => book.shelf === 'read');        
    // Return the DOM
    return (
      	<div className="list-books">
            <div className="list-books-title">
              	<h1>My Library</h1>
		<span>Udacity React Nanodegree - Project 1</span>
            </div>
            <div className="list-books-content">
		<div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading ({currentlyReading.length})</h2>
                    <div className="bookshelf-books">
                    	<ol className="books-grid">
      			{currentlyReading.map((book) =>
                             /* Component that contains books in a bookshelf */
      				<BookShelf
					key={book.id}
      					book={book}
      					shelf={book.shelf}
					onShelfChange={onShelfChange}
	  			/>
      			)}
      			</ol>
      		     </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read ({wantToRead.length})</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {wantToRead.map((book) =>
      				<BookShelf 
                         		key={book.id}
      					book={book}
      					shelf={book.shelf}
					onShelfChange={onShelfChange}
				/>
      			)}
                      </ol>
                    </div>
                  </div>
		  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read ({read.length})</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {read.map((book) =>
      				<BookShelf 
                         		key={book.id}
      					book={book}
      					shelf={book.shelf}
					onShelfChange={onShelfChange}
				/>
      			)}
                      </ol>
                    </div>
                  </div>
		</div>
      	    </div>
            <div className="open-search">
              <Link to={process.env.PUBLIC_URL + '/search'} className="add-book">Add a book</Link>
            </div>
          </div>
      )
  }
}

export default ListBooks;
