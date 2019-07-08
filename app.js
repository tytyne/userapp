
//app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user.route'); // Imports routes for the users

app.use('/users', user);
let port = 5000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});