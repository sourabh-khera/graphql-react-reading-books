const authorModel = require('../models/author');


exports.addNewAuthor = (authorDetails) => {
  return new Promise((resolve, reject) => {
    authorModel.find({name: authorDetails.name}, (err, data) => {
      if (err) {
        reject(err);
      }
      else if (data.length) {
        reject('Author already exists');
      }
      else {
        authorModel.create({...authorDetails}, (err, data) => {
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

exports.getAuthors = () => {
  return new Promise((resolve, reject) => {
    authorModel.find({}, (err, data) => {
      if(err){
        reject(err);
      } else if(data.length){
        resolve(data);
      } else {
        reject('Authors list not found');
      }
    });
  });
}

exports.getSpecificAuthor = (authorId) => {
  return new Promise((resolve, reject) => {
    authorModel.findById(authorId, (err, data) => {
      if(err){
        reject(err);
      } else if(data){
        resolve(data);
      } else {
        reject('Author not found');
      }
    });
  });
}