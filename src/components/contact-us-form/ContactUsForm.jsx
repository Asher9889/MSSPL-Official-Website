import "./style.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from 'react-toastify';

/* eslint-disable */
const ContactUsForm = ({ setShowContactForm }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  function validateForm() {
    const formData = new FormData(form.current);
    for (const [key, value] of formData.entries()) {
      if (!value.trim()) {
        return `${key.replace("user_", "").replace("_", " ")} cannot be empty.`;
      }
    }
    return "";
  }

  async function sendEmail(e) {
    // console.log(form);

    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }
    setLoading(true);
    setErrorMessage("");
    await emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setShowSuccessMessage(true); // Show the success message
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  }
  return (
    <>
      <div className="form-container">
        <form ref={form} className="form">
          <span className="heading">Get in touch</span>
          <input
            name="user_name"
            required
            placeholder="Name"
            type="text"
            className="input"
          />
          <input
            name="user_email"
            required
            placeholder="Email"
            id="mail"
            type="email"
            className="input"
          />
          <input
            name="user_phone"
            required
            placeholder="Mobile No."
            type="tel"
            id="Phone"
            className="input"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <textarea
            name="user_message"
            placeholder="Your Message"
            rows="10"
            cols="30"
            id="message"
            className="textarea"
          ></textarea>
          {errorMessage && (
            <p className="text-red-500 text-sm pb-2 poppins-regular">
              {errorMessage}
            </p>
          )}
          <div className="button-container">
            <div
              onClick={sendEmail}
              className="send-button cursor-pointer flex flex-row gap-4 justify-center items-center"
            >
              Send
              {loading && <div className="loader"></div>}
            </div>
            <div
              onClick={() => setShowContactForm(false)}
              className="send-button cursor-pointer"
            >
              Close
            </div>
          </div>
        </form>

        {/* Success Message Popup */}
        {showSuccessMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-blue-950 text-white p-6 rounded-lg shadow-lg text-center w-80">
              <h3 className="text-lg font-bold mb-4">Success!</h3>
              <p className="mb-4">Your request has been successfully sent.</p>
              <button
                onClick={() => {
                  setShowSuccessMessage(false);
                  setShowContactForm(false);
                }}
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
     
    </>
  );
};

export default ContactUsForm;
