import "../app/globals.css";

import HeaderName from "./HeaderName";
import Nav from "./Nav";

export default function About() {
  return (
    <>
      <main>
        <div className="relative flex items-center mb-20">
          <HeaderName />
          <Nav />
        </div>
        <div className="relative flex">
          <div className="mr-10 w-5/12">
            <img src="../Katie_Profile_Pic.jpg" alt="image" />
          </div>
          <div className="w-7/12">
            <h2 className="font-serif text-6xl mb-10 font-bold leading-snug">
              About Me
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra, velit in tristique pharetra, erat massa convallis nisl,
              vitae eleifend tellus enim sit amet libero. Cras rutrum aliquet
              molestie.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
