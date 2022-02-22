import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from "react-router";
import AboutContainer from '../about/about_container'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      scheme: "default"
    }
  }
  render() {
    return (
      <div id="header">
        <h1>ShuaLaik</h1>
          <ul>
              <Link to="/about">About</Link>
              <Link to="/music">Music</Link>
              <Link to="/production">Production</Link>
              <Link to="/modeling">Modeling</Link>
              <Link to="/webdev">Web Dev</Link>
              <Link to="socials">Social Medias</Link>
          </ul>
          <Outlet />
      </div>
    )
  }
}
