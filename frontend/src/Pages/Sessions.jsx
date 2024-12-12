import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/teamBulding.webp'
import img2 from '../assets/bikeEvent.webp'
import img3 from '../assets/bikeEvent2.webp'
import img4 from '../assets/personalTraining.webp';
import img10 from '../assets/4session.jpeg';
import { Button } from 'flowbite-react';

const SessionsPage = () => {
    const homeBannerImages=[img1,img2,img3,img4,img10];
    return (
        <div>
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
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 max-w-[1500px] h-[800px] -mt-[20px] md:h-[800px] w-full m-auto"></div>
          {/* Text Overlay */}
      <div className="-mt-[600px] md:-mt-[700px] relative inset-0 flex flex-col justify-center items-center text-white z-10">
          <div className='flex w-full md:w-7/12 mx-auto pt-0 md:pt-28'>
          <div className='w-full mx-auto  z-50 p-0 md:p-3 font-bold'>
          <div className='z-50 w-11/12 mx-auto md:w-full flex flex-col gap-2 font-serif text-4xl md:text-6xl'>
          <h2 className='text-center  text-cyan-400 ml-2 md:ml-4'> Diani</h2>
          <h1 className='text-center text-orange-500 font-bold'> Beach <span className='text-cyan-400 '>Life </span>Fitness</h1>
          <h2 className='text-center text-cyan-400 ml-7 md:ml-10'>Kenya</h2>
          </div>
          </div>
          </div>
          <h2 className='text-white z-50 relative text-center font-serif text-xl md:text-3xl pt-5'>Plan yourself accordingly!!</h2>
          <h3 className='text-sm md:text-lg pt-4'>These are our sessions!
          </h3>
        <div className='flex gap-5 justify-center mt-28 md:mt-10'>
          <Button gradientDuoTone="greenToBlue">Book an Appointment</Button>
        </div>
      </div>
      </div>
      </div>
      </header>
        </div>
    )
}

export default SessionsPage; 