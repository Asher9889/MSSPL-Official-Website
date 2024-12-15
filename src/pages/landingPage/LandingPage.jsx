import trident from "../../assets/trident.png";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
const LandingPage = () => {
 
  return (
    <div className="w-full bg-green-800 ">
      <img
        className="absolute right-14 scale-[1.1] top-8"
        src={trident}
        alt="bg"
      />
      <ContentWrapper>
        <section className="w-full bg-yellow-500">
          <div className="w-full bg-red-500  flex flex-col justify-center items-center mt-[10%] gap-3 lg:gap-5">
            <h1 className=" text-center text-gradient poppins-semibold text-[2rem] lg:text-[3.5rem] ">
              Product Promises. Delivered
            </h1>
            <h2 className="poppins-regular text-[1.8rem] lg:text-3xl text-[--text-builtIt]">
              You Think it. We Build it.
            </h2>
            <button className="mt-5 text-2xl cursor-pointer px-6 py-2 rounded-md text-white poppins-regular bg-contactUsBtn hover:bg-gradient-to-r from-[--contactUs-btn-hover] to-[--contactUs-btn-hover] transition-all duration-700">
              Get into touch
            </button>
          </div>
          
        </section>
      </ContentWrapper>
    </div>
  );
};

export default LandingPage;
