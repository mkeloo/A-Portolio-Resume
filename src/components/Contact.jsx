import React, { useState } from 'react';
import { BiSmile, BiWinkSmile } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const [smile, setSmile] = useState(false);

  // email js functionality
  const form = useRef();
  const [done, setDone] = useState(false);
  const [value, setValue] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_eejk77l',
        'template_xdszqom',
        form.current,
        'nc_Lw_9AeEsroJ6_L'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setValue('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-7 group">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-1 mt-5">
            Please submit the form below or shoot me an email -
            <span className="link link-underline link-underline-black duration-300 group-hover:text-cyan-400 text-lg">
              mokshkeloo@gmail.com
            </span>
          </p>
        </div>
        <input
          className="border-2 rounded-lg p-3 flex bg-[#ccd6f6]  mb-4"
          type="text"
          name="user_name"
          value={value}
          placeholder="Name"
        />
        <input
          className="border-2 rounded-lg p-3 flex bg-[#ccd6f6]  mb-4"
          type="email"
          name="user_email"
          value={value}
          placeholder="Email"
        />
        <textarea
          className="bg-[#ccd6f6] border-2 rounded-lg p-3 flex border-gray-300 mb-4"
          name="message"
          rows="8"
          value={value}
          placeholder="Message"
        ></textarea>
        <button
          // Change smile state on Hover
          onMouseEnter={() => setSmile(true)}
          onMouseLeave={() => setSmile(false)}
          type="submit"
          value="Send"
          onClick={() => setDone(true)}
          className="text-white group md:text-lg border-4 px-5 py-4 my-2 flex items-center justify-center hover:bg-pink-600 hover:font-bold hover:border-pink-900 duration-300 hover:scale-110 rounded-lg"
        >
          Let's Collaborate
          <span className="duration-300">
            {smile ? (
              <BiWinkSmile className="ml-3" size={35} />
            ) : (
              <BiSmile className="ml-3" size={35} />
            )}
          </span>
        </button>

        <span
          className={
            done
              ? 'text-white group md:text-lg rounded-full flex justify-center  border-4 px-5 py-4 my-2 duration-300'
              : ' '
          }
        >
          {done ? 'Thank you for your message!' : ''}
          {done && setTimeout(() => setDone(false), 5000)}
        </span>
      </form>
    </div>
  );
};

export default Contact;
