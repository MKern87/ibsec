import React, { forwardRef } from 'react'

const Pricing = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='grid grid-col-3 w-full rounded-md p-4'>
      <div className='flex relative gap-4 mt-10 dark:text-white text-black'>

        <div className='w-1/3 rounded-lg text-center border border-neutral-400 shadow shadow-neutral-400 hover:shadow-[0_0_10px_rgba(163,163,163,0.8)]'>
          <h3 className='mt-10 font-semibold'>Silber Mitgliedschaft</h3>
          <h1 className=' font-bold text-7xl'>30€</h1>
            <p className=''>monatlich</p>
            <button className='mt-10 border border-neutral-400 rounded-md bg-neutral-400 w-3/4 py-2'>Subscribe</button>
            <ul className='my-10 border-t-2 border-neutral-400 pt-10'>
              <li>bsp</li>
              <li>bsp</li>
              <li>bsp</li>
              <li>bsp</li>
          </ul>
        </div>

        <div className='w-1/3 -mt-10 rounded-lg text-center border border-amber-300 shadow shadow-amber-300 hover:shadow-[0_0_10px_rgba(251,191,36,0.8)]'>
          <div className='flex border -ml-1 mt-4 pt-2 pl-4 h-10 border-amber-300 bg-amber-300 w-2/3'>
            Top Seller
          </div>
          <h3 className='mt-6 font-semibold'>Gold Mitgliedschaft</h3>
          <h1 className=' font-bold text-7xl'>45€</h1>
            <p className=''>monatlich</p>
            <button className='mt-10 border border-amber-300 rounded-md bg-amber-300 w-3/4 py-2'>Subscribe</button>
            <ul className='my-10 border-t-2 border-amber-300 pt-10'>
              <li>bsp</li>
              <li>bsp</li>
              <li>bsp</li>
              <li>bsp</li>
          </ul>
        </div>
        
        <div className='w-1/3 rounded-lg text-center border border-gray-300 shadow shadow-gray-300 hover:shadow-[0_0_10px_rgba(209,213,219,0.8)]'>
          <h3 className='mt-10 font-semibold'>Platin Mitgliedschaft</h3>
          <h1 className=' font-bold text-7xl'>55€</h1>
            <p className=''>monatlich</p>
            <button className='mt-10 border border-gray-300 rounded-md bg-gray-300 w-3/4 py-2'>Subscribe</button>
            <ul className='my-10 border-t-2 border-gray-300 pt-10'>
              <li>bsp</li>
              <li>bsp</li>
              <li>bsp</li>
              <li>bsp</li>
          </ul>
        </div>
      </div>
      </div>
  )
})

export default Pricing