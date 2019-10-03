import React from 'react';
import './about.style.scss';
import { LandingPage } from '../../components/landing-page/landing-page.component';
import image from '../../assets/images/bg_3.jpg'
import coke from '../../assets/images/download.png'
import adidas from '../../assets/images/adidas.png'
import unilever from '../../assets/images/unilever.png'
import png from '../../assets/images/png.png'





 const About = () => {

    return(
        <div>
            <LandingPage image= {image} text={'About Us'}/>

            <section className='container-fluid pt-5 pb-5 cause ash-white-bg '>
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center mt-3 display-5'>WELCOME TO <span >THE SEED INITIATIVE</span></h1>
                        <p className='text-center color'>Lorem ipsum dolor sit amet consectetur, adipisicing. </p>
                        <div className='separator'>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className="row d-flex">
                        <div className="col-md-6 d-flex ftco-animate">
                            <div className="img img-about align-self-stretch" style={{backgroundImage: `url(${image})`, width: '100%'}}></div>
                        </div>
                        <div className="col-md-6 pl-md-5 ftco-animate">
                            <h2 className="mb-4">WE ARE A NON-PROFIT TEAM</h2>
                            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                        </div>
                    </div>
                </div>

                   
                
            </section>
            <section className='container-fluid pt-5 pb-5 cause sponsor '>
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center mt-3 display-5'>OUR <span >SPONSORS</span></h1>
                        <p className='text-center color'>Lorem ipsum dolor sit amet consectetur, adipisicing. </p>
                        <div className='separator'>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className="col-sm-3 mb-3 img " style={{backgroundImage: `url(${coke})`}}>
                            
                        </div>
                        <div className="col-sm-3 mb-3 img " style={{backgroundImage: `url(${adidas})`}}>
                            
                        </div>
                        <div className="col-sm-3 mb-3 img " style={{backgroundImage: `url(${unilever})`}}>
                            
                        </div>
                        <div className="col-sm-3 mb-3 img " style={{backgroundImage: `url(${png})`}}>
                            
                        </div>
                    </div>
                    
                </div>
                
    
            </section>
        </div>
    );
};

export default About;