import React, { Component } from 'react';
import Navbar from './Navbar';
import Product from './Product';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  state = {
    cartItems: [],
    products: []
  }

  handleAddItemToCart = (product) => {
    let cartItems = this.state.cartItems;
    const alreadyExists = cartItems.some(
      cartItem => cartItem.product.id === product.id
    )

    if (alreadyExists) {
      cartItems = cartItems.map((cartItem) => {
        if (cartItem.product.id === product.id) {
          cartItem.quantity += 1;
        }
        return cartItem;
      })
    } else {
      cartItems.push({
        product,
        quantity: 1
      })
    }

    this.setState({ cartItems })
  }

  componentDidMount() {
    fetch('http://product-list.glitch.me/')
      .then(res => res.json())
      .then(products =>  {
        this.setState({ products: products })
      })
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="columns">
          <div className="column is-two-thirds">
            <div>
              <h3 className="title">Our Products</h3>
              <div className="columns">
                {this.state.products.map(product => (
                  <Product
                    key={product.id}
                    product={product}
                    onAddItemToCart={this.handleAddItemToCart}
                  />
                ))}
              </div>
            </div>
          </div>

          <ShoppingCart cartItems={this.state.cartItems}/>

        </div>
      </div>
    );
  }
}

export default App;
