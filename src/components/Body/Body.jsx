import React, { useState } from 'react'
import images from '../images'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import { Avatar } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ArrowBack } from '@material-ui/icons';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './Body.css'

const Body = () => {
  const [isColor, setIsColor] = useState(false)
  const [isColor1, setIsColor1] = useState(false)
  const [isColor2, setIsColor2] = useState(false)
  const [isColor3, setIsColor3] = useState(false)
  const handleChange1 = () => {
    setIsColor(!isColor)
  }
  const handleChange2 = () => {
    setIsColor1(!isColor1)
  }
  const handleChange3 = () => {
    setIsColor2(!isColor2)
  }
  const handleChange4 = () => {
    setIsColor3(!isColor3)
  }
  return (
    <div className='app__body' >
      <div className='app__body-heading'>
        <div className='shows' style={{
          color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '32px',
        }}>Upcoming Shows
          <hr />
        </div>
        <div style={{
          fontFamily: 'Nunito',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '16px',
          marginTop:'-2.5rem'
        }} className='view'>
          <Button sx={{color:'#E5C558'}}>
            View All
          </Button>
        </div>
      </div>
      <div className='body-cards'>
        <div className='card'>
          <Card className='box' sx={{ maxWidth: 345, background: '#111229' }}>
            <CardMedia
              component="img"
              width='268px'
              image={images.Benny}
              alt="Benny"
            />
            <CardContent>
              <img src={images.Folk} alt="" />
              <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF' }}>
                Benny Dayal
              </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex' }}>
              <Button size="small" color='primary' style={{ textTransform: 'none' }}>
                More Info <br />
                <ArrowForwardIcon />
              </Button>
              <div className='buttonre' style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.2', marginLeft: '65px' }} ></div>
              <Button className='b1' size="small" color={isColor ? 'secondary' : "primary"} style={{ textTransform: 'none' }} onClick={handleChange1}>
                <BookmarkIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className='card'>
          <Card className='box' sx={{ maxWidth: 345, background: '#111229' }}>
            <CardMedia
              component="img"
              width='268px'
              image={images.Vijay}
              alt="Vijay"
            />
            <CardContent>
              <img src={images.Bollywood} alt="" />
              <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF' }}>
                Vijay Yesudas
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" style={{ textTransform: 'none' }}>
                More Info <br />
                <ArrowForwardIcon />
              </Button>
              <div className='buttonre' style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.2', marginLeft: '65px' }}></div>
              <Button className='b2' size="small" color={isColor1 ? 'secondary' : "primary"} style={{ textTransform: 'none' }} onClick={handleChange2}>
                <BookmarkIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className='card'>
          <Card className='box' sx={{ maxWidth: 345, background: '#111229' }}>
            <CardMedia
              component="img"
              width='268px'
              image={images.Andrea}
              alt="Andrea"
            />
            <CardContent>
              <img src={images.Folk} alt="" />
              <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF' }}>
                Andrea Jeremiah
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" style={{ textTransform: 'none' }}>
                More Info <br />
                <ArrowForwardIcon />
              </Button>
              <div className='buttonre' style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.2', marginLeft: '65px' }}></div>
              <Button size="small" color={isColor2 ? 'secondary' : "primary"} style={{ textTransform: 'none' }} onClick={handleChange3}>
                <BookmarkIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className='card'>
          <Card className='box' sx={{ maxWidth: 345, background: '#111229' }}>
            <CardMedia
              component="img"
              width='268px'
              image={images.Shilpa}
              alt="Shilpa"
            />
            <CardContent>
              <img src={images.Folk} alt="" />
              <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF' }}>
                Shilpa Rao
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" style={{ textTransform: 'none' }}>
                More Info <br />
                <ArrowForwardIcon />
              </Button>
              <div className='buttonre' style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.2', marginLeft: '65px' }}></div>
              <Button size="small" color={isColor3 ? 'secondary' : "primary"} style={{ textTransform: 'none' }} onClick={handleChange4}>
                <BookmarkIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className='app__review' >
        <div className="review-header">
          <div className='shows' style={{
            color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '32px',
            paddingTop: '4rem'
          }}>Reviews
            <hr />
          </div>
          <div style={{
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px', color: 'rgba(255,255,255,0.8)'
          }} className='view'>
            1<div style={{
              fontFamily: 'Nunito',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '16px', color: 'rgba(255,255,255,0.5)', marginRight: '0.5rem'
            }}>/12</div>
            <Button>
              <ArrowBack style={{ color: '#FFFFFF', opacity: '0.6', width: '18.75px' }} />
            </Button>
            <Button>
              <ArrowForwardIcon style={{ color: '#FFFFFF', opacity: '0.6', width: '18.75px' }} />
            </Button>

          </div>
        </div>
      </div>
      <div className='app__review-card'>
        <div className='review'>
          <Card sx={{ maxWidth: 345, background: '#0A0B1A' }}>
            <CardHeader
              style={{ color: 'rgba(255,255,255, 1' }}
              avatar={
                <Avatar src={images.Hellen} aria-label="Hellen"></Avatar>
              }
              title="Hellen Jummy"
              subheader={
                <Typography variant='body' color='#E5C558' fontFamily='Rubik' display='flex' fontSize='11px' alignItems='center'>
                  <Avatar src={images.us} aria-label="us" sx={{ width: 20, height: 20 }}
                  ></Avatar>
                  PALO ALTO, CA
                </Typography>
              }
            />
            <CardContent>
              <Typography variant="body" color="rgba(255,255,255, 0.9)" textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget {<br />} laoreet adipiscing.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='review'>
          <Card sx={{ maxWidth: 345, background: '#0A0B1A' }}>
            <CardHeader
              style={{ color: 'rgba(255,255,255, 1' }}
              avatar={
                <Avatar src={images.Isaac} aria-label="Hellen"></Avatar>
              }
              title="Isaac Oluwatemilorun"
              subheader={
                <Typography variant='body' color='#E5C558' fontFamily='Rubik' display='flex' fontSize='11px' alignItems='center'>
                  <Avatar src={images.it} aria-label="us" sx={{ width: 20, height: 20 }}
                  ></Avatar>
                  PALO ALTO, CA
                </Typography>
              }
            />
            <CardContent>
              <Typography variant="body" color="rgba(255,255,255, 0.9)" textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget {<br />} laoreet adipiscing.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='review'>
          <Card sx={{ maxWidth: 345, background: '#0A0B1A' }}>
            <CardHeader
              style={{ color: 'rgba(255,255,255, 1' }}
              avatar={
                <Avatar src={images.Hellen2} aria-label="Hellen"></Avatar>
              }
              title="Hellen Jummy"
              subheader={
                <Typography variant='body' color='#E5C558' fontFamily='Rubik' display='flex' fontSize='11px' alignItems='center'>
                  <Avatar src={images.us} aria-label="us" sx={{ width: 20, height: 20 }}
                  ></Avatar>
                  PALO ALTO, CA
                </Typography>
              }
            />
            <CardContent>
              <Typography variant="body" color="rgba(255,255,255, 0.9)" textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget {<br />} laoreet adipiscing.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div >
  )
}

export default Body