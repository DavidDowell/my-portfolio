import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const checkInfo = (e) => {
    e.preventDefault();
    let userName = document.getElementById("user_name").value;
    let userEmail = document.getElementById("user_email").value;
    let userMessage = document.getElementById("user_message").value;
    if (!userName) {
      Swal.fire({
        icon: "warning",
        title: "Must have a Name!",
      });
      console.log("Must have a Name!");
    } else if (!userEmail) {
      Swal.fire({
        icon: "warning",
        title: "Must have a valid Email!",
      });
      console.log("Must have an Email!");
    } else if (!userMessage) {
      Swal.fire({
        icon: "warning",
        title: "Must include a Message!",
      });
      console.log("Must have a message!");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully",
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Something went wrong :sweat_smile:",
              text: error.text,
            });
          }
        );
        }
  };
  return (
        <div>
          <div className="contact-div">
            <h1 className="text-5xl text-black">Contact Form</h1>
            <form className="cf" ref={form} onSubmit={checkInfo}>
              <div className="m-2 ">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  id="user_name"
                  className="user_name mb-2 focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  name="user_email"
                  id="user_email"
                  className="user_email focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                />
              </div>
              <div className="m-2">
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  id="user_message"
                  className="user_message focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                ></textarea>
              </div>
              <input type="submit" value="Submit" id="input-submit" />
            </form>
          </div>
        </div>
      );
};
export default Contact;
