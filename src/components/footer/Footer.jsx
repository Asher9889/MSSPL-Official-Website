// import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { options, products } from "../../utils/values/data";
import MapComponent from "../googleMap/MapComponent";
import { useNavigate } from "react-router";

// import logo from "../../assets/logo.png"
// import call from "../../assets/call.png"
// import msg from "../../assets/msg.png"
// import footer from "../../assets/footer.png"

// const links = ["Home", "About Us", "Bookings", "Blog"]
const Footer = () => {

  const navigate = useNavigate();

    const handleMarkerClick = () => {
        const googleMapsURL = `https://www.google.com/maps/place/Multifacet+Software+Systems+Pvt+Ltd/@26.4726595,80.3236151,49m/data=!3m1!1e3!4m6!3m5!1s0x399c3880bcee05c7:0xd7ffc1af02582e8c!8m2!3d26.4726406!4d80.3239828!16s%2Fg%2F11fy4v6lrc?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D`;
        window.open(googleMapsURL, "_blank");
      };


    const handleLinkNavigation = (option)=>{
      navigate(`/${option}`)
      // navigate is a sync that's after completing navigate settimeout get reference as priority
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  return (
    <footer className="pt-32 pb-20">
      <ContentWrapper>
        {/* container div */}
        {/* <div className=""> */}
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex flex-col gap-8">
                <h1 className="poppins-bold text-[40px] text-[--main-text-color]">
                    MSSPL PVT. LTD.
                </h1>

                <span className="flex gap-2 flex-row items-center">
                    {/* <img src={"msg"} alt="" /> */}
                    <IoLocationOutline className="text-3xl" />
                    <p onClick={handleMarkerClick} className="text-[20px] poppins-medium cursor-pointer">
                    
                    109/421,80 feet road, Kanpur(U.P),India
                    </p>
                </span>
                <span className="flex gap-2 flex-row items-center">
                    {/* <img src={"msg"} alt="" />
                                    < */}
                    <MdEmail className="text-3xl" />
                    <p className="text-[20px] poppins-medium cursor-pointer">
                    msspl.mspl@gmail.com
                    </p>
                </span>

                <span className="flex gap-2 flex-row items-center">
                    {/* <img src={"call"} alt="" /> */}
                    <IoIosCall className="text-3xl" />
                    <p className="text-[20px] poppins-medium cursor-pointer">
                    +91-9336810652, 9335148620, 9621509393
                    </p>
                </span>
                </div>
                <div className="flex-1 drop-shadow-xl">
                <MapComponent />
                </div>

            </div>

          

          {/* <div className="flex flex-1 gap-4 md:items-center items-center  flex-col poppins-regular">
                        <p className="text-2xl">Newsletter</p>
                        <p className="text-md">stay Up To Date</p>
                        <div className="flex flex-row mt-6 items-center ">
                            
                            <input className="outline-none border-0 bg-zinc-500" type="email" placeholder="Your Email" />
                            <button className="text-md rounded-md px-4 py-2 text-white bg-black ">Subscribe</button>
                        </div>

                    </div> */}
        {/* </div> */}

        <div className="flex flex-1 justify-between  flex-row mt-10">
            <div className=" flex flex-col items-start gap-4 poppins-regular">
              <p className="text-2xl hover:animate-pulse font-bold text-[--main-text-color]">
                Links
              </p>
              {options.map((option) => (
                <button key={option} onClick={()=> handleLinkNavigation(option.toLocaleLowerCase())}  className="text-md hover:cursor-pointer  hover:text-[--main-text-color] hover:underline hover:scale-[1.1] hover:font-medium">
                  {option}
                </button>
              ))}
            </div>

            <div className="flex flex-col items-start gap-4 poppins-regular">
              <p className="text-2xl hover:animate-pulse font-bold text-[--main-text-color]">
                Product
              </p>
              {products.map((product) => (
                <button key={product} className="text-md hover:cursor-pointer  hover:text-[--main-text-color] hover:underline hover:scale-[1.1]  hover:font-medium">
                  {product}
                </button>
              ))}
            </div>

            <div className=" flex flex-col items-start gap-4 poppins-regular">
              <p className="text-2xl hover:animate-pulse font-bold text-[--main-text-color]">
                Legal
              </p>
              <button className="text-md hover:cursor-pointer">
                Terms of Use
              </button>
              <button className="text-md hover:cursor-pointer">
                Privacy Policy
              </button>
              <button className="text-md hover:cursor-pointer">
                Cookie Policy
              </button>
            </div>
          </div>
        {/* <img src={"footer"} alt="" /> */}
      </ContentWrapper>
      <p className="text-center text-sm poppins-regular mt-20">Copyright 2005 MSSPL All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
