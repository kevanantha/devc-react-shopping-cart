import React from 'react';

function Product() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="Vans" src="https://media.journeys.com/images/products/1_259094_ZM.JPG" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Vans</p>
              <div className="content">aman<br /></div>
              <h5>Rp 2.000</h5><button className="button is-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
