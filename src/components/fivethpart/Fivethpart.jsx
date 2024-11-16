import React from 'react'
import "./fivethpart.css"
import { Col, Row } from 'react-bootstrap'
import images18 from "../../assets/images18.jpg"
import images19 from "../../assets/images19.jpg"
import images20 from "../../assets/images20.jpg"
import images21 from "../../assets/images21.jpg"
import images22 from "../../assets/images22.jpg"
import images23 from "../../assets/images23.jpg"

const Fivethpart = () => {
  return (
    <section id='fiveth'>
        <div className="container">
            <Row>
                <Col lg={{span:6, offset:3}}>
                <div className="ten">
                    <h2>My Skills</h2>
                    <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={2}>
                <div className="eleven_one">
                    <img src={images18} alt="" />
                    <h2>95%</h2>

                </div>
                <div className="eleven_two">
                    <h4>Figma</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="eleven_one">
                    <img src={images19} alt="" />
                    <h2>70%</h2>

                </div>
                <div className="eleven_two">
                    <h4>Sketch</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="eleven_one">
                    <img src={images20} alt="" />
                    <h2>50%</h2>
                    

                </div>
                <div className="eleven_two">
                    <h4>XD</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="eleven_one">
                    <img src={images21} alt="" />
                    <h2>50%</h2>

                </div>
                <div className="eleven_two">
                    <h4>WordPress</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="eleven_one">
                    <img src={images22} alt="" />
                    <h2>82%</h2>

                </div>
                <div className="eleven_two">
                    <h4>React</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="eleven_one">
                    <img src={images23} alt="" />
                    <h2>93%</h2>

                </div>
                <div className="eleven_two">
                    <h4>JavaScript</h4>
                </div>
                </Col>
            </Row>

            
        </div>
    </section>
  )
}

export default Fivethpart
