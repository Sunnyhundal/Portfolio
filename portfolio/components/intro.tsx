import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex items-center justify-center w-full md:w-2/3 h-auto md:h-2/3 bg-white rounded-2xl p-8 md:p-32 drop-shadow-md">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-5">
          <Image
            src="/images/sunny.png"
            alt="Sunny Hundal"
            width={200}
            height={200}
            className="border-2 border-gray-900 rounded-full w-32 h-32 md:w-40 md:h-40 drop-shadow-sm"
          />
        </div>
        <p className="text-base md:text-xl">
          <span className="flex flex-col text-2xl md:text-4xl font-bold mb-3">Hi, I'm Sunny.</span>{" "}
          I'm a <span className="font-semibold">full-stack developer</span> with a passion for making <span className="font-semibold">accessible
          websites </span> that just work. I come from a background in <span className="font-semibold">economics and international education</span>, and am always looking for ways to combine my interests in technology and education to <span className="font-semibold"> make the internet a better place.</span>


        </p>
      </div>
    </div>
  );
}
