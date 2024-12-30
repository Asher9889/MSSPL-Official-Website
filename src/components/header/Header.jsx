import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router";
import { headerOption } from "../../utils/values/data";
import { msspl_logo } from "../../assets";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger icons
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Header = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [activeParent, setActiveParent] = useState("");

  function handleHeaderNavigation(option) {
    if (option.title == "Our Processes") return;
    if (option.title == "Products") return;
    if (option.title == "Our Clients") return;
    if (option.title == "About Us") return;

    navigate(`/${option.title.split(" ").join("_").toLowerCase().trim()}`);
  }

  // Handle Menu On/Off
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  // function handleActiveParent(title,e) {
  //   e.stopPropagation()
  //   setActiveParent(title);
  //   console.log("Title is", title);
  //   const path = `/${title.split(" ").join("_").toLowerCase().trim()}`;
    
  //   navigate(path);
  // }


  // For Parent Navigation Small Screen
  function handleParentNavigation(title) {
    if (activeParent === title) {
      setActiveParent(""); 
      console.log("Active parent: ", activeParent, "Title is: ", title)
      // Collapse if already active
    } else {

      setActiveParent(title); 
      if (title == "Our Processes") return;
      if (title == "Products") return;
      if (title == "Our Clients") return;
      if (title == "About Us") return;
  
      navigate(`/${title.split(" ").join("_").toLowerCase().trim()}`);
      setShowMenu(false);
    }
  }
  
  // For Child Navigation
  function handleChildNavigation(parentTitle, childTitle) {
    const path = `/${parentTitle
      .split(" ")
      .join("_")
      .toLowerCase()
      .trim()}/${childTitle.split(" ").join("_").toLowerCase().trim()}`;
    navigate(path);
    setShowMenu(false); // Close the menu after navigation
  }
  

  return (
    <header className="relative z-10  w-full ">
      <ContentWrapper>
        <div className="flex flex-row justify-between items-center my-4">
          {/* Left */}
          <img
            onClick={() => navigate("/")}
            className="hidden lg:block w-16"
            src={msspl_logo}
            alt=""
          />
          {/* Middle */}
          {/* for big screen laptop */}
          <div className="hidden lg:block  text-zinc-700">
            <div className=" flex flex-row gap-8">
              {headerOption.map((option) => (
                <div
                  onClick={() => handleHeaderNavigation(option)}
                  className="group relative cursor-pointer text-[--main-text-color] hover:scale-[1.09]  poppins-regular text-[1rem] transition duration-300"
                  key={option.title}
                >
                  <p className="">{option.title}</p>
                  <div className="absolute group-hover:block w-fit hidden ">
                    <ul className="my-2 bg-white">
                      {option?.child?.map((el) => (
                        <li
                          onClick={(e) => {
                            e.stopPropagation();
                            const path = `/${option.title
                              .split(" ")
                              .join("_")
                              .toLowerCase()
                              .trim()}/${el
                              .split(" ")
                              .join("_")
                              .toLowerCase()
                              .trim()}`;
                            navigate(path);
                            // navigate("/our_processes/requirement_analysis")
                            // console.log(el.split(" ").join("_").toLocaleLowerCase())
                          }}
                          className=" text-nowrap text-sm poppins-regular py-2 text-[--main-text-color]  px-4 border-[1px] border-zinc-200 transition-all duration-300 hover:text-white hover:bg-blue-500"
                          key={el}
                        >
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* for small screen */}
          <div className="">
            {!showMenu ? (
              <AiOutlineMenu onClick={handleShowMenu} className="h-8 w-8 block lg:hidden" />
            ) : (
              <AiOutlineClose onClick={handleShowMenu} className="h-8 w-8 block lg:hidden" />
            )}
          </div>

          {showMenu && (
            <AnimatePresence>
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="block lg:hidden absolute top-[100%] left-0 w-full h-fit bg-[--main-text-color] text-white px-2 z-50"
              >
                <div className="py-4">
                  {headerOption.map((option) => (
                    <div key={option.title}>
                      <div
                        onClick={() => handleParentNavigation(option.title)}
                        className={`w-full text-xl py-[5px] poppins-regular cursor-pointer border-b-[1px] border-zinc-400 ${
                          activeParent == option.title ? "font-bold text-2xl" : ""
                        }`}
                      >
                        {option.title}
                      </div>

                      <AnimatePresence>
                        {option.title === activeParent && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden flex flex-col px-4 mt-2"
                          >
                            {option.child.map((child) => (
                              <div
                                key={child}
                                onClick={() => handleChildNavigation(option.title, child)}
                                className="text-lg py-[5px] poppins-regular hover:text-lg transition-all cursor-pointer"
                              >
                                {child}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
)}
          {/* Right */}

          <button
            //  onClick={() => setShowContactForm(!showContactForm)}
            onClick={() => navigate("/contact_us")}
            className="cursor-pointer px-6 py-2 rounded-md text-white poppins-regular bg-[--button-bg-color] hover:bg-[--button-bg-hover-color] transition-all duration-400"
          >
            Contact Us
          </button>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
