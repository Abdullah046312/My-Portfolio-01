import React from 'react'
import "./sixthpart.css"
import { Col, Row } from 'react-bootstrap'

const Sixthpart = () => {
  return (
    <section id='sixth'>
    <div className="container">
        <Row>
         <Col lg={4}>
         <div className="twelev">
            <h4>Pricing</h4>
            <h2>Pricing <i class="fa-solid fa-rocket"></i></h2>
            <p>Use the free templates with your whole team or choose a premium. ith your whole team or choose a premium.
              Get the bundle and get lifetime support and one year updates.</p>
         </div>
         </Col>
         <Col lg={4}>
         <div className="therteen">
            <h4>STARTER</h4>
            <h3>Try and decide.</h3>
            <h2>$60</h2>
            <h5> <i class="fa-solid fa-angles-right"></i> 1 Page with Elementor</h5>
            <h5> <i class="fa-solid fa-angles-right"></i> Design Customization</h5>
            <h5> <i class="fa-solid fa-angles-right"></i> Responsive Design</h5>
            <h5> <i class="fa-solid fa-angles-right"></i> Content Upload</h5>
            <h5> <i class="fa-solid fa-angles-right"></i> Design Customization</h5>
            <button>BUY NOW</button>
            
         </div>
         </Col>
         <Col lg={4}>
         <div className="therteen">
            <h4>BUNDLE</h4>
            <h3>Try and decide.</h3>
            <h2>$220</h2>
            <h5> <i class="fa-solid fa-angles-right"></i> 10 Page with Elementor</h5>
            <h5> <i class="fa-solid fa-angles-right"></i> Design Customization</h5>
            <h5> <i class="fa-solid fa-angles-right"></i> Responsive Design</h5>
            <h5> <i class="fa-solid fa-angles-right"></i> Content Upload</h5>
            <h5> <i class="fa-solid fa-angles-right"></i> Design Customization</h5>
            <button>BUY NOW</button>
            
         </div>
         </Col>
       
        </Row>
    </div>
</section>
  )
}

export default Sixthpart
