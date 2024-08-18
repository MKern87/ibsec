import React from 'react'

const Team = () => {
  return (
    <div className="grid grid-rows-1 relative overflow-hidden h-[500px] mt-14">
      <div className="absolute top-0 flex space-x-6 animate-leftSlow">
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
      </div>
      
      <div className="absolute top-56 flex space-x-6 animate-rightFast">
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
        <div className="bg-blue-500 w-52 h-52"></div>
      </div>
    </div>
  )
}

export default Team