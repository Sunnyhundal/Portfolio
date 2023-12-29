"use client";

import React, { use } from "react";
import Image from "next/image";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center lg:justify-between mt-5 lg:w-2/3 lg:h-2/3"
      id="about"
    >
      <motion.div
        className="bg-slate-200 p-6 lg:p-24 grow opacity-75 lg:w-1/3 lg:mr-2.5 rounded-xl drop-shadow-md mb-5 lg:mb-0 whitespace-pre-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div>
          <p className="text-xl font-semibold">Get to know me</p>
          <p className="text-l">
            I'm a full-stack developer located on Vancouver Island, BC. I'm
            passionate about making accessible websites that just work. I'm
            currently working on a few projects, including a website for a local
            business and a personal project that I'm hoping to launch soon. if
            you're interested in working together, please reach out to me. I'd
            love to hear from you!
          </p>
          <div className="flex justify-center lg:justify-end mt-5 lg:mt-10">
            <button className="flex rounded-xl bg-purple-500 p-2 drop-shadow-md">
              {" "}
              Contact me{" "}
            </button>
          </div>
        </div>
      </motion.div>

      <div className="bg-white p-6 lg:p-24 grow rounded-xl lg:ml-2.5 drop-shadow-md">
        <p className="text-xl font-semibold">Skills</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
          <div>
            <p className="text-l">Front-end</p>
            <ul className="flex flex-wrap">
              {skills
                .filter((skill) => skill.area === "Frontend")
                .map((skill) => (
                  <li key={skill.name} className="skill flex-col mr-4 mb-4">
                    <span>
                      <Image
                        src={`https://unpkg.com/simple-icons@v10/icons/${skill.simpleicon}.svg`}
                        alt={skill.name}
                        width={32}
                        height={32}
                      />
                    </span>
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p className="text-l">Back-end</p>
            <ul className="flex flex-wrap">
              {skills
                .filter((skill) => skill.area === "Backend")
                .map((skill) => (
                  <li key={skill.name} className="skill flex-col mr-4 mb-4">
                    <span>
                      <Image
                        src={`https://unpkg.com/simple-icons@v10/icons/${skill.simpleicon}.svg`}
                        alt={skill.name}
                        width={32}
                        height={32}
                      />
                    </span>
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p className="text-l">Other</p>
            <ul className="flex flex-wrap">
              {skills
                .filter((skill) => skill.area === "Tools")
                .map((skill) => (
                  <li key={skill.name} className="skill flex-col mr-4 mb-4">
                    <span>
                      <Image
                        src={`https://unpkg.com/simple-icons@v10/icons/${skill.simpleicon}.svg`}
                        alt={skill.name}
                        width={32}
                        height={32}
                      />
                    </span>
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
