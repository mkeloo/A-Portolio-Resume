import React, { useState } from 'react';
import { BiSmile, BiWinkSmile } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const [smile, setSmile] = useState(false);

  // change smile state
  const changeSmile = () => {
    setSmile(!smile);
  };

  // email js functionality
  const form = useRef();
  const [done, setDone] = React.useState(false);
  const [value, setValue] = React.useState();

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
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        // method="POST"
        // action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="border-2 rounded-lg p-3 flex bg-[#ccd6f6]  mb-4"
          type="text"
          name="user_name"
          placeholder="Name"
          value={value}
        />
        <input
          className="border-2 rounded-lg p-3 flex bg-[#ccd6f6]  mb-4"
          type="email"
          name="user_email"
          placeholder="Email"
          value={value}
        />
        <textarea
          className="bg-[#ccd6f6] border-2 rounded-lg p-3 flex border-gray-300 mb-4"
          name="message"
          rows="10"
          placeholder="Message"
          value={value}
        ></textarea>
        <button
          onClick={changeSmile}
          className="text-white group md:text-lg border-4 px-5 py-4 my-2 flex items-center justify-center hover:bg-pink-600 hover:font-bold hover:border-pink-900 duration-300 hover:scale-110 rounded-lg"
        >
          Let's Collaborate
          <span className="duration-300">
            {!smile ? (
              <BiSmile className="ml-3" size={35} />
            ) : (
              <BiWinkSmile className="ml-3" size={35} />
            )}
          </span>
        </button>
        <input type="submit" />
        <span
          className={
            !done ? 'text-white group md:text-lg border-4 px-5 py-4 my-2' : ' '
          }
        >
          {!done && 'Thanks for contacting me!'}
        </span>
      </form>
    </div>
  );
};

export default Contact;
