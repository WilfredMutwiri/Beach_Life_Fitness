import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/updates1.jpeg'
import img2 from '../assets/updates2.jpeg'
import img3 from '../assets/updates3.jpeg'
import img4 from '../assets/updates4.jpeg'
import { Button } from 'flowbite-react';

const UpdatesPage = () => {
    const homeBannerImages=[img1,img2,img3,img4]
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
          <h2 className='text-white z-50 relative text-center font-serif text-xl md:text-3xl pt-5'>Learn what is in store for you!</h2>
          <h3 className='text-sm md:text-lg pt-4'>Holistic Fitness for a Healthier Life
          </h3>
        <div className='flex gap-5 justify-center mt-28 md:mt-10'>
          <Button gradientDuoTone="greenToBlue">Book an Appointment</Button>
        </div>
      </div>
      </div>
      </div>
      </header>
            <div className='w-11/12 mx-auto pt-10 relative mt-[630px] '>
            <h2 className='text-sm mx-auto text-blue-600 font-semibold border-r-2 border-orange-600 w-32'>Our Updates</h2>
            </div>
            <div className='flex flex-col gap-8 pt-10 pb-10 w-11/12 mx-auto'>
            <div>
            <h2 className='text-sm text-blue-600 font-semibold border-r-2 border-orange-600 w-32'>1. Bike Camping</h2> 
            <p>
            Experience the great outdoors like never before! Join us for our exciting bike camping trips, where adventure meets nature. Enjoy scenic routes, fresh air, and the thrill of cycling through picturesque landscapes. Whether you’re a seasoned cyclist or a beginner, our guided tours promise an unforgettable experience. Don’t forget to pack your essentials and get ready for a weekend filled with fun and camaraderie!
            </p>
            </div>
            <div>
            <h2 className='text-sm text-blue-600 font-semibold border-r-2 border-orange-600 w-40'>2. Camping Tents Rental  
            </h2> 
            <p>
            Planning a camping trip? We’ve got you covered! Rent high-quality camping tents from Beach Life Gym to make your outdoor experience comfortable and enjoyable. Our tents are easy to set up and designed for all weather conditions. Choose from a variety of sizes to suit your group, and enjoy a cozy night under the stars. Contact us to reserve your tent today!
            </p>
            </div>
            <div>
            <h2 className='text-sm text-blue-600 font-semibold border-r-2 border-orange-600 w-48'>3.Maji Moto Bike Adventure 
            </h2> 
            <p>
            Get ready for an adrenaline-pumping experience with our Maji Moto Bike Adventure! Ride through stunning trails while taking in breathtaking views of the surrounding landscape. This thrilling adventure is perfect for those looking to challenge themselves and explore nature in a unique way. Join us for a day of excitement, laughter, and unforgettable memories on two wheels!
            </p>
            </div>
            <div>
            <h2 className='text-sm text-blue-600 font-semibold border-r-2 border-orange-600 w-40'>4. Personal Training
            </h2> 
            <p>
            Elevate your fitness journey with our personalized training sessions! Our certified trainers will work with you to develop a customized workout plan tailored to your goals and fitness level. Whether you're looking to lose weight, build strength, or improve overall fitness, our trainers are here to guide and motivate you every step of the way. Sign up today and take the first step towards a healthier you!
            </p>
            </div>
            <div>
            <h2 className='text-sm text-blue-600 font-semibold border-r-2 border-orange-600 w-48'>5. Corporate Team Building
            </h2> 
            <p>
            Looking for a unique way to strengthen your team? Our corporate team-building programs are designed to enhance collaboration, communication, and camaraderie among employees. Engage in fun and challenging activities that promote teamwork and build lasting relationships. Tailored to your company’s needs, our programs will help your team thrive both in and out of the workplace. Contact us for more information!
            </p>
            </div>
            <div>
            <h2 className='text-sm text-blue-600 font-semibold border-r-2 border-orange-600 w-44'>6. Let’s Hiking: Vuria Hills
            </h2> 
            <p>
            Join us for a breathtaking hiking adventure at Vuria Hills! This guided hike offers stunning views, fresh air, and the chance to connect with nature. Perfect for hikers of all levels, our experienced guides will lead you through scenic trails while sharing insights about the local flora and fauna. Pack your water and snacks, and get ready to explore the beauty of Vuria Hills with us!
            </p>
            </div>
            </div>
</div>
    )
}

export default UpdatesPage