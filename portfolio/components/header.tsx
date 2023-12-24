"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex fixed z-[999] p-3 md:p-6 bg-slate-200 justify-between items-center opacity-80 drop-shadow-md w-full">
      <div className="text-2xl md:text-3xl font-semibold">Sunny Hundal</div>

      <nav className={`md:flex ${showMenu ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {links.map((link) => (
            <li key={link.hash} className="text-stone-500">
              <Link
                href={link.hash}
                className="hover:text-gray-900"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden">
        <button
          className="p-2"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-px bg-gray-900 my-1"></div>
          <div className="w-6 h-px bg-gray-900 my-1"></div>
          <div className="w-6 h-px bg-gray-900 my-1"></div>
        </button>
      </div>
    </header>
  );
}
