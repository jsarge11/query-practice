import React from 'react'
import './product.css'


const Product = props => {
let { item } = props;

return (
  <div className="item-wrapper"> 
   <p>Product: {item.name}</p><br/>
   <p>Price: ${item.price}</p><br/>
   <p>Qty: {item.quantity}</p>
  </div>
 )
}
export default Product