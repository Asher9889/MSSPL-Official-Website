import { ContentWrapper } from "../../components";
import { eye, laptop, mobileDev } from "../../assets";
import DevServices from "../../components/devServices/DevServices";

const services = [
  "Web design",
  "Frontend web development",
  "Backend development",
  "Node.js development",
  "React web development",
  "JavaScript development",
  "MVP software development",
  "Custom web development",
  "Full stack web development",
];

const mobileServices = [
    "Mobile app design",
    "iOS app development",
    "Mobile app testing",
    "Android app development",
    "Cross-platform development",
    "Hybrid app development",
    "React Native app development",
  ];
  

const OurServices = () => {
  return (
    <section className=" bg-[--main-black-color] pt-44 ">
      <ContentWrapper>
        <div>
          <h1 className="poppins-bold text-white text-[28px] md:text-[36px]">
            {"our software".toLocaleUpperCase()} <br />{" "}
            {"development services".toLocaleUpperCase()}{" "}
            <img className="w-14 inline" src={eye} alt="eye" />
          </h1>
          <DevServices title={"web development"} titleColor={"text-white"} img={laptop} services={services} bg={"bg-[--red-strip-color]"}/>
          <DevServices title={"Mobile app development"} titleColor={"text-black"} img={mobileDev} services={mobileServices} bg={"bg-white"} />
        </div>
      </ContentWrapper>
    </section>
  );
};

export default OurServices;
