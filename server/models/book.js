const Mongoose = require('mongoose');


const bookSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  author: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
}, {versionKey: false});

module.exports = Mongoose.model('Book', bookSchema);