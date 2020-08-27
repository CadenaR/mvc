let ProductModel = require('../models/Product')

exports.create = (req, res) => {
    res.render('products/create');
};

exports.store = (req, res) => {
  let product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  };
  ProductModel.create(product)
    .then((id) => {
      res.redirect('/');
    });
};

exports.show = (req, res) => {
    let id = req.params.id;
    
    ProductModel.find(id).then((product) => {
      if (product == null) {
        res.status(404).send('Not found');
        return;
      }

      res.render('products/show', {product: product});
    });
};

exports.edit = (req, res) => {
    let id = req.params.id;
    ProductModel.find(id).then((product) => {
      if (product == null) {
        res.status(404).send('Not found');
        return;
      }
      res.render('products/edit', {product: product});
    });
};

exports.update = (req, res) => {
    let id = req.params.id;

    ProductModel.find(id).then((product) => {
      if (product == null) {
        res.status(404).send('Not found');
        return;
      }
  
      let updateProduct = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
      }
  
      ProductModel.update(product.id, updateProduct)
        .then((id) => {
          res.redirect('/');
        });
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    ProductModel.find(id).then((product) => {
      if (product == null) {
        res.status(404).send('Not found');
        return;
      }
      ProductModel.delete(product.id)
        .then((id) => {
          res.status(200).send("success");
        });
    });
};

exports.paginated = (req, res) => {
  let page = req.params.page;
  ProductModel.all()
    .then((data) => {
      res.json(data);
    });
};