const bookModel = require('../models/book');

exports.addNewBook = (bookDetails) => {
  return new Promise((resolve, reject) => {
    bookModel.find({name: bookDetails.name}, (err, data) => {
      if (err) {
        reject(err);
      } else if (data.length) {
        reject('Book with same name already exists');
      } else {
        bookModel.create({...bookDetails}, (err, data) => {
          if(err){
            reject(err);
          } else {
            resolve(data);
          }
        });
      }
    });
  });
}

exports.getBooks = (authorId) => {
  return new Promise((resolve, reject) => {
    bookModel.find(authorId ? {author: authorId} : {}, (err, data) => {
      if(err){
        reject(err);
      } else if(data.length){
        resolve(data);
      } else {
        reject('Books list not found');
      }
    });
  });
}

exports.getSpecificBook = (bookId) => {
  return new Promise((resolve, reject) => {
    bookModel.findById(bookId, (err, data) => {
      if(err){
        reject(err);
      } else if(data){
        resolve(data);
      } else {
        reject('Book not found');
      }
    });
  });
}

