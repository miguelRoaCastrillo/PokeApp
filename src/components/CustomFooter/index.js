import React from 'react';

import LogoWhite from './../../assets/icons/LogoWhite.svg';

export const CustomFooter = () => (

    <div style={{backgroundColor: '#EE2E31', padding: 10}}>

        <img src={ LogoWhite } alt="FooterLogo" style={{ height: '50px', width: '50px', margin: '8px 0 8px 0' }}/>

        <h3 style={{ color: 'white', margin: '5px 0 5px 0' }}>
            This is the title webpage
        </h3>

        <p className="copy" style={{ color:'white', margin: '5px 0 5px 0' }}>
            © { (new Date().getFullYear()) } All Rights Reserved
        </p>

    </div>

)

export default CustomFooter;