import React from 'react'
import { ScrollCompound, CompoundFun } from "../Index"

const Compound = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div>
          <ScrollCompound />
          <div>
            <CompoundFun />
          </div>
        </div>
      </div>
    </>
  )
}

export default Compound