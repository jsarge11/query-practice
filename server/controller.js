const products = require('../assets/products.json')

module.exports = {
  read: (req,res) => {
   res.status(200).send(products);
  }
}