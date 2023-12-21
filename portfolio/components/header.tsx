"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex fixed z-[999] p-6 bg-slate-200 justify-between opacity-80 drop-shadow-md w-full">
      <div className="flex items-center justify-center text-2xl">
        Sunny Hundal
      </div>

      <nav className="flex">
        <ul className="flex">
          {links.map((link) => (
            <li key={link.hash} className=" flex text-stone-500 items-center">
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-900 active:bg-slate-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
