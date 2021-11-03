//Import mogoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Connect Db
mongoose.connect('mongodb://localhost/clean-blog-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Create Schema
const BlogSchema = new Schema({
    name: String,
    message: String,
});

// Schema convert to model
const Blog = mongoose.model('Blog', BlogSchema);

// Create a blog
/*
Blog.create({
    name: 'Arda',
    message: "Second Blog writer's to the MongoDB",
});
*/

//Read a blog
/*
Blog.find({}, (err, data) => {
    console.log(data);
});
*/

//Update Blog
/*
const id = '6182ac06ad360d120e759eac';
Blog.findByIdAndUpdate(
    id,
    {
        name: 'Oguz Gul',
        message: "First Blog writer's to the MongoDB UPDATED!",
    },
    {
        new: true,
    },
    (err, data) => {
        console.log(data);
    }
);
*/

//Delete Blog
/*
const id = '6182ae10c91c8c1a2009f6bf';
Blog.findByIdAndDelete(id, (err, data) => {
    console.log('Blog content was removed.');
});
*/
