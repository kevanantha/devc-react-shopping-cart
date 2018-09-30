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

  handleRemoveItemFromCart = (product) => {
    const cartItems = this.state.cartItems;

    const selectedItemIndex = cartItems.findIndex(cartItem => {
      return cartItem.product.id === product.id;
    })

    const selectedItem = cartItems[selectedItemIndex];

    if (selectedItem.quantity > 1) {
      selectedItem.quantity--
    } else {
      cartItems.splice(selectedItemIndex, 1);
    }

    this.setState({ cartItems: cartItems })
  }

  componentDidMount() {
    fetch('https://product-list.glitch.me/')
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

          <ShoppingCart
            cartItems={this.state.cartItems}
            onRevomeItemFromCart={this.handleRemoveItemFromCart}
          />

        </div>
      </div>
    );
  }
}

export default App;
