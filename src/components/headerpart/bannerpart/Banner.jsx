import React from 'react'
import "./banner.css"
import { Col, Row } from 'react-bootstrap'

import images1 from "../../../assets/images1.png"
import { TypeAnimation } from 'react-type-animation';



const Banner = () => {
  return (
     
    <section id='banner'>
        <div className="container">
           <Row>
            <Col lg={7}>
         
                   
                  <div className="banner_inner_text">
                    <h2>Hello,</h2>
                    <h4> I'm Abdullah,</h4>
                    <h3> I'm a Freelancer &</h3>
                    <div className="banner_main">
                    <TypeAnimation
        sequence={[
          
          'Web Developer  ', // Text to type
          'Web Designer', // Text to type
          
          
          
          50,                          // Pause duration before deleting
          '',                             // Empty string to backspace
          50,                            // Pause duration after backspace
          
          50                           // Pause duration after typing before starting over
        ]}
        wrapper="span"
        speed={10}                      // Speed of typing
        deletionSpeed={200}              // Speed of backspace
        repeat={Infinity}              // Repeat infinitely
      />
           </div>
                    

                    <p>I break down complex user experience problems to create integrity focussed solutions that connect billions of people </p>
                    <div className="banner_btn">
                    <button>Download CV <i class="fa-solid fa-download"></i></button>
                    <div className="banner_icon">
                      <a href="https://github.com/Abdullah046312"><i class="fa-brands fa-github"></i></a>
                      <a href="https://www.facebook.com/abdullah.rony.56/"><i class="fa-brands fa-square-facebook"></i></a>
                      <a href="https://www.instagram.com/obak.chowdhury/"><i class="fa-brands fa-square-instagram"></i></a>
                      <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                    </div>
                  </div>
                    
               
                </Col>

                <Col lg={{span:4, offset:1}}>
                <div className="banner_img">
                <img src={images1} alt="" />
                </div>
                </Col>
            </Row>

            <Row>
              <Col lg={3}>
              <div className="banner_inner">
                <h2>06 <h3>Month of Experience</h3></h2>
              </div>
              </Col>
              <Col lg={3}>
              <div className="banner_inner">
                <h2>35+ <h3>Project Completed</h3></h2>
              </div>
              </Col>
              <Col lg={3}>
              <div className="banner_inner">
                <h2>25+<h3>Happy Mentor</h3></h2>
              </div>
              </Col>
              <Col lg={3}>
              <div className="banner_inner">
                <h2>06 <h3>Month of Experience</h3></h2>
              </div>
              </Col>
            </Row>
        </div>
    </section>
  )
}

export default Banner
