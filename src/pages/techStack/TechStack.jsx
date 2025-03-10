import { useState } from "react";
import { ContentWrapper } from "../../components";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { oracle, sql, mongoDB, redis, msAzure, msSQL, flutter, reactNative, kotlin, nodeJS, dotNetCore, dotNet, aspDotNetCore, angular, react, bootstrap, typeScript, javaScript, python  } from "../../utils/links/links";

const buttons = ["Development Framework", "Web Development", "Languages", "Mobile Development", "Database" ]

const frameWork = [dotNet, dotNetCore, nodeJS];

const webDev = [aspDotNetCore, angular, react, bootstrap];

const languages = [typeScript, javaScript, python];

const mobile = [flutter, reactNative, kotlin];

const database = [msSQL, msAzure, redis, mongoDB, sql, oracle];

const TechStack = () => {


  const [activeSection, setActiveSection] = useState(buttons[0]);

  const sections = {
    "Development Framework": frameWork,
    "Web Development": webDev,
    "Languages": languages,
    "Mobile Development": mobile,
    "Database": database,
  };


  const handleActiveSection = (btn) => setActiveSection(btn);

  // For Framer Motion
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.2,    // Triggers when 20% of the element is in view
  });
  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and faded
    visible: { opacity: 1, y: 0 }, // End in place and fully visible
  };

  return (
    <motion.section ref={ref} variants={headingVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    transition={{
      duration: 1, // Animation duration
      ease: "easeOut", // Smooth easing
    }} className="w-full bg-green-950 mt-10 py-20 pb-40 ">
      <ContentWrapper>
        <h1 className="poppins-semibold text-white text-[2rem] md:text-[3rem] mb-10">
          Our Tech Stack
        </h1>

        {/* Buttons */}
        <div className="w-full mb-20 overflow-x-auto ">
          <ul className="w-full flex flex-row  lg:justify-start items-center gap-6 text-white text-lg">
            {buttons.map((btn) => (
              <li key={btn} onClick={() => handleActiveSection(btn)} className={`w-fit text-lg shrink-0 mb-2 ${activeSection === btn ? "px-8 py-2 rounded-full bg-blue-500" : ""}`}>
                {/* <button
                 
                > */}
                  {btn}
                {/* </button> */}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Content */}
        <div className="flex justify-center md:justify-start gap-4 flex-wrap mt-10">
          <AnimatePresence mode="wait">
            {sections[activeSection].map((item, index) => (
              <motion.div
                key={item + index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="block shrink-0 w-[180px] h-[60px] md:w-[208px] md:h-[140px] flex items-center justify-center px-10 py-20 bg-[--new-grey-dark]"
              >
                <img className="w-56 object-cover" src={item} alt="tech item" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ContentWrapper>
    </motion.section>
  );
};


export default TechStack;
