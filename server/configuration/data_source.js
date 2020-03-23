const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/reading_books');

(() => {
  mongoose.connection.on('open', (err, data) => {
		console.log('mongo connection successful');  
  });

  mongoose.connection.on('error', (err, data) => {
		console.log(`mongo connection not successful ---- ${err}`);               
  });

})();