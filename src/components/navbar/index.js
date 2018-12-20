import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
} from 'reactstrap';

import './index.scss'
import logo from "./logo.png"

export default class GBNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="sm">
          <NavbarBrand href="/">
            <img src={logo} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/podcast">Podcast</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>                            
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signin">Sign In</NavLink>
              </NavItem>             
              <Form>
                <Input type="text" name="search" placeholder="Search blog" />
              </Form>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}