import React from 'react';

function ShoppingCart() {
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
          <tr>
            <td>New Balance</td>
            <td>550</td>
            <td>1</td>
            <td><button className="button is-danger is-small">-</button></td>
          </tr>
          <tr>
            <td>Vans</td>
            <td>2000</td>
            <td>1</td>
            <td><button className="button is-danger is-small">-</button></td>
          </tr>
        </tbody>
      </table>G
      <h3>Total : Rp 0</h3>
    </div>
  )
}

export default ShoppingCart;
