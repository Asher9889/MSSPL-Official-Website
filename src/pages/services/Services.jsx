import { ContentWrapper } from "../../components";
import { cSoftwareDev, wSoftwareDev, uiux, mobileDev,  qualityAssurance, techSupport, ProjManagment } from "../../utils/links/links";
import { GoSquareFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react";
const data = [
  {
    title: " Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",
  },
  {
    title: "Web Application Development",
    pic: wSoftwareDev,
    paragraph1: "Frontend development",
    paragraph2: "Backend development",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance of lagacy system",
  },
  {
    title: "UI/UX Design",
    pic: uiux,
    paragraph1: "Mobile app design",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",
  },
  {
    title: " Mobile App Development",
    pic: mobileDev,
    paragraph1: "IOS app development",
    paragraph2: "Android App development",
    paragraph3: "Cross Platfrom development",
    // paragraph4: "Maintenance",
  },
  // {
  //   title: "DevOps",
  //   pic: devOps,
  //   paragraph1: "Web and mobile application development",
  //   paragraph2: "Business analysis",
  //   paragraph3: "Software architecture",
  //   paragraph4: "Maintenance",
  // },
  {
    title: "Quality Assurance",
    pic: qualityAssurance,
    paragraph1: "Manual Testing",
    paragraph2: "Automation Testing",
    paragraph3: "Functional Testing",
    paragraph4: "Security Testing",
  },
  {
    title: "Technical Support",
    pic: techSupport,
    paragraph1: "Software Maintenance",
    paragraph2: "Infrastructure Support",
    // paragraph3: "Infrastructure Support",
    // paragraph4: "Maintenance",
  },
  {
    title: "Project Managemnt",
    pic: ProjManagment,
    paragraph1: "Project portfolio management",
    paragraph2: "Change management",
    paragraph3: "Project management consultation",
    paragraph4: "Project scoping and delivary",
  },
  // {
  //   title: " Custom Software Development",
  //   pic: cSoftwareDev,
  //   paragraph1: "Web and mobile application development",
  //   paragraph2: "Business analysis",
  //   paragraph3: "Software architecture",
  //   paragraph4: "Maintenance",
  // },
];

const Services = () => {
  return (
    <section className="w-full mt-20">
      <ContentWrapper>
        <div className="">
          {/* top */}
          <h1 className="poppins-semibold text-[2.5rem] my-8">
            Services we offer
          </h1>
          {/* bottom */}
          
          {/* <div className="flex flex-row justify-center md:justify-center flex-wrap gap-8">
      {data.map((elem, index) => (
        <motion.div
          key={index}
          className="w-[380px] h-[400px] relative text-white bg-red-800 overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent" />
          <img
            className="w-full h-full absolute top-0 object-cover"
            src={elem.pic}
            alt=""
          />

         
          <div className="flex flex-col absolute bottom-0 p-4">
            <motion.div
              className="relative z-10"
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 1, y: -20 },
              }}
            >
              <h1 className="w-72 poppins-semibold text-[1.5rem] leading-[2rem] text-wrap">
                {elem.title}
              </h1>
            </motion.div>

         
            <motion.ul
              className="w-full relative z-10"
              variants={{
                rest: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <li className="flex flex-row text-wrap">
                <GoSquareFill />
                {elem.paragraph1}
              </li>
              <li className="flex flex-row text-wrap items-center">
                <GoSquareFill />
                {elem.paragraph2}
              </li>
              {elem.paragraph3 && (
                <li className="flex flex-row text-wrap items-center">
                  <GoSquareFill />
                  {elem.paragraph3}
                </li>
              )}
              {elem.paragraph4 && (
                <li className="flex flex-row text-wrap items-center">
                  <GoSquareFill />
                  {elem.paragraph4}
                </li>
              )}
            </motion.ul>

            <motion.span
              className="relative z-10"
              variants={{
                rest: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="flex flex-row gap-4 items-center poppins-regular text-cyan-600">
                See more <IoIosArrowRoundForward className="text-4xl" />
              </p>
            </motion.span>
          </div>
        </motion.div>
      ))}
          </div> */}
          <div className="flex flex-row justify-center md:justify-center flex-wrap gap-8">
      {data.map((elem, index) => (
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
            alt=""
          />

          {/* Parent Title */}
          <motion.div
            className="absolute z-50 bottom-12 w-full p-4 "
            variants={{
              rest: { y: 0 },  // Default position (bottom)
              hover: { y: -100 }, // Moves upward on hover
            }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="w-72  poppins-semibold opacity-1 text-[1.5rem] leading-[2rem]">
              {elem.title}
            </h1>
          </motion.div>

          {/* Child Elements */}
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
          <motion.span
            className="absolute bottom-0 w-full p-4 z-10"
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="flex flex-row gap-4 items-center poppins-regular text-cyan-600 hover:text-cyan-400 hover:underline  cursor-pointer">
              See more <IoIosArrowRoundForward className="text-4xl " />
            </p>
          </motion.span>
        </motion.div>
      ))}
    </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Services;
