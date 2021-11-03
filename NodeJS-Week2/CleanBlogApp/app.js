// Import express module
const express = require('express');
const app = express();

// Import path module
const path = require('path');

// Import ejs module
const ejs = require('ejs');

// Template Engine
app.set('view engine', 'ejs');

//Static file configuration - (Middleware)
app.use(express.static('public'));

// on the request to root page - ROUTES
app.get('/', (req, res) => {
    res.render('index');
});

// on the request to about page - ROUTES
app.get('/about', (req, res) => {
    res.render('about');
});

// on the request to post page - ROUTES
app.get('/add_post', (req, res) => {
    res.render('add_post');
});

// Port listening and configuration
const port = 3000;
app.listen(port, () => {
    console.log(`Server is starting ${port} on the port`);
});
