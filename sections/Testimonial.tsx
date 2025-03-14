"use client";
import Tag from "@/components/Tag";
import React from "react";
import { testimonials } from "@/constants";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Customer Reviews</Tag>
        </div>

        <h1 className="text-center text-5xl my-5 font-bold">
          What clients say about us
        </h1>
        <p className="text-center text-neutral-400 max-w-md md:mx-auto my-5 sm:mx-4">
          We value our clients' feedback and strive to provide the best service
          possible. Here are some of the reviews from our satisfied customers.
        </p>

        <div className="flex justify-center">
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
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="p-10 m-1 rounded-2xl border-yellow-500/50 border-2 hover:translate-y-1 transition-all duration-300 z-3"
                    >
                      <h1 className="text-3xl font-bold">{testimonial.name}</h1>
                      <p className="text-lg max-w-sm my-4 text-neutral-400">
                        {testimonial.description}
                      </p>
                      <p className="text-2xl">{testimonial.rating}</p>
                    </div>
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

export default Testimonial;
