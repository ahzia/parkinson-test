import React, { useRef, useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
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
      {
        showArrow && (
          <div className="arrow bounce top-arrow">
            <a className="fa fa-arrow-down fa-2x" onClick={onArrowClick} />
          </div>
        )
      }
      </Container>
      <Container className="main-container middle-container" ref={middleRef}>
        a
      </Container>
    </div>
  )
}

export default HomePage
