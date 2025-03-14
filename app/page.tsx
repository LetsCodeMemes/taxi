"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/sections/Navbar";
import React from "react";
import Hero from "@/sections/Hero";
import Selection from "@/sections/Selection";
import Testimonial from "@/sections/Testimonial";
import Faq from "@/sections/Faq";
import CallToAction from "@/sections/CTA";
import Footer from "@/sections/Footer";

const page = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="overflow-x-hidden"
      >
        <Navbar />
        <Hero />
        <Selection />
        <Testimonial />
        <Faq />
        <CallToAction />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
};

export default page;
