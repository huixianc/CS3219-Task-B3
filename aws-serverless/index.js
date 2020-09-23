// import Express and create app
const express = require('express');
const app = express();
const cors = require('cors');
// Import Body parser
//let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

require('dotenv').config();

// // Configure bodyparser to handle post requests
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

// Connect to Mongoose and set connection variable
const url = process.env.ATLAS_URL;

mongoose.connect(url, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;

db.once("open", () => {
    console.log("Established MongoDB connection!");
});

// send message for default url
app.get('/', (req, res) => {
    res.send('Hello World! :)');
});


// Import routes
let apiRoutes = require("./api-routes");
// Use Api routes in the App
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;
// launch app to listen to port
app.listen(port, () => console.log(`Listening on port ${port}`));  

module.exports = app;
