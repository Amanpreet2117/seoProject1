import React from 'react'
import Image from "next/image";
import blogDec from "../assets/blog-dec.png"
import bigBlog from "../assets/big-blog-thumb.jpg"
import blogThumb from "../assets/blog-thumb-01.jpg"


const blog = () => {
  return (
    <div><div id="blog" className="our-blog section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
          <div className="section-heading">
            <h2>Check Out What Is <em>Trending</em> In Our Latest <span>News</span></h2>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
          <div className="top-dec">
            <Image src={blogDec} alt=""/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
          <div className="left-image">
            <a href="#"><Image src={bigBlog} alt="Workspace Desktop"/></a>
            <div className="info">
              <div className="inner-content">
                <ul>
                  <li><i className="fa fa-calendar"></i> 24 Mar 2021</li>
                  <li><i className="fa fa-users"></i> TemplateMo</li>
                  <li><i className="fa fa-folder"></i> Branding</li>
                </ul>
                <a href="#"><h4>SEO Agency &amp; Digital Marketing</h4></a>
                <p>Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...</p>
                <div className="main-blue-button">
                  <a href="#">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
          <div className="right-list">
            <ul>
              <li>
                <div className="left-content align-self-center">
                  <span><i className="fa fa-calendar"></i> 18 Mar 2021</span>
                  <a href="#"><h4>New Websites &amp; Backlinks</h4></a>
                  <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                </div>
                <div className="right-image">
                  <a href="#"><Image src={blogThumb} alt=""/></a>
                </div>
              </li>
              <li>
                <div className="left-content align-self-center">
                  <span><i className="fa fa-calendar"></i> 14 Mar 2021</span>
                  <a href="#"><h4>SEO Analysis &amp; Content Ideas</h4></a>
                  <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                </div>
                <div className="right-image">
                  <a href="#"><Image src={blogThumb} alt=""/></a>
                </div>
              </li>
              <li>
                <div className="left-content align-self-center">
                  <span><i className="fa fa-calendar"></i> 06 Mar 2021</span>
                  <a href="#"><h4>SEO Tips &amp; Digital Marketing</h4></a>
                  <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                </div>
                <div className="right-image">
                  <a href="#"><Image ssrc={blogThumb} alt=""/></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default blog