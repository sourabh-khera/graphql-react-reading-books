const { addNewBook, getBooks, getSpecificBook } = require('../../services/book');
const { getSpecificAuthor } = require('../../services/author');


const getBookAuthor = (authorId) => {
 return getSpecificAuthor(authorId)
 .then(result => {
   return {...result._doc, books: getSpecificAuthorBooksList.bind(this, authorId)};
 }) 
 .catch(err => { throw err });
}

const getSpecificAuthorBooksList = (authorId) => {
  return getBooks(authorId)
  .then(result => {
    return result.map(book => {
      return { ...book._doc , author: book._doc.author}
    });
  })
  .catch(err => { throw err });
}

module.exports = {
  book: (args) => {
    const book = {
      bookId: args.bookId
    }
    return getSpecificBook(book.bookId)
    .then(result => {
      return {...result._doc, author: getBookAuthor.bind(this, result._doc.author)};
    })
    .catch(err => { throw err });
  },
  books: () => {
    return getBooks()
    .then(result => {
      return result;
    })
    .catch(err => { throw err });
  },
  addBook: (args) => {
    const book = {
      name: args.bookInput.name,
      genre: args.bookInput.genre,
      author: args.bookInput.authorId,
    };
    return addNewBook(book)
    .then(result => {
      return result;
    })
    .catch(err => { throw err });
  }
}