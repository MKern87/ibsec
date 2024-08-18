import React, { useEffect } from 'react'
import Testsvg from '../../images/svgs/Testsvg'
import IBlogo from '../../images/logos/IBlogo'
import BinaryAnimation from '../../images/svgs/BinaryAnimation'
import Services from '../services/Services'
import Mission from '../mission/Mission'
import Pricing from '../pricing/Pricing'
import Team from '../team/Team'

const Home = ({ servicesRef, missionRef, pricingRef }) => {
     
  return (
    <div className='md:mt-28 lgo:mt-28 osm:mt-28 mt-20 w-5/6 '> 
        <section className='w-full'>
          <BinaryAnimation />
        </section>
        <section className='w-full'>
          <Mission ref={missionRef} />
        </section>
        <section className='w-full'>
          <Services ref={servicesRef} />
        </section>
        <section className='w-full'>
          <Pricing ref={pricingRef}/>
        </section>
        <section className='w-full'>
          <Team />
        </section>
        <section className='w-full bg-stone-950'>About</section>
    </div>
  )
}

export default Home