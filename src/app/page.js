
import About from "../component/about"
import ContactUs from "../component/contact"
import Service from "../component/service"
import Blog from "../component/blog"
import Portfolio from "../component/portfolio"


export default function Home() {
  return (
    <>
     {/* <!-- ***** Header Area Start ***** --> */}
 {/* <Header/> */}

  {/* <div id="about" className="about-us section">
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
  </div> */}
  <About/>

  {/* <div id="services" className="our-services section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
          <div className="left-image">
            <Image src={servicesLeftImage} alt=""/>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
          <div className="section-heading">
            <h2>Grow your website with our <em>SEO</em> service &amp; <span>Project</span> Ideas</h2>
            <p>Space Dynamic HTML5 template is free to use for your website projects. However, you are not permitted to redistribute the template ZIP file on any CSS template collection websites. Please contact us for more information. Thank you for your kind cooperation.</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="first-bar progress-skill-bar">
                <h4>Website Analysis</h4>
                <span>84%</span>
                <div className="filled-bar"></div>
                <div className="full-bar"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="second-bar progress-skill-bar">
                <h4>SEO Reports</h4>
                <span>88%</span>
                <div className="filled-bar"></div>
                <div className="full-bar"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="third-bar progress-skill-bar">
                <h4>Page Optimizations</h4>
                <span>94%</span>
                <div className="filled-bar"></div>
                <div className="full-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <Service/>

  {/* <div id="portfolio" className="our-portfolio section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <h2>See What Our Agency <em>Offers</em> &amp; What We <span>Provide</span></h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <a href="#">
            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <div className="hidden-content">
                <h4>SEO Analysis</h4>
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div className="showed-content">
                <Image src={portfolioImage} alt=""/>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a href="#">
            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <div className="hidden-content">
                <h4>Website Reporting</h4>
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div className="showed-content">
                <Image src={portfolioImage} alt=""/>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a href="#">
            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="hidden-content">
                <h4>Performance Tests</h4>
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div className="showed-content">
                <Image src={portfolioImage} alt=""/>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a href="#">
            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <div className="hidden-content">
                <h4>Data Analysis</h4>
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div className="showed-content">
                <Image src={portfolioImage} alt=""/>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div> */}
  <Portfolio/>

  {/* <div id="blog" className="our-blog section">
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
  </div> */}
  <Blog/>

  {/* <div id="contact" className="contact-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <div className="section-heading">
            <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut labore et dolores</p>
            <div className="phone-info">
              <h4>For any enquiry, Call Us: <span><i className="fa fa-phone"></i> <a href="#">010-020-0340</a></span></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <form id="contact" action="" method="post">
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>  
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="main-button ">Send Message</button>
                </fieldset>
              </div>
            </div>
            <div className="contact-dec">
              <Image src={contactDecoration} alt=""/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> */}
<ContactUs/>
  {/* <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
          <p>© Copyright 2021 Space Dynamic Co. All Rights Reserved. 
          
          <br/>Design: <a rel="nofollow" href="https://templatemo.com">TemplateMo</a></p>
        </div>
      </div>
    </div>
  </footer> */}
    </>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
