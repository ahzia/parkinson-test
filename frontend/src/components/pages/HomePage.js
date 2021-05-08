import React, { useRef, useState, useEffect } from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  const middleRef = useRef()

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
      <Container className="main-container top-container">
        <Container className="top-center-container">
          <Typography variant="h3" component="h3">
            Parkinsons Test
          </Typography>

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
      <Container className="main-container middle-container" ref={middleRef}>
        Info stuff
      </Container>
    </div>
  )
}

export default HomePage
