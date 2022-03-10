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
          <p>I grew up in Sayreville, New Jersey, and took onto video games from a very early age. This obsession with gaming turned to curiosity, causing me to dwell into programming and the mechanics behind it. As I grew older I fell out of games and into music, but computers were still heaving used for production, furthering my interest in how it all worked. This all led up to the pandemic, where I decided to pursing programming as a full time career.
          </p>
        <p>
          When I'm not programming, you can find me emersing myself in music, whether it be performing, writing, producing, etc. I also love going out with friends, skateboarding, and working out at the gym</p>
        </div>
          <Outlet />
      </div>
    )
  }
}
