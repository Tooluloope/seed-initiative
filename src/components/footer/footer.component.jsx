import React from 'react';
import './footer.style.scss';
import img from '../../assets/images/image_4.jpg'

export const Footer = () => (

    <footer className="ftco-footer ftco-section img">
    	<div className="overlay"></div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              {/* <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="/"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="/"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="/"><span className="icon-instagram"></span></a></li>
              </ul> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              <div className="block-21 mb-4 d-flex">
                <a href="/" className="blog-img mr-4" style={{backgroundImage: `url(${img})`}}>.</a>
                <div className="text">
                  <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about</a></h3>
                  <div className="meta">
                    <div><a href="/"><i className="fa fa-calendar" aria-hidden="true"></i> July 12, 2018</a></div>
                    <div><a href="/"><i className="fa fa-user" aria-hidden="true"></i> Admin</a></div>
                    <div><a href="/"><i className="fa fa-comment" aria-hidden="true"></i> 19</a></div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a href="/" className="blog-img mr-4" style={{backgroundImage: `url(${img})`}}>.</a>
                <div className="text">
                  <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about</a></h3>
                  <div className="meta">
                  <div><a href="/"><i className="fa fa-calendar" aria-hidden="true"></i> July 12, 2018</a></div>
                    <div><a href="/"><i className="fa fa-user" aria-hidden="true"></i> Admin</a></div>
                    <div><a href="/"><i className="fa fa-comment" aria-hidden="true"></i> 19</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
             <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Site Links</h2>
              <ul className="list-unstyled">
                <li><a href="/" className="py-2 d-block">Home</a></li>
                <li><a href="/" className="py-2 d-block">About</a></li>
                <li><a href="/" className="py-2 d-block">Donate</a></li>
                <li><a href="/" className="py-2 d-block">Causes</a></li>
                <li><a href="/" className="py-2 d-block">Event</a></li>
                <li><a href="/" className="py-2 d-block">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><i className="icon fa fa-map-marker" aria-hidden="true"></i><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="/"><i className="icon fa fa-phone" aria-hidden="true"></i><span className="text">+2 392 3929 210</span></a></li>
	                <li><a href="/"><i className="icon fa fa-envelope-o" aria-hidden="true"></i><span className="text">info@seedinitiative.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
                 This site is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a rel="noopener noreferrer" href="https://www.thetolulope.tech/" target="_blank">Tolulope Adetula</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>

);