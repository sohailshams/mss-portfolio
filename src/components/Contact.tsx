import Footer from "./Footer";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_USER_ID,
  } = import.meta.env;
  const navigate = useNavigate();
  const [toSend, setToSend] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        if (response.status === 200) {
          setToSend({ full_name: "", email: "", message: "" });
          alert("Email sent successfully");
          navigate("/");
        } else alert("Please try again later");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const setClear = () => {
    setToSend({ full_name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="w-10/12 mx-auto">
        <h2 className="text-center my-4 text-4xl font-semibold">Contact</h2>
        <h3 className="text-center font-semibold mb-2">
          Let's bring ideas into reality
        </h3>
        <form ref={form} onSubmit={onSubmit} className="shadow-2xl mb-6">
          <div className="mt-8 max-w-md mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 py-20">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input
                  type="text"
                  className="mt-1 w-full py-2 pl-2 h-10 rounded-md bg-gray-100 focus:border-[.5px] focus:border-black focus:bg-white outline-none"
                  placeholder="Full name"
                  required
                  name="full_name"
                  value={toSend.full_name}
                  onChange={handleChange}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  type="email"
                  className="mt-1 w-full py-2 pl-2 h-10 rounded-md bg-gray-100 focus:border-[.5px] focus:border-black focus:bg-white outline-none"
                  placeholder="email@example.com"
                  required
                  name="email"
                  value={toSend.email}
                  onChange={handleChange}
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Message</span>
                <textarea
                  className="mt-1 pl-1 pt-1 h-28 block w-full rounded-md bg-gray-100 focus:border-[.5px] focus:border-black focus:bg-white outline-none"
                  rows={3}
                  required
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                ></textarea>
              </label>
              <div className="block space-x-2">
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800 px-6 py-2 shadow-md mb-6 font-semibold hover:shadow-2xl active:scale-90 transition duration-500"
                >
                  Send
                </button>
                <button
                  className="bg-black text-white hover:bg-gray-800 px-6 py-2 shadow-md mb-6 font-semibold hover:shadow-2xl active:scale-90 transition duration-500"
                  onClick={setClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
