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
  }
  componentDidMount() {
    axios.get('/products').then(res => {
      this.setState({ products: res.data })
    })
  }
  render() {
    let mappedProducts = this.state.products.map(item => {
      return (
        <Product key={item.id} item={item}/>
      )
    })
    return (
      <div className="App">
        <Header />
        <section id="section-wrapper">
        {mappedProducts}
        </section>
      </div>
    );
  }
}

export default App;
