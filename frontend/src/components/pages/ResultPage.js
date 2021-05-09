import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './ResultPage.css'


function ResultPage({ result = true, setResult }) {
  const goBackAction = () => {
    setResult(!result)
  }

  return (
    <div>
      <div className="gradient-col">
        <Container className="main-container top-container">
          <Container className="top-center-container">
            <Typography variant="h2" component="h2">
              Parkinsons Result:
            </Typography>

            <br />

            <Typography variant="h3" component="h3">
              {result ? 'You have Parkinsons' : 'You do not have Parkinsons'}
            </Typography>

            <br />
            <Link to="/">
              <Button variant="contained" color="primary" onClick={goBackAction}>
                <Typography variant="h6" component="h6">
                  Go Back
                </Typography>
              </Button>
            </Link>
          </Container>
        
        </Container>
      </div>
    </div>
  )
}



export default ResultPage
