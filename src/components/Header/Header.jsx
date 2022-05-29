import React from 'react'
import images from '../images'
import Button from '@mui/material/Button';
import { IconButton } from '@material-ui/core';
import { AddShoppingCartOutlined } from '@mui/icons-material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import './Header.css'
const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-logo'>
        <img src={images.image52} alt="homejam" />
      </div>

      <div className='app__header-icons'>

        <Button variant='text' style={{textTransform:'none', color:'white', fontFamily:'Open Sans', fontSize: '14px', fontWeight:400, fontStyle:'normal'}}  >
          <SearchTwoToneIcon fontSize='small' />
          Search
        </Button>
        <Button variant='text' style={{textTransform:'none', color:'white', fontFamily:'Open Sans', fontSize: '14px', fontWeight: 400, fontStyle:'normal'}}>Help</Button>
        <Button variant='text' style={{textTransform:'none', color:'white', fontFamily:'Open Sans', fontSize: '14px', fontWeight:400, fontStyle:'normal'}}>Account</Button>
        <IconButton color="primary" aria-label="add to shopping cart" style={{color:'white'}}>
          <AddShoppingCartOutlined fontSize='small' />
        </IconButton>
      </div>  
    </div>
  )
}

export default Header