import React from 'react'
import { ScrollCube, CubeFunction } from "../Index"

const Cube = () => {
  return (
    <div className='sqr-container w-full h-full'>
      <div className="scrool-text-wrapper">
        <ScrollCube />
        <div>
          <CubeFunction />
        </div>
      </div>
    </div>
  )
}

export default Cube