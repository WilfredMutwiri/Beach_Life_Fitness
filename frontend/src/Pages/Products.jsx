import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/mountain-b_1693287593rOnMaD.webp'
import img2 from '../assets/tent.webp';
import img3 from '../assets/tent2.webp'
import { Button } from 'flowbite-react';
import speakersImg from '../assets/speakers.webp';

const ProductsPage = () => {
    const homeBannerImages=[img1,img2,img3,speakersImg];

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
          <h2 className='text-white z-50 relative text-center font-serif text-xl md:text-3xl pt-5'>Welcome to Our Products Page!!</h2>
          <h3 className='text-sm md:text-lg pt-4'>We have these products and More!!
          </h3>
        <div className='flex gap-5 justify-center mt-28 md:mt-10'>
          <Button gradientDuoTone="greenToBlue">Order a Product!</Button>
        </div>
      </div>
      </div>
      </div>
      </header>
      {/* products section */}
      <div>
      <div className='w-11/12 mx-auto pt-10 relative mt-[630px] '>
            <h2 className='text-sm mx-auto text-blue-600 font-semibold border-r-2 border-orange-600 w-32'>Our Products</h2>
            <h3 className='text-base md:text-2xl pt-4 font-semibold text-center'>________We have these Products and More ________</h3>
        </div>
        <div className='mt-10 w-11/12 mx-auto'>
            <div className='block md:flex gap-5 justify-between'>
                <div className='bg-gray-100 mb-5'>
                    <img src={img1} className='h-52 mx-auto'/>
                    <div className='flex gap-10 p-3 justify-between'>
                    <h2 className='font-semibold text-xl'>Mountain Bike</h2>
                    <h2 className='text-lg text-red-600'><span className='text-2xl font-semibold text-orange-500'>Ksh:</span> 10,000</h2>
                    </div>
                    <Button className='w-full mt-2' gradientDuoTone="greenToBlue">Order Now!</Button>
                </div>

                <div className='bg-gray-100 mb-5 mt-10'>
                    <img src={img2} className='h-52 mx-auto'/>
                    <div className='flex gap-10 p-3 justify-between'>
                    <h2 className='font-semibold text-xl'>Tents</h2>
                    <h2 className='text-lg text-red-600'><span className='text-2xl font-semibold text-orange-500'>Ksh:</span> 8,000</h2>
                    </div>
                    <Button className='w-full mt-2' gradientDuoTone="greenToBlue">Order Now!</Button>
                </div>

                <div className='bg-gray-100 mb-5 mt-10'>
                    <img src={speakersImg} className='h-52 mx-auto'/>
                    <div className='flex gap-6 p-3 justify-between'>
                    <h2 className='font-semibold text-xl'>Sound System</h2>
                    <h2 className='text-lg text-red-600'><span className='text-2xl font-semibold text-orange-500'>Ksh:</span> 10,000</h2>
                    </div>
                    <Button className='w-full mt-2' gradientDuoTone="greenToBlue">Order Now!</Button>
                </div>
            </div>

        </div>
      </div>
    </div>
    )
}

export default ProductsPage; 