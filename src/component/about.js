
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
      <div id="about" class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <Image src={aboutLeftImage} alt="person graphic"/>
          </div>
        </div>
        <div class="col-lg-8 align-self-center">
          <div class="services">
            <div class="row">
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div class="icon">
                    <Image src={serviceIcon} alt="reporting"/>
                  </div>
                  <div class="right-text">
                    <h4>Data Analysis</h4>
                    <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                  <div class="icon">
                    <Image src={serviceIcon2} alt=""/>
                  </div>
                  <div class="right-text">
                    <h4>Data Reporting</h4>
                    <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                  <div class="icon">
                    <Image src={serviceIcon3} alt=""/>
                  </div>
                  <div class="right-text">
                    <h4>Web Analytics</h4>
                    <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                  <div class="icon">
                    <Image src={serviceIcon4} alt=""/>
                  </div>
                  <div class="right-text">
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