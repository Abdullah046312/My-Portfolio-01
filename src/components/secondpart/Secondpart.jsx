import React from 'react'
import "./secondpart.css"
import { Col, Row } from 'react-bootstrap'
import images8 from "../../assets/images8.jpg"
import images9 from "../../assets/images9.jpg"
import images10 from "../../assets/images10.jpg"
import images11 from "../../assets/images11.jpg"


const Secondpart = () => {
  return (
    <section id='second'>
    <div className="container">
        <Row>
            <Col lg={12}>
            <div className="three">
                <h4>What I do?</h4>
                <h2>I Work With Trusted Comapny.</h2>
                <h3>My Favourite Clients</h3>
            </div>
            
            </Col>
            <Col lg={3}>
            <div className="four">
                <img src={images8} alt="" />
            </div>
            
            </Col>
         
            <Col lg={3}>
            <div className="four">
                <img src={images9} alt="" />
            </div>
            
            </Col>
         
            <Col lg={3}>
            <div className="four">
                <img src={images10} alt="" />
            </div>
            
            </Col>
         
            <Col lg={3}>
            <div className="four">
                <img src={images11} alt="" />
            </div>
            
            </Col>
         
          
          
          
     
        </Row>
    </div>
   </section>
  )
}

export default Secondpart
