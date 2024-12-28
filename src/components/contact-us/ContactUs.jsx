import { useRef, useState } from "react";
import { motion } from "framer-motion"; // For animations
import ContentWrapper from "../contentWrapper/ContentWrapper";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  
  const [loading, setLoading] = useState(false);
  

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const formRef = useRef();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          
          setLoading(false);
          setShowSuccessMessage(true);
          formRef.current.reset(); 


        },
        (error) => {
          setLoading(false);
          alert("Form submission Failed!");
          console.log(error.message)
        }
      );
   
  };

  return (
    <ContentWrapper>
      <div className="min-h-screen  py-16 px-4 text-[--main-text-color] ">
        {/* Header Section */}
        <motion.header
          className="text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-4 poppins-bold text-[--main-text-color]"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Get In Touch With Us
          </motion.h1>
          <p className="text-lg poppins-regular text-[--main-text-color]">
            We are here to assist you. Drop us a message and we will get back
            to you.
          </p>
        </motion.header>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border-[2px] border-zinc-200">
          <form ref={formRef} onSubmit={handleSubmit}>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div>
                <label className="block text-blue-700 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                 
                  required
                  className="mt-2 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-blue-700 font-semibold">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  
                  required
                  className="mt-2 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-blue-700 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  name="user_phone"
                  
                  required
                  className="mt-2 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Enter your phone number"
                  pattern="^\+?\d{1,4}?[ -]?\(?\d{1,3}?\)?[ -]?\d{1,4}[ -]?\d{1,4}$" // Basic pattern for phone numbers
                />
              </div>

              <div>
                <label className="block text-blue-700 font-semibold">Message</label>
                <textarea
                  name="user_message"
                
                  required
                  className="mt-2 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  rows="5"
                  placeholder="Write your message"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                onSubmit={handleSubmit}
                className="flex flex-row items-center justify-center gap-4 w-full py-3 bg-blue-600 text-white rounded-lg mt-6 hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

                Submit Message
                {loading && <div className="loader"></div>}
              </motion.button>
            </motion.div>
          </form>

        </div>
         {/* Success Message Popup */}
         {showSuccessMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-blue-950 text-white p-6 rounded-lg shadow-lg text-center w-80">
              <h3 className="text-lg font-bold mb-4">Success!</h3>
              <p className="mb-4 ">Your request has been successfully sent.</p>
              <button
                onClick={() => {
                  setShowSuccessMessage(false);
                }}
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Footer Section */}
        <footer className="mt-16 text-center  text-[--main-text-color]">
          <p>Feel free to contact us anytime!</p>
          <p className="mt-4">
            <span className="block text-lg">Email: </span>
            <a href="mailto:msspl.mspl@gmail.com" className="underline text-blue-300">
            msspl.mspl@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </ContentWrapper>
  );
};

export default ContactUs;
