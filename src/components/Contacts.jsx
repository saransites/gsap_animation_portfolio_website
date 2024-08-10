import React, { forwardRef } from "react";

const Contacts = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="animate grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-t from-[#cf586023] to-[#be9df0] rounded-lg p-4"
    >
      <h1 className="[font-size:clamp(1.5rem,8vw,3.5rem)] font-bold md:leading-loose text-[#3a3a3a]">
        Let's Make Something Better Together...
      </h1>
      <div>
        <div className="">
          <label className="text-[#3a3a3a] [font-size:clamp(0.7rem,3vw,1rem)] mb-2 block" htmlFor="email">
            Email
          </label>
          <input
            className="border block w-full border-[#414141] px-4 py-2 rounded-md bg-transparent focus:border-none focus:outline-none"
            required
            name="email"
            id="email"
            type="text"
          ></input>
        </div>
        <div className="">
          <label htmlFor="textarea" className="[font-size:clamp(0.7rem,3vw,1rem)] block my-2 text-[#3a3a3a]">
            Message
          </label>
          <textarea
            className="block w-full bg-transparent focus:border-none focus:outline-none border border-[#414141] px-4 py-2 rounded-md"
            required
            cols="50"
            rows="10"
            id="textarea"
            name="textarea"
          ></textarea>
        </div>
        <button type="submit" className="bg-sky-500 p-2 my-2 px-6 rounded">
          Submit
        </button>
      </div>
    </footer>
  );
});

export default Contacts;
