import ContentWrapper from "../contentWrapper/ContentWrapper";
import { academic_campus } from "../../assets";
import { digitalAcademicsCampus, campSysInfo } from "../../utils/values/data";



 

  
  
const LibraryAutomationSystem = () => {
  return (
    <div className="w-full my-10 md:my-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-[2rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
          {"CampSys ERP Management(DAC)".toUpperCase()}
        </h1>
        <img
          className=" w-full md:w-[80vw] mx-auto  border-[1px] border-zinc-200 my-10 md:my-20 drop-shadow-xl hover:scale-[1.02] transition-all duration-300"
          src={academic_campus}
          alt="libraries"
        />
        <div className="w-full flex md:flex-row flex-col flex-wrap">
          {/* left */}
          <div className=" p-4 border-[1px] border-zinc-500   h-fit">
            <div>
              <ul>
                {digitalAcademicsCampus.map((obj, index) => (
                  <>
                   {/* These are the left links */}
                    {obj.category && (
                      <h1 className="poppins-bold text-[20px]" key={index * 20}>
                        {obj.category}
                      </h1>
                    )}
                    {obj.services.map((service, index) => (
                      <li
                        className="poppins-regular text-[--main-text-color] hover:scale-[1.02] hover:underline transition duration-300 cursor-pointer"
                        key={index * 10}
                      >
                        <strong>{service}</strong>
                      </li>
                    ))}
                  </>
                ))}
              </ul>
            </div>
          </div>
          {/* right */}

          <div className="flex-1 p-4">
            {campSysInfo?.map((obj, index) => (
              <div key={index * 10}>
                <h1 className="poppins-bold text-[28px] text-[--main-text-color] text-start">{obj.section}</h1>
                {obj.content.map((obj, index) => (
                    <div key={index * 20} className="flex flex-col  mb-6">
                        <h1 className="poppins-regular font-medium text-[20px] text-[--main-text-color]  text-wrap">{obj.title} :</h1>
                        <section className="flex-1 poppins-regular text-[--main-text-color]">
                            <p className="">
                                {obj.description}
                            </p>
                        </section>
                        {obj.img &&  <img  className="h-[30vh] md:h-[20vw] mx-auto py-4" src={obj.img} alt="img" />}
                       
                    {/* <img className="flex-1" src={""} alt="" /> */}
                  </div>
                ))}

                
              </div>
            ))}

            
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default LibraryAutomationSystem;
