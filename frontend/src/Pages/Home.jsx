import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/slider_default_img (1).webp'
import img2 from '../assets/Deadlifter.webp'
import img3 from '../assets/4c938d5c31afd9de3141420d08ac8455.webp'
import img4 from '../assets/af31e885400faf5d34d804a21ff83851.webp'
import bikeRideImg from '../assets/bike-and-b_1693079646eSb59n.webp'
import bikeRideImg2 from '../assets/bike-to-tr_1693079465OibCKT.webp'
import waterFallImg from '../assets/waterfall_1693140591QfdwUr.webp'
import product1 from '../assets/mountain-b_1693287593rOnMaD.webp'
import viewWaterfall from '../assets/beachlifefitnesskenya_1693076200hqBv4S.webp'
import droneViewWaterfallImg from '../assets/droneWaterfall view.webp'

import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import { Button, Label } from 'flowbite-react';
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
            <div className='flex flex-row gap-6 mt-10 w-full justify-center md:justify-normal'>
              <Button className='flex' gradientDuoTone="greenToBlue"><FaPhone className='text-lg'/><span className='ml-3'>Call Us</span></Button>
              <Button className='flex' gradientDuoTone="greenToBlue"><MdEmail className='text-lg'/><span className='ml-3'>Email Us</span></Button>
            </div>
          </div>
            </div>
          </div>
        </section>
        <div className='w-11/12 mx-auto bg-green-600 text-white mt-4 p-5'>
          <p className='text-center font-semibold text-sm md:text-lg'>
          At our gym, you'll find more than just a workout—it's a lifestyle. With customized training plans and a vibrant community, you'll stay motivated and inspired to achieve your best self.
          </p>
        </div>
      {/* updates section */}
      <section>
      <div className='relative pt-5 pb-5'>
        <div className='flex justify-between w-11/12 mx-auto'>
        <h2 className='mt-4 text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>OUR UPDATES</h2>
        <Label className=' mt-4 justify-center cursor-pointer text-yellow-500 hover:text-blue-600 flex'>View All <FaArrowRight className=' text-lg pl-1'/></Label>
        </div>
        <div className='pt-14 block w-11/12 mx-auto md:flex gap-20'>
          <div className='flex-1 bg-white shadow-sm shadow-gray-300 rounded-md'>
          <img src={waterFallImg} className="h-80 object-cover w-full rounded-md hover:transform hover:scale-95 transition duration-1000 ease-out" />
          <h3 className='font-semibold text-orange-500 pt-3 p-3 pb-2 text-lg'>Waterfall Bike Adventure</h3>
          <hr className='w-10/12 mx-auto'/>
            <p className='pt-4 p-3 leading-relaxed'>
            Join me on one of the great MTB Adventures in South Coast and Kenya.We will take you to the hidden waterfalls at shimbahills approximately 40km wich includes single tracks, A unique experience: Just imagine what it’s like to drive on the red dirt roads, enjoy expansive views and the Kenyan sun...
            </p>
            <div className='flex justify-between p-3'>
              <h3 className='flex gap-2 text-orange-500 font-semibold text-sm mt-3'><SlCalender className='text-green-600 text-lg'/> August 29th 2023</h3>
            <Button className="" gradientDuoTone="greenToBlue">Read More..</Button>
            </div>
          </div>
          <div className='flex-1 mt-6 md:mt-0 bg-white shadow-sm shadow-gray-300 rounded-md'>
          <img src={bikeRideImg2} className="h-80 object-cover w-full rounded-md hover:transform hover:scale-95 transition duration-1000 ease-out" />
          <h3 className='font-semibold text-orange-500 pt-3 p-3 pb-2 text-lg'>Bike and Beer Chale Island</h3>
          <hr className='w-10/12 mx-auto'/>
            <p className='pt-4 leading-relaxed p-3'>
            Our experience starts upon booking,we have different types of bike sizes on your request.we will deliver at your premises or come to our shop for briefing,All our bikes are serviced and maintained to the highest industry st...
            </p>
            <div className='flex justify-between p-3'>
              <h3 className='flex gap-2 text-orange-500 font-semibold text-sm mt-3'><SlCalender className='text-green-600 text-lg'/> August 29th 2023</h3>
            <Button className="" gradientDuoTone="greenToBlue">Read More..</Button>
            </div>
          </div>

          <div className='flex-1 mt-6 md:mt-0 shadow-sm shadow-gray-300 bg-white rounded-md'>
          <img src={bikeRideImg} className="h-80 object-cover w-full rounded-md hover:transform hover:scale-95 transition duration-1000 ease-out" />
          <h3 className='font-semibold text-orange-500 pt-3 pb-2 p-3 text-lg'>Bike to Traditional Dance Adventure</h3>
          <hr className='w-10/12 mx-auto'/>
          <p className='pt-1 p-3'>
          Join me "katama" to guide you through a mountain bike adventure tour of this unique,interesting lifestyle,habits,culture,scenic beauty,and much more of this indigenous and local coastal community known as "Giriama community"...
          </p>
          <div className='p-3 flex justify-between'>
              <h3 className='flex gap-2 text-orange-500 font-semibold text-sm mt-3'><SlCalender className='text-green-600 text-lg'/> August 29th 2023</h3>
            <Button className="" gradientDuoTone="greenToBlue">Read More..</Button>
            </div>
          </div>
          </div>
          </div>
      </section>
      <div className='w-11/12 mx-auto bg-cyan-800 text-white pt-8 pb-8 p-5'>
          <p className='text-center font-semibold text-sm md:text-lg'>
          Transform your body and elevate your fitness journey at our beach-life gym, where expert trainers and cutting-edge equipment help you achieve your goals. Join us today and experience a supportive community that motivates and inspires you every step of the way.
          </p>
        </div>
      {/* products section */}
      <section>
        <div className='pt-16 pb-10 bg-gray-100'>
        <div className='flex justify-between w-11/12 mx-auto'>
        <h2 className='mt-4 text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>OUR PRODUCTS</h2>
        <Label className=' mt-4 justify-center cursor-pointer text-yellow-500 hover:text-blue-600 flex'>View All <FaArrowRight className=' text-lg pl-1'/></Label>
        </div>
        <div className='hidden md:flex flex-row gap-6 pt-5 pb-5 w-11/12 mx-auto'>
          <div>
            <img src={product1} alt='mountain bike'/>
            <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$150.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-yellow-600'>Out Of stock</span></h3>
              <h3 className='font-semibold text-sm'>Description: <span className='text-cyan-800'>Short time & long time hire</span></h3>
              <Button className='mt-4' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
          </div>
          <div>
          <img src={product1} alt='mountain bike'/>
          <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$200.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-green-600'>Available</span></h3>
              <h3 className='font-semibold text-sm'>Description: <span className='text-cyan-800'>Short time & long time hire</span></h3>
              <Button className='mt-4' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
          </div>
          <div>
          <img src={product1} alt='mountain bike'/>
          <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$150.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-yellow-600'>Out Of stock</span></h3>
              <h3 className='font-semibold text-sm'>Description: <span className='text-cyan-800'>Short time & long time hire</span></h3>
              <Button className='mt-4' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
          </div>
        </div>
        {/* available on small devices only */}
        <div className='lg:hidden w-11/12 mx-auto mt-6'>
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} interval={3000}>
      <div>
        <img src={product1} alt="mountain bike" />
        <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$150.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-yellow-600'>Out Of stock</span></h3>
              <Button className='mt-4 w-10/12 mx-auto' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
      </div>
      <div>
        <img src={product1} alt="Image 2" />
        <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$200.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-green-600'>Available</span></h3>
              <Button className='mt-4 w-10/12 mx-auto' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
      </div>
      <div>
        <img src={product1} alt="Image 3" />
        <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$150.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-yellow-600'>Out Of stock</span></h3>
              <Button className='mt-4 w-10/12 mx-auto' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
      </div>
    </Carousel>
        </div>
        </div>
      </section>
      <div className='bg-gray-900 text-white p-5 w-11/12 mx-auto'>
        <p className='leading-relaxed text-sm md:text-lg'>
        Elevate your fitness experience in a space designed for results, with cutting-edge equipment and innovative classes that keep you engaged. Our team is dedicated to helping you break through barriers and achieve lasting success
        </p>
      </div>
      {/* media section */}
      <section>
        <div>
        <div className='flex justify-between w-11/12 mx-auto mt-6'>
        <h2 className='mt-4 text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>OUR MEDIA</h2>
        <Label className=' mt-4 justify-center cursor-pointer text-yellow-500 hover:text-blue-600 flex'>View All <FaArrowRight className=' text-lg pl-1'/></Label>
        </div>
        {/* available on large devices */}
        <div className='hidden md:flex flex-row gap-6 w-11/12 mx-auto pt-10 pb-10'>
          <div className='flex-1'>
            <img src={waterFallImg} className='h-96 w-full object-cover' alt='waterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Waterfall View</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
            </div>
          </div>
          <div className='flex-1'>
            <img src={viewWaterfall} className='h-96 w-full object-cover' alt='viewWaterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Mkurumudzi waterfalls</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
            </div>
          </div>
          <div className='flex-1'>
            <img src={droneViewWaterfallImg} className='h-96 w-full object-cover' alt='droneWaterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Mkurumudzi waterfalls Mountain bike adventure</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
            </div>
          </div>
        </div>
        </div>
        {/* available on small devices */}
        <div className='lg:hidden w-11/12 mx-auto mt-6'>
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} interval={3000}>
        <div className='flex-1'>
            <img src={waterFallImg} className='h-96 w-full object-cover' alt='waterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Waterfall View</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
            </div>
          </div>
          <div className='flex-1'>
            <img src={viewWaterfall} className='h-96 w-full object-cover' alt='viewWaterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Mkurumudzi waterfalls</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
            </div>
          </div>
          <div className='flex-1'>
            <img src={droneViewWaterfallImg} className='h-96 w-full object-cover' alt='droneWaterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Mkurumudzi waterfalls Mountain bike adventure</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
            </div>
          </div>
    </Carousel>
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
