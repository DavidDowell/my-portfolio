import { AiFillStepForward } from "react-icons/ai";
import { AiFillStepBackward } from "react-icons/ai";

function Nav() {
  return (
    <header className="flex-column justify-between px-1 font-mono m-5">
      <div className="flex justify-between text-2xl">
        <div className="animate-fade-out-down text-white animation-delay-500">1</div>
        <div className="animate-fade-out-down text-white">0</div>
        <div className="animate-fade-out-down text-white animation-delay-700">1</div>
        <div className="animate-fade-out-down text-white animation-delay-800">0</div>
        <div className="animate-fade-out-down text-white animation-delay-100">1</div>
        <div className="animate-fade-out-down text-white animation-delay-500">0</div>
        <div className="animate-fade-out-down text-white">1</div>
        <div className="animate-fade-out-down text-white animation-delay-700">0</div>
        <div className="animate-fade-out-down text-white animation-delay-800">1</div>
        <div className="animate-fade-out-down text-white animation-delay-100">0</div>
        <div className="animate-fade-out-down text-white animation-delay-500">1</div>
        <div className="animate-fade-out-down text-white ">0</div>
        <div className="animate-fade-out-down text-white animation-delay-700">1</div>
        <div className="animate-fade-out-down text-white animation-delay-500">1</div>
        <div className="animate-fade-out-down text-white">0</div>
        <div className="animate-fade-out-down text-white animation-delay-700">1</div>
        <div className="animate-fade-out-down text-white animation-delay-800">0</div>
        <div className="animate-fade-out-down text-white animation-delay-100">1</div>
        <div className="animate-fade-out-down text-white animation-delay-500">0</div>
        <div className="animate-fade-out-down text-white">1</div>
        <div className="animate-fade-out-down text-white animation-delay-700">0</div>
        <div className="animate-fade-out-down text-white animation-delay-800">1</div>
        <div className="animate-fade-out-down text-white animation-delay-100">0</div>
        <div className="animate-fade-out-down text-white animation-delay-500">1</div>
        <div className="animate-fade-out-down text-white ">0</div>
        <div className="animate-fade-out-down text-white animation-delay-700">1</div>
      </div>
      <h2>
        <a
          className="flex justify-center no-underline hover:text-teal-300 hover:scale-150 text-black text-3xl my-3"
          data-testid="link"
          href="/my-portfolio"
        >
          <AiFillStepForward></AiFillStepForward> David Dowell{" "}
          <AiFillStepBackward></AiFillStepBackward>
        </a>
      </h2>
      <nav className="mt-10">
        <ul className="flex justify-evenly flex-wrap">
          <li className="hover:scale-125">
            <a
              className="no-underline hover:text-teal-300 text-black md:text-4xl text-2xl"
              data-testid="about"
              href="/my-portfolio"
            >
              About Me
            </a>
          </li>
          <li className="mx-2 hover:scale-125">
            <a
              className="no-underline hover:text-teal-300 text-black md:text-4xl text-2xl"
              data-testid="portfolio"
              href="/portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="hover:scale-125">
            <a
              className="no-underline hover:text-teal-300 text-black md:text-4xl text-2xl"
              data-testid="contact"
              href="/contact"
            >
              Contact
            </a>
          </li>
          <li className="hover:scale-125">
            <a
              className="no-underline hover:text-teal-300 text-black md:text-4xl text-2xl"
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
