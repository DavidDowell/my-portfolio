// import { AiFillStepForward } from "react-icons/ai";
// import { AiFillStepBackward } from "react-icons/ai";

function Nav() {
  return (
    <header className="flex-column justify-between px-1 m-5">
      <h2>
        <a
          className="flex justify-center no-underline text-black hover:animate-pulse hover:text-white text-3xl my-3"
          data-testid="link"
          href="/my-portfolio"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 179 198"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1">
              <path
                id="Ellipse-2"
                d="M178 99C178 147.596 138.382 187 89.5 187C40.6175 187 1 147.596 1 99C1 50.4042 40.6175 11 89.5 11C138.382 11 178 50.4042 178 99Z"
                stroke="#212359"
                stroke-width="2"
              />
              <path
                id="Ellipse-10"
                d="M26.5 43.5C26.5 49.0711 22.4247 53.5 17.5 53.5C12.5753 53.5 8.5 49.0711 8.5 43.5C8.5 37.9289 12.5753 33.5 17.5 33.5C22.4247 33.5 26.5 37.9289 26.5 43.5Z"
                fill="#212359"
                stroke="#212359"
              />
              <path
                id="Ellipse-9"
                d="M178.5 142.5C178.5 148.071 174.425 152.5 169.5 152.5C164.575 152.5 160.5 148.071 160.5 142.5C160.5 136.929 164.575 132.5 169.5 132.5C174.425 132.5 178.5 136.929 178.5 142.5Z"
                fill="#212359"
                stroke="#212359"
              />
              <path
                id="Ellipse-8"
                d="M169.5 43.5C169.5 49.0711 165.425 53.5 160.5 53.5C155.575 53.5 151.5 49.0711 151.5 43.5C151.5 37.9289 155.575 33.5 160.5 33.5C165.425 33.5 169.5 37.9289 169.5 43.5Z"
                fill="#212359"
                stroke="#212359"
              />
              <path
                id="Ellipse-7"
                d="M98.5 187.5C98.5 193.071 94.4247 197.5 89.5 197.5C84.5753 197.5 80.5 193.071 80.5 187.5C80.5 181.929 84.5753 177.5 89.5 177.5C94.4247 177.5 98.5 181.929 98.5 187.5Z"
                fill="#212359"
                stroke="#212359"
              />
              <path
                id="Ellipse-6"
                d="M98.5 10.5C98.5 16.0711 94.4247 20.5 89.5 20.5C84.5753 20.5 80.5 16.0711 80.5 10.5C80.5 4.92889 84.5753 0.5 89.5 0.5C94.4247 0.5 98.5 4.92889 98.5 10.5Z"
                fill="#212359"
                stroke="#212359"
              />
              <path
                id="Ellipse-5"
                d="M18.5 142.5C18.5 148.071 14.4247 152.5 9.5 152.5C4.57534 152.5 0.5 148.071 0.5 142.5C0.5 136.929 4.57534 132.5 9.5 132.5C14.4247 132.5 18.5 136.929 18.5 142.5Z"
                fill="#212359"
                stroke="#212359"
              />
              <path
                id="D"
                d="M87.5 111H78.5227V81.9091H87.8977C90.7197 81.9091 93.1345 82.4915 95.142 83.6562C97.1496 84.8116 98.6884 86.4735 99.7585 88.642C100.829 90.8011 101.364 93.3864 101.364 96.3977C101.364 99.428 100.824 102.037 99.7443 104.224C98.6648 106.402 97.0928 108.079 95.0284 109.253C92.964 110.418 90.4545 111 87.5 111ZM82.0455 107.875H87.2727C89.678 107.875 91.6714 107.411 93.2528 106.483C94.8343 105.555 96.0133 104.234 96.7898 102.52C97.5663 100.806 97.9545 98.7652 97.9545 96.3977C97.9545 94.0492 97.571 92.0275 96.804 90.3324C96.0369 88.6278 94.8911 87.321 93.3665 86.4119C91.8419 85.4934 89.9432 85.0341 87.6705 85.0341H82.0455V107.875Z"
                fill="#212359"
              />
              <path
                id="Ellipse-1"
                d="M142 99C142 129.41 118.237 154 89 154C59.7629 154 36 129.41 36 99C36 68.5897 59.7629 44 89 44C118.237 44 142 68.5897 142 99Z"
                stroke="#212359"
                stroke-width="2"
              />
              <path
                id="Ellipse-4"
                d="M139.5 131.5C139.5 137.071 135.425 141.5 130.5 141.5C125.575 141.5 121.5 137.071 121.5 131.5C121.5 125.929 125.575 121.5 130.5 121.5C135.425 121.5 139.5 125.929 139.5 131.5Z"
                fill="#212359"
                stroke="#212359"
              />
              <path
                id="Ellipse-3"
                d="M61.5 61.5C61.5 67.0711 57.4247 71.5 52.5 71.5C47.5753 71.5 43.5 67.0711 43.5 61.5C43.5 55.9289 47.5753 51.5 52.5 51.5C57.4247 51.5 61.5 55.9289 61.5 61.5Z"
                fill="#212359"
                stroke="#212359"
              />
            </g>
          </svg>
        </a>
      </h2>
      <nav className="mt-10">
        <ul className="flex justify-evenly flex-wrap">
          <li className="hover:scale-125">
            <a
              className="no-underline text-black hover:text-white md:text-4xl text-2xl"
              data-testid="about"
              href="/my-portfolio"
            >
              About Me
            </a>
          </li>
          <li className="mx-2 hover:scale-125">
            <a
              className="no-underline text-black hover:text-white md:text-4xl text-2xl"
              data-testid="portfolio"
              href="/my-portfolio/portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="hover:scale-125">
            <a
              className="no-underline text-black hover:text-white md:text-4xl text-2xl"
              data-testid="contact"
              href="/my-portfolio/contact"
            >
              Contact
            </a>
          </li>
          <li className="hover:scale-125">
            <a
              className="no-underline text-black hover:text-white md:text-4xl text-2xl"
              data-testid="resume"
              href="/my-portfolio/resume"
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
