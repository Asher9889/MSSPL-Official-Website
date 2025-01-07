import { eLibrary, pngwing, attendance,  vtss, vwmss, escrap, inventorys, advertisement, face, pole, dmss, opac, assests, workflow, erp,  health } from "../../assets";
import { ContentWrapper, ProductCard } from "../../components";
// import { vwms, elib, vts, dms, attandence } from "../../assets";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./style.css";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
// import { useRef } from "react";

// const productArray = [
//   {
//     name: "DigiLib Library Management System",
//     description: "It is an advanced Library Management System (ERP) designed to revolutionize library function in the digital age. It combines the latest RFID/Barcode technology with a user-friendly interface, offering a seamless solution for managing library operations.",
//     img: eLibrary
//   },
//   {
//     name: "Digital Library / e-Library",
//     description: "It is an innovative platform that transforms traditional libraries into dynamic digital spaces. This e-Library system offers a versatile and comprehensive solution for managing, accessing, and sharing digital resources efficiently.",
//     img: pngwing
//   },
//   {
//     name: "Attendance Management System",
//     description: "An advanced solution using Face Recognition, Biometric, and RFID technologies to automate attendance tracking.",
//     img: attendance
//   },
//   {
//     name: "Vehicle Tracking System (VTS)",
//     description: "Our system offers real-time tracking and monitoring of all vehicles, ensuring optimal route management, reduced fuel consumption, and timely service delivery.",
//     img: vtss
//   },
//   {
//     name: "Vehicle Workshop Management System (VWMS)",
//     description: "It is designed to optimize the operations of workshops. VWMS offers an end-to-end solution for managing customer service, vehicle repairs, inventory, and overall workshop efficiency.",
//     img: vwmss
//   },
//   {
//     name: "e-Scrap (Landfill Automation)",
//     description: "The Digital Management of Scraps system is an innovative platform designed to optimize the handling and tracking of scrap materials in industrial and manufacturing environments.",
//     img: escrap
//   },
//   {
//     name: "Inventory Management System",
//     description: "It is a powerful and intuitive platform designed to streamline the management of inventory across industries. This system offers real-time visibility, automated processes, GIS Mapping and comprehensive reporting to help businesses optimize their inventory control.",
//     img: inventorys
//   },
//   {
//     name: "Attendance Management System(Face/Biometric/RFID Based)",
//     description : "It is an advanced solution designed to automate and streamline the tracking process using cutting-edge Face Recognition, Biometric, and RFID technologies. This provides a secure, accurate, and efficient way to monitor employee attendance",
//     img: attendances
//   },
//   // {
//   //   name: "Legal Management System",
//   //   description: "Provides tools for efficient legal case tracking and document management.",
//   //   img: ""
//   // },
//   // {
//   //   name: "One House One Solution",
//   //   description: "A comprehensive solution tailored for integrated housing management.",
//   //   img: ""
//   // },
//   // {
//   //   name: "Finance & Accounts Management System",
//   //   description: "An ERP solution for streamlined financial and accounting operations.",
//   //   img: ""
//   // },
//   // {
//   //   name: "Placement Information Management System",
//   //   description: "A solution to manage placement activities efficiently.",
//   //   img: ""
//   // },
//   // {
//   //   name: "Staff Information Management System",
//   //   description: "Centralizes and streamlines staff data management.",
//   //   img: ""
//   // },
//   // {
//   //   name: "Digitization of Files and Important Records",
//   //   description: "Preserves and organizes historical and operational documents for longevity and accessibility.",
//   //   img: ""
//   // },
//   // {
//   //   name: "Government Orders/Office Memo Tracking System",
//   //   description: "Tracks and manages government orders and office memos effectively.",
//   //   img: ""
//   // },
//   {
//     name: "Advertisement Management System",
//     description: "Our Advertisement Management Automation System is an advanced solution designed to streamline and optimize the planning, execution, and analysis of advertising campaigns.",
//     img: advertisement
//   },
//   // {
//   //   name: "Service Book Management",
//   //   description: "Streamlines employee service record management.",
//   //   img: ""
//   // },
//   // {
//   //   name: "File/Document Management System",
//   //   description: "Efficiently stores, retrieves, and manages documents and records.",
//   //   img: ""
//   // },
//   // {
//   //   name: "Access Control and Security Management System",
//   //   description: "Enhances security by managing access to facilities and resources.",
//   //   img: ""
//   // },
//   // {
//   //   name: "File Tracking System (FTS) (RFID)",
//   //   description: "Tracks physical files using RFID technology for efficiency and transparency.",
//   //   img: ""
//   // },
//   // {
//   //   name: "Transport Management System",
//   //   description: "Streamlines transport logistics and management.",
//   //   img: ""
//   // },
//   {
//     name: "Face Recognition and Detection Using AI",
//     description: "The Face Recognition and Detection System Using AI leverages advanced artificial intelligence algorithms to identify and verify individuals based on facial features.",
//     img: face
//   },
//   {
//     name: "Digital Academic System (DAS-ERP)",
//     description: "DAS ERP (Enterprise Resource Planning) is an integrated software solution designed to streamline and optimize the core business processes of organizations across various industries.",
//     img: erp
//   },
//   {
//     name: "Asset Management System (RFID)",
//     description: "It is a robust and efficient solution for tracking and managing assets using Radio Frequency Identification (RFID) technology and GIS Mapping.",
//     img: assests
//   },
//   {
//     name: "Pole and Street Light Management System",
//     description: "The Pole and Street Light Management System isdesigned to efficiently manage and track the inventory of street lights and poles. This system provides a comprehensive asset database, including asset ID, location, type, installation date, and operational status.",
//     img: pole
//   },
//   {
//     name: "Workflow Management System",
//     description: "The e-Office Management system offers a centralized solution for managing documents, workflows, communication, and administrative tasks, empowering organizations to enhance efficiency, reduce paper usage, and maintain a well-organized digital workspace.",
//     img: workflow
//   },
//   {
//     name: "Document Management System (DMS)",
//     description: "DMS is a robust solution designed to streamline the storage, management, and retrieval of digital documents and records. Our DMS enhances organizational efficiency, reduces operational costs, and improves compliance and security.",
//     img: dmss
//   },
//   {
//     name: "OPAC",
//     description: "Our Online Public Access Catalog (OPAC) systemis a user-friendly, web-based tool that allows libraries to offer patrons easy access to their collections.",
//     img: opac
//   },
//   {
//     name: "Health Management System",
//     description: "It is a comprehensive solution designed to streamline and enhance the management of healthcare facilities, patient care, and administrative tasks.",
//     img: health
//   }
// ];

