import React, { useState, useRef } from "react";

function Contact() {
  // const FORM_ENDPOINT =
  //   "https://public.herotofu.com/v1/779eaab0-55c8-11ec-85ac-d56a41b9ab46";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    setIsSubmitted(true);
    formRef.current.reset();
  };
  return (
    <section className="min-h-[calc(100vh-21.7px)] flex max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-center w-full pt-20 gap-5 px-2">
        <div className="flex-1">
          <h2 className="text-2xl text-body-color">Contact Me</h2>
          <p className="mb-5 text-xl text-text-color-light">
            I'd love to hear from you
          </p>
          <p className="mb-5 text-xl text-text-color-light">
            Drop me an email and I will get back to you, or find me on social
            media.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Elshater6498"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-text-color-light transition duration-300 hover:text-body-color"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mostafa-elshater-4727111a9/"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-text-color-light transition duration-300 hover:text-body-color"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <form
          className="flex flex-col gap-4 p-8 bg-[#333] rounded-md flex-1"
          method="POST"
          // action={FORM_ENDPOINT}
          onSubmit={(e) => handleSubmit(e)}
          target="_blank"
          ref={formRef}
        >
          <label htmlFor="name" className="flex flex-col gap-2 text-body-color">
            Name
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-md border-none outline-none p-2 bg-[#222] text-[#fff] focus:outline-1 focus:outline-first-color"
              required
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-2 text-body-color">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-md border-none outline-none p-2 bg-[#222] text-[#fff] focus:outline-1 focus:outline-first-color"
              required
            />
          </label>
          <label htmlFor="message" className="flex flex-col gap-2 text-body-color">
            Message
            <textarea
              className="rounded-md border-none outline-none p-2 bg-[#222] text-[#fff] focus:outline-1 focus:outline-first-color "
              name="message"
              id="message"
              cols="30"
              rows="7"
              required
            ></textarea>
          </label>
          {isSubmitted ? (
            <h4 className="text-body-color cursor-pointer bg-button-color py-5 px-8 transition duration-200 hover:bg-button-color-alt rounded-md w-fit">
              Thank You.
            </h4>
          ) : (
            <button className="text-body-color cursor-pointer bg-button-color py-5 px-8 transition duration-200 hover:bg-button-color-alt rounded-md w-fit">
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
