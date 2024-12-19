import ContentWrapper from "../contentWrapper/ContentWrapper";
// import { options } from "../../utils/values/data";
import { useNavigate } from "react-router";
import { headerOption } from "../../utils/values/data";


const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="relative z-10  w-full bg-[--main-bg-color]">
      <ContentWrapper>
        <div className="flex flex-row justify-between items-center py-4">
          {/* Left */}
          <div className="">logo</div>
          {/* Middle */}
          <div className="hidden lg:block  text-zinc-700">
            <div className=" flex flex-row gap-8">
              {headerOption.map((option) => (
                <div
                  onClick={() => navigate(`/${option.title.split(" ").join("_").toLowerCase().trim()}`)}
                  className="group relative cursor-pointer text-[--main-text-color] hover:scale-[1.09]  poppins-regular text-[1rem] transition duration-300"
                  key={option.title}
                >
                  <p className="">{option.title}</p>
                  <div className="absolute group-hover:block w-fit hidden bg-white border-[1px] border-zinc-200">
                    <ul className="py-2">
                      {
                        option.child.map((el) => (
                          <li onClick={(e)=> {
                            e.stopPropagation()
                            const path = `/${option.title.split(" ").join("_").toLowerCase().trim()}/${el.split(" ").join("_").toLowerCase().trim()}`
                            navigate(path)
                            // navigate("/our_processes/requirement_analysis")
                            console.log(path);
                            // console.log(el.split(" ").join("_").toLocaleLowerCase())
                          }}  className="text-nowrap text-sm poppins-regular py-2 text-[--main-text-color]  px-4 border-b-[1px] border-zinc-200 transition-all duration-300 hover:text-white hover:bg-blue-500" key={el}>{el}</li>
                        ))}

                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}

          <button
            onClick={() => navigate("/contact")}
            className="cursor-pointer px-6 py-2 rounded-md text-white poppins-regular bg-[--button-bg-color] hover:bg-[--button-bg-hover-color] transition-all duration-400"
          >
            Contact Us
          </button>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
