// src/components/Projects.js

import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { extracurriculars } from "../data";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";


export default function Extracurriculars() {
    return (
        <section id="extracurriculars" className="text-black bg-pink-200 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <StarIcon className="mx-auto inline-block w-10 mb-4 text-rose" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
                        Extracurriculars
                    </h1>
                    <br></br>
                    <p>
                        Here's what I'm involved in on campus!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {extracurriculars.map((extracurricular, index) => (
                        <div key={index} className="bg-stone-900 h-100 m-2 p-4 border border-white border-solid rounded-md">
                            <p className="text-rose text-xl text-center font-semibold">{extracurricular.title}</p>
                            <p className="text-white text-lg text-center">{extracurricular.organization}</p>
                            <br></br>
                            <p className="text-white text-md text-center">{extracurricular.description}</p>
                        </div>
                    ))}
                </div>
                <br></br>
                <a
                    href="https://drive.google.com/drive/folders/1dkV4_C5OwI5Acb1UqO3dfohjl8Cx7Vea?usp=drive_link"
                    target="_blank"
                    className="text-center inline-flex bg-rose border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 text-white rounded text-lg">
                    <ArrowUpOnSquareIcon className="mx-auto inline-block w-7 mr-1"></ArrowUpOnSquareIcon> Here are some of my designs!
                </a>
            </div>
        </section>
    );
}
