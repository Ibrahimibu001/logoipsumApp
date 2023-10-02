import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='company'>
            <h4>logo<small>ipsum</small></h4>
            <p>OurStudio is a digital agaency UI/UX Design and Website Development located in Ohio, 
                United States of America</p>
            <p>Copyright Tanah Air Studio</p>
        </div>

        <div className='socialMedia'>
            <p>Our Social Media</p>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>youtube</li>
            </ul>
        </div>

        <address>
            <p>Contact</p>
            <a>8891 Ohio St, South Gate, California 90280</a>
            <a href="mailto: ourstudio@hello.com">ourstudio@hello.com</a>
            <a>+271 386-647-3637</a>
        </address>
    </div>
  )
}

export default Footer;