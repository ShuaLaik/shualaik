import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
    <div id="right-bar-webdev">
        
        <Link to="" className="main-selector">
            <img src={window.codeURL}/>
            <div className="cover"></div>
            <h1>Technologies</h1>
        </Link>
        
        <Link to="" className="main-selector">
            <img src={window.projectsURL}/>
            <div className="cover"></div>
            <h1>Projects</h1>
        </Link>
        
    </div>
    )
  }
}
