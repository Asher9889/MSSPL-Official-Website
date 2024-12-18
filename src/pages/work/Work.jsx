import { ContentWrapper } from "../../components";
import { clutch, mobile, bg, star } from "../../assets/index.js";
const Work = () => {
  return (
    <div className=" bg-white pt-32 mt-20  ">
      <ContentWrapper>
        <div className="">
          <h1 className=" mb-20 text-[--main-blue-color] text-[30px] leading-[30px] md:text-[50px] md:leading-[60px] poppins-bold">
            CUSTOM WEB AND MOBILE <br />
            APP DEVELOPMENT
            <br /> COMPANY
          </h1>
          <div className=" w-full">
            <img className="w-full h-[50vh] md:h-[70vh] object-cover rounded-t-[80px]" src={bg} alt="" />
          </div>
        </div>
      </ContentWrapper>
      <div className="relative">

        <img className="absolute mobile  h-56 md:h-96 bottom-10 left-[55%] transform -translate-x-1/2" src={mobile} alt="mobile" />
        <img className="w-28 md:w-40  absolute transform -translate-x-1/2 bottom-[43vh] md:bottom-[58vh] right-[0%] sm:right-[0%] md:right-[0%] xl:right-[10%]" src={clutch} alt="clutch" />

        <div className="absolute bottom-0 w-full poppins-medium bg-[--contactUs-btn-hover] flex flex-row justify-between text-xl overflow-x-hidden md:text-[2rem] text-white py-4 ">
          <p className="shrink-0">Design</p>
          <img className="text-white " src={star} alt="" />
          <p className="shrink-0">Web Development</p>
          <img className="text-white" src={star} alt="" />
          <p className="shrink-0">Mobile Development</p>
          <img className="text-white" src={star} alt="" />
          <p className="shrink-0">Api Development</p>
          <img className="text-white" src={star} alt="" />
        <p className="shrink-0">Test</p>
      </div>
      </div>
     
    </div>
  );
};

export default Work;