const productArray = [
 
  {
    name: "Attendance Management System",
    description: "Automates attendance using Face Recognition, Biometric, and RFID.",
    img: attendance,
  },
  {
    name: "Vehicle Tracking System (VTS)",
    description: "Real-time vehicle tracking for route optimization and timely delivery.",
    img: vtss,
  },
  {
    name: "Vehicle Workshop Management System (VWMS)",
    description: "Streamlines repairs, inventory, and workshop management.",
    img: vwmss,
  },
  {
    name: "Face Recognition and Detection Using AI",
    description: "Leverages AI for facial identification and verification.",
    img: face,
  },
  {
    name: "e-Scrap (Landfill Automation)",
    description: "Optimizes scrap handling and tracking in industrial environments.",
    img: escrap,
  },
  {
    name: "Inventory Management System",
    description: "Streamlines inventory control with GIS mapping and real-time visibility.",
    img: inventorys,
  },
  {
    name: "Advertisement Management System",
    description: "Automates planning and execution of advertising campaigns.",
    img: advertisement,
  },
  {
    name: "Digital Academic System (DAS-ERP)",
    description: "An ERP solution for optimizing organizational processes.",
    img: erp,
  },
  {
    name: "Asset Management System (RFID)",
    description: "Tracks and manages assets using RFID and GIS mapping.",
    img: assests,
  },
  {
    name: "Pole and Street Light Management System",
    description: "Manages street light inventory and operational status efficiently.",
    img: pole,
  },
  {
    name: "DigiLib Library Management System",
    description: "An advanced system leveraging RFID/Barcode for seamless library operations.",
    img: eLibrary,
  },
  {
    name: "Digital Library / e-Library",
    description: "Transforms traditional libraries into versatile digital spaces.",
    img: pngwing,
  },
  {
    name: "Workflow Management System",
    description: "Centralized management of documents and workflows.",
    img: workflow,
  },
  {
    name: "Document Management System (DMS)",
    description: "Streamlines storage and retrieval of digital documents.",
    img: dmss,
  },
  {
    name: "OPAC",
    description: "Web-based tool for libraries to provide easy collection access.",
    img: opac,
  },
  {
    name: "Health Management System",
    description: "Streamlines healthcare facility and patient care management.",
    img: health,
  },
];




const NewOurProducts = () => {
  // const scrollRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.1, // Triggers when 20% of the element is in view
  });
  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and faded
    visible: { opacity: 1, y: 0 }, // End in place and fully visible
  };

  // function handleLeftScroll (){
  //   console.log("Left")
  //   scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  // }

  // function handleRightScroll (){
  //   console.log("Right")
  //   scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  // }

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


        <div ref={ref}>  
          <div  className="w-full  flex flex-col lg:flex-row flex-wrap w-full h-fit justify-center  items-start gap-8 ">

            {/* <button onClick={handleRightScroll} className="absolute -right-10 z-20  bg-yellow-200 p-4 rounded-full scale-[0.8] hover:scale-[0.99] transition-all duration-300 hover:bg-yellow-400">
              <FaArrowRight className="text-3xl"/>
            </button> */}

            {/* <button onClick={handleLeftScroll} className="absolute -left-10 z-20 bg-yellow-200 p-4 rounded-full scale-[0.8] hover:scale-[0.99] transition-all duration-300 hover:bg-yellow-400">
              <FaArrowLeft className="text-3xl"/>
            </button> */}

            {productArray.map((product) => (
              <motion.div   key={product.name} 
              variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
              duration: 0.8, // Animation duration
              ease: "easeOut", // Smooth easing
            }}
              className="w-full lg:w-[23%] h-[350px] shrink-0 hover:scale-[1.03] transition-all duration-300">

              <ProductCard img={product.img} name={product.name} description={product.description}/>
            </motion.div>
            ))}
            
          
  

          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default NewOurProducts;
