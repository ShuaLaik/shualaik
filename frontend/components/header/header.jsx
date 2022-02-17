import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Demo1 from '../demo1'
import Demo2 from '../demo2'

export default class Header extends Component {
  render() {
    return (
      <div id="header">
          <ul>
              <Link to="">About</Link>
              <Link to="">Music</Link>
              <Link to="">Production</Link>
              <Link to="">Modeling</Link>
              <Link to="">Web Dev</Link>
              <Link to="">Social Medias</Link>
          </ul>
      </div>
    )
  }
}
