import ContentWrapper from "../contentWrapper/ContentWrapper";
import { options } from "../../utils/values/data";
const Header = () => {
  
  return (
    <header className="relative z-10  w-full bg-[--main-bg-color]">
      <ContentWrapper>
        <div className="flex flex-row justify-between items-center py-4">
          {/* Left */}
          <div className="">logo</div>
          {/* Middle */}
          <div className="hidden lg:block  text-zinc-700">
            <div className=" flex flex-row gap-8">

            {options.map((option) => <p className="cursor-pointer text-[--main-text-color] hover:scale-[1.09]  poppins-regular text-[1rem] transition duration-300" key={option}>{option}</p>)}
            </div>
          </div>
          {/* Right */}
          

          <button className="cursor-pointer px-6 py-2 rounded-md text-white poppins-regular bg-[--button-bg-color] hover:bg-gradient-to-r from-[--contactUs-btn-hover] to-[--contactUs-btn-hover] transition-all duration-700">Contact Us</button>
        
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
