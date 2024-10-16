// src/components/About.js
import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';


export default function Bio() {
    return (
        <section id="moreaboutme" className="px-5 py-20 md:px-10 bg-blossom bg-cover bg-opacity-50 text-center">
            <HeartIcon className="mx-auto inline-block w-10 mb-4 text-rose"/>
            <h1 className='sm:text-4xl text-3xl font-medium title-font mb-5 text-black'>More about me!</h1>
            <h2 className='text-xl'>Hi! I'm Rachel, currently a third year (class of 2025) in the computer science department at Princeton University. I'm a passionate, detail-oriented, hard working college student with an eye for design, a flexible team player with strong written and verbal communication skills, and also a curious, fast learner that strives to solve problems. Right now, I'm looking for any internships that are in the technology or business field.
            <br></br> 
            <br></br>
            Outside of academics, I enjoy completing puzzles, playing games, taking photographs, listening to music 24/7, watching shows, hanging out with people, and honestly just doing whatever seems fun. Let's connect and explore exciting opportunities together!
            </h2>
        </section>
    );
}
