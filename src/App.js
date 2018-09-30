import React, { Component } from 'react';
import Navbar from './Navbar';
import Product from './Product';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="columns">
          <div className="column is-two-thirds">
            <div>
              <h3 className="title">Our Products</h3>
              <div className="columns">

                <Product />
                <Product />
                <Product />

              </div>
            </div>
          </div>

          <ShoppingCart />

        </div>
      </div>
    );
  }
}

export default App;
