const products = require('../assets/products.json')

module.exports = {
  read: (req, res) => {
    res.status(200).send(products);
  },
  readSingleItem: (req, res) => {
    let index = products.findIndex(item => {
      return item.id === +req.params.id
    })
    // accounting for products starting at index of 1
    index++;
    if (!products[index]) {
      res.status(404).send('Product not found');
    }
    else {
      res.status(200).send([products[index]]);
    }
  }
}