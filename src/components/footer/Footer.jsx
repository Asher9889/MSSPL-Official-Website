import ContentWrapper from "../contentWrapper/ContentWrapper";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import MapComponent from "../googleMap/MapComponent";
import SocialLinks from "../social-links/SocialLinks";
import { forwardRef } from "react";
import { gmail } from "../../assets";
// const footer = forwardRef(()=> ())

/* eslint-disable */
const Footer = forwardRef((_, ref) => {
  const handleMarkerClick = () => {
    googleMapsURL =
      "https://www.google.com/maps/place/Multifacet+Software+Systems+Pvt+Ltd/@26.4726595,80.3236151,49m/data=!3m1!1e3!4m6!3m5!1s0x399c3880bcee05c7:0xd7ffc1af02582e8c!8m2!3d26.4726406!4d80.3239828!16s%2Fg%2F11fy4v6lrc?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";
    window.open(googleMapsURL, "_blank");
  };

  return (
    <footer ref={ref} className=" pb-20  pt-32 bg-black opacity-[0.9]">
      <ContentWrapper>
      
        <div className="flex flex-col md:flex-row gap-10 text-blue-600">
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="poppins-bold text-[40px]  ">
              Multifacet Software Systems Pvt. Ltd.
            </h1>

            <span className="flex gap-2 flex-row items-center ">
             
              <IoLocationOutline className="text-3xl" />
              <p
                onClick={handleMarkerClick}
                className="text-[20px] poppins-medium cursor-pointer "
              >
                109/421,80 feet road, Kanpur(U.P),India
              </p>
            </span>
            <span className="flex gap-2 flex-row items-center">
              
              {/* <MdEmail className="text-3xl" /> */}
              {/* <a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">Gmail icons created by Tinti Nodarse - Flaticon</a> */}
              <img className="w-10" src={gmail} alt="" />
              <p
                href="mailto:msspl.mspl@gmail.com"
                className="text-[20px] poppins-medium cursor-pointer"
              >
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
          <div className="flex-1  bg-black border-blue-800 border-[4px] opacity-[0.7] rounded-md">
            <MapComponent />
          </div>
        </div>
        <div className="w-fit mt-6">
              <SocialLinks />
          </div>
      </ContentWrapper>
      <p className="text-center text-sm poppins-regular mt-20">
        Copyright 2005 MSSPL All Rights Reserved.
      </p>
    </footer>
  );
});

export default Footer;
