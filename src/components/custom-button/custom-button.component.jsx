import React from 'react';

import './custom-button.style.scss';

export const CustomButton = ({text, inverted}) => (

    <button className={`${inverted ? 'inverted' : ''} custom-button` } >{text}</button>
)