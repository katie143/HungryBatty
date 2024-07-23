import "../app/globals.css";

import HeaderName from "./HeaderName";
import Nav from "./Nav";

export default function Projects() {
  const projects = [
    {
      title: "Fashion Show - WHBM",
      image: "../fashionShowWHBM.png",
    },
    {
      title: "Superbowl Bingo - WHBM",
      image: "../whbmsuperbowlbingo.png",
    },
    {
      title: "Summer It List - WHBM",
      image: "../SummerItList.png",
    },
    {
      title: "Hungry Batty",
      image: "../hungryBatty.png",
    },
    {
      title: "Project 1",
      image: "https://picsum.photos/id/24/5000/3313",
    },
    {
      title: "Project 2",
      image: "https://picsum.photos/id/23/5000/3332",
    },
  ];
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
              Projects
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <div className="bg-white p-2">
              <img
                className="h-72 w-full object-cover"
                src={project.image}
                alt="image"
              />
              <p className="text-center">{project.title}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
