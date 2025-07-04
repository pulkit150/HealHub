import React from 'react'
import aboutImg from '../../assets/images/images1.jpg'
import aboutCardImg from '../../assets/images/about-card.png'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

          <div className='relative w-3/4 lg:w-1/2 xl:w-[720px] z-10 order-2 lg:order-1 '>
            <img src={aboutImg} className='rounded-[15px] w-xl' alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[250px] lg:w-[300px]  sm:right-[-10%] md:right-[-10%] right-[-10%] lg:right-[10%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className='heading '>Proud to be one of the best nations best</h2>
            <p className='text__para'>
              For 30 years in a row, U.S. News & World Report has recognized us 
              as one of the best publics hospitals in the Nation and #1 in Texas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laudantium
               in quasi sit recusandae.
            </p>

            <p className='text__para mt-[30px]'>
                Our best is something we strive for each day, caring for our patients-not 
                looking back at what we accomplished but towards what we can do tomorrow. 
                Providing the best. lorem ipsum dolor sit amet, consectetur adipiscing alit. 
                Aliquid, modi?
            </p>
            
            <Link to='/'><button className='btn'>Learn More</button></Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
