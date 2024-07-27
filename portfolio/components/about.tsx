"use client";

import React from "react";
import Image from "next/image";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center lg:justify-between mt-5 lg:w-2/3 lg:h-2/3 md:items-center lg:items-stretch"
      id="about"
    >
      <motion.div
        className="bg-slate-200 p-6 lg:p-12 grow opacity-75 lg:w-1/3 lg:mr-2.5 rounded-xl drop-shadow-md mb-5 lg:mb-0 whitespace-pre-wrap md:w-2/3"
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 1 }}
      >
        <div>
          <p className="text-xl font-semibold mb-5">Get to know me</p>
          <p className="text-l">
  I&apos;m a full-stack developer located on Vancouver Island, BC. I&apos;m
  passionate about making accessible websites that just work. I&apos;m
  currently working on a few projects, including a website for a local
  business and a personal project that I&apos;m hoping to launch soon. If
  you&apos;re interested in working together, please reach out to me. I&apos;d
  love to hear from you!
</p>
          {/* <div className="flex justify-center lg:justify-end mt-5 lg:mt-10">
            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              <a href="#contact">Contact me</a>
            </button>
          </div> */}

        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100}}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 1 }}
        className="flex items-center lg:h-2/3 mb-5 lg:mb-0 md:w-2/3 md:items-center lg:items-stretch"
      >
        <div className="bg-white p-6 lg:p-12 grow rounded-xl lg:ml-2.5 drop-shadow-md md:w-2/3">
          <p className="text-xl font-semibold mb-5">Skills</p>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-1 md:gap-10">
            <SkillList title="Front-end" area="Frontend" />
            <SkillList title="Back-end" area="Backend" />
            <SkillList title="Other" area="Tools" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SkillList({ title, area }: { title: string; area: string }) {
  return (
    <div>
      <p className="text-l font-bold pb-4">{title}</p>
      <ul className="flex flex-wrap">
        {skills
          .filter((skill) => skill.area === area)
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
  );
}
