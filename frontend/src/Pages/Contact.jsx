import React from 'react';
import { Button,Label, Textarea, TextInput } from "flowbite-react";
import img1 from '../assets/personalTraining.webp';
import img2 from '../assets/beachWorkout.webp';
const ContactPage = () => {
    return (
        <div>
            <div className='block md:flex w-11/12 mx-auto gap-10 mt-5 mb-10'>
            <div className='flex-1'>
                <img src={img1} className=' rounded-t-md'/>
                <img src={img2} className=' rounded-b-md hidden md:block'/>
            </div>
            <div className='flex-1'>
                <h2 className='text-cyan-800 font-bold text-3xl pt-4'>Let's Get In Touch!</h2>
                <h3 className='text-gray-600 font-semibold pt-3'>Or just reach out manually at <span className='italic text-blue-800'>+254 728 205 891</span></h3>
                <form className='flex flex-col gap-4 mt-4'>
                    <div className='block md:flex gap-5'>
                        <div className='flex flex-col gap-2 flex-1'>
                        <Label htmlFor="firstName" value="First Name" />
                            <div className='flex-1'>
                            <TextInput id="firstName" type="text" placeholder="Enter your First Name" required />
                            </div>                        
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                        <Label htmlFor="lastName" value="Last Name" />
                        <div className='flex-1'>
                        <TextInput id="lastName" type="text" placeholder="Enter your Last Name" required />
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email" value="Email Address" />
                        <TextInput id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="phone" value="Phone Number" />
                        <TextInput id="phone" type="phone" placeholder="Enter your Phone Number" required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="message" value="Message" />
                        <Textarea id="email" type="email" placeholder="Hello beachlife Kenya..." className='h-44' required />
                    </div>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default ContactPage;