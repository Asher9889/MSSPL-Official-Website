import { eLibrary, pngwing, attendance,  vtss, vwmss, escrap, inventorys, advertisement, face, pole, dmss, opac } from "../../assets";
import { ContentWrapper, ProductCard } from "../../components";
// import { vwms, elib, vts, dms, attandence } from "../../assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./style.css";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const productArray = [
  {
    name: "DigiLib Library Management System(ERP)",
    description: "An advanced Library Management System designed to revolutionize library functions using RFID/Barcode technology with a user-friendly interface.",
    img: eLibrary
  },
  {
    name: "Digital Library / e-Library",
    description: "Transforms traditional libraries into dynamic digital spaces for managing, accessing, and sharing digital resources efficiently.",
    img: pngwing
  },
  {
    name: "Attendance Management System",
    description: "An advanced solution using Face Recognition, Biometric, and RFID technologies to automate attendance tracking.",
    img: attendance
  },
  {
    name: "Vehicle Tracking System (VTS)",
    description: "Real-time tracking and monitoring system ensuring optimal route management, reduced fuel consumption, and timely service delivery.",
    img: vtss
  },
  {
    name: "Vehicle Workshop Management System (VWMS)",
    description: "Optimizes workshop operations with solutions for managing customer service, vehicle repairs, inventory, and overall efficiency.",
    img: vwmss
  },
  {
    name: "e-Scrap (Landfill Automation)",
    description: "An innovative platform for optimizing the handling and tracking of scrap materials in industrial environments.",
    img: escrap
  },
  {
    name: "Inventory Management System",
    description: "Streamlines inventory management across industries with real-time visibility, automated processes, and comprehensive reporting.",
    img: inventorys
  },
  // {
  //   name: "Legal Management System",
  //   description: "Provides tools for efficient legal case tracking and document management.",
  //   img: ""
  // },
  // {
  //   name: "One House One Solution",
  //   description: "A comprehensive solution tailored for integrated housing management.",
  //   img: ""
  // },
  // {
  //   name: "Finance & Accounts Management System",
  //   description: "An ERP solution for streamlined financial and accounting operations.",
  //   img: ""
  // },
  // {
  //   name: "Placement Information Management System",
  //   description: "A solution to manage placement activities efficiently.",
  //   img: ""
  // },
  // {
  //   name: "Staff Information Management System",
  //   description: "Centralizes and streamlines staff data management.",
  //   img: ""
  // },
  // {
  //   name: "Digitization of Files and Important Records",
  //   description: "Preserves and organizes historical and operational documents for longevity and accessibility.",
  //   img: ""
  // },
  // {
  //   name: "Government Orders/Office Memo Tracking System",
  //   description: "Tracks and manages government orders and office memos effectively.",
  //   img: ""
  // },
  {
    name: "Advertisement Management System",
    description: "Optimizes the planning, execution, and analysis of advertising campaigns.",
    img: advertisement
  },
  // {
  //   name: "Service Book Management",
  //   description: "Streamlines employee service record management.",
  //   img: ""
  // },
  // {
  //   name: "File/Document Management System",
  //   description: "Efficiently stores, retrieves, and manages documents and records.",
  //   img: ""
  // },
  // {
  //   name: "Access Control and Security Management System",
  //   description: "Enhances security by managing access to facilities and resources.",
  //   img: ""
  // },
  // {
  //   name: "File Tracking System (FTS) (RFID)",
  //   description: "Tracks physical files using RFID technology for efficiency and transparency.",
  //   img: ""
  // },
  // {
  //   name: "Transport Management System",
  //   description: "Streamlines transport logistics and management.",
  //   img: ""
  // },
  {
    name: "Face Recognition and Detection Using AI",
    description: "Leverages RFID and AI for accurate and efficient face recognition.",
    img: face
  },
  // {
  //   name: "Digital Academic System (DAS-ERP)",
  //   description: "An ERP solution for managing academic operations effectively.",
  //   img: ""
  // },
  // {
  //   name: "Asset Management System (RFID)",
  //   description: "Tracks and manages assets using RFID and GIS Mapping.",
  //   img: ""
  // },
  {
    name: "Pole and Street Light Management System",
    description: "Manages street lights and poles, including inventory and operational status.",
    img: pole
  },
  // {
  //   name: "Workflow Management System",
  //   description: "Centralizes document, workflow, and communication management to enhance organizational efficiency.",
  //   img: ""
  // },
  {
    name: "Document Management System (DMS)",
    description: "Streamlines the storage, management, and retrieval of digital documents.",
    img: dmss
  },
  {
    name: "OPAC",
    description: "Online Public Access Catalog system for libraries to provide easy collection access.",
    img: opac
  },
  {
    name: "Health Management System",
    description: "Enhances healthcare facility management, patient care, and administrative tasks.",
    img: ""
  }
];



