import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-row justify-between pt-24 w-2/3 h-2/3">
      <div className="bg-slate-200 p-24 rounded-xl grow opacity-75 w-1/3">
        <p className="text-xl">Get to know me</p>
        <p className="text-l">
          I'm a full-stack developer located on Vancouver Island, BC. I'm
          passionate about making accessible websites that just work. I'm
          currently working on a few projects, including a website for a local
          business and a personal project that I'm hoping to launch soon. if
          you're interested in working together, please reach out to me. I'd
          love to hear from you!
        </p>
        <div className="flex justify-end mt-10">
          <button className="flex rounded-xl bg-purple-500 p-2">
            {" "}
            Contact me{" "}
          </button>
        </div>
      </div>
      <div className="bg-white p-24 rounded-xl grow ">
        <p className="text-xl">Skills</p>
      </div>
    </div>
  );
}
