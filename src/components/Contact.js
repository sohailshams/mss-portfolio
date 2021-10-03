import Footer from './Footer';
import Nav from './Nav';

function Contact() {
  return (
    <div>
      <Nav />
      <div className="w-10/12 mx-auto">
        <h2 className="text-center my-4 text-4xl font-semibold">Contact</h2>
        <h3 className="text-center font-semibold mb-2">
          Let's bring ideas into reality
        </h3>
        <form action="" className="shadow-2xl mb-6">
          <div className="mt-8 max-w-md mx-auto px-4">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Full name"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="email@example.com"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Message</span>
                <textarea
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  rows="3"
                ></textarea>
              </label>
              <div className="block">
                <button className="bg-black text-white hover:bg-gray-800 px-10 py-2 shadow-md mb-6 font-bold hover:shadow-2xl active:scale-90 transition duration-500">
                  Send
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
