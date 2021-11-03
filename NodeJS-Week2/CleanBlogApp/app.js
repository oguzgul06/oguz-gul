// Import express module
const express = require('express');
const app = express();

// Import path module
const path = require('path');

//Static file configuration - (Middleware)
app.use(express.static('public'));

// on the request to root page
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

// Port listening and configuration
const port = 3000;
app.listen(port, () => {
    console.log(`Server is starting ${port} on the port`);
});
