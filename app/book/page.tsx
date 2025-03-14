"use client";
import React from "react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Booking from "@/sections/Booking";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const page = () => {
  return (
    <AnimatePresence>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Navbar />
        <Booking />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
};

export default page;
