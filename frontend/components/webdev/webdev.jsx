import React, { Component } from 'react'
import { Outlet } from 'react-router'

export default class Webdev extends Component {
  render() {
    return (
      <div id="webdev">
        <div id="left-bar-webdev">
          <img src={window.resumeURL}/>
          <h1>Joshua Laikowski</h1>
          <h2>Full Stack Engineer</h2>
          <p>Hi! I'm Josh, a Web Developer and Software Engineer by day, Musician by night.</p>
          <p>I'm fluent in Javascript, React, Redux, Ruby, Ruby on Rails, MongoDB, Node.js, and more. I recently finished the curriculum at App Academy, a highly selective and immersive Software Engineering boot camp in the NYC area, where I spent 1000 hours refining my skills and exposing myself to cutting-edge technologies.
          </p>
        <p>
          When I'm not programming, you can find me emersing myself in music, whether it be performing, writing, producing, etc.</p>
        </div>
        <div id="right-bar-webdev">
          <Outlet />
        </div>
      </div>
    )
  }
}
