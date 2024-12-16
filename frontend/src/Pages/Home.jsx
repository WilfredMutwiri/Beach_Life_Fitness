import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/beachWorkout.webp'
import img2 from '../assets/banner2.webp'
import img3 from '../assets/banner3.webp'
import img4 from '../assets/banner4.webp'
import bikeRideImg from '../assets/traditionalDancers.webp'
import bikeRideImg2 from '../assets/chaletIsland.webp';
import waterFallImg from '../assets/waterfall_1693140591QfdwUr.webp'
import product1 from '../assets/mountain-b_1693287593rOnMaD.webp'
import product2 from '../assets/tent.webp'
import viewWaterfall from '../assets/beachlifefitnesskenya_1693076200hqBv4S.webp'
import droneViewWaterfallImg from '../assets/droneWaterfall view.webp'
import bannerImg from '../assets/banner3.webp';
import fitness1 from '../assets/weightLisfting.webp';
import fitness2 from '../assets/strengthTraining.webp';
import speakersImg from '../assets/speakers.webp';

import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

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
          <div className='flex w-full md:w-7/12 mx-auto pt-0 md:pt-24'>
          <div className='w-full mx-auto  z-50 p-0 md:p-3 font-bold'>
          <div className='z-50 w-11/12 mx-auto md:w-full flex flex-col gap-2 font-serif text-4xl md:text-6xl'>
          <h2 className='text-center  text-cyan-400 ml-2 md:ml-4'> Diani</h2>
          <h1 className='text-center text-orange-500 font-bold'> Beach <span className='text-cyan-400 '>Life </span>Fitness</h1>
          <h2 className='text-center text-cyan-400 ml-7 md:ml-10'>Kenya</h2>
          </div>
          </div>
          </div>
          <h2 className='text-white z-50 relative text-center font-serif text-xl md:text-3xl pt-5'>Train Like a Pro Like  Perform Like a Champion</h2>
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
        <div className='relative z-50 mt-[700px] '>
          <div className=' font-semibold w-full md:w-11/12 mx-auto flex pl-0 md:pl-12 pr-0 md:pr-10 border-r-4 md:border-r-8 border-orange-500 border-l-4 md:border-l-8  rounded-tl-0 md:rounded-tl-[200px]  bg-gray-500 justify-between gap-2 md:gap-6'>
          <div className='border-r-8 h-full pt-8 pb-8 pr-0 md:pr-5'>
            <h2 className='font-bold text-sm md:text-3xl text-white'>We Raise Your<br/>Confidence!!</h2>
          </div>
          <div className='pt-8 pb-8'>
            <h2 className='font-bold text-lg md:text-4xl text-cyan-400'>20+</h2>
            <h3 className='text-center text-sm text-white'>Trainees</h3>
          </div>
          <div className='pt-8 pb-8'>
            <h2 className='font-bold text-lg md:text-4xl text-cyan-400'>50+</h2>
            <h3 className='text-center text-sm text-white'>Programs</h3>
          </div>
          <div className='pt-8 pb-8'>
            <h2 className='font-bold text-lg md:text-4xl text-cyan-400'>100+</h2>
            <h3 className='text-center text-sm text-white'>Events</h3>
          </div>  
          <div className='pt-8 pb-8'>
            <h2 className='font-bold text-lg md:text-4xl text-cyan-400'>500+</h2>
            <h3 className='text-center text-sm text-white'>Members</h3>
          </div>
          </div>
        </div>
        {/* about section */}
        <section>
          <div className='text-center pt-10'>
          <h2 className='mt-4 text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>ABOUT US</h2>
          <h3 className='text-base md:text-2xl pt-4 font-semibold text-center'>________ Welcome To Beach Life Fitness! ________</h3>
          </div>
          <div className='relative bg-gray-100 pt-10'>
            <div className='block w-11/12 mx-auto md:flex gap-20'>
            <div className='w-full md:w-11/12'>
            <img src={bannerImg} className='h-96 w-full mx-auto object-cover rounded-md'/>
          </div>
          <div className='w-11/12 mx-auto'>
          <h3 className='text-2xl pt-4 font-semibold pb-2'>Our Story</h3>
            <p className='leading-relaxed'>
            Indoor and Outdoor fitness group. We focus on physical fitness, empowerment and fun. Our passion is to create positive physical changes for all ages, sizes and fitness levels. We bring the adventures , you bring the energy
            </p>
            <div className='font-semibold text-sm pt-5 flex flex-col gap-4'>
              <h1 className='flex text-cyan-700 hover:text-orange-600'><a href='/sessions'>:: Full body fitness Programme</a> <span><FaArrowRight className='pl-1 mt-1'/></span></h1>
              <h1 className='flex text-cyan-700 hover:text-orange-600'><a href='/sessions'>:: Training Schedules</a> <span><FaArrowRight className='pl-1 mt-1'/></span></h1>
              <h1 className='flex text-cyan-700 hover:text-orange-600'><a href='/events'>:: Our Activities</a> <span><FaArrowRight className='pl-1 mt-1'/></span></h1>
            </div>
            <div className='flex flex-row gap-6 mt-10 w-full justify-center md:justify-normal'>
              <Button className='flex' gradientDuoTone="greenToBlue"><FaPhone className='text-lg'/><span className='ml-3'>Call Us</span></Button>
              <Button className='flex' gradientDuoTone="greenToBlue"><MdEmail className='text-lg'/><span className='ml-3'>Email Us</span></Button>
            </div>
          </div>
            </div>
          </div>
        </section>
        <div className=' mx-auto w-11/12 bg-gray-500 text-white mt-10 p-5 pb-8 pt-8 border-r-8 border-orange-500 border-l-8'>
        <div>
        <p className='text-center font-semibold text-sm md:text-lg'>
          At our gym, you'll find more than just a workout—it's a lifestyle. With customized training plans and a vibrant community, you'll stay motivated and inspired to achieve your best self.
          </p>
        </div>
        </div>
        {/* classes section */}
        <section>
        <div className='flex justify-between w-11/12 mx-auto mt-5'>
        <h2 className='mt-4 text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>OUR CLASSES</h2>
        <Label className=' mt-4 justify-center cursor-pointer text-yellow-500 hover:text-blue-600 flex'><a href='/events'>View All</a><FaArrowRight className=' text-lg pl-1'/></Label>
        </div>
        <h3 className='text-base md:text-2xl pt-4 font-semibold text-center'>________<span className='text-cyan-600'>BeachLife</span> Workout Classes! ________</h3>
        </section>
        <div className='flex flex-col md:flex-row w-11/12 mx-auto gap-4 mt-10 mb-14'>
          <div className='flex-1 mb-10 md:mb-0'>
            <img src={img1} className='h-[280px] w-full object-cover'/>
            <h2 className='text-2xl font-semibold bg-gray-400 p-2 w-full border-8 border-r-orange-500 border-l-orange-500 hover:text-white hover:bg-black cursor-pointer'> :: BEACH WORKOUT</h2>
          </div>
          <div className='flex-1 mb-10 md:mb-0'>
            <img src={fitness1} className='h-[280px] w-full object-cover'/>
            <h2 className='text-2xl font-semibold bg-gray-400 p-2 w-full border-8 border-r-orange-500 border-l-orange-500 hover:text-white hover:bg-black cursor-pointer'>:: WEIGHT LIFTING</h2>
          </div>
          <div className='flex-1'>
            <img src={fitness2} className='h-[280px] w-full object-cover'/>
            <h2 className='text-2xl font-semibold bg-gray-400 p-2 w-full border-8 border-r-orange-500 border-l-orange-500 hover:text-white hover:bg-black cursor-pointer'>:: STRENGTH TRAINING</h2>
          </div>

        </div>
      {/* updates section */}
      <section>
      <div className='relative pt-5 pb-5'>
        <div className='flex justify-between w-11/12 mx-auto'>
        <h2 className='mt-4 text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>OUR UPDATES</h2>
        <Label className=' mt-4 justify-center cursor-pointer text-yellow-500 hover:text-blue-600 flex'><a href='/updates'>View All</a><FaArrowRight className=' text-lg pl-1'/></Label>
        </div>
        <h3 className='text-base md:text-2xl pt-4 font-semibold text-center'>________ We have these in store for you! ________</h3>
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
            <Button className="" gradientDuoTone="greenToBlue"><a href='/updates'>Read More...</a></Button>
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
              <Button className="" gradientDuoTone="greenToBlue"><a href='/updates'>Read More...</a></Button>
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
              <Button className="" gradientDuoTone="greenToBlue"><a href='/updates'>Read More...</a></Button>
            </div>
          </div>
          </div>
          </div>
      </section>
      <div className='w-11/12 border-l-8 border-orange-500 border-r-8 mx-auto bg-cyan-800 text-white pt-8 pb-8 p-2'>
        <div className=''>
        <p className='text-center font-semibold text-sm md:text-lg'>
          Transform your body and elevate your fitness journey at our beach-life gym, where expert trainers and cutting-edge equipment help you achieve your goals. Join us today and experience a supportive community that motivates and inspires you every step of the way.
          </p>
        </div>
        </div>
      {/* products section */}
      <section>
        <div className='pt-16 pb-10 bg-gray-100'>
        <div className='flex justify-between w-11/12 mx-auto'>
        <h2 className='mt-4 text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>OUR PRODUCTS</h2> 
        </div>
        <div>
        <h3 className='text-base md:text-2xl pt-4 font-semibold text-center'>________ We have These and More! ________</h3>
        </div>
        <div className='block md:flex order-2 gap-6 w-11/12 mx-auto mt-10'>
          <div className='flex-1'>
          <div className='w-11/12 mx-auto mt-6'>
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} interval={3000}>
      <div className='bg-gray-800'>
        <img src={product1} className='h-60 object-contain' alt="mountain bike" />
        <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$150.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-yellow-600'>Out Of stock</span></h3>
              <Button className='mt-4 w-10/12 mx-auto' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
      </div>

      <div className='bg-gray-800'>
        <img src={product2} className='h-60 object-contain' alt="Image 2" />
        <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$200.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-green-600'>Available</span></h3>
              <Button className='mt-4 w-10/12 mx-auto' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
      </div>

      <div className='bg-gray-800'>
        <img src={speakersImg} className='h-60 object-contain' alt="Image 3" />
        <div className='bg-gray-200 p-3'>
              <h2 className='font-semibold'>Price : <span className='text-xl text-orange-500'>$200.00</span></h2>
              <h3 className='font-semibold'>status: <span className='text-yellow-600'>Available</span></h3>
              <Button className='mt-4 w-10/12 mx-auto' gradientDuoTone="greenToBlue">Enquire Now</Button>
            </div>
      </div>
    </Carousel>
        </div>
          </div>
          <div className='flex-1 pt-5 leading-relaxed'>
            <p>
            At Beach-life Gym, we are determined to offer the best products in the market for your adventure endeavors as well and personal fitness. Our products range from outdoor to indoor products. You can purchase these products but clicking on the link beneath each product or contacting our admins.
            </p>
            <p>
              Some of our products include:
              <ul>
                <li>Mountain Bikes</li>
                <li>Tents</li>
                <li>Sound System</li>
              </ul>
            </p>
            <a href='/products'>
            <h2 className='bg-cyan-400 p-2 w-48 rounded-md shadow-sm text-center font-semibold text-gray-800 mt-10 flex gap-2 mx-auto md:mx-0'>Request A Product <span className="text-orange-800 text-2xl"><IoArrowForwardCircleOutline/></span></h2></a>
          </div>
        </div>
        </div>
      </section>
      <div className='bg-gray-900 w-11/12 border-orange-500 border-r-8 border-l-8 text-white p-5 mx-auto pt-8 pb-8'>
        <div>
        <p className='leading-relaxed text-sm md:text-lg'>
        Elevate your fitness experience in a space designed for results, with cutting-edge equipment and innovative classes that keep you engaged. Our team is dedicated to helping you break through barriers and achieve lasting success
        </p>
        </div>
      </div>
      {/* media section */}
      <section>
        <div>
        <div className='flex justify-between w-11/12 mx-auto mt-6'>
        <h2 className='mt-4 text-blue-600 font-semibold border-r-2 border-orange-600 w-32 mx-auto'>OUR MEDIA</h2>
        <Label className=' mt-4 justify-center cursor-pointer text-yellow-500 hover:text-blue-600 flex'>View All <FaArrowRight className=' text-lg pl-1'/></Label>
        </div>
        <h3 className='text-base md:text-2xl pt-4 font-semibold text-center'>________ Get motivated! ________</h3>
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
              <a href='/updates'>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
              </a>
            </div>
          </div>
          <div className='flex-1'>
            <img src={droneViewWaterfallImg} className='h-96 w-full object-cover' alt='droneWaterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Mkurumudzi waterfalls adventure</p>
              <a href='/updates'>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
              </a>
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
              <a href='/updates'>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
              </a>
            </div>
          </div>
          <div className='flex-1'>
            <img src={viewWaterfall} className='h-96 w-full object-cover' alt='viewWaterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Mkurumudzi waterfalls</p>
              <a href='/updates'>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
              </a>
            </div>
          </div>
          <div className='flex-1'>
            <img src={droneViewWaterfallImg} className='h-96 w-full object-cover' alt='droneWaterfall image'/>
            <div className='p-5 bg-gray-900 flex justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Mkurumudzi waterfalls Adventure</p>
              <a href='/updates'>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'>View Details</Label>
              </a>
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
