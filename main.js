// created a separate file to start the server and listen for requests
const app = require('./server/index.js');
const db = require('./server/db/database.js')
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

// app.listen(port, function () {
//   console.log(`Server listening on port ${port}`);
// });

db.sync()  // sync our database
  .then(function() {
    app.listen(port, () => console.log(`Listening on port ${port}`));
    // then start listening with our express server once we have synced 
  });
