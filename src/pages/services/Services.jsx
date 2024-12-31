import { ContentWrapper } from "../../components";
import { GoSquareFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { data } from "../../utils/values/data";
import { useInView } from "react-intersection-observer";


const Services = () => {
  const navigate = useNavigate();

  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.1,    // Triggers when 20% of the element is in view
  });
  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and faded
    visible: { opacity: 1, y: 0 }, // End in place and fully visible
  };

  // Function to handle navigation
  function handleNavigation(link) {
    navigate(link);
    window.scrollTo(0, 0); // Scroll to the top after navigation
  }

  return (
    <section className="w-full mt-20">
      <ContentWrapper>
        <div>
          {/* Section title */}
          <motion.h1 variants={headingVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                duration: 1, // Animation duration
                ease: "easeOut", // Smooth easing
              }}  className="poppins-bold text-[36px] text-[--main-text-color] pb-10 pt-20">
            {"Services we offer".toUpperCase()}
          </motion.h1>

          {/* Services Grid */}
          <div ref={ref}  className="flex flex-row justify-center md:justify-center flex-wrap gap-8">
            {data.map((elem, index) => (
              <motion.div  variants={headingVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                duration: 1, // Animation duration
                ease: "easeOut", // Smooth easing
              }} 
              key={index}>
              <motion.div
                key={index}
                className="w-[380px] h-[400px] relative text-white bg-red-800 overflow-hidden"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent" />

                {/* Background Image */}
                <img
                  className="w-full h-full absolute top-0 object-cover"
                  src={elem.pic}
                  alt={elem.title}
                />

                {/* Service Title */}
                <motion.div
                  className="absolute z-50 bottom-12 w-full p-4"
                  variants={{
                    rest: { y: 0 }, // Default position
                    hover: { y: -100 }, // Moves upward on hover
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="w-72 poppins-semibold text-[1.5rem] leading-[2rem]">
                    {elem.title}
                  </h1>
                </motion.div>

                {/* Service Details */}
                <motion.ul
                  className="absolute bottom-10 w-full p-4 z-10"
                  variants={{
                    rest: { opacity: 0, y: 20 }, // Hidden by default
                    hover: { opacity: 1, y: 0 }, // Visible on hover
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <li className="flex flex-row items-center text-wrap">
                    <GoSquareFill />
                    {elem.paragraph1}
                  </li>
                  <li className="flex flex-row items-center text-wrap">
                    <GoSquareFill />
                    {elem.paragraph2}
                  </li>
                  {elem.paragraph3 && (
                    <li className="flex flex-row items-center text-wrap">
                      <GoSquareFill />
                      {elem.paragraph3}
                    </li>
                  )}
                  {elem.paragraph4 && (
                    <li className="flex flex-row items-center text-wrap">
                      <GoSquareFill />
                      {elem.paragraph4}
                    </li>
                  )}
                </motion.ul>

                {/* "See More" Link */}
                {elem.link && (
                  <motion.span
                    className="absolute bottom-0 w-full p-4 z-10"
                    variants={{
                      rest: { opacity: 0, y: 20 },
                      hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      onClick={() => handleNavigation(elem.link)}
                      className="flex flex-row gap-4 items-center poppins-regular text-cyan-600 hover:text-cyan-400 hover:underline cursor-pointer"
                    >
                      See more <IoIosArrowRoundForward className="text-4xl" />
                    </p>
                  </motion.span>
                )}
              </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Services;
