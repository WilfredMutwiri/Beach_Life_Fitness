import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/slider_default_img (1).webp'
import img2 from '../assets/Deadlifter.jpeg'
import img3 from '../assets/4c938d5c31afd9de3141420d08ac8455.jpg'
import img4 from '../assets/af31e885400faf5d34d804a21ff83851.jpg'
import bikeRideImg from '../assets/bike-and-b_1693079646eSb59n.webp'
import bikeRideImg2 from '../assets/bike-to-tr_1693079465OibCKT.webp'
import waterFallImg from '../assets/waterfall_1693140591QfdwUr.webp'

import { SlCalender } from "react-icons/sl";
import { Button } from 'flowbite-react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function Home() {
  const homeBannerImages=[img1,img2,img3,img4]
  return (
    <div className='relative bg-gray-100'>
      <header className=''>
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
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 max-w-[1400px] h-[720px] -mt-[20px] md:h-[720px] w-full m-auto"></div>
          {/* Text Overlay */}
      <div className="-mt-[600px] md:-mt-[700px] relative inset-0 flex flex-col justify-center items-center text-white z-10">
          <div className='flex w-full md:w-96 mx-auto pt-0 md:pt-28'>
          <div className='w-full mx-auto  z-50 p-0 md:p-3 font-bold'>
          <h1 className=' text-center text-orange-500 font-semibold text-4xl md:text-7xl font-dancing'>Beach Life Fitness</h1>
          </div>
          </div>
          <h2 className='text-white z-50 relative text-center font-serif text-xl md:text-3xl pt-5'>Train Like a Pro
          <span className='text-blue-500'> Perform </span>Like a Champion</h2>
          <h3 className='text-sm md:text-lg pt-4'>Holistic Fitness for a Healthier Life
          </h3>
        <div className='flex gap-5 justify-center mt-28 md:mt-10'>
          <Button gradientDuoTone="greenToBlue">Join Us Today</Button>
        </div>
      </div>
      </div>
      </div>
      </header>
      <main>
        {/* about section */}
        <section>
          <div className='relative bg-gray-100 mt-[630px] '>
            <div className='pt-16 block w-11/12 mx-auto md:flex gap-20'>
            <div className=''>
            <img src={bikeRideImg} className='h-96 w-full mx-auto object-cover rounded-md'/>
          </div>
          <div className='w-11/12 mx-auto flex-1 mt-10 md:mt-5'>
            <h2 className='text-sm text-blue-600 font-semibold border-r-2 border-orange-600 w-20'>ABOUT US</h2>
          <h3 className='text-2xl pt-4 font-semibold pb-2'>Welcome To Beach Life Fitness</h3>
            <p className='leading-relaxed'>
            Indoor and Outdoor fitness group. We focus on physical fitness, empowerment and fun. Our passion is to create positive physical changes for all ages, sizes and fitness levels. We bring the adventures , you bring the energy
            </p>
            <div className='flex flex-row gap-6 mt-10 w-10/12 md:w-full mx-auto'>
              <Button className='flex' gradientDuoTone="greenToBlue"><FaPhone className='text-lg'/><span className='ml-3'>Call Us</span></Button>
              <Button className='flex' gradientDuoTone="greenToBlue"><MdEmail className='text-lg'/><span className='ml-3'>Email Us</span></Button>
            </div>
          </div>
            </div>
          </div>
        </section>
      {/* updates section */}
      <section>
      <div className='relative bg-gray-200 mt-10 pt-5 pb-5'>
        <h2 className='text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>OUR UPDATES</h2>
        <div className='pt-16 block w-11/12 mx-auto md:flex gap-20'>
          <div className='flex-1'>
          <img src={waterFallImg} className="h-80 object-cover w-full rounded-md hover:transform hover:scale-95 transition duration-1000 ease-out" />
          <h3 className='font-semibold text-orange-500 pt-3 pb-2 text-lg'>Waterfall Bike Adventure</h3>
            <p className='pt-4'>
            Join me on one of the great MTB Adventures in South Coast and Kenya.We will take you to the hidden waterfalls at shimbahills approximately 40km wich includes single tracks, A unique experience: Just imagine what it’s like to drive on the red dirt roads, enjoy expansive views and the Kenyan sun...
            </p>
            <div className='mt-5 flex justify-between'>
              <h3 className='flex gap-2 text-orange-500 font-semibold text-sm mt-3'><SlCalender className='text-green-600 text-lg'/> August 29th 2023</h3>
            <Button className="" gradientDuoTone="greenToBlue">Read More..</Button>
            </div>
          </div>
          <div className='flex-1'>
          <img src={bikeRideImg2} className="h-80 object-cover w-full rounded-md hover:transform hover:scale-95 transition duration-1000 ease-out" />
          <h3 className='font-semibold text-orange-500 pt-3 pb-2 text-lg'>Bike and Beer Chale Island</h3>
            <p className='pt-4'>
            Our experience starts upon booking,we have different types of bike sizes on your request.we will deliver at your premises or come to our shop for briefing,All our bikes are serviced and maintained to the highest industry st...
            </p>
            <div className='mt-5 flex justify-between'>
              <h3 className='flex gap-2 text-orange-500 font-semibold text-sm mt-3'><SlCalender className='text-green-600 text-lg'/> August 29th 2023</h3>
            <Button className="" gradientDuoTone="greenToBlue">Read More..</Button>
            </div>
          </div>
          <div className='flex-1'>
          <img src={bikeRideImg} className="h-80 object-cover w-full rounded-md hover:transform hover:scale-95 transition duration-1000 ease-out" />
          <h3 className='font-semibold text-orange-500 pt-3 pb-2 text-lg'>Bike to Traditional Dance Adventure</h3>
          <p className='pt-1'>
          Join me "katama" to guide you through a mountain bike adventure tour of this unique,interesting lifestyle,habits,culture,scenic beauty,and much more of this indigenous and local coastal community known as "Giriama community"...
          </p>
          <div className='mt-5 flex justify-between'>
              <h3 className='flex gap-2 text-orange-500 font-semibold text-sm mt-3'><SlCalender className='text-green-600 text-lg'/> August 29th 2023</h3>
            <Button className="" gradientDuoTone="greenToBlue">Read More..</Button>
            </div>
          </div>
          </div>
          </div>
      </section>
      </main>
    </div>
  )
}

// 7. Natural and Inviting:
// Primary Color: text-green-500 (Green)
// Secondary Color: text-lime-500 (Lime Green)
// Accent Color: text-orange-500 (Orange)
// Background Color: bg-gray-100 (Very Light Gray)