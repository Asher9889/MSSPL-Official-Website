// import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { options, products } from "../../utils/values/data";
// import logo from "../../assets/logo.png"
// import call from "../../assets/call.png"
// import msg from "../../assets/msg.png"
// import footer from "../../assets/footer.png"

// const links = ["Home", "About Us", "Bookings", "Blog"]
const Footer = ()=>{
    return (
        <div className="pt-30 pb-40">
            <ContentWrapper>
                <div className="flex font-clash flex-col lg:flex-row justify-evenly md:gap-8 gap-14 bg-[--main-bg-color]">

                    <div className="flex flex-1  justify-evenly md:justify-around    flex-row  font-clash">

                        <div className="flex flex-col gap-4">
                            
                            <h1 className="poppins-bold text-[32px] text-[--main-text-color]">MSSPL PVT LTD</h1>

                            <span className="flex gap-2 flex-row items-center">
                                {/* <img src={"msg"} alt="" /> */}
                                <IoLocationOutline className="text-xl"/>
                                <p className="text-[16px] poppins-medium cursor-pointer"> 109/421,80 feet road, Kanpur(U.P),India</p>
                            </span>
                            <span className="flex gap-2 flex-row items-center">
                                {/* <img src={"msg"} alt="" />
                                < */}
                                <MdEmail  className="text-xl"/>
                                <p className="text-[16px] poppins-medium cursor-pointer">msspl.mspl@gmail.com</p>
                            </span>
                            
                            <span className="flex gap-2 flex-row items-center">
                                {/* <img src={"call"} alt="" /> */}
                                <IoIosCall  className="text-xl"/>
                                <p className="text-[16px] poppins-medium cursor-pointer">+91-9336810652, 9335148620, 9621509393</p>
                            </span>
                            
                        </div>

                        <div className=" flex flex-col items-start gap-4 poppins-regular">
                            <p className="text-2xl hover:animate-pulse font-bold text-[--main-text-color]">Links</p>
                            {options.map(option => (
                                <button key={option} className="text-md hover:cursor-pointer">{option}</button>
                            ))}
                           
                        </div>

                    </div>

                    <div className="flex flex-1 justify-evenly md:justify-around flex-row ">

                    <div className="flex flex-col items-start gap-4 poppins-regular">
                            <p  className="text-2xl hover:animate-pulse font-bold text-[--main-text-color]">Product</p>
                            {products.map(product => (

                            <button key={product} className="text-md hover:cursor-pointer">{product}</button>
                            ))}
                           
                        </div>

                        <div className=" flex flex-col items-start gap-4 poppins-regular">
                            <p className="text-2xl hover:animate-pulse font-bold text-[--main-text-color]">Legal</p>
                            <button className="text-md hover:cursor-pointer">Terms of Use</button>
                            <button className="text-md hover:cursor-pointer">Privacy Policy</button>
                            <button className="text-md hover:cursor-pointer">Cookie Policy</button>
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

                </div>
            <img src={"footer"} alt="" />
            </ContentWrapper>

            
        </div>
    )
}

export default Footer;