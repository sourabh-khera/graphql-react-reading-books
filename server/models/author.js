const Mongoose = require('mongoose');


const authorSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [{
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, {versionKey: false});

module.exports = Mongoose.model('Author', authorSchema);