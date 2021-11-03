// Import modules
const express = require('express');
const postData = require('./models/postData');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const pageController = require('./controllers/pageController');

const app = express();

//Connect Db
mongoose
    .connect('mongodb://localhost/clean-blog-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('db connection successful');
    })
    .catch((err) => {
        console.log('db connection failed');
    });

// Template Engine
app.set('view engine', 'ejs');

//Static file configuration - (Middleware)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET'],
    })
);

// on the request to root page - ROUTES
app.get('/', (req, res) => {
    res.render('index');
});

// on the request to about page - ROUTES
app.get('/about', pageController.getAboutPage);

// on the request to post page - ROUTES
app.get('/add_post', pageController.getAddpostPage);

// on the request to edit page - ROUTES
app.get('/allposts/edit/:id', pageController.getEditPage);

// Port listening and configuration
const port = 3000;
app.listen(port, () => {
    console.log(`Server is starting ${port} on the port`);
});
