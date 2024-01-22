// src/components/About.js
import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";


export default function About() {
    return (
        <section id="about" className="px-5 py-20 md:px-10 bg-blossom bg-cover bg-opacity-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:flex-grow md:w-1/2 sm:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-h-screen sm:max-h-full">
                    <h1 className="title-font sm:text-7xl text-5xl mb-4 font-medium text-black">
                        Hi, I'm Rachel!
                        <br />
                    </h1>
                    <h2 className="leading-relaxed text-3xl mb-2">I'm currently a junior in the computer science department at Princeton University.</h2>

                    <div className="leading-relaxed h-40 overflow-hidden mb-4  sm:mb-1 text-3xl text-gray-500">
                        <TypewriterComponent
                            options={{
                                strings: [" > I'm a passionate, detail-oriented, hardworking college student with an eye for design.", " > I'm a flexible team player with strong written and verbal communication skills.", " > I'm a curious, fast learner that strives to solve problems."],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                            style={{ color: 'gray' }}
                        ></TypewriterComponent>
                    </div>


                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-rose border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg">
                            Contact me!
                        </a>
                        <a
                            href="https://docs.google.com/document/d/1s7taYSwP5Z67xUt3pnEVU7es_5zxXGP-oslMv9oH_rI/edit?usp=sharing"
                            target="_blank"
                            className="ml-4 inline-flex bg-pink-300 border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 text-pink-800 rounded text-lg">
                            <ArrowUpOnSquareIcon className="mx-auto inline-block w-7 mr-1"></ArrowUpOnSquareIcon> Resume
                        </a>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-full w-5/6 md:mb-10">
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
