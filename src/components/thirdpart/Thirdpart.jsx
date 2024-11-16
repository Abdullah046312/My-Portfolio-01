import React from 'react'
import "./thirdpart.css"
import { Col, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import images12 from "../../assets/images12.jpg"
import images13 from "../../assets/images13.jpg"
import images14 from "../../assets/images14.jpg"
import images15 from "../../assets/images15.jpg"
import images16 from "../../assets/images16.jpg"
import images17 from "../../assets/images17.jpg"

const Thirdpart = () => {
    var settings = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        speed:500,
        
      };


  return (
    <section id='third'>
    <div className="container">
        <Row>
            <Col lg={{span:8, offset:2}}>
            <div className="six">
                
                <h4>What I created</h4>
                <h2>My Work Portfolio</h2>
                <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                <div className="banner_icon">
                      <a href="https://github.com/Abdullah046312"><i class="fa-brands fa-github"></i></a>
                      <a href="https://www.facebook.com/abdullah.rony.56/"><i class="fa-brands fa-square-facebook"></i></a>
                      <a href="https://www.instagram.com/obak.chowdhury/"><i class="fa-brands fa-square-instagram"></i></a>
                      <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
            </div>
            </Col>
        </Row>

        <Row>
            <Col lg={4}>
            <div className="seven">
                <h2>Category</h2>
                <div className="eight">
                    <a href="#"><button>UI/UX Design <i class="fa-solid fa-angles-right"></i></button></a>
                </div>
                <div className="eight">
                    <a href="#"><button>Web Design <i class="fa-solid fa-angles-right"></i></button></a>
                </div>
                <div className="eight">
                    <a href="#"><button>Web Development <i class="fa-solid fa-angles-right"></i></button></a>
                </div>
                <div className="eight">
                    <a href="#"><button>Brand Identity <i class="fa-solid fa-angles-right"></i></button></a>
                </div>
            </div>
            </Col>
            <Col lg={{span:7, offset:1}}>
            <div className="nine_one_main">

            <div className="nine_one">
                <a href="#"><button>All</button></a>
                <a href="#"><button>Web Design </button></a>
                <a href="#"><button>Web Development</button></a>
                <a href="#"><button>Brand Identity </button></a>
                
            </div>
            </div>
          <div className="nine_main">
            <Slider  {...settings}> 

          <div className="nine_two">
                <img src={images12} alt="" />
            </div>
            <div className="nine_two">
                <img src={images13} alt="" />
            </div>
            <div className="nine_two">
                <img src={images14} alt="" />
            </div>
            <div className="nine_two">
                <img src={images15} alt="" />
            </div>
            <div className="nine_two">
                <img src={images16} alt="" />
            </div>
            <div className="nine_two">
                <img src={images17} alt="" />
            </div>
            </Slider>
          </div>
            </Col>
        </Row>
    </div>
</section>
  )
}

export default Thirdpart
