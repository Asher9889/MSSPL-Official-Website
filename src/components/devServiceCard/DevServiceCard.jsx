import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
/* eslint-disable */

const DevServiceCard = ({title, icon, description}) => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.2,    // Triggers when 20% of the element is in view
  });
  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and faded
    visible: { opacity: 1, y: 0 }, // End in place and fully visible
  };
  
  return (
    <motion.div ref={ref} variants={headingVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    transition={{
      duration: 1, // Animation duration
      ease: "easeOut", // Smooth easing
    }}  className="flex flex-row mt-20 border-[1px] border-zinc-800 rounded-3xl hover:scale-[1.009]">
      <div className="px-12 bg-[--card-bg-color] w-[400px] h-[300px] rounded-3xl text-[20px] flex flex-col justify-center gap-10">
        <span>
          {/* <icon className="text-yellow-500 text-[24px]" />
          {} */}
       <p className="text-[--main-text-color] text-[24px] text-yellow-400">{icon}</p>
          <b className="text-[--main-text-color] poppins-bold">{title.toLocaleUpperCase()}</b>
        </span>
        <p className="poppins-regular text-[--main-text-color] text-[16px]">
          {description}
          
        </p>
      </div>
    </motion.div>
  );
};

export default DevServiceCard;
