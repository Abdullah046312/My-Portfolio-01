import React from 'react'
import "./firsthpart.css"
import { Col, Row } from 'react-bootstrap'
import images2 from "../../assets/images2.jpg"
import images3 from "../../assets/images3.jpg"
import images4 from "../../assets/images4.jpg"
import images5 from "../../assets/images5.jpg"
import images6 from "../../assets/images6.jpg"
import images7 from "../../assets/images7.jpg"


const Firsthpart = () => {
  return (
    
    <section id='first'>
        <div className="container">
          
       
            <Row>
            
                <Col lg={{span:7, offset:3}}>
                <div className="one">
                    
                    <h2>My Quality Services</h2>
                    <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>

                </div>
                </Col>
            </Row>

            <Row>
               <Col lg={4}>
               <div className="two">
                <img src={images2} alt="" />
                <h2>UI/UX Design</h2>
                <h4><i class="fa-solid fa-angles-right"></i> Landing Pages</h4>
                <h4><i class="fa-solid fa-angles-right"></i> User Flow</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Wireframing</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Prototyping</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Mobile App Design
                </h4>
               </div>
               </Col>
               <Col lg={4}>
               <div className="two">
                <img src={images3} alt="" />
                <h2>Development</h2>
                <h4><i class="fa-solid fa-angles-right"></i> HTML/CSS</h4>
                <h4><i class="fa-solid fa-angles-right"></i> JavaScript</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Animation</h4>
                <h4><i class="fa-solid fa-angles-right"></i> WordPress</h4>
                <h4><i class="fa-solid fa-angles-right"></i> React</h4>
               </div>
               </Col>
               <Col lg={4}>
               <div className="two">
                <img src={images4} alt="" />
                <h2>Illustration</h2>
                <h4><i class="fa-solid fa-angles-right"></i> Character Design</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Icon Set</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Illustration Guide</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Illustration Set</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Motion Graphic</h4>
               </div>
               </Col>
               <Col lg={4}>
               <div className="two">
                <img src={images5} alt="" />
                <h2>SEO Marketing</h2>
                <h4><i class="fa-solid fa-angles-right"></i> White Hat SEO</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Black Hat SEO</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Grey Hat SEO</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Negative SEO</h4>
                <h4><i class="fa-solid fa-angles-right"></i> On-Page SEO

                </h4>
               </div>
               </Col>
               <Col lg={4}>
               <div className="two">
                <img src={images6} alt="" />
                <h2>Data Analysis</h2>
                <h4><i class="fa-solid fa-angles-right"></i> Diagnostic Analysis</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Predictive Analysis</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Risk Assessment</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Prototyping</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Sales Forecasting

                </h4>
               </div>
               </Col>
               <Col lg={4}>
               <div className="two">
                <img src={images7} alt="" />
                <h2>Brand Identity</h2>
                <h4><i class="fa-solid fa-angles-right"></i> Brand Architecture</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Brand Authenticity</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Brand Awareness</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Brand Management</h4>
                <h4><i class="fa-solid fa-angles-right"></i> Brand Metrics
                </h4>
                

               </div>
               </Col>
            </Row>
        </div>
    </section>
  )
}

export default Firsthpart
