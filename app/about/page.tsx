"use client";
import React from "react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import About from "@/sections/About";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="overflow-x-hidden"
      >
        <Navbar />
        <About />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
};

export default page;