const NewOurProducts = () => {
  const scrollRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.1, // Triggers when 20% of the element is in view
  });
  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and faded
    visible: { opacity: 1, y: 0 }, // End in place and fully visible
  };

  function handleLeftScroll (){
    console.log("Left")
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  }

  function handleRightScroll (){
    console.log("Right")
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  }

  return (
    <div className="">
      <ContentWrapper>
        <div ref={ref}>
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
              duration: 0.8, // Animation duration
              ease: "easeOut", // Smooth easing
            }}
            className="poppins-bold text-[36px] text-[--main-text-color] pt-20"
          >
            SOFTWARE PRODUCTS <br />
            <span className="text-[]">WE HAVE:</span>
          </motion.h1>

          <div className="mt-10 flex flex-row flex-wrap gap-4" ref={ref}>
            {/* <motion.div 
               variants={headingVariants}
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               transition={{
                 duration: 0.6, // Animation duration
                 ease: "easeOut", // Smooth easing
               }}
            
              className="w-[410px] h-[85vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px] ">
                VEHICLE WORKSHOP MANAGEMENT SYSTEM
              </p>
              <div className="w-full   mt-2  p-4 pic-blur drop-shadow-2xl mt-4">

                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="h-[380px] object-cover"
                        src={vwms}
                        alt="vwms"
                      />
                    </div>
                    <div className="content">
                      <p className="text-[--main-text-color] poppins-bold">
                        (Vehicle Workshop Management System) Streamline workflow
                        from scheduling and inventory to invoicing, boosting
                        efficiency and profit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div 
               variants={headingVariants}
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               transition={{
                 duration: 0.8, // Animation duration
                 ease: "easeOut", // Smooth easing
               }}
              className="w-[410px] h-[85vh] bg-[--pink-color] rounded-3xl px-8 py-16  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px]">
                E-LIBRARY
              </p>
              <div className="w-full  mt-2 mx-auto  p-4 pic-blur drop-shadow-2xl mt-4">
                
                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="w-68 object-fill"
                        src={elib}
                        alt="vwms"
                      />
                    </div>
                    <div className="content">
                      <p className="text-[--main-text-color] poppins-bold">
                      Borrow e-books, audiobooks, magazines and and more from your e-library.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div
               variants={headingVariants}
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               transition={{
                 duration: 0.8, // Animation duration
                 ease: "easeOut", // Smooth easing
               }}
              className="w-[410px] h-[85vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px]">
                VEHICLE TRACKING SYSTEM
              </p>
              <div className="w-full  mt-2  p-4 pic-blur drop-shadow-2xl mt-4">
               
                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="h-96 object-fill"
                        src={vts}
                        alt="vts"
                      />
                    </div>
                    <div className="content">
                      <p className="text-[--main-text-color] poppins-bold">
                      Uses GPS to monitor location, status, and real-time insights for improved efficiency and security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div  variants={headingVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
             duration: 0.8, // Animation duration
             ease: "easeOut", // Smooth easing
           }} className="w-[410px] h-[85vh] bg-[--pink-color] rounded-3xl px-8 py-16  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px]">
                DOCUMENT MANAGEMENT SYSTEM
              </p>
              <div className="w-full  mt-2  p-4 pic-blur drop-shadow-2xl mt-4">
                
                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="h-96 object-fill"
                        src={dms}
                        alt="dms"
                      />
                    </div>
                    <div className="content">
                      <p className="text-[--main-text-color] poppins-bold">
                      Organize, store, search and share documents effortlessly with a Document Management System.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div  variants={headingVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
             duration: 0.8, // Animation duration
             ease: "easeOut", // Smooth easing
           }} className="w-[410px] h-[85vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px]">
                ATTENDANCE MANAGEMENT SYSTEM
              </p>
              <div className="w-full  mt-2  p-4 pic-blur drop-shadow-2xl mt-4">
                
                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="h-96 object-fill"
                        src={attandence}
                        alt="attandence"
                      />
                    </div>
                    <div className="content">
                      <p className="text-[--main-text-color] poppins-bold">
                      Organize, store, search and share documents effortlessly with a Document Management System.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>


        <div className="relative">  
          <div ref={scrollRef} className="custom-scroller w-full h-[500px] flex flex-row items-center gap-10 overflow-x-scroll px-10">

            <button onClick={handleRightScroll} className="absolute -right-10 z-20  bg-yellow-200 p-4 rounded-full scale-[0.8] hover:scale-[0.99] transition-all duration-300 hover:bg-yellow-400">
              <FaArrowRight className="text-3xl"/>
            </button>

            <button onClick={handleLeftScroll} className="absolute -left-10 z-20 bg-yellow-200 p-4 rounded-full scale-[0.8] hover:scale-[0.99] transition-all duration-300 hover:bg-yellow-400">
              <FaArrowLeft className="text-3xl"/>
            </button>

            {productArray.map((product) => (
              <div key={product.name} className="w-[30%] h-[400px] shrink-0 hover:scale-[1.03] transition-all duration-300">

              <ProductCard img={product.img} name={product.name} description={product.description}/>
            </div>
            ))}
            
          
  

          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default NewOurProducts;
