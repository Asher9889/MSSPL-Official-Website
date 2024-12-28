import ContentWrapper from "../contentWrapper/ContentWrapper";
import { MdLocationPin } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";
import { googleMapUrl } from "../../utils/links/links";

const HeaderTopLinks = () =>{

    const handleAddressClick = () => {
        const googleMapsURL = googleMapUrl;
        window.open(googleMapsURL, "_blank");
      };

    return (
        <div className="hidden md:block">

        <ContentWrapper>

        <div className=" flex flex-row items-center justify-center gap-4 text-[--main-text-color] text-sm py-2 poppins-regular px-6">
            <span onClick={handleAddressClick} className="flex flex-row items-center gap-2 hover:cursor-pointer hover:underline hover:scale-[1.01] transition-all duration-300"><MdLocationPin className="text-black"/> 109/421,80 feet road, Kanpur(U.P),India </span>
            <span className="flex flex-row items-center gap-2"><PiPhoneCall  className="text-black"/>+91-9336810652, 9621509393</span>
            <a href="mailto:msspl.mspl@gmail.com" className="flex flex-row items-center gap-2 hover:cursor-pointer hover:underline hover:scale-[1.01] transition-all duration-300"> <IoMailSharp  className="text-black"/>msspl.mspl@gmail.com</a>
         
        </div>
        </ContentWrapper>
        </div>
    )
}

export default HeaderTopLinks;