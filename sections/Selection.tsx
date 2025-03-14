import React from "react";
import Tag from "@/components/Tag";
import CarCard from "@/components/CarCard";
import { taxis } from "@/constants";

const Selection = () => {
  return (
    <section className="py-20" id="cars">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Our selection of Cars</Tag>
        </div>
        <h1 className="text-4xl md:text-5xl tracking-wide text-center font-bold mx-w-2xl mx-auto my-5">
          Explore our Taxi Cars
        </h1>
        <div className="flex justify-center">
          <p className="text-base md:text-lg my-2 text-white/50 text-center max-w-xl mx-auto p-1">
            Discover our wide range of taxi cars, each designed to provide you
            with the utmost comfort and safety. We have the perfect car for you.
          </p>
        </div>
        <div className="flex justify-center">
          <CarCard listCar={taxis} />
        </div>
      </div>
    </section>
  );
};

export default Selection;
