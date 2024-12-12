import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/teamBulding.webp'
import img2 from '../assets/bikeEvent.webp'
import img3 from '../assets/bikeEvent2.webp'
import img4 from '../assets/personalTraining.webp';
import img10 from '../assets/bikeEvent3.webp';
import { Button } from 'flowbite-react';

import img5 from '../assets/bikecamping.webp'
import img6 from '../assets/tentRental.webp'
import img7 from '../assets/waterfall_1693140591QfdwUr.webp';
import img8 from '../assets/hillHiking.webp';
import img9 from '../assets/updates1.jpeg';

// palmwine
import palm1 from '../assets/palmwine1.webp';
import palm2 from '../assets/palmwine2.webp';
import palm3 from '../assets/palmwine3.webp';
import palm4 from '../assets/palmwine4.webp';
// bikecombi
import bikeCombi1 from '../assets/bikeCombi1.jpeg';
import bikeCombi2 from '../assets/bikeCombi2.jpeg';
import bikeCombi3 from '../assets/bikeCombi3.jpeg';
import bikeCombi4 from '../assets/bikeCombi4.jpeg';
import bikeCombi5 from '../assets/bikeCombi5.jpeg';
const EventsPage = () => {
    const homeBannerImages=[img1,img2,img3,img4,img10];
    const palmwineImages=[palm1,palm2,palm3,palm4];
    const bikeCombiImages=[bikeCombi1,bikeCombi2,bikeCombi3,bikeCombi4,bikeCombi5];
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
          <h2 className='text-white z-50 relative text-center font-serif text-xl md:text-3xl pt-5'>Join the Movement – BeachLife Events You Can't Miss!!</h2>
          <h3 className='text-sm md:text-lg pt-4'>Transform Your Fitness Journey with Us!
          </h3>
        <div className='flex gap-5 justify-center mt-28 md:mt-10'>
          <Button gradientDuoTone="greenToBlue">Book an Appointment</Button>
        </div>
      </div>
      </div>
      </div>
      </header>
      {/* events section */}
      <section>
        <div>
        <div className='w-11/12 mx-auto pt-10 relative mt-[630px] '>
            <h2 className='text-sm mx-auto text-blue-600 font-semibold border-r-2 border-orange-600 w-32'>Our Events</h2>
            <h3 className='text-base md:text-2xl pt-4 font-semibold text-center'>________BeachLife Gym Events You Can't Afford to Miss!! ________</h3>
            </div>
            <div className='flex flex-col gap-8 pt-10 pb-10 w-11/12 mx-auto'>
            {/* first event div*/}
            <div className='block md:flex gap-10'>
            <div>
            <h2 className='text-lg text-blue-600 font-semibold border-r-2 border-orange-600 bg-gray-50 p-1'>~Embracing Tradition: The Mijikenda Palm Wine Experience</h2> 
            <div >
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>{
            palmwineImages.map((image,index)=>(
            <div key={index} className='max-w-[100%] h-[300px] bg-gray-500'>
              <img className='w-full h-[300px] object-contain' src={image} alt={`Banner ${index+1}`}/>
            </div>
            ))
            }
        </Carousel>
            </div>
            {/* <img src={img5} className='h-72 w-full object-cover'/> */}
            <p className='leading-relaxed pt-2 pb-4'>
            Nestled along the coastal regions of Kenya, the Mijikenda people offer a unique twist on the traditional palm wine experience. For centuries, palm wine, known locally as "mnazi," has been an integral part of Mijikenda culture, cherished for its rich flavors and cultural significance.<br/>
            Imagine strolling through the lush coastal forests, where towering palm trees sway gently in the breeze. Here, skilled harvesters adeptly climb the trees to collect the sweet sap from the palm's flower buds, a skill passed down through generations within the Mijikenda community.<br/>
            Once collected, the sap is carefully fermented using age-old techniques, resulting in a beverage that reflects the essence of Mijikenda heritage. Unlike other varieties of palm wine, Mijikenda palm wine often carries subtle hints of coastal flavors, with a refreshing sweetness that delights the palate.<br/>
            But the Mijikenda palm wine experience extends beyond just the taste; it's a journey into the heart of community and tradition. Whether enjoyed during festive gatherings, village celebrations, or intimate family moments, palm wine serves as a symbol of unity and kinship among the Mijikenda people.<br/>
            For travelers eager to immerse themselves in the Mijikenda way of life, a visit to a local palm wine tavern is a must. Here, amidst lively conversation and vibrant music, visitors can partake in the age-old ritual of sharing a gourd of palm wine, forging connections and creating memories that will last a lifetime.<br/>
            So, as you explore the coastal regions of Kenya, be sure to embrace the Mijikenda palm wine experience. With each sip, you'll not only taste the flavors of tradition but also feel the warmth of community and the enduring spirit of the Mijikenda people.
            </p>
            </div>
            <hr className='block md:hidden'/>
            <div className='mt-10 md:mt-0'>
            <h2 className='text-lg text-blue-600 font-semibold border-r-2 border-orange-600 bg-gray-50 p-1'>~Our unique CANOE & BIKE COMBI</h2>
            <div >
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>{
            bikeCombiImages.map((image,index)=>(
            <div key={index} className='max-w-[100%] h-[300px] bg-gray-500'>
              <img className='w-full h-[300px] object-contain' src={image} alt={`Banner ${index+1}`}/>
            </div>
            ))
            }
        </Carousel>
            </div>
            <p className='leading-relaxed pt-2'>
            What makes our Experience even more unique is our Canoe & Bike combination! Because in addition to wonderful boating on the Kongo River, we also combine this with a relaxing bike ride through nature and past charming villages.<br/>
            You don't really discover the kongo river until you have experienced it by paddling and cycling. Downstream enjoy boating in one of our canoes. Upstream follow a bicycle route through the Tiwi of just under 15 kilometers and get to know the character of this wonderful part of Diani beach.<br/>
            You will find smooth white sand dune as you sail through mangroves and palm trees onboard a non-motorized Canoe,a journey where river meets sea, unveiling the beauty of Diani’s mangroves at sunset. Immersed in local culture by sailing on a traditional canoe with a local guide full of knowledge,along the Kongo river, with mangrove on both sides and a paradise for birdwatchersItenary:<br/>
            Join me "Gift" to guide you through a Hard tail mountain bike adventure tour Will pick you at your premises with a local tuktuk,to our starting point where the ride begines.What kind of bike?We chose the rockrider hard tail mountain bikes, Multi Purpose Bike. This is a bike designed specifically for rental. Rock solid with aluminium frame where almost nothing can break. 1*9 speed with hydraulic brakes. Just like in The Good Old Day's!<br/>
            The beauty of this model is that it is incredibly widely adjustable, and we have deferent sizes depending on clients height ,almost everyone can fit on this bikes.Bike check and briefing will be done before engaging in our Ofroad bike experience of a lifetime. I can customise the ride according to your needs.
            </p>
            </div>
            </div>

            </div>
        </div>
      </section>
</div>
    )
}

export default EventsPage;