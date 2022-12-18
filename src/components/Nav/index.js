import React, { useEffect } from "react";
import { AiFillStepForward } from "react-icons/ai";
import { AiFillStepBackward } from "react-icons/ai";

function Nav() {
  return (
    <header className="flex-column justify-between px-1 font-mono dark">
      <h2>
        <a
          className="flex justify-center no-underline hover:underline text-black my-3"
          data-testid="link"
          href="/"
        >
          <AiFillStepForward></AiFillStepForward> David Dowell{" "}
          <AiFillStepBackward></AiFillStepBackward>
        </a>
      </h2>
      <nav className="mt-10">
        <ul className="flex justify-evenly">
          <li className="navActive">
            <a
              className="no-underline hover:underline text-black"
              data-testid="about"
              href="/my-portfolio"
            >
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a
              className="no-underline hover:underline text-black"
              data-testid="portfolio"
              href="/portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="no-underline hover:underline text-black"
              data-testid="contact"
              href="/contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="no-underline hover:underline text-black"
              data-testid="resume"
              href="/resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
