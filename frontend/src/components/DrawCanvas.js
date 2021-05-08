import React, { useEffect, useRef } from 'react'
import { Button } from '@material-ui/core'
import './DrawCanvas.css'

function DrawCanvas({ width = 600, height = 600, onSubmit = (image) => {} }) {
  const canvasRef = useRef()
  const uploadImageRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.lineWidth = 5
    context.lineCap = 'round'

    let draw = false
    function handleDraw(e) {
      if (!this || !draw) return

      const { left, top } = this?.getBoundingClientRect()
      const newX = e.clientX - left
      const newY = e.clientY - top

      context.lineTo(newX, newY)
      context.stroke()
      context.beginPath()
      context.moveTo(newX, newY)
    }

    const startStroke = (e) => {
      draw = true
      handleDraw(e)
    }

    const endStroke = () => {
      draw = false
      context.beginPath()
    }

    canvas.addEventListener('mouseup', endStroke)
    canvas.addEventListener('mousedown', startStroke)
    canvas.addEventListener('mousemove', handleDraw)

    return () => {
      canvas.removeEventListener('mouseup', endStroke)
      canvas.removeEventListener('mousedown', startStroke)
      canvas.removeEventListener('mousemove', handleDraw)
    }
  }, [])

  const resetCanvas = (e) => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  const uploadDrawing = (e) => {
    const context = canvasRef.current.getContext('2d')

    // Resetting canvas and uploading image
    resetCanvas()
    uploadImageRef.current.src = window.URL.createObjectURL(e.target.files[0])
    uploadImageRef.current.onload = () => {
      console.log('New Image')
      context.drawImage(uploadImageRef.current, 0, 0, width, height)
    }
  }

  const submitDrawing = (e) => {
    const canvas = canvasRef.current
    const image = canvas.toDataURL('images/png')

    onSubmit(image)
  }

  return (
    <>
      <div className="draw-canvas-parent">
        <canvas ref={canvasRef} className="draw-canvas" width={width} height={height} />

        <div className="draw-canvas-top" style={{ width }}>
          <Button onClick={resetCanvas} variant="contained" color="secondary">
            Reset Drawing
          </Button>
          <Button variant="contained" type="file" component="label">
            Upload Drawing        
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={uploadDrawing}
            />
          </Button>
          <Button onClick={submitDrawing} variant="contained" color="primary">
            Submit Drawing
          </Button>
        </div>
      </div>

      <img ref={uploadImageRef} hidden/>
    </>
  )
}

export default DrawCanvas