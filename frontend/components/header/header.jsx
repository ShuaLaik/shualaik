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
      <div>
        <div id="header">
          <h1>shualaik</h1>
          <ul>
              <Link to="/about"><p>About</p></Link>
              <Link to="/music"><p>Music</p></Link>
              <Link to="/production"><p>Production</p></Link>
              <Link to="/modeling"><p>Modeling</p></Link>
              <Link to="/webdev"><p>Web Dev</p></Link>
              <Link to="socials"><p>Social Medias</p></Link>
          </ul>
        </div>
            <ul id="main-side">
              <img id="img1" src={window.main1URL}/>
              {/* <img id="img2" src={window.main2URL}/> */}
            </ul>
            <Outlet />
      </div>
    )
  }
}
