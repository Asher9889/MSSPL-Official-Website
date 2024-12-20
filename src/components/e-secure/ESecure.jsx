import ContentWrapper from "../contentWrapper/ContentWrapper";
import { e_secure_hardware } from "../../assets";
import { kiosk1, kiosk2, kiosk3, kiosk4 } from "../../assets";


  

const images = [kiosk1, kiosk2, kiosk3, kiosk4]
const ESecure = ()=>{
    return (
        <section>
            <ContentWrapper>
                <div className="py-20">
                    <h1 className="poppins-bold text-[--main-text-color] text-center text-[2rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
                        {"E-Secure Products".toUpperCase()}
                     </h1>
                    <img className=" w-full md:w-[80vw] mx-auto  border-[1px] border-zinc-200 my-10 md:my-20 drop-shadow-2xl hover:scale-[1.02] transition-all duration-300" src={e_secure_hardware} alt="" />
                    <div>
                        <h1 className="poppins-bold text-[28px] poppins-bold text-[--main-text-color] ">Kiosk</h1>
                        <p className="text-[20px] poppins-medium text-[--main-text-color] ">Kiosk is primarily for self issue and return of books in Library. With its inbuilt screen and printer, patrons can view & print transaction related information such as number of books issued, outstanding fine (if any) etc. Customized information can also be printed on the transaction slip.</p>
                        <div className="flex flex-row gap-2 justify-center mt-6">
                            {images.map((image,index) => (
                                <img className="hover:scale-[1.02] transition-all duration-300 drop-shadow-2xl" key={index * 10} src={image} alt="" />
                            ))}
                        </div>
                       
                    </div>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default ESecure;