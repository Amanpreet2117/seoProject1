
import Image from "next/image";
import React from 'react'
import aboutLeftImage from  '../assets/about-left-image.png'
import serviceIcon from "../assets/service-icon-01.png"
import serviceIcon2 from "../assets/service-icon-02.png"
import serviceIcon3 from "../assets/service-icon-03.png"
import serviceIcon4 from "../assets/service-icon-04.png"
const About = () => {
  return (
    <>
      <div id="about" className="about-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <Image src={aboutLeftImage} alt="person graphic"/>
          </div>
        </div>
        <div className="col-lg-8 align-self-center">
          <div className="services">
            <div className="row">
              <div className="col-lg-6">
                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div className="icon">
                    <Image src={serviceIcon} alt="reporting"/>
                  </div>
                  <div className="right-text">
                    <h4>Data Analysis</h4>
                    <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                  <div className="icon">
                    <Image src={serviceIcon2} alt=""/>
                  </div>
                  <div className="right-text">
                    <h4>Data Reporting</h4>
                    <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                  <div className="icon">
                    <Image src={serviceIcon3} alt=""/>
                  </div>
                  <div className="right-text">
                    <h4>Web Analytics</h4>
                    <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                  <div className="icon">
                    <Image src={serviceIcon4} alt=""/>
                  </div>
                  <div className="right-text">
                    <h4>SEO Suggestions</h4>
                    <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default About