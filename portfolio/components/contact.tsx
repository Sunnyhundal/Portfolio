import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { Span } from "next/dist/trace";

export default function Contact() {
  return (
    <div
      className="flex items-center justify-center w-full md:w-2/3 h-full md:h-2/3 mt-5 bg-white rounded-2xl flex-col p-8 md:p-32 shadow-md mb-5"
      id="contact"
    >
      <p className="text-md text-gray-500">
        Please contact me directly at contact@sunnyhundal.ca or use the form
        below.
      </p>

      <form className="mt-4">
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          type="email"
          placeholder="Enter your email"
        />
        <textarea
          className="mt-2 border border-gray-300 rounded-md p-2 w-full h-24"
          placeholder="Enter your message"
        ></textarea>
        <button
          className="group flex mt-4 text-xs bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit{" "}
          <span className="ml-2">
            <FontAwesomeIcon
              icon={faPlane}
              className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 w-4 h-4"
            />
          </span>
        </button>
      </form>
    </div>
  );
}
