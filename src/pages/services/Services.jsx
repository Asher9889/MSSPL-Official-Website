import { ContentWrapper } from "../../components";
import { cSoftwareDev } from "../../utils/links/links";
const Services = ()=>{
    return (
        <section>
            <ContentWrapper>
                <div>

                    <h1 className="poppins-semibold text-[3rem]">SERVICES WE OFFER</h1>
                    <div className="relative bg-red-500 ">
                        <div>
                            <img className="absolute top-0" src={cSoftwareDev} alt="" />
                           <h1 className="relative z-10" >Custom Software Development</h1> 
                           <p></p>
                        </div>
                    </div>
                </div>

            </ContentWrapper>
        </section>
    )
}

export default Services;