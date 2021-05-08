import React, { useEffect, useState, useRef } from 'react'
import './DrawCanvas.css'

function DrawCanvas({ width, height }) {
  const canvasRef = useRef()
  
  let draw = false


  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    console.log('Mount')

    const handleDraw = (e) => {
      console.log('Draw', e)
      console.log(e.clientX, e.clientY)

      context.lineWidth = 1
      context.lineCap = 'round'

      context.lineTo(e.clientX, e.clientY)
      context.stroke()
      context.beginPath()
      context.moveTo(e.clientX, e.clientY)
    }


    canvas.addEventListener('mousemove', handleDraw)

    return () => {
      canvas.removeEventListener('mousemove', handleDraw)
    }
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} className="draw-canvas" width="100" height="420">

      </canvas>
      
    </div>
  )
}

export default DrawCanvas