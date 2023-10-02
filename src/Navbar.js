import React from 'react';
import './Navbar.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

function Navbar() {
  return (
    <div className='homebar'>
        <div className='navbar'>
            <ul className='navList'>
                <li>Home</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Blog</li>
            </ul>
        </div>

        <div className='iconic'>
            <FavoriteBorderIcon/>
            <ShoppingCartOutlinedIcon/>
            <PermIdentityRoundedIcon/>
        </div>
    </div>
  )
}

export default Navbar;