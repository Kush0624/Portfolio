import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Footer from '../components/Footer';
export default function home() {
  return (
    <section className='hero'>
      <div className="container grid grid-two--cols overflow">
        <div className="name-side">
          <div className="name">I'm Kushagra Goyal</div>
          <div className="buttons">
            <button><a href="/about" className='about-button'>More About Me <span className='arrow'><FaArrowRight/></span></a></button>
            <button><a href="/hire" className='hire-button'>Hire <span className='arrow'><FaArrowRight/></span></a></button>
          </div>
          <Footer/>
        </div>
        <div className="photoside">
          <div className="image">
            
          </div>
        </div>
      </div>
    </section>
  )
}
