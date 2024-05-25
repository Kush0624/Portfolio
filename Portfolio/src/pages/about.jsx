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
              <button className='cvbutton'><a href="/files/resume.pdf" target='_blank'>Download CV</a></button>
            </div>
      </div>
      <div className="skills"><center><span>Skills</span><br /><h1>My Skills</h1></center></div>
      <div className="container skill">
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">Adobe photoshop</div>
            <div className="percent">90%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "90%"}}></div></div>
        </div>
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">Aodbe after effects</div>
            <div className="percent">40%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "40%"}} ></div></div>
        </div>
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">figma</div>
            <div className="percent">70%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "70%"}} ></div></div>
        </div>
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">html 5</div>
            <div className="percent">95%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "95%"}} ></div></div>
        </div>
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">css3</div>
            <div className="percent">90%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "90%"}} ></div></div>
        </div>
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">javascript</div>
            <div className="percent">85%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "85%"}} ></div></div>
        </div>
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">react</div>
            <div className="percent">70%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "70%"}}></div></div>
        </div>
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">Pyhton</div>
            <div className="percent">80%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "80%"}} ></div></div>
        </div>
        <div className="skill-card">
          <div className="techno">
            <div className="tech-name">backend</div>
            <div className="percent">60%</div>
          </div>
          <div className="percentage"><div className="length" role="progressbar" style={{width: "60%"}} ></div></div>
        </div>
      </div>
      <center><Footer/></center>
    </>
  )
}
