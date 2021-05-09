import React, { useRef, useState, useEffect } from 'react'
import { Container, Typography, Button, Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import './HomePage.css'
import * as Const from './constants.js'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
    maxWidth: '80%',
  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '50%',
    height: '50%',
  },
}));


function InfoBlock(props) {
  const classes = useStyles();
  const image= process.env.PUBLIC_URL + props.pic;
  var typoBlock;
  if(props.buttonLink==null) {
  typoBlock = (
    <Grid container spacing={7} direction="row">
    
    <Grid item xs>
    <Typography>
     <h1> {props.title}</h1>
     {props.para}
    </Typography>
    </Grid>

    <Grid item>
      <img className={classes.image} src={image} />
    </Grid>

    </Grid>
  )} else {
    typoBlock = (
      <Grid container spacing={7} direction="row">

        <Grid container direction="column" justify="center" alignItems="center"item xs={12} sm>
        <Grid item xs>
        <Typography>
        <h1> {props.title}</h1> <br />
        {props.para}
        </Typography>
        </Grid>
        <Grid item>
        <Link to="/test">
          <Button variant="contained" color="secondary">
            <Typography variant="h6" component="h6">
            Take Test
            </Typography>
          </Button>
        </Link>
        </Grid>
        </Grid>

      <Grid item>
        <img className={classes.image} src={image} />
      </Grid>

      </Grid>
    )
  }
  return (
    <Grid item xs={12}>
    <Paper elevation={2} className={classes.paper}>
      {typoBlock}
    </Paper>
    </Grid>
  )
}


function HomePage() {
  const middleRef = useRef()
  const classes = useStyles();

  const [showArrow, setShowArrow] = useState(true)
  const onArrowClick = (event) => {
    event.preventDefault()
    middleRef.current.scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowArrow(window.pageYOffset === 0)
    })
  }, [])

  return (
    <div>
      <div className="gradient-col">
      <Container className="main-container top-container">
        <Container className="top-center-container">
          <Typography variant="h2" component="h2">
            Parkinsons Test
          </Typography>
          <br />
          <Link to="/test">
            <Button variant="contained" color="secondary">
              <Typography variant="h6" component="h6">
                Take Test
              </Typography>
            </Button>
          </Link>
        </Container>
        
        {
          showArrow && (
            <div className="arrow bounce top-arrow">
              <a className="fa fa-arrow-down fa-2x" onClick={onArrowClick} />
            </div>
          )
        }
      </Container>
      </div>
      <Container className="main-container middle-container" >
      <Grid className={classes.root} container spacing={4} style={{color: 'aliceblue'}}>
        <InfoBlock title="What is Parkinsons Disease?" para={Const.PARKINSONS_INFO} pic="fall_down_orange.png"></InfoBlock>
        <InfoBlock title="What is Parkinsons Test?" para={Const.TEST_INFO} pic="data_computer_pink.svg"></InfoBlock>
        <div ref={middleRef}></div>
        <InfoBlock title="Why use Parkinsons Test?" para={Const.WHY_TEST} buttonLink="" pic="cup_tea_blue.svg"></InfoBlock>
      </Grid>
      </Container>
    </div>
  )
}

export default HomePage
