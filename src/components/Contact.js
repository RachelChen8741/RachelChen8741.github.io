import React from "react";
import { IdentificationIcon } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";


export default function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center">
        <div className="text-center"> {/* Add a wrapper div for centering */}
          <IdentificationIcon className="mx-auto inline-block w-10 mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Contact me!
          </h1>
          <h2 className="sm:text-2xl text-lg font-medium title-font text-rose mb-4">
            <InboxIcon className="mx-auto inline-block w-8 mb-2"/> Email: <a href = "mailto: rc7210@princeton.edu" className="underline">rc7210@princeton.edu</a>
            <br></br>
            <PhoneIcon className="mx-auto inline-block w-7" /> Phone Number: <a href="tel: 8563836517" className="underline">(856)-383-6517</a>
          </h2>
        </div>
      </div>
    </section>
  );
}
