import React from 'react'
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Header.css';

function Header() {
  return (
    <div>
        <div className='fonts'>
            <div className='call'>
              <CallRoundedIcon fontSize="small"/>
              <span className='number'>+022 319 821 967</span>
              </div>

              <div className='logo'>
                <p><b>logo</b>ipsum</p>
              </div>

              <div className='icons'>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
            </div>
        </div>
    </div>
  )
}

export default Header;