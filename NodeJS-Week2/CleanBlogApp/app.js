// Import express module
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const blog ={
        id: 1, title: "Blog title", description: "Blog description"
    }
    res.send(blog);
});

// Port listening and configuration
const port = 3000;
app.listen(port, () => {
    console.log(`Server is starting ${port} on the port`);
});
