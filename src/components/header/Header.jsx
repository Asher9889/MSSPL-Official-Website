import ContentWrapper from "../contentWrapper/ContentWrapper";
// import { options } from "../../utils/values/data";
import { useNavigate } from "react-router";

const headerOption = [
  {
    title: "Home",
    child: []
  },
  {
    title: "Our Processes",
    child: [
      "Requirement Analysis",
      "Acceptance Testing",
      "Project Proposal",
      "Project Design",
      "Project Development",
      "Installation",
    ],
  },
  {
    title: "Products",
    child: [
      "Library Automation System",
      "Campsys ERP Management",
      "File Tracking System",
      "Android Apps",
      "E-Commerce Development",
      "Campsys",
      "DigLib",
      "E-Secure",
    ],
  },
  {
    title: "Our Clients",
    child: [
      "Be Our Partner",
      
    ],
  },
  {
    title: "Our Technology",
    child:  []
  },
  {
    title: "About Us",
    child:  [
      "Company Profile",
      "Objectives",
      "Management & Staff",
      "IT Service"
    ]
  },
  {
    title: "Contact Us",
    child:  [
      "Press Release",
      "Career",
      "Site Map",
    ]
  },
];

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
                  onClick={() => navigate(`/${option.title.split(" ").join("_").toLocaleLowerCase().trim()}`)}
                  className="group relative cursor-pointer text-[--main-text-color] hover:scale-[1.09]  poppins-regular text-[1rem] transition duration-300"
                  key={option.title}
                >
                  <p className="">{option.title}</p>
                  <div className="absolute group-hover:block w-fit hidden bg-white">
                    <ul className="py-2">
                      {
                        option.child.map((el) => (
                          <li onClick={()=> {
                            navigate(`/${option.title.split(" ").join("_").toLocaleLowerCase().trim()}/${el.split(" ").join("_").toLocaleLowerCase().trim()}`)
                            console.log(option.title.split(" ").join("_").toLocaleLowerCase().trim()+"/"+el.split(" ").join("_").toLocaleLowerCase().trim());
                            // console.log(el.split(" ").join("_").toLocaleLowerCase())
                          }}  className="text-nowrap text-sm poppins-regular py-2 text-[--main-text-color]  px-4 border-b-[1px] border-zinc-200 transition-all duration-300 hover:text-white hover:bg-blue-500" key={el}>{el}</li>
                        ))}

                      {/* <li>Acceptance Testing</li>
                        <li>Project Proposal</li>
                        <li>Project Design</li>
                        <li>Project Development</li>
                        <li>Installation</li> */}
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
