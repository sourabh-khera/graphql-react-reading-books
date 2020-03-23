const { addNewAuthor, getAuthors, getSpecificAuthor } = require('../../services/author');

module.exports = {
  authors: () => {
    return getAuthors()
    .then(result => {
      return result;
    })
    .catch(err => { throw err });
  },
  
  author: (args) => {
    const author = {
      authorId: args.authorId,
    };
    return getSpecificAuthor(author.authorId)
    .then(result => {
      return result;
    })
    .catch(err => { throw err });
  },

  addAuthor: (args) => {
    const author = {
      name: args.authorInput.name,
    };
    return addNewAuthor(author)
    .then(result => {
      return result;
    })
    .catch(err => { throw err });
  },


}

