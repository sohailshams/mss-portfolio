import Footer from './Footer';
import Nav from './Nav';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { useHistory } from 'react-router-dom';

function Contact() {
  const history = useHistory();
  const [toSend, setToSend] = useState({
    full_name: '',
    email: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_quv2dpp',
      'template_ku7hloo',
      toSend,
      'user_szOhPSLxA2EXG4yhRHbbV'
    )
      .then((response) => {
        if (response.status === 200) {
          setToSend({ full_name: '', email: '', message: '' });
          history.push('/');
        } else alert('Please try again later');
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const setClear = () => {
    setToSend({ full_name: '', email: '', message: '' });
  };

  return (
    <div>
      <Nav />
      <div className="w-10/12 mx-auto">
        <h2 className="text-center my-4 text-4xl font-semibold">Contact</h2>
        <h3 className="text-center font-semibold mb-2">
          Let's bring ideas into reality
        </h3>
        <form onSubmit={onSubmit} className="shadow-2xl mb-6">
          <div className="mt-8 max-w-md mx-auto px-4">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
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
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
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
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  rows="3"
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
}

export default Contact;
