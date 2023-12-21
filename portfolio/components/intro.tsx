import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex items-center justify-center w-2/3 h-2/3 bg-white rounded-2xl flex-wrap p-32">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/sunny.png"
          alt="Sunny Hundal"
          width={200}
          height={200}
          className="border-2 border-gray-900 rounded-full w-[100px] h-[100px] drop-shadow-sm"
        />

        <p className="text-xl">
          <span className="text-4xl font-bold">Hi, I'm Sunny. </span>
          I'm a full-stack developer with a passion for making accessible
          websites that just work.
        </p>
      </div>
    </div>
  );
}
