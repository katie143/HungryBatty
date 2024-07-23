import "../app/globals.css";

import HeaderName from "./HeaderName";
import Nav from "./Nav";
import Captcha from "./captcha";

export default function Contact() {
  return (
    <>
      <main>
        <div className="relative flex items-center mb-20">
          <HeaderName />
          <Nav />
        </div>
        <div className="relative flex">
          <div className="mr-10 w-4/12">
            <h2 className="font-serif text-6xl mb-10 font-bold leading-snug">
              Contact
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra, velit in tristique pharetra, erat massa convallis nisl,
              vitae eleifend tellus enim sit amet libero. Cras rutrum aliquet
              molestie.
            </p>
          </div>
          <div className="w-8/12">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
              <Captcha />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
