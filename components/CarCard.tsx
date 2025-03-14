"use client";
import Image from "next/image";
import React from "react";

interface Car {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  seats: number;
  exclusive: boolean;
}

interface CarCardProps {
  listCar: Car[];
}

const CarCard: React.FC<CarCardProps> = ({ listCar }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {listCar.map((car) => {
        return (
          <div
            key={car.id}
            className={`relative hover:-translate-y-1 hover:shadow inset-shadow-stone-50 shadow-white transition bg-transparent rounded-2xl p-5 py-5 border border-white/50 m-5 max-w-2xl ${
              car.exclusive
                ? "border-yellow-500 shadow-yellow-300"
                : "border-white/50 shadow-white"
            }`}
          >
            <div className="py-4 flex flex-col items-center">
              <Image
                src={car.image}
                alt={car.name}
                width={300}
                height={300}
                className=" flex-shrink-0"
              />
              <div className="flex flex-col justify-center text-center md:text-left">
                <h1 className="text-[33px] font-bold my-1 tracking-normal">
                  {car.name}
                </h1>
                <p className="text-white/50 text-base my-2 font-light">
                  {car.description}
                </p>
                <p className="text-white text-xl font-semibold my-2">
                  Price:{" "}
                  <span className="text-yellow-500 font-bold">
                    £{car.price}
                  </span>
                </p>
                <p className="text-white text-xl font-semibold my-2">
                  Seats:{" "}
                  <span className="text-yellow-500 font-bold ">
                    {car.seats}
                  </span>
                </p>

                <a href="/book" className="my-4 bg-yellow-500 text-black px-4 max-w-xl mx-auto py-2 rounded-md z-2">Book now</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarCard;
