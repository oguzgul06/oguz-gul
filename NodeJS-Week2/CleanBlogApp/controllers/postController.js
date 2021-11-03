const postData = require('../models/postData');

exports.createPost = async (req, res) => {
    await postData.create(req.body);
    res.redirect('/');
};

exports.deletePost = async (req, res) => {
    await postData.findByIdAndRemove(req.params.id);
    res.redirect('/');
};

exports.editPost = async (req, res) => {
    const data = await postData.findOne({ _id: req.params.id });
    data.title = req.body.title;
    data.detail = req.body.detail;
    data.save();

    res.redirect(`/allposts/${req.params.id}`);
};
