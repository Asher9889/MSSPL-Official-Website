import { ContentWrapper } from "../../components";

const ContactUs = () => {
  return (
    <>
      <div className="w-full py-32 bg-red-500 bg-zinc-200">
        <ContentWrapper>
          <div className="">
            <h1 className="text-center text-[3rem] poppins-bold">LET&apos;S TALK</h1>
            <form className="mt-10 flex flex-col gap-12">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                    <span className="flex-1 flex flex-col gap-4">
                        <label htmlFor="name">YOUR NAME*</label>
                        <input required className="w-full py-6 px-4 outline-none rounded-sm" type="text" id="name"/>
                    </span>
                    <span className="flex-1 flex flex-col gap-4">
                        <label htmlFor="email">YOUR EMAIL*</label>
                        <input required className="w-full py-6 px-4 outline-none rounded-sm" type="email" id="email"/>
                    </span>
                    
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="project">PLEASE TELL A BIT ABOUT YOURSELF & YOUR PROJECT*</label>
                    <textarea required className="w-full  outline-0 px-4 py-6 rounded-md" rows={6} name="" id="project"></textarea>
                </div>
                <button className="w-full md:w-[40vw] bg-black text-white text-center py-6 text-lg md:text-xl">Send Contact Request Now</button>

            </form>

            {/* <div className=" mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    rows="4"
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default ContactUs;
