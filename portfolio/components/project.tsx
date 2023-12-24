import React from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Project() {
  return (
    <div
      className="flex items-center justify-center w-full md:w-2/3 h-full md:h-2/3 mt-5 bg-white rounded-2xl flex-col p-8 md:p-32 drop-shadow-md"
      id="projects"
    >
      {projects.map((project) => (
        <div
          key={project.name}
          className="flex flex-col md:flex-row  w-full grow mb-5 md:mb-0"
        >
          <div className="flex items-center justify-center m-5 w-full md:w-1/2">
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
              className="border-2 border-gray-900 drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col justify-center m-5  w-full md:w-1/2">
            <span>
              <p className="text-xl font-semibold">{project.name}</p>
            </span>
            <span className="mt-3 md:mt-10">
              <p className="text-base md:text-lg">{project.description}</p>
            </span>
            <div className="flex justify-center md:justify-end mt-5 md:mt-10">
              <button className="flex items-center justify-center rounded-xl bg-purple-500 p-2 md:p-3 drop-shadow-md">
                {" "}
                View Project{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
