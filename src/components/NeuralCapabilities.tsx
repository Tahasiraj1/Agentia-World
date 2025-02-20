import React from 'react'
import { LuBrain } from "react-icons/lu";
import { MdChatBubbleOutline, MdOutlineSecurity } from "react-icons/md";
import { Terminal } from 'lucide-react';
import HoverEffect from './layout/HoverEffect';

const NeuralCapabilitiesItem = [
    {
        icon: <LuBrain size={30} />,
        title: 'Neural Architecture',
        description: 'Our AI is powered by the latest in natural language processing and machine learning.',
    },
    {
        icon: <MdChatBubbleOutline size={30} />,
        title: 'Neural Architecture',
        description: 'Our AI is powered by the latest in natural language processing and machine learning.',
    },
    {
        icon: <Terminal size={30} />,
        title: 'Neural Architecture',
        description: 'Our AI is powered by the latest in natural language processing and machine learning.',
    },
    {
        icon: <MdOutlineSecurity size={30} />,
        title: 'Neural Architecture',
        description: 'Our AI is powered by the latest in natural language processing and machine learning.',
    },
]

const NeuralCapabilities = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 px-10 space-y-4'>
        
        <h1 className='text-2xl md:text-5xl h-14 font-extrabold bg-gradient-to-r from-fuchsia-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent'>
            Neural Capabilities
        </h1>
        <h2 className='text-lg text-gray-500'>
            Built on cutting-edge neural architectures
        </h2>
        <br />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {NeuralCapabilitiesItem.map((item, index) => (
                <HoverEffect key={index}>
                    <div className='flex flex-col relative group items-center justify-center w-full h-auto rounded-lg bg-neutral-950 border border-neutral-700 px-4 py-6 space-y-4'>
                        <div className='w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 rounded-md flex items-center justify-center'>
                            {item.icon}
                        </div>
                        <h3 className='text-lg font-bold'>{item.title}</h3>
                        <p className='text-sm text-center text-gray-400'>{item.description}</p>
                    </div>
                </HoverEffect>
            ))}
        </div>

    </div>
  )
}

export default NeuralCapabilities
