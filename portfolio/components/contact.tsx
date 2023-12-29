import React from "react";

export default function Contact() {
  return (
    <div
      className="flex items-center justify-center w-full md:w-2/3 h-full md:h-2/3 mt-5 bg-white rounded-2xl flex-col p-8 md:p-32 drop-shadow-md"
      id="projects"
    >
      <p>Please contact me directly at </p>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
