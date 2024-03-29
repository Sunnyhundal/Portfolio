"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.div
      className="flex items-center justify-center w-full md:w-2/3 h-full md:h-2/3 mt-5 bg-white rounded-2xl flex-col p-8 md:p-32 drop-shadow-md"
      id="projects"
      initial={{ opacity: 0, x: -100}}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 1 }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row w-full grow mb-5 md:mb-0"
        >
          <div className="flex items-center justify-center m-5 md:w-full">
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
              className="border-2 border-gray-900 drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col justify-center m-5 md:w-full">
            <span>
              <p className="text-xl font-semibold">{project.name}</p>
            </span>
            <span className="mt-3 md:mt-10">
              <p className="text-base md:text-lg">{project.description}</p>
            </span>
            <div className="flex flex-wrap mt-3">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="inline-block font-semibold text-white">
                  <a
                    href={project.github} // Assuming each project object has a 'github' field containing the GitHub link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-400 m-1 px-3 py-1 rounded-full text-sm inline-block border border-purple-500"
                  >
                    {tech}
                  </a>
                </span>
              ))}
            </div>
            <a
              href={project.github} // Assuming each project object has a 'github' field containing the GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded text-sm inline-block w-[8rem] text-center"
            >
              View Code
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
