
let ProductModel = require('../models/Product');

exports.homepage = (req, res) => {
  res.render('pages/homepage');
}

exports.about = (req, res) => {
    res.render('pages/about');
};