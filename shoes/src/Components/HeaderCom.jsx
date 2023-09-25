import React, { Component } from 'react'
import { Nav,NavItem,NavLink, } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class HeaderCom extends Component {
  render() {
    return (
      <div>
      <Nav pills>
  <NavItem>
    <NavLink
      active
      href="#"  
    >
      Home
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
    Galary
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
       About
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      disabled
      href="#"
    >
      ContectUs
    </NavLink>
  </NavItem>
</Nav>
      </div>
    )
  }
}
