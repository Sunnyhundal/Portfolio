import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center border">
        <div className="relative">
          <span className="absolute bottom-0 right-0 text-4xl border pt-10">
            <div>
              <Image
                src="/public/images/sunny.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
