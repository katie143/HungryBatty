import "../app/globals.css";

import HeaderName from "./HeaderName";
import Nav from "./Nav";

export default function Page() {
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
              Design Styling
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra, velit in tristique pharetra, erat massa convallis nisl,
              vitae eleifend tellus enim sit amet libero. Cras rutrum aliquet
              molestie.
            </p>
          </div>
          <div className="w-8/12">
            <img src="https://picsum.photos/id/25/5000/3333" alt="image" />
          </div>
        </div>
      </main>
    </>
  );
}
