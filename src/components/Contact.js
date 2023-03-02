import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-full w-full bg-[#0a192f] flex justify-center items-center p-4 pt-30 "
    >
      <form
        method="POST"
        action="https://getform.io/f/2ef5da98-53ba-4ca6-a583-22a43f06c1e3"
        className="flex flex-col max-w-[600px] w-full mt-"
      >
        <div className="pb-8 mt-36">
          <p className=" text-6xl inline border-b-4 text-blue-600">Contact</p>
          <p className="text-white py-4 text-2xl">
            You can contact me ,or send me an e-mail v2stojanovski@yahoo.com
          </p>
        </div>
        <input type="text" placeholder="name" name="name" />
        <input
          className="my-4 p-2"
          type="e-mail"
          placeholder="e-mail"
          name="email"
        />
        <textarea
          className="p-2"
          rows={10}
          name="message"
          placeholder="message"
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-3 py-3 my-8 mx-auto flex items-center">
          Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
