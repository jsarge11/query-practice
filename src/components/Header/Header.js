import React, { Component } from 'react'
import './header.css'
import axios from 'axios';

export default class Header extends Component {
 constructor() {
  super();
  this.state = {
   text: '',
   id: ''
  }
 }

 handleChange(field, e) {
  this.setState({ [`${field}`]: e })
 }

 findItem() {
  axios.get('/products/' + this.state.id).then(res => {
   this.props.setResults(res.data)
  })
 }

 filterList() {
  // create query function here
 }

 render() {
  return (
   <nav className="header">
    <h1>Stein's Market</h1>
    <div className="outer-wrapper">
     <div className="search-wrapper">
      <input value={this.state.text}
       onChange={(e) => this.handleChange("text", e.target.value)}
       type="text"
       placeholder="Filter List ... "
      />
      <button className="submit" onClick={() => this.filterList()}> Filter List  </button>
     </div>
     <div className="search-wrapper">
      <input value={this.state.id}
       onChange={(e) => this.handleChange("id", e.target.value)}
       type="text"
       placeholder="Find Item By Id ... "
      />
      <button className="submit" onClick={() => this.findItem()}> Find Item </button>
     </div>
    </div>
   </nav>
  )
 }
}