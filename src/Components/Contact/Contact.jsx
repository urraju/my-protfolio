import React, { useRef } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import TitleContent from "../TitleContent/TitleContent";
import { MdEmail, MdMessage, MdWhatsapp } from "react-icons/md";
import { BsArrowRightShort, BsCursorFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2dfd68",
        "template_xv788er",
        form.current,
        "DvDFpA4IjI_dqo2A6"
      )
      .then(
        (result) => {
            toast.success('Send Message Successfull')
            form.reset()
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="md:p-5 p-2 my-20">
        <Toaster/>
      <TitleContent heading={"Get in Tuch"} subHeading={"Contact me"} />
      <div className="flex mt-20  flex-col md:flex-row justify-center gap-20">
        <div>
          <h1 className="text-center uppercase text-2xl">Talk to me</h1>

           <div className="mt-5 border border-sky-600 text-center border-opacity-40 p-4 rounded-xl">
             <MdEmail className="mx-auto text-4xl text-sky-600"/>
              <p>Email</p>
               <p>user@gmail.com</p>
                <a className="flex items-center gap-1 justify-center " href="mailto:riadhasan680@gmail.com"> Write me <BsArrowRightShort className="text-lg mt-1"/></a>
           </div>
           <div className="mt-5 md:w-72 border border-sky-600 text-center border-opacity-40 p-4 rounded-xl">
             <FaFacebookMessenger className="mx-auto text-4xl text-sky-600"/>
              <p>Messanger</p>
               <p>urrajuahmed</p>
                <a className="flex items-center gap-1 justify-center " href="mailto:riadhasan680@gmail.com"> Write me <BsArrowRightShort className="text-lg mt-1"/></a>
           </div>
           <div className="mt-5 border border-sky-600 text-center border-opacity-40 p-4 rounded-xl">
             <MdWhatsapp className="mx-auto text-4xl text-sky-600"/>
              <p>Whatsapp</p>
               <p>riadhasanraju</p>
                <a className="flex items-center gap-1 justify-center " href="mailto:riadhasan680@gmail.com"> Write me <BsArrowRightShort className="text-lg mt-1"/></a>
           </div>

        </div>
        <div>
          <h1 className="text-center mb-8 text-2xl uppercase">Contact Email</h1>
          <div className="">
            <form ref={form} onSubmit={sendEmail}>
              <div className="border border-gray-500 w-96 mb-4 rounded-lg px-3 py-3">
                {" "}
                <input
                  className="outline-none w-80 text-lg block bg-transparent"
                  type="text"
                  name="user_name"
                  placeholder="Insert Your Name"
                />
              </div>

              <div className="border border-gray-500 relative mb-4 w-96  rounded-lg px-3 py-3">
                <input
                  className="outline-none w-80  text-lg block bg-transparent"
                  type="email"
                  name="user_email"
                  placeholder="Enter Email"
                />
              </div>

              <div className="border border-gray-500 relative mb-4 w-96  rounded-lg px-3 py-3">
                <textarea 
                className="outline-none text-lg w-80 block bg-transparent"
                placeholder="Write Your Message" />
              </div>
              <input className="px-4 p-2 w-full text-gray-300 font-semibold bg-sky-700 uppercase rounded" type="submit" value="Send Message"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
