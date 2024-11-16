import React from 'react'
import "./fourthpart.css"
import { Col, Row } from 'react-bootstrap'
const Fourthpart = () => {
  return (
    <section id='fourth'>
        <div className="container">
            <Row>
                <Col lg={6}>
                <div className="eight">
                  <h2><i class="fa-solid fa-web-awesome"></i> My Experience</h2>  
                    </div>
                    <div className="eight_one">
                    <h4>2024 - Present</h4>
                    <h2>Frontend Development</h2>
                    <h3>Creative It Institute, Dhanmondi, Dhaka- 1205</h3>
                    </div>
                    <div className="eight_one">
                        <h4>2021 - 2022</h4>
                        <h2>Full Stack Web Developer</h2>
                        <h3>Parsons, The New School</h3>
                    </div>
                    <div className="eight_one">
                        <h4>2020 - 2021</h4>
                        <h2>UI Designer</h2>
                        <h3>House of Life, Leeds</h3>
                    </div>
                    <div className="eight_one">
                        <h4>2018 - 2020</h4>
                        <h2>Junior Graphics Designer</h2>
                        <h3>Theme Junction, Bursa</h3>
                    </div>
                </Col>
                <Col lg={6}>
                <div className="eight">
                  <h2><i class="fa-solid fa-book-open"></i> My Education</h2>  
                    </div>
                    <div className="eight_one">
                        <h4>2024 - 2025</h4>
                        <h2>Frontend Development</h2>
                        <h3>Creative It Institute, Dhanmondi, Dhaka- 1205</h3>
                    </div>
                    <div className="eight_one">
                        <h4>2020 - 2023</h4>
                        <h2>Programming course</h2>
                        <h3>Harverd University</h3>
                    </div>
                    <div className="eight_one">
                        <h4>2016 - 2020</h4>
                        <h2>Graphic design course</h2>
                        <h3>University of Denmark</h3>
                    </div>
                    <div className="eight_one">
                        <h4>2010 - 2011</h4>
                        <h2>Design & Technology</h2>
                        <h3>Parsons, The New School</h3>
                    </div>
                </Col>
            </Row>

           
        </div>
    </section>
  )
}

export default Fourthpart
