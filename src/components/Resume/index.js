import HTML from "../../assets/tech/html.png";
import CSS from "../../assets/tech/css-3.png";
import GitHub from "../../assets/tech/github.png";
import JS from "../../assets/tech/js.png";
import React from "../../assets/tech/atom.png";
import Mongo from "../../assets/tech/mongo.png";
import Node from "../../assets/tech/nodejs.png";

const Resume = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <a href={require("../../assets/pdf/DD-resume.pdf")} download>
          <button className="text-white hover:text-white border-2 hover:bg-[#212359] hover:border-[#212359] px-4 py-3 mx-auto flex items-center">
            Download My Resume
          </button>
        </a>
      </div>
      <div className="w-full h-screen text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full mt-5">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="shadow-md bg-slate-700 shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto p-2" src={HTML} alt="HTML" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md bg-slate-700 shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto p-2" src={CSS} alt="HTML" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md bg-slate-700 shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto p-2" src={JS} alt="HTML" />
              <p className="my-4">Javascript</p>
            </div>
            <div className="shadow-md bg-slate-700 shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto p-2" src={Mongo} alt="HTML" />
              <p className="my-4">Mongo</p>
            </div>
            <div className="shadow-md bg-slate-700 shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto p-2" src={Node} alt="HTML" />
              <p className="my-4">Node</p>
            </div>
            <div className="shadow-md bg-slate-700 shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto p-2" src={React} alt="HTML" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md bg-slate-700 shadow-[#040c16] hover:scale-110 duration-500 col-start-2 col-end-3">
              <img className="w-20 mx-auto p-2" src={GitHub} alt="HTML" />
              <p className="my-4">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
