"use client";

import React, { use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      className="flex items-center justify-center w-full md:w-2/3 h-auto md:h-2/3 bg-white rounded-2xl p-8 md:p-32 drop-shadow-md"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-5">
            {/* <Image
              src="/images/sunny.png"
              alt="Sunny Hundal"
              width={200}
              height={200}
              className="border-2 border-gray-900 rounded-full w-32 h-32 md:w-40 md:h-40 drop-shadow-sm"
            /> */}
          </div>
          <p className="text-base md:text-xl">
  <span className="flex flex-col text-2xl md:text-4xl font-bold mb-3">
    Hi, I&apos;m Sunny.
  </span>{" "}
  I&apos;m a <span className="font-semibold">full-stack developer</span> with a passion for making{" "}
  <span className="font-semibold">accessible websites</span> that just work. I come from a background in{" "}
  <span className="font-semibold">economics and international education</span>, and am always looking for ways to combine my interests in technology and education to{" "}
  <span className="font-semibold">make the internet a better place.</span>
</p>
        </div>
      </div>
    </motion.div>
  );
}
