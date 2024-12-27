import ContentWrapper from "../contentWrapper/ContentWrapper";
import MapComponent from "../googleMap/MapComponent";
import SocialLinks from "../social-links/SocialLinks";
import { forwardRef } from "react";
import { gmail, phone, map} from "../../assets";
import { googleMapUrl } from "../../utils/links/links";
// const footer = forwardRef(()=> ())

/* eslint-disable */
const Footer = forwardRef((_, ref) => {
  const handleMarkerClick = () => {
  //  url for google map nav
    window.open(googleMapUrl, "_blank");
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
             
              {/* <IoLocationOutline className="text-3xl" /> */}
              <img className="w-8" src={map} alt="" />
              <p
                onClick={handleMarkerClick}
                className="text-[20px] poppins-medium cursor-pointer hover:scale-[1.01] transition-all duration-300"
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
                className="text-[20px] poppins-medium cursor-pointer hover:scale-[1.01] transition-all duration-300"
              >
                msspl.mspl@gmail.com
              </p>
            </span>

            <span className="flex gap-2 flex-row items-center">
              {/* <img src={"call"} alt="" /> */}
              {/* <IoIosCall className="text-3xl" /> */}
              <img className="w-10" src={phone} alt="phone_number" />
              <p className="text-[20px] poppins-medium cursor-pointer hover:scale-[1.01] transition-all duration-300">
                +91-9336810652, 9335148620, 9621509393
              </p>
            </span>

            
          </div>
          <div className="flex-1 h-fit bg-black border-blue-800 border-[4px] opacity-[0.7] rounded-md">
            <MapComponent />
          </div>
        </div>
        <div className="w-fit ">
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
