import React, { useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import '/src/components/styles/nav.css';

export default function Nav() {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery('(max-width:770px)');

  return (
    <nav className='Navigation'>
      <div className='logo'>
        <h3><span>Learn</span>Flek</h3>
      </div>
      <div className='select-container'>
        <select id="choice-selector" value={selectedOption} onChange={handleSelectChange}>
          <option value="">Course</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search courses"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <SearchSharpIcon className='search-icon' />
      </div>
      {isMobile ? (
        <>
          <MenuIcon onClick={handleMenuClick} className='menu-icon' />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <div className='edit'>
                <MenuItem onClick={handleMenuClose}><a href="#">Home</a></MenuItem>
                <MenuItem onClick={handleMenuClose}><a href="#">Blogs</a></MenuItem>
                <MenuItem onClick={handleMenuClose}><a href="#">About Us</a></MenuItem>
                <MenuItem onClick={handleMenuClose}><a href="#">Login</a></MenuItem>
                <MenuItem onClick={handleMenuClose}><button className='b1'>Sign up</button></MenuItem>
            </div>
          </Menu>
        </>
      ) : (
        <div className='links'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      )}
      {!isMobile && <button className='b1'>Sign up</button>}
    </nav>
  );
}
