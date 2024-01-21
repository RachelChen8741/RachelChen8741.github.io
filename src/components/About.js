// src/components/About.js
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Rachel!
          </h1>
          <h2 className="mb-8 leading-relaxed text-3xl">
          <div className=''>
            <TypewriterComponent
              options={{
                strings:["I'm a passionate, detail-oriented, hard working college student with an eye for design.", "I'm a flexible team player with strong written and verbal communication skills.", "I'm a curious, fast learner that strives to solve problems."],
                autoStart: true,
                loop:true,
                delay:50
              }}
              ></TypewriterComponent>
              
          </div>
          </h2>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-rose border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg">
              Contact me!
            </a>
            <a
              href="#projects"
              className=" ml-4 inline-flex bg-pink-300 border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 text-pink-800 rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./headshot.jpg"
          />
        </div>
      </div>
    </section>
  );
}
