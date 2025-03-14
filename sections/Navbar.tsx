"use client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/Button";
import { navLinks } from "@/constants";
import logo from "@/public/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full z-50">
        <div className="max-w-7xl mx-auto">
          <div className="mx-4">
            <div className={`grid grid-cols-2 lg:grid-cols-3 py-2 px-3 md:pr-2 items-center bg-transparent backdrop-blur border border-white rounded-[27px] md:rounded-full ${isOpen ? 'border-b-0' : 'border-b'}`}>
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="layer logo "
                  className="flex-shrink-0 w-10 h-10"
                />
                <h1 className="text-white text-2xl font-bold ">Best Taxi</h1>
              </div>

              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium text-white ">
                  {navLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      className="transition-transform hover:-translate-y-1"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F2CF1D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
                <Button
                  className="hidden md:inline-flex items-center"
                  variant="primary"
                  href="/book"
                >
                  Book Now
                </Button>
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                  href="#"
                >
                  Mystery
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="overflow-hidden backdrop-blur"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  <div className="flex flex-col border-b-white border-b rounded-b-3xl text-white items-center gap-4 py-4 ">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label} className="">
                        {link.label}
                      </a>
                    ))}
                    <Button variant="primary" className="" href="/book">
                     Book now
                    </Button>
                    <Button variant="secondary" href="#">
                      Mystery
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[100px]"></div>
    </>
  );
}
