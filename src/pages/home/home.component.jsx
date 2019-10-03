import React from 'react';
import './home.style.scss';
import Carousel from 'react-bootstrap/Carousel'
import { CustomButton } from '../../components/custom-button/custom-button.component';
import bg1 from '../../assets/images/bg_1.webp';
import bg5 from '../../assets/images/bg_5.webp';
import bg7 from '../../assets/images/bg_7.webp';
import bg8 from '../../assets/images/bg_8.webp';

import  Carousel2  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomImageViewer } from '../../components/custom-image-viewer/custom-image-viewer.component';


const CustomLeftArrow = ({ onClick }) => (
     <button aria-label="Previous Arrow" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left custom-right-arrow" onClick={() => onClick()} />
  );
  const CustomRightArrow = ({ onClick }) => {
    return <button aria-label="Next Arrow" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right custom-right-arrow" onClick={() => onClick()} />;
  };

const Home = () => (
    <div>

        {/* // landing page */}
        <Carousel className=''>
            <Carousel.Item className='home-bg-img' style={{backgroundImage: `url(${bg5})`}} >
                
                <Carousel.Caption>
                    <h3>EVERY CHILD HAS <br /> EQUAL RIGHTS</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <CustomButton text='DONATE' />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='home-bg-img' style={{backgroundImage: `url(${bg7})`}}>
                

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='home-bg-img' style={{backgroundImage: `url(${bg8})`}}>
               

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

            {/* // landing page */}


        {/* OUR CAUSE SECTION */}
        <section className='container-fluid  pt-5 pb-5 mb-5 cause ash-white-bg'>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center mt-3 display-5'>OUR <span >CAUSE</span></h1>
                    <p className='text-center color'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis a aperiam soluta at, necessitatibus nobis ut, quasi .</p>
                    <div className='separator'>
                    </div>
                </div>
            </div>

                <div className="row">
                    <div className="col-md-12">
                    <Carousel2
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container-with-dots"
                        
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl= {false}
                        minimumTouchDrag={80}
                        renderDotsOutside={false}
                        responsive={{
                            superLargeDesktop: {
                                breakpoint: { max: 4000, min: 1500 },
                                items: 5,
                              },
                            desktop: {
                            breakpoint: {
                                max: 1500,
                                min: 1200
                            },
                            items: 4,
                            partialVisibilityGutter: 40
                            },
                            miniDesktop: { 
                                breakpoint: { max: 1200, min: 900 },
                                items: 3,
                              },
                            mobile: {
                            breakpoint: {
                                max: 615,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                            },
                            tablet: {
                            breakpoint: {
                                max: 900,
                                min: 615
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        >
                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <span className='donate'>Last donation 1w ago</span>
                                        <div className="progress mt-3 mb-4">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>NGN 2000 raised of NGN 10000</p>
                                    </div>
                                </div>
                            </a>
                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <span className='donate'>Last donation 1w ago</span>
                                        <div className="progress mt-3 mb-4">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>NGN 2000 raised of NGN 10000</p>
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <span className='donate'>Last donation 1w ago</span>
                                        <div className="progress mt-3 mb-4">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>NGN 2000 raised of NGN 10000</p>
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <span className='donate'>Last donation 1w ago</span>
                                        <div className="progress mt-3 mb-4">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>NGN 2000 raised of NGN 10000</p>
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <span className='donate'>Last donation 1w ago</span>
                                        <div className="progress mt-3 mb-4">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>NGN 2000 raised of NGN 10000</p>
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <span className='donate'>Last donation 1w ago</span>
                                        <div className="progress mt-3 mb-4">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>NGN 2000 raised of NGN 10000</p>
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <span className='donate'>Last donation 1w ago</span>
                                        <div className="progress mt-3 mb-4">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p>NGN 2000 raised of NGN 10000</p>
                                    </div>
                                </div>
                            </a>


                        
                    </Carousel2>

                    </div>
                </div>
        </section>
        
        {/* OUR CAUSE SECTION */}

        {/* SERVED OVER SECTION */}

        <section className="ftco-counter ftco-intro" id="section-counter">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 color-1 align-items-stretch">
                <div className="text">
                    <span>Served Over</span>
                    <strong className="number" data-number="1432805">0</strong>
                    <span>Children in 36 State around Nigeria</span>
                </div>
                </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 color-2 align-items-stretch">
                <div className="text">
                    <h3 className="mb-4">Donate Money</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                    <p><a href="/" className="btn btn-white px-3 py-2 mt-2">Donate Now</a></p>
                </div>
                </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 color-3 align-items-stretch">
                <div className="text">
                    <h3 className="mb-4">Be a Volunteer</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                    <p><a href="/" className="btn btn-white px-3 py-2 mt-2">Be A Volunteer</a></p>
                </div>
                </div>
            </div>
                </div>
            </div>
        </section>
        {/* SERVED OVER SECTION */}

        {/* BECOME A VOLUNTEER SECTION */}

        <section className="ftco-section">
            <div className="container">
                <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                <div className="icon d-flex mb-3"><span className="flaticon-donation-1"></span></div>
                <div className="media-body pl-4">
                    <h3 className="heading">Make Donation</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                </div>      
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                <div className="icon d-flex mb-3"><span className="flaticon-charity"></span></div>
                <div className="media-body pl-4">
                    <h3 className="heading">Become A Volunteer</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                </div>      
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                <div className="icon d-flex mb-3"><span className="flaticon-donation"></span></div>
                <div className="media-body pl-4">
                    <h3 className="heading">Sponsorship</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                </div>    
            </div>
            </div>
            </div>
        </section>
        {/* BECOME A VOLUNTEER SECTION */}




        {/* OUR EVENTS SECTION */}

        <section className='container-fluid mb-5 pt-5 pb-5 cause ash-white-bg'>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center mt-3 display-5'>OUR <span > EVENTS</span></h1>
                    <p className='text-center color'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis a aperiam soluta at, necessitatibus nobis ut, quasi .</p>
                    <div className='separator'>
                    </div>
                </div>
            </div>

                <div className="row">
                    <div className="col-md-12">
                    <Carousel2
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container-with-dots"
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl= {false}
                        minimumTouchDrag={80}
                        renderDotsOutside={false}
                        responsive={{
                            superLargeDesktop: {
                                breakpoint: { max: 4000, min: 1500 },
                                items: 5,
                              },
                            desktop: {
                            breakpoint: {
                                max: 1500,
                                min: 1200
                            },
                            items: 4,
                            partialVisibilityGutter: 40
                            },
                            miniDesktop: { 
                                breakpoint: { max: 1200, min: 900 },
                                items: 3,
                              },
                            mobile: {
                            breakpoint: {
                                max: 615,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                            },
                            tablet: {
                            breakpoint: {
                                max: 900,
                                min: 615
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        >
                           
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        
                                        <h5 className="card-title">Light to the Slum</h5>
                                        <div className='schedule'>
                                            <span className='date'><i className="fa fa-calendar" aria-hidden="true"></i>  Sept 28, 2019 &nbsp;
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>  10:30AM-03:30PM &nbsp; <br />
                                                <i className="fa fa-map-marker" aria-hidden="true"></i> Makoko, Lagos State
                                            </span> 

                                        </div>
                                        
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        
                                        <a href='/' className='join-event'>Join Event <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                           
                            
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                         <div className='schedule'>
                                            <span className='date'><i className="fa fa-calendar" aria-hidden="true"></i>  Sept 28, 2019 &nbsp;
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>  10:30AM-03:30PM &nbsp; <br />
                                                <i className="fa fa-map-marker" aria-hidden="true"></i> Makoko, Lagos State
                                            </span> 

                                        </div>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>Join Event <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                           

                            
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                         <div className='schedule'>
                                            <span className='date'><i className="fa fa-calendar" aria-hidden="true"></i>  Sept 28, 2019 &nbsp;
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>  10:30AM-03:30PM &nbsp; <br />
                                                <i className="fa fa-map-marker" aria-hidden="true"></i> Makoko, Lagos State
                                            </span> 

                                        </div>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>Join Event <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                           

                            
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                         <div className='schedule'>
                                            <span className='date'><i className="fa fa-calendar" aria-hidden="true"></i>  Sept 28, 2019 &nbsp;
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>  10:30AM-03:30PM &nbsp; <br />
                                                <i className="fa fa-map-marker" aria-hidden="true"></i> Makoko, Lagos State
                                            </span> 

                                        </div>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>Join Event <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                           

                            
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                         <div className='schedule'>
                                            <span className='date'><i className="fa fa-calendar" aria-hidden="true"></i>  Sept 28, 2019 &nbsp;
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>  10:30AM-03:30PM &nbsp; <br />
                                                <i className="fa fa-map-marker" aria-hidden="true"></i> Makoko, Lagos State
                                            </span> 

                                        </div>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>Join Event <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                           

                            
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                         <div className='schedule'>
                                            <span className='date'><i className="fa fa-calendar" aria-hidden="true"></i>  Sept 28, 2019 &nbsp;
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>  10:30AM-03:30PM &nbsp; <br />
                                                <i className="fa fa-map-marker" aria-hidden="true"></i> Makoko, Lagos State
                                            </span> 

                                        </div>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>Join Event <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                           

                            
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                         <div className='schedule'>
                                            <span className='date'><i className="fa fa-calendar" aria-hidden="true"></i>  Sept 28, 2019 &nbsp;
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>  10:30AM-03:30PM &nbsp; <br />
                                                <i className="fa fa-map-marker" aria-hidden="true"></i> Makoko, Lagos State
                                            </span> 

                                        </div>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>Join Event <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                           


                        
                    </Carousel2>

                    </div>
                </div>
        </section>
        {/* OUR EVENTS SECTION */}

        {/* OUR GALLERY SECTION */}

        <section className='container-fluid min-vh-100 pt-5 pb-5 cause '>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center mt-3 display-5'>OUR <span > GALLERY</span></h1>
                    <p className='text-center color'>Beautiful moments from some of our events.</p>
                    <div className='separator'>
                    </div>
                </div>
            </div>
            <CustomImageViewer />
        </section>
        {/* OUR GALLERY SECTION */}



        {/* OUR BLOG SECTION */}

        <section className='container-fluid pt-5 pb-5 cause ash-white-bg '>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center mt-3 display-5'>OUR <span >BLOG</span></h1>
                    <p className='text-center color'>View our recent articles </p>
                    <div className='separator'>
                    </div>
                </div>
            </div>

                <div className="row">
                    <div className="col-md-12">
                    <Carousel2
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container-with-dots"
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl= {false}
                        minimumTouchDrag={80}
                        renderDotsOutside={false}
                        responsive={{
                            superLargeDesktop: {
                                breakpoint: { max: 4000, min: 1500 },
                                items: 5,
                              },
                            desktop: {
                            breakpoint: {
                                max: 1500,
                                min: 1200
                            },
                            items: 4,
                            partialVisibilityGutter: 40
                            },
                            miniDesktop: { 
                                breakpoint: { max: 1200, min: 900 },
                                items: 3,
                              },
                            mobile: {
                            breakpoint: {
                                max: 615,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                            },
                            tablet: {
                            breakpoint: {
                                max: 900,
                                min: 615
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        >
                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>View Post <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                            </a>
                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>View Post <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>View Post <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>View Post <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>View Post <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>View Post <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                            </a>

                            <a  href='/'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={`${bg5}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Clean water for the urban area</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href='/' className='join-event'>View Post <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        
                                    </div>
                                </div>
                            </a>


                        
                    </Carousel2>

                    </div>
                </div>
        </section>
        {/* OUR BLOG SECTION */}


        {/* VOLUNTEER FORM SECTION */}


        <section className="ftco-section-3 img" style={{backgroundImage: `url(${bg1})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row d-md-flex">
                <div className="col-md-6 d-flex ftco-animate">
                    <div className="img img-2 align-self-stretch" style={{backgroundImage: `url(${bg1})`}}></div>
                </div>
                <div className="col-md-6 volunteer pl-md-5 ftco-animate">
                    <h3 className="mb-3">Be a volunteer</h3>
                    <form action="#" className="volunter-form">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                <textarea name="" id="" cols="30" rows="3" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-white py-3 px-5" />
                </div>
            </form>
                </div>    			
                </div>
            </div>
        </section>

        {/* VOLUNTEER FORM SECTION */}

    </div>
);


export default Home;