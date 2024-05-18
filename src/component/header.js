import React from "react";
import Image from "next/image";
import banner from "../assets/banner-right-image.png"
import NavbarActive from "../utils/navbarActive"
const header = () => {
  return (
    <div>
      {" "}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" className="logo">
                  <h4>
                    Spac<span>Dyna</span>
                  </h4>
                </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                {/* <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="about">About Us</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="service">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="portfolio">Portfolio</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="blog">Blog</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="contact">Message Us</a>
                  </li>
                  <li className="scroll-to-section">
                    <div className="main-red-button">
                      <a href="contact">Contact Now</a>
                    </div>
                  </li>
                </ul> */}
                <NavbarActive/>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <h6>Welcome to Space Dynamic</h6>
                <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                <p>Space Dynamic is a professional looking HTML template using a Bootstrap 5 (beta 2). This CSS template is free for you provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a>.</p>
                <form id="search" action="#" method="GET">
                  <fieldset>
                    <input type="address" name="address" className="email" placeholder="Your website URL..." autocomplete="on" required/>
                  </fieldset>
                  <fieldset>
                    <button type="submit" className="main-button">Analyze Site</button>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <Image src={banner} alt="team meeting"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default header;
