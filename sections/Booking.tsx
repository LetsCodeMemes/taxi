"use client";
import React, { useState } from "react";
import { taxis, drivers } from "@/constants";
import Tag from "@/components/Tag";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";

const Booking = () => {
  const [modalOpen, setModalOpen] = useState(false);

  interface BookingData {
    name: string;
    email: string;
    phone: string;
    time: string;
    car: string;
    driver: string;
    security: string;
  }

  const handleBooking = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: BookingData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      time: formData.get("time") as string,
      car: formData.get("cars") as string,
      driver: formData.get("driver") as string,
      security: formData.get("secure") as string,
    };

    // Basic authentication check
    if (data.name && data.email && data.phone) {
      setModalOpen(true);
    } else {
      console.log("Please fill in all required fields.");
    }
  };

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Book Now</Tag>
        </div>
        <h1 className="text-5xl font-semibold mx-2 text-center my-5">
          Book A Taxi Now
        </h1>
        <p className="text-center text-lg mx-2 text-neutral-400">
          Fill in the form below to book a taxi. We will get back to you as soon. 
        </p>
        <div className="mt-10 m-3 p-5 border border-yellow-400 rounded-3xl md:max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-5 ">Book now: </h3>
          <form onSubmit={handleBooking}>
            <div className="flex flex-col gap-y-2 mt-3">
              <label
                htmlFor="name"
                className="font-medium text-2xl text-yellow-500"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" caret-yellow-400 bg-black text-yellow-500  p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <label
                htmlFor="email"
                className="font-medium text-2xl text-yellow-600 "
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className=" caret-yellow-400 bg-black text-yellow-500  p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <label
                htmlFor="phone"
                className="font-medium text-2xl  text-yellow-600"
              >
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className=" caret-yellow-400 bg-black text-yellow-500  p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <label
                htmlFor="time"
                className="font-medium text-2xl  text-yellow-600"
              >
                Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className=" caret-yellow-400 bg-black text-yellow-500 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <label
                htmlFor="car"
                className="font-medium text-2xl  text-yellow-600"
              >
                Select Car:
              </label>
              <select
                id="cars"
                name="cars"
                className="col-start-1 row-start-1 appearance-none bg-black p-2 text-white rounded-2xl"
              >
                {taxis.map((taxi) => (
                  <option key={taxi.id} value={taxi.name}>
                    {taxi.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <label
                htmlFor="driver"
                className="font-medium text-2xl  text-yellow-600"
              >
                Select Driver:
              </label>
              <select
                id="driver"
                name="driver"
                className="col-start-1 row-start-1 appearance-none bg-black p-2 text-white rounded-2xl"
              >
                {drivers.map((driver) => (
                  <option key={driver.id} value={driver.name}>
                    {driver.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <label
                htmlFor="security"
                className="font-medium text-2xl  text-yellow-600"
              >
                Select Level Of Security:
              </label>
              <select
                id="secure"
                name="secure"
                className="col-start-1 row-start-1 appearance-none bg-black p-2 text-white rounded-2xl"
              >
                <option value="Lvl0">No Security</option>
                <option value="Lvl1">Small Defence</option>
                <option value="Lvl2">Political Defence</option>
                <option value="Lvl3">Army Grade Protection</option>
              </select>
            </div>
            <div className="mt-10">
              <button
                className="hover:-translate-y-1 transition hover:text-black hover:font-bold duration-300 text-center px-5 py-2 m-1 w-full rounded-3xl bg-gradient-to-r from-[#F2E394] to-[#F2BB16]"
                type="submit"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
      {modalOpen && (
        
        <Modal onClose={() => setModalOpen(false)}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-black p-5 rounded-lg shadow-lg sm:text-center md:text-left"
          >
            <h2 className="text-4xl font-bold">Booking Confirmed!</h2>
            <p className="text-xl mt-5 text-neutral-400">
              Your booking has been successfully submitted. Check your email for
              details.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-5 w-full text-lg bg-yellow-500 text-white p-2 rounded-lg"
            >
              Close
            </button>
          </motion.div>
        </Modal>
      )}
    </section>
  );
};

export default Booking;
