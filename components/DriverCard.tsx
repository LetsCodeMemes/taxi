"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

interface Driver {
  image: string;
  name: string;
  ridesCompleted: number;
  rating: number;
  description: string;
}

const DriverCard = ({ driver }: { driver: Driver }) => {
  return (
    <div className="max-w-lg cursor-pointer hover:-translate-y-1 transform transition-transform">
      <div className="m-3 border-white border p-5 rounded-3xl">
        <div className="flex justify-center">
          {" "}
          <AnimatePresence ></AnimatePresence>
          <Image
            className="rounded-full size-20 border-4 p-1 border-yellow-400"
            src={driver.image}
            alt=""
          />
        </div>
        <div className="text-center mt-5">
          <h2 className="my-2 font-bold text-3xl text-yellow-400">
            {driver.name}
          </h2>
          <p className="my-2 text-xl text-white">
            Rides completed:{" "}
            <span className="text-yellow-400">{driver.ridesCompleted}</span>
          </p>
          <p className="my-2 text-xl text-white">
            Rating: <span className="text-yellow-400">{driver.rating}%</span>
          </p>
          <p className="my-2 text-xl text-neutral-400">{driver.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
