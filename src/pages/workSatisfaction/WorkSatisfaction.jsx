import { ContentWrapper, DevServiceCard } from "../../components";
import { IoStar } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Qualities array containing information about services and stats
const qualities = [
  {
    title: "5 stars",
    icon: <IoStar />,
    description:
      "Our clients give us an average rating of 5 stars. They appreciate our experience and quality.",
  },
  {
    title: "HQ office",
    description:
      "Our headquarters office is located at 109/421, 80 Feet Road, Kanpur (U.P.), India. We welcome clients to visit us.",
  },
  {
    title: "10 lakhs+ users",
    icon: "🧑‍💻",
    description:
      "Over 10 lakhs+ people in India use the apps and software we have developed for our clients.",
  },
];



const WorkSatisfaction = () => {
  // Intersection observer for in-view animations
  // Framer Motion animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state (off-screen below)
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Final state (on-screen)
  };
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.2,    // Triggers when 20% of the element is in view
  });
 

  return (
    <div className="w-full pt-32 pb-32">
      {/* Content wrapper for consistent layout */}
      <ContentWrapper>
        <div className="w-full">
          {/* Header section */}
          <div   ref={ref} className="flex flex-row flex-wrap gap-20 md:gap-28">
            {/* Title section with animation */}
            <motion.div

            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
              duration: 1, // Animation duration
              ease: "easeOut", // Smooth easing
            }}
              className="w-full flex-1"
            >
              <h1 className="poppins-bold text-[32px] text-[--main-text-color]">
                <span className="text-blue-600">
                  Multifacet Software Systems Pvt. Ltd. &nbsp;
                </span>
                - SOFTWARE DEVELOPMENT COMPANY WITH A UNIQUE APPROACH
              </h1>
            </motion.div>

            {/* Description section with animation */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              className="flex-1 poppins-regular text-[18px] text-[--main-text-color]"
            >
              <p className="text-wrap w-full font-semibold">
                {/* In 19+ years of work, we have helped more than 200+ Clients and 
                develop their products. We have successfully completed various projects like Library Management, Vehicle Tracking, Mobile Software, Retail Sales Software, E-commerce Website Design and Development, and many more. We are trusted by companies around India. */}
             Over 19+ Years of Excellence in Software Development <br /> With a legacy spanning nearly two decades, we have partnered with 200+ clients to transform their ideas into successful, innovative products. We have delivered impactful solutions tailored to diverse industries.
             
              </p>
            </motion.div>
          </div>

          {/* Qualities section */}
          <div className="w-full flex  items-center flex-wrap lg:justify-center flex-row  md:gap-8">
            {qualities.map((quality, index) => (
              <DevServiceCard
                key={index}
                title={quality.title}
                icon={quality.icon}
                description={quality.description}
              />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default WorkSatisfaction;
