import React from "react";
import Image from "next/image";
import banner from "../assets/banner-right-image.png"
import NavbarActive from "../utils/navbarActive"
const header = () => {
  return (
    <div>
      {" "}
      <header
        class="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" class="logo">
                  <h4>
                    Spac<span>Dyna</span>
                  </h4>
                </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                {/* <ul class="nav">
                  <li class="scroll-to-section">
                    <a href="top" class="active">
                      Home
                    </a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="about">About Us</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="service">Services</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="portfolio">Portfolio</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="blog">Blog</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="contact">Message Us</a>
                  </li>
                  <li class="scroll-to-section">
                    <div class="main-red-button">
                      <a href="contact">Contact Now</a>
                    </div>
                  </li>
                </ul> */}
                <NavbarActive/>
                <a class="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <h6>Welcome to Space Dynamic</h6>
                <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                <p>Space Dynamic is a professional looking HTML template using a Bootstrap 5 (beta 2). This CSS template is free for you provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a>.</p>
                <form id="search" action="#" method="GET">
                  <fieldset>
                    <input type="address" name="address" class="email" placeholder="Your website URL..." autocomplete="on" required/>
                  </fieldset>
                  <fieldset>
                    <button type="submit" class="main-button">Analyze Site</button>
                  </fieldset>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
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
