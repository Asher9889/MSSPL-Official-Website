import ContentWrapper from "../contentWrapper/ContentWrapper";
import { MdLocationPin } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";

const HeaderTopLinks = () =>{
    return (
        <div className="hidden md:block">

        <ContentWrapper>

        <div className=" flex flex-row items-center justify-center gap-4 text-[--main-text-color] text-sm py-2 poppins-regular px-6">
            <span className="flex flex-row items-center gap-2"><MdLocationPin className="text-black"/> 109/421,80 feet road, Kanpur(U.P),India </span>
            <span className="flex flex-row items-center gap-2"><PiPhoneCall  className="text-black"/>+91-9336810652, 9621509393</span>
            <span className="flex flex-row items-center gap-2"> <IoMailSharp  className="text-black"/>msspl.mspl@gmail.com</span>
         
        </div>
        </ContentWrapper>
        </div>
    )
}

export default HeaderTopLinks;