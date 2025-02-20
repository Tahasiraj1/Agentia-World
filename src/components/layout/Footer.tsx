'use client'
import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { TextLoop } from '@/components/layout/TextLoop';
import { AnimatedShinyText } from '../ui/animated-shiny-text';

const Socials = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    href: 'https://www.facebook.com',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: 'https://www.twitter.com',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com',
  }
];


const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-center mb-12">
          <AnimatedShinyText>
            Agentia World.
          </AnimatedShinyText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <p className="text-sm">
                Next-generation AI agents powering the<br /> 
                future of enterprise intelligence.
            </p>
            
            {/* Socials */}
            <div className="flex space-x-4 overflow-hidden h-7">
              {Socials.map((social) => (
                <Link href={social.href} key={social.name} className="hover:text-white text-gray-400 transition-colors">
                    <social.icon size={24} />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white text-gray-400 transition-colors">Features</Link></li>
              <li><Link href="/products" className="hover:text-white text-gray-400 transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white text-gray-400 transition-colors">Documentation</Link></li>
              <li><Link href="/contact" className="hover:text-white text-gray-400 transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white text-gray-400 transition-colors">About</Link></li>
              <li><Link href="/products" className="hover:text-white text-gray-400 transition-colors">Blogs</Link></li>
              <li><Link href="/about" className="hover:text-white text-gray-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white text-gray-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-xl font-bold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white text-gray-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/products" className="hover:text-white text-gray-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/about" className="hover:text-white text-gray-400 transition-colors">Security</Link></li>
              <li><Link href="/contact" className="hover:text-white text-gray-400 transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm">
          <TextLoop>
            <p>&copy; 2025 Agentia World. All rights reserved.</p>
            <p>Powered by Panaversity.</p>
          </TextLoop>
        </div>
      </div>
    </footer>
  );
}

export default Footer