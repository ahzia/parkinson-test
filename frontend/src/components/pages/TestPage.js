import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import DrawCanvas from '../DrawCanvas'
import './TestPage.css'

function TestPage() {
  const history = useHistory()

  const imageSubmit = (image) => {
    history.push('/result')
  }

  return (
    <div className="text-page">
      <Typography variant="h4" component="h4">
        Task: Draw a Spiral
      </Typography>

      <br />

      <DrawCanvas onSubmit={imageSubmit} />
    </div>
  )
}

export default TestPage
