import React from 'react'
import "./seventhpart.css"
import { Col, Row } from 'react-bootstrap'
import images1 from "../../assets/images1.png"
const Seventhpart = () => {
  return (
    <section id='seventh'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="fourteen">
                    <h4>Let's meet!</h4>
                    <h2>Hire Me <i class="fa-brands fa-hire-a-helper"></i></h2>
                </div>
                </Col>
            </Row>
            <Row>
            <Col lg={4}>
                <div className="fiveteen_one">
                    <img src={images1} alt="" />
                    <h4>Abdullah Al-Mamun</h4>
                    <h2>Web Designer & Developer</h2>
                    <p>I am available for freelance work. Connect with me via call in to my account.</p>
                    <h5>Phone: +8801911046312</h5>
                   <h3>Email:abdullahalmamun201214@gmail.com</h3>
                    <h6>FIND WITH ME</h6>
                    <div className="banner_icon">
                      <a href="https://github.com/Abdullah046312"><i class="fa-brands fa-github"></i></a>
                      <a href="https://www.facebook.com/abdullah.rony.56/"><i class="fa-brands fa-square-facebook"></i></a>
                      <a href="https://www.instagram.com/obak.chowdhury/"><i class="fa-brands fa-square-instagram"></i></a>
                      <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                </Col>
                

                <Col lg={{span:7, offset:1}}>
                <div className="fiveteen_main_inner">

                <div className="fiveteen_main">

                <div className="fiveteen_two">
                    <h4>Your Name</h4>
                    <input type="text" placeholder='Enter Your Name' />
                    
                </div>
               
                <div className="fiveteen_two">
                    <h4>Your Number</h4>
                    <input type="text" placeholder='Enter Your Phone Number' />
                    
                </div>
                </div>
                <div className="fiveteen_three">
                    <h4> Email</h4>
                    <input type="text" placeholder='Enter Your Email' />
                </div>
                <div className="fiveteen_three">
                    <h4> Subject</h4>
                    <input type="text" placeholder='Enter Your Subject' />
                </div>
                <div className="fiveteen_four">
                    <h4> Message</h4>
                    <input type="text" placeholder='Enter Your Message' />
                </div>
                <div className="fiveteen_five">
                    <button>SEND MESSAGE</button>
                </div>
                </div>

               
                
                </Col>
            </Row>
           
        </div>
    </section>
  )
}

export default Seventhpart
