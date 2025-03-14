"use client";
import React from "react";
import Image from "next/image";
import arrowDown from "@/public/arrowDown.svg";
import { motion, useAnimate } from "framer-motion";

import { useEffect } from "react";

import { javlin, fiasco } from "@/constants/imageRef";

const Hero = () => {
  const [leftDeisgnScope, leftDesignAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDeisgnScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDeisgnScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
  }, []);

  return (
    <section className="py-20 overflow-x-clip">
      <div className="container relative">
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-[#F2E394] to-[#F2BB16] rounded-full text-neutral-950 font-semibold">
            ✨ 10,000+ rides completed
          </div>
        </div>

        <motion.div
          ref={leftDeisgnScope}
          initial={{ opacity: 0, y: 0, x: -100 }}
          className="hidden lg:block absolute top-20 left-0 z-[-10]"
          drag
        >
          <Image draggable="false" src={fiasco} width={350} alt="hero" />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 0 }}
          className="hidden lg:block absolute top-0 right-10 z-[-10]"
          drag
        >
          <Image
            draggable="false"
            src={javlin}
            className="scale-x-[-1]"
            width={350}
            alt="hero"
          />
        </motion.div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl max-w-4xl mx-auto font-medium tracking-normal text-center mt-6 px-3">
          Affordable taxi service in{" "}
          <span className="text-[#F2BB16]">Enfield</span>
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto p-1">
          Experience the best taxi service in Enfield with our reliable and
          affordable rides. Whether you need a quick trip across town or a ride
          to the airport, we've got you covered.
        </p>
        <div className="flex flex-col justify-center items-center gap-y-4 gap-2 mt-8">
          <a
            href="#cars"
            className="inline-flex items-center gap-2 text-lg font-medium tracking-wide"
          >
            Explore Options
          </a>
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src={arrowDown} width={40} alt="explore options" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
