import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Textarea } from './ui/textarea'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-12 px-10 space-y-4 container mx-auto'>
      <h1 className='text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'>
        Get in touch
      </h1>
      <p className='text-sm md:text-lg text-gray-500'>
        Ready to transform your business with AI?
      </p>
      <div className='flex flex-col md:flex-row items-start justify-center w-full h-full pt-10'>
        <div className='flex flex-col items-start justify-center w-full h-full space-y-4'>
          <h2 className='text-lg md:text-xl font-bold '>
            Contact Information
          </h2>
          <p className='flex items-center justify-center text-sm md:text-lg text-gray-500'>
            <MdOutlineEmail className='text-fuchsia-500 mr-2' />
            <span className='text-md'>contact@agentiaworld.com</span>
          </p>
          <p className='flex items-center justify-center text-sm md:text-lg text-gray-500'>
            <HiOutlineGlobe className='text-fuchsia-500 mr-2' />
            <span className='text-md'>www.agentiaworld.com</span>
          </p>
          <span className='flex items-center justify-center gap-2'>
            <FaTwitter size={25} className='text-neutral-400 hover:text-white mr-2' />
            <FaLinkedin size={25} className='text-neutral-400 hover:text-white mr-2' />
            <FaGithub size={25} className='text-neutral-400 hover:text-white mr-2' />
          </span>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full space-y-4 mt-10 md:mt-0'>
          <Input placeholder='Full Name' className='bg-neutral-950 border-neutral-800 py-6 px-4 focus:border-fuchsia-500/50' />
          <Input placeholder='Email' className='bg-neutral-950 border-neutral-800 py-6 px-4 focus:border-fuchsia-500/50' />
          <Textarea rows={4} className='w-full bg-neutral-950 border-neutral-800 focus:border-fuchsia-500/50' placeholder='Message' />
          <Button variant='shine' className='w-full'>Send</Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
