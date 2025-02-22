"use client";

import React from "react";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { MdArrowForwardIos } from "react-icons/md";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeams";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision className="md:px-10 px-4 max-h-[100vh] lg:max-h-[90vh] relative bg-gradient-to-t from-fuchsia-500/15 via-transparent to-transparent overflow-hidden">
        <div 
            className="absolute -bottom-2 left-0 w-full h-28"
            style={{
                background: "linear-gradient(to right, blue, fuchsia, blue)",
                maskImage: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                height: "100px",
                opacity: "0.3",
                backgroundSize: "400% 100%",
                animation: "shine 40s ease-in-out infinite",
            }}
        ></div>
        <div className="flex flex-col items-center justify-center space-y-5 md:space-y-10">
            <div className="flex items-center justify-center rounded-full py-2 px-4 bg-neutral-900">
                <AnimatedShinyText className="font-bold flex items-center justify-center gap-2">
                <motion.div
                    animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                    }}
                    transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    }}
                    className="bg-fuchsia-500 w-2 h-2 rounded-full"
                ></motion.div>
                <span>Powered by Panaversity</span>
                </AnimatedShinyText>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
                <h1 className="text-2xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                Enterprise AI Agents
                <br />
                for the Future
                </h1>
            </div>
            <div className="flex items-center justify-center w-full max-w-auto md:max-w-2xl border rounded-md border-fuchsia-500 px-2 md:px-10 md:py-8 py-4 bg-neutral-800 bg-opacity-50 backdrop-blur-md drop-shadow-xl">
                <div className="flex justify-center items-center w-full h-full space-x-2">
                <div className="p-2 rounded-full bg-fuchsia-500 bg-opacity-40 backdrop-blur-md drop-shadow-xl">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bot md:w-8 w-5 md:h-8 h-5 text-purple-500 hover:scale-110 hover:rotate-6 transform transition-all duration-300"
                    >
                    <path d="M12 8V4H8"></path>
                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                    </svg>
                </div>
                <Input disabled className="border-none bg-neutral-800 p-auto md:py-4 md:px-2 h-14" value="Would you like to explore our AI integration solutions?" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-auto md:max-w-2xl gap-2 md:gap-6">
                <Button 
                variant="expandIcon"
                iconPlacement="right"
                Icon={MdArrowForwardIos}
                className="bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white w-full h-14 font-bold text-sm md:text-lg">
                    Deploy Your AI Agent
                </Button>
                <Button className="bg-transparent border border-fuchsia-500 text-white w-full h-14 font-bold text-sm md:text-lg">
                    Watch Demo
                </Button>
            </div>
        </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
