import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class SearchBook extends Component {
  state = {
    books: []
  }
  onInputChange = (value) => {
      BooksAPI.search(value, 10).then((books) => {
        // handle empty books and error
        if(!books || books.error ){
          return this.setState({ books: [] });
        }
        /* search returns books then loop through to find
         * if the book is already present in one of our shelfs
		 * if it does then change the shelf
         * return the searchedbook
         */
        books = books.map(searchedBook => {
          let bookFound = this.props.books.find( book => book.id === searchedBook.id);
          if(bookFound) {
            searchedBook.shelf = bookFound.shelf;
          }
          return searchedBook;
      	});
        // stored the searched result in the state
        this.setState({ books: books })
      });
  }
// Returns a DOM for search page
// handles input change as user searches for the book
  render() {
    let {books} = this.state;
	let {onShelfChange} = this.props;
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" 
       		   to={process.env.PUBLIC_URL + '/'}>Close</Link>
              <div className="search-books-input-wrapper">
                <input 
      			type="text" 
      			placeholder="Search by title or author"
      			onChange={(event) => this.onInputChange(event.target.value)}
		/>
              </div>
            </div>
            <div className="search-books-results">
		<ol className="books-grid">
		{books && books.map((book, index) =>
                     <BookShelf
                       	key={index}
                        book={book}
                        onShelfChange={onShelfChange}
			/>
                     )}
		</ol> 
            </div>
          </div>
      )
  }
}

export default SearchBook;
