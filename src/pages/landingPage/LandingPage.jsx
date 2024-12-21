import { motion } from "framer-motion";
import trident from "../../assets/trident.png";
import { ContactUsForm, LogoCorousel } from "../../components";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useContext } from "react";
import { ContactFormContext } from "../../utils/context/context";


const LandingPage = () => {


  const {showContactForm, setShowContactForm} = useContext(ContactFormContext)

  const formAnimation = {
    hidden: { opacity: 0, y: -50 },  // Initial state (invisible and above the screen)
    visible: { opacity: 1, y: 0 },   // Final state (fully visible and centered)
  };

  return (
    <section className="w-full relative">
      <img
        className="absolute top-0 right-4 w-60 md:w-[30rem] md:right-14 md:scale-[1.1] lg:top-8"
        src={trident}
        alt="bg"
      />
      <ContentWrapper>
        <section className="w-full ">
          <div className="w-full flex flex-col justify-center items-center pt-[10%] gap-3 lg:gap-5">
            <h1 className=" text-center text-gradient poppins-semibold text-[2.5rem] md:text-[3.5rem] ">
              Multifacet Software Systems Pvt. Ltd.
            </h1>
            <h2 className="poppins-regular text-[1.6rem] lg:text-3xl text-[--text-builtIt] text-center">
              <p className=" poppins-regular text-center">Incubated at IIT Kanpur</p> You Think it. We Build it.
            </h2>
            <button
              className=" mt-6 text-xl lg:text-2xl cursor-pointer px-6 py-2 rounded-md text-white poppins-regular bg-[--button-bg-color] hover:bg-[--button-bg-hover-color] transition-all duration-400"
              onClick={() => setShowContactForm(!showContactForm)} // Toggle form visibility
            >
              Get in touch
            </button>
          </div>
        </section>
      </ContentWrapper>
      <LogoCorousel />

      {/* Apply Framer Motion for the Contact Us Form with Centering */}
      {showContactForm && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={formAnimation}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
        >
          <div className=" rounded-lg shadow-lg max-w-lg w-full">
            <ContactUsForm  setShowContactForm ={setShowContactForm}/>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default LandingPage;
