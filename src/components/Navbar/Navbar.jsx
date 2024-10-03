import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <a href='#' className='home'>Soun<span>DZing</span></a>
      <div className='details-section'>
        <a href='#about' >About</a>
        <a href='#about'>CourseDetails</a>
        <a href='#about'>Blog</a>
        <a href='#about'>Testimonial</a>
      </div>
    </nav>
  )
}

