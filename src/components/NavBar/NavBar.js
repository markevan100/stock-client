import React, { Component } from 'react';
import './NavBar.scss';
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="brand">La Bolsa</div>
        <ul className="nav-root">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="dropdown">
            <Link to="/services">Backend+DB</Link>
            <ul className="dropdown-block">
              <li>
                <Link to="/node-mongo">Node+MongoDB</Link>
              </li>
              <li>
                <Link to="/node-pg">Node+PostgresQL</Link>
              </li>
              <li>
                <Link to="/rails-pg">Rails+PostgresQL</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}
