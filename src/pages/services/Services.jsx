import React, {useState, forwardRef} from 'react'
import audit from '../../images/subPages/audit.jpg'
import blockchain from '../../images/subPages/blockchain.jpg'
import programmieren from '../../images/subPages/programmieren.jpg'

const Services = forwardRef((props, ref) => {

  const [hoverImage, setHoverImage] = useState(null)

  return (
    <div className='my-20' ref={ref}>
      <div className='grid grid-rows-3'>
          <div className='flex relative'>
          <div className='h-80 w-1/2 grayscale hover:grayscale-0 ease-in duration-300 rounded-md'
            style={{
              backgroundImage: `url(${audit})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onMouseEnter={() => setHoverImage('audit')}
            onMouseLeave={() => setHoverImage(null)}>
          </div>
            {hoverImage === 'audit' && (
            <div className='w-1/2 h-80 text-black dark:text-white text-center p-4 ml-10 mt-10 animate-slide-inright font-display'>
              <h3 className='font-bold'>AUDITS</h3>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            )}
            </div>

          <div className='flex flex-row-reverse relative'>
            <div className='h-80 w-1/2 mt-10 grayscale hover:grayscale-0 ease-in duration-300 rounded-md'
            style={{
              backgroundImage: `url(${blockchain})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onMouseEnter={() => setHoverImage('blockchain')}
            onMouseLeave={() => setHoverImage(null)}>
            </div>
          {hoverImage === 'blockchain' && (
            <div className='w-1/2 h-80 text-black dark:text-white text-center p-4 mt-16 mr-10 animate-slide-inleft font-display'>
              <h3 className='font-bold'>BLOCKCHAIN ENTWICKLUNG</h3>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          )}
          </div>
          
          <div className='flex-1 relative mt-10 mb-24'>
            <div className='h-80 my-10 grayscale hover:grayscale-0 ease-in duration-300 rounded-md'
              style={{
                backgroundImage: `url(${programmieren})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onMouseEnter={() => setHoverImage('programmierung')}
              onMouseLeave={() => setHoverImage(null)}>
            </div>
          {hoverImage === 'programmierung' && (
            <div className='absolute w-full text-black dark:text-white text-center p-2 animate-slideUp font-display'>
              <h3 className='font-bold'>PROGRAMMIERUNG</h3>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          )}
          </div>
        </div>
    </div>
  )
})

export default Services