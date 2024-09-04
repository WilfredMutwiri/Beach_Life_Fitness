import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/slider_default_img (1).webp'
import img2 from '../assets/Deadlifter.jpeg'
import img3 from '../assets/4c938d5c31afd9de3141420d08ac8455.jpg'
import img4 from '../assets/af31e885400faf5d34d804a21ff83851.jpg'
import { Button } from 'flowbite-react';
export default function Home() {
  const homeBannerImages=[img1,img2,img3,img4]
  return (
    <header>
      <div className='max-w-[1400px] h-[70px] w-full m-auto'>
      {/* home carousel */}
      <div>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        {
          homeBannerImages.map((image,index)=>(
            <div key={index} className='max-w-[100%] h-[700px]'>
              <img className='w-full h-[700px] object-cover' src={image} alt={`Banner ${index+1}`}/>
            </div>
          ))
        }
        </Carousel>
          {/* Dark Background Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 max-w-[1400px] h-[790px] -mt-[20px] md:h-[790px] w-full m-auto"></div>
          {/* Text Overlay */}
      <div className="-mt-20 md:-mt-0 absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <div className='flex w-full md:w-96 mx-auto pt-0 md:pt-28'>
          <div className='w-full mx-auto  z-50 p-0 md:p-3 font-bold'>
          <h1 className=' text-center text-orange-500 font-semibold text-4xl md:text-7xl font-dancing'>Beach Life Fitness</h1>
          </div>
          </div>
          <h2 className='text-white z-50 relative text-center font-serif text-xl md:text-3xl pt-5'>Train Like a Pro
          <span className='text-yellow-500'> Perform </span>Like a Champion</h2>
          <h3 className='text-sm md:text-lg pt-4'>Holistic Fitness for a Healthier Life
          </h3>
        <div className='flex gap-5 justify-center mt-28 md:mt-10'>
          <Button gradientDuoTone="greenToBlue">Join Us Today</Button>
        </div>
      </div>
      </div>
      </div>
      </header>
  )
}

// 7. Natural and Inviting:
// Primary Color: text-green-500 (Green)
// Secondary Color: text-lime-500 (Lime Green)
// Accent Color: text-orange-500 (Orange)
// Background Color: bg-gray-100 (Very Light Gray)
