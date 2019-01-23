import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
 constructor() {
  super();
  this.state = {

  }
 }

 render() {
  return (
   <nav className="header">
    <h1>Stein's Market</h1>
   </nav>
  )
 }
}