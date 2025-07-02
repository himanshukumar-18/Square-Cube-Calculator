import React from 'react'
import { ScrollText, SquareFunction } from "../Index"

const Square = () => {
  return (
    <>
      <div className='sqr-container w-full h-full'>
        <div className="scrool-text-wrapper">
          <ScrollText />
          <div>
            <SquareFunction />
          </div>
        </div>
      </div>
    </>
  )
}

export default Square