import React from "react";

export default function Navbar() {
    return (
        <footer className="text-white bg-rose">
            <div class="container mx-auto text-center p-5">
                <p>&copy; 2024 Rachel Chen</p>
                <p>Contact: <a href="mailto:rc7210@princeton.edu" className="underline">rc7210@princeton.edu</a> | <a href="tel:8563836517" className="underline">(856) 383-6517</a></p>
                <p>Powered by React and Tailwind CSS</p>
            </div>        
        </footer>
    )
}