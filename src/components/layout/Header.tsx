"use client";

import { Button } from "../ui/button";
import { NavItems } from "@/lib/navItems";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { RiMenu3Line } from "react-icons/ri";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div
      className={`font-poppins bg-black bg-opacity-50 backdrop-blur-md text-xl w-full h-20 flex items-center justify-between text-white px-4 md:px-10 sticky top-0 z-50 ${
        isScrolled ? "shadow-fuchsia-500/20 shadow-md" : "shadow-none"
      }`}
    >
      <h1 className="font-bold text-xl md:text-2xl flex items-center justify-center gap-2">
        {/* <RiRobot3Fill className="text-fuchsia-500 text-md md:text-2xl" /> */}
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
        Agentia World
      </h1>
      <div className="flex items-center justify-center gap-2 lg:gap-6">
        {/* Big Screen Nav */}
        <ul className="hidden lg:flex text-[16px] font-thin gap-6">
          {NavItems.map((item) => (
            <li key={item.name} className="text-gray-300 hover:text-white">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
          <Button
            variant="gooeyLeft"
            className="bg-gradient-to-r from-fuchsia-500 to-blue-500"
          >
            Launch Console
          </Button>
        </ul>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden bg-transparent hover:bg-transparent">
              <RiMenu3Line className="w-6 h-6 text-white hover:text-gray-300" />
              <span className="sr-only">Open menu</span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="pt-20 text-white border-gray-600 bg-black bg-opacity-50 backdrop-blur-md"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav>
              <ul className="flex flex-col gap-4">
                {NavItems.map((item) => (
                  <li key={item.id}>
                    <Button asChild>
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  </li>
                ))}
                <Button className="bg-gradient-to-r from-fuchsia-500 to-blue-500">
                  Launch Console
                </Button>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
