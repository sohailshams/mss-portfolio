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
          <div class="mt-8 max-w-md mx-auto px-4">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Full name"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  type="email"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="email@example.com"
                />
              </label>

              <label class="block">
                <span class="text-gray-700">Message</span>
                <textarea
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  rows="3"
                ></textarea>
              </label>
              <div class="block">
                <button>Send</button>
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
