import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import EventIcon from '@mui/icons-material/Event';
import React from 'react'
import './Hero.css'
import images from '../images'


const Hero = () => {
  return (
    <div className='app__hero' >
      <div className='app__hero-heading'>
        <h1>Cari Cari</h1>
        <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
      </div>
      <div className='rectangle'>
        <div className='large-square'>
          <img src={images.Element} alt="" />
          {/* <div className='circle-a'></div>
          <div className='circle-b'></div> */}
        </div>
        <div className='large-square'>
          <div className='circle'>
            <div className='items'>
              <img src={images.Content} style={{ width: '32px', height: '32px', opacity: '0.7' }} alt="" />
              <div style={{ color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 400, fontSize: '24px', lineHeight: '32px' }}>0</div>
              <div style={{ color: 'white', fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', opacity: 0.5, lineHeight: '32px' }}>Label</div>
            </div>
          </div>
        </div>
        <div className='large-square'>
          <div className='circle'>
            <div className='items'>
              <img src={images.Content} style={{ width: '32px', height: '32px', opacity: '0.7' }} alt="" />
              <div style={{ color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 400, fontSize: '24px', lineHeight: '32px' }}>0</div>
              <div style={{ color: 'white', fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', opacity: 0.5, lineHeight: '32px' }}>Label</div>
            </div>
          </div>
        </div>
        <div className='large-square'>
          <div className='circle'>
            <div className='items'>
              <img src={images.Content} style={{ width: '32px', height: '32px', opacity: '0.7' }} alt="" />
              <div style={{ color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 400, fontSize: '24px', lineHeight: '32px' }}>0</div>
              <div style={{ color: 'white', fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', opacity: 0.5, lineHeight: '32px' }}>Label</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero