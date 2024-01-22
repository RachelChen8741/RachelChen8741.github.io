// src/components/Projects.js

import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <CursorArrowRaysIcon className="mx-auto inline-block w-10 mb-4 text-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-white">
            Projects
          </h1>
          <p >
            These are a few of my projects!
            Hover over them to learn more.
          </p>
        </div>
        <div className="flex flex-wrap -m-7">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target={project.target}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center opacity-100 hover:opacity-0"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-95">
                  <h2 className="tracking-widest text-sm title-font font-medium text-rose mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}