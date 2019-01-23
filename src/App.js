import React, { Component } from 'react';
import './App.css';
import './reset.css'
import './css/global.css'
import Header from './components/Header/Header';
import axios from 'axios'
import Product from './components/Product/Product';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.setResults = this.setResults.bind(this);
  }

  componentDidMount() {
    axios.get('/products').then(res => {
      this.setResults(res.data);
    })
  }

  setResults(data) {
    this.setState({ products: data})
  }

  render() {
    let mappedProducts = this.state.products.map(item => {
      return (
        <Product key={item.id} item={item}/>
      )
    })
    let amountOfItems = 0;
    if (mappedProducts) {
      amountOfItems = mappedProducts.length
    }
    return (
      <div className="App">
        <Header setResults={this.setResults}/>
        <section id="section-wrapper">
        <div id="item-counter">
          ITEMS: {amountOfItems}
        </div>
        {mappedProducts}
        </section>
      </div>
    );
  }
}

export default App;
