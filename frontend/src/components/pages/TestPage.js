import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import DrawCanvas from '../DrawCanvas'
import './TestPage.css'

function TestPage() {
  const imageSubmit = (image) => {
    console.log(image)
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
