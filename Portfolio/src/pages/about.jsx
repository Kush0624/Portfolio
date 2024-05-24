import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
     <center className='redirect'><Link to="/" className='tag'>Home&gt;</Link>About
        <h1>About Us</h1></center>
      <div className="container grid grid-two--cols ">
            <div className="details-section">
              <div className="details grid grid-two--cols">
                <div className="card-about">
                  <p className='Number'>2</p>
                  <p className='heading'>Happy Clients</p>
                </div>
                <div className="card-about">
                  <p className='Number'>5</p>
                  <p className='heading'>Projects Done</p>
                </div>
                <div className="card-about">
                  <p className='Number'>50</p>
                  <p className='heading'>Cups of Coffee</p>
                </div>
                <div className="card-about">
                  <p className='Number'>500</p>
                  <p className='heading'>Work Hours</p>
                </div>
              </div>
            </div>
            <div className="information-section">
              <h1 className='about-heading'>A Web Developer Based in India</h1>
              <p className='about-subheading'>Crafting stunning, user-friendly websites that bring your vision to life. Let's build your digital success story with creativity, precision, and innovation. Your dream website, our expertise..</p>
              <div className="personal-information grid grid-two--cols">
                <div className="left-section">
                  <p>Name: <span className='info'>Kushagra Goyal</span></p>
                  <p>Date of Birth: <span className='info'>June 24, 2003</span></p>
                  <p>Address: <span className='info'>Agra, UttarPradesh India</span></p>
                </div>
                <div className="right-section">
                <p>Zip Code: <span className='info'>282001</span></p>
                  <p>Email: <span className='info'>kushagragoyal13@gmail.com</span></p>
                  <p>Phone: <span className='info'>+918923475484</span></p>
                </div>
              </div>
            </div>
      </div>
      <center><Footer/></center>
    </>
  )
}
