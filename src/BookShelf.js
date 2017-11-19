import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static props = {
    book: PropTypes.array.isRequired
  }
 render() {
   const { book, onShelfChange } = this.props;
	// Get the URL of the image for each book in the shelf
	let imageLinks = book ? book.imageLinks : '';
	let coverURL = imageLinks ? imageLinks.thumbnail : '';
// Returns DOM, onShelfChange method gets called when shelf is changed
// Props for the onShelfChange method are returned back to the parent component.
  return(
    <li >
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverURL})` }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf ? book.shelf : " "} onChange={(event) => onShelfChange(book, event.target.value)}>
                <option value=" " disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  ) 
 }
}

export default BookShelf;