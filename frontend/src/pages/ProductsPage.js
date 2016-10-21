import React, { Component } from 'react';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: 'Škoda Superb',
        price: '750 000',
        shortInfo: 'Luxury car produced in the Czech Republic.',
      },
      {
        id: 2,
        title: 'Ford Focus',
        price: '600 000',
        shortInfo: 'Sports car made in USA.',
      },
      {
        id: 3,
        title: 'Moped',
        price: '1 000',
        shortInfo: 'No comment.',
      },
    ]
    return (
      <div className="container">
      <div className="jumbotron hero-spacer">
          <h1>Products!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
          <p><a className="btn btn-primary btn-large">Call to action!</a>
          </p>
      </div>
        <ProductList products={products}/>
      </div>
    );
  }
}
