import React from 'react';

function ShoppingCart(props) {
  return (
    <div className="column">
      <h3 className="title is-4">Shopping Cart</h3>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((cartItem, index) => (
            <tr key={index}>
              <td>{cartItem.product.name}</td>
              <td>{cartItem.product.price}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <button className="button is-danger is-small">-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total : Rp 0</h3>
    </div>
  )
}

export default ShoppingCart;
