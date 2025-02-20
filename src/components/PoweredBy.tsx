import React from 'react'
import { LuBrain } from "react-icons/lu";
import { HiOutlineChip, HiOutlineGlobe } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import HoverEffect from './layout/HoverEffect';

const PoweredByItem = [
    {
        icon: <LuBrain size={30} className='group-hover:size-12 group-hover:rotate-12 transition-all duration-300 ease-in-out' />,
        title: 'Neural Architecture',
        description: 'Our AI is powered by the latest in natural language processing and machine learning.',
    },
    {
        icon: <HiOutlineChip size={30} className='group-hover:size-12 group-hover:rotate-12 transition-all duration-300 ease-in-out' />,
        title: 'Neural Architecture',
        description: 'Our AI is powered by the latest in natural language processing and machine learning.',
    },
    {
        icon: <BiCodeAlt size={30} className='group-hover:size-12 group-hover:rotate-12 transition-all duration-300 ease-in-out' />,
        title: 'Neural Architecture',
        description: 'Our AI is powered by the latest in natural language processing and machine learning.',
    },
    {
        icon: <HiOutlineGlobe size={30} className='group-hover:size-12 group-hover:rotate-12 transition-all duration-300 ease-in-out' />,
        title: 'Neural Architecture',
        description: 'Our AI is powered by the latest in natural language processing and machine learning.',
    },
]

const PoweredBy = () => {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-10 space-y-4">
        <h1 className="text-2xl md:text-5xl h-14 font-extrabold bg-gradient-to-r from-fuchsia-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
          Powered by Advanced AI
        </h1>
        <h2 className="text-lg text-gray-500">Built on cutting-edge neural architectures</h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PoweredByItem.map((item, index) => (
            <HoverEffect key={index}>
              <div className="relative flex flex-col items-center justify-center w-full h-full rounded-lg bg-neutral-950 px-4 py-6 space-y-4">
                <div className="w-16 h-16 group-hover:w-20 group-hover:h-20 transition-all transform duration-300 ease-in-out bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 rounded-md flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-center text-gray-400">{item.description}</p>
              </div>
            </HoverEffect>
          ))}
        </div>
      </div>
    )
  }

export default PoweredBy
