import React from 'react';
import './landing-page.style.scss';

export const LandingPage = ({image,text}) => {

    return (
        <section className='bg-image vh-75 vw-100' style={{backgroundImage: `url(${image})`}}>
            <div className='overlay'>
                <div className=" text-center vertical-center">
                    <h3 className='display-3'>{text}</h3>
                </div>
            </div>
        </section>
    )
}