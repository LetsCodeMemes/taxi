"use client";
import React from "react";
import Tag from "@/components/Tag";
import Image from "next/image";
import { beam } from "@/constants/imageRef";
import { drivers } from "@/constants";
import DriverCard from "@/components/DriverCard";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="text-center md:text-left mx-3">
            <div className="flex justify-center md:justify-start">
              <Tag>About us</Tag>
            </div>
            <h1 className="text-5xl m-1 my-5 font-bold tracking-normal text-white">
              Welcome to Our Taxi Service
            </h1>
            <p className="text-lg text-neutral-400 max-w-lg mx-auto md:mx-0">
              We are committed to providing safe, reliable, and comfortable
              transportation services. Our team of professional drivers is
              dedicated to ensuring you have a pleasant journey every time you
              ride with us.
            </p>
          </div>
          <div className="flex justify-center my-5">
            {" "}
            <Image src={beam} alt="beamHybrid" width={300} height={500} />
          </div>
        </div>

        <div
          className="mt-30
        "
        >
          <h1 className="text-5xl text-center mb-10 text-white font-medium">
            Meet Our Drivers{" "}
          </h1>
          <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{
                x: "-50%",
              }}
              transition={{ duration: 50, ease: "linear", repeat: Infinity }}
              className="flex flex-none gap-24 pr-24"
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                  {drivers.map((driver) => (
                    <DriverCard key={driver.id} driver={driver} />
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
