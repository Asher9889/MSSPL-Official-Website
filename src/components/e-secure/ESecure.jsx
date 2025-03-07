import ContentWrapper from "../contentWrapper/ContentWrapper";
import { e_secure_hardware } from "../../assets";
import { kiosk01, kiosk02, kiosk03} from "../../assets";
import { div } from "motion/react-client";


// const images = [kiosk1, kiosk2, kiosk3, kiosk4];

const libraryData = [
    {
      title: "E-Secure Self-Checkout Stations",
      description:
        "Enhance the library experience with E-Secure RFID-enabled self-checkout kiosks, allowing users to borrow books effortlessly. By simply placing items near the RFID reader, patrons can complete transactions independently, minimizing wait times and reducing congestion at the circulation desk. This automated checkout process improves efficiency while ensuring a seamless and user-friendly borrowing experience.",
      image: kiosk01, // Add image URL here
    },
    {
      title: "E-Secure Gate",
      description:
        "The E-Secure Gate is an advanced RFID-based solution designed to safeguard library collections by preventing unauthorized removal of books and other materials. The system automatically scans items as they pass through, verifying whether they have been properly checked out. If an unissued item is detected, the system instantly triggers an alert, helping to deter theft and unauthorized access. Seamlessly integrated with the library’s database, the E-Secure Gate provides real-time tracking, ensuring accuracy and security. By implementing this solution, libraries can minimize losses, enhance security, and maintain a well-monitored yet user-friendly environment.",
      image: kiosk02, // Add image URL here
    },
    {
      title: "E-Secure Issue/Return",
      description:
        "The E-Secure Issue/Return system automates the borrowing and returning process with RFID-enabled transactions, ensuring fast, accurate, and secure checkouts and returns. This system reduces manual workload, minimizes errors, and provides real-time tracking of library materials. With seamless system integration, it enhances circulation efficiency while ensuring a smooth and secure experience for both patrons and library staff.",
      image: kiosk03, // Add image URL here
    },
  ];


const ESecure = ()=>{
    return (
        <section>
            <ContentWrapper>
                <div className="py-20">
                    <h1 className="poppins-bold text-[--main-text-color] text-center text-[2rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300 mb-10">
                        {"E-Secure Products".toUpperCase()}
                     </h1>
                    {/* <img className=" w-full md:w-[80vw] mx-auto  border-[1px] border-zinc-200 my-10 md:my-20 drop-shadow-2xl hover:scale-[1.02] transition-all duration-300" src={e_secure_hardware} alt="" /> */}
                    <div>
                        {libraryData && libraryData.map((data,index)=> (
                            <div key={index * 20}>
                                <h1 className="poppins-bold text-[28px] poppins-bold text-[--main-text-color] ">
                                    {data.title}
                                </h1>
                                <p className="text-[20px] poppins-medium text-[--main-text-color] ">{data.description}</p>
                                <div className="flex flex-row gap-2 justify-center mt-6">
                                    {/* {images.map((image,index) => ( */}
                                        <img className="w-60 hover:scale-[1.02] transition-all duration-300 drop-shadow-2xl" key={index * 10} src={data.image} alt="" />
                                    {/* ))} */}
                                </div>
                            </div>   
                        ))}
                        {/* <h1 className="poppins-bold text-[28px] poppins-bold text-[--main-text-color] ">Kiosk</h1> */}
                        {/* <p className="text-[20px] poppins-medium text-[--main-text-color] ">Kiosk is primarily for self issue and return of books in Library. With its inbuilt screen and printer, patrons can view & print transaction related information such as number of books issued, outstanding fine (if any) etc. Customized information can also be printed on the transaction slip.</p> */}
                        {/* <div className="flex flex-row gap-2 justify-center mt-6">
                           
                        </div> */}
                       
                    </div>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default ESecure;