import { useRef, useEffect } from "react";
import Typed from "typed.js";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";


const TypeEffectComponent = () => {
  const el = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.1,    // Triggers when 20% of the element is in view
  });
  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and faded
    visible: { opacity: 1, y: 0 }, // End in place and fully visible
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Pushing the technology envelope into uncharted territories?",
        "Can’t-miss deadlines and Impossibly tight budgets?",
        "New product development requests outpacing your team capacity? ",
      ],
      typeSpeed: 80, // Typing speed
      backSpeed: 30, // Backspacing speed
      backDelay: 4000, // Delay after typing a string
      startDelay: 500, // Initial delay before typing starts
      loop: true, // Looping enabled
      cursorChar: "", // Blinking cursor
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <motion.div ref={ref} variants={headingVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    transition={{
      duration: 1, // Animation duration
      ease: "easeOut", // Smooth easing
    }} className="relative z-20">
      <ContentWrapper>
        <div className="w-full h-[250px] md:h-60 py-[6%] rounded-[40px] bg-navy-gradient-200 text-wrap my-20">
          <h1 className="text-center poppins-semibold text-[1.8rem] md:text-[2.5rem] text-[--text-builtIt] ">
            Product challenges? We take them head-on.
          </h1>

          <h3
            className=" poppins-semibold text-[1.8rem] text-center text-[--text-builtIt] text-wrap"
            ref={el}
          ></h3>
        </div>
      </ContentWrapper>
    </motion.div>
  );
};

export default TypeEffectComponent;
