import trident from "../../assets/trident.png";
import { LogoCorousel } from "../../components";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
const LandingPage = () => {
  return (
    <section className="w-full">
      <img
        className="absolute top-0 right-4 w-60 md:w-[30rem] md:right-14 md:scale-[1.1] lg:top-8"
        src={trident}
        alt="bg"
      />
      <ContentWrapper>
        <section className="w-full ">
          <div className="w-full flex flex-col justify-center items-center pt-[10%] gap-3 lg:gap-5">
            <h1 className=" text-center text-gradient poppins-semibold text-[2.5rem] md:text-[3.5rem] ">
              Product Promises. Delivered
            </h1>
            {/* <h5 className="text-[--text-builtIt] font-semibold text-2xl"></h5> */}
            <h2 className="poppins-regular text-[1.6rem] lg:text-3xl text-[--text-builtIt] text-center">
            <p className=" poppins-regular text-center">MSSPL Incubated at IIT Kanpur</p>  You Think it. We Build it. 
            </h2>
            <button className=" mt-6 text-xl lg:text-2xl  cursor-pointer px-6 py-2 rounded-md text-white poppins-regular bg-[--button-bg-color]  hover:bg-[--button-bg-hover-color] transition-all duration-400">
              Get into touch
            </button>
          </div>
        </section>
      </ContentWrapper>
      <LogoCorousel />
    </section>
  );
};

export default LandingPage;
