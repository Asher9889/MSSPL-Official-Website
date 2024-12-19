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
    <section className=" pt-44 pb-20">
      <ContentWrapper>
        <div>
          <h1 className="poppins-bold text-[--main-text-color] text-[28px] md:text-[36px]">
            {"our software".toLocaleUpperCase()} <br />{" "}
            {"development services".toLocaleUpperCase()}{" "}
            <img className="w-14 inline" src={eye} alt="eye" />
          </h1>
          <DevServices title={"web development"} titleColor={"text-[--dark-heading-color]"} img={laptop} services={services} bg={"bg-[--card-bg-color]"}/>
          <DevServices title={"Mobile app development"} titleColor={"text-[--dark-heading-color]"} img={mobileDev} services={mobileServices} bg={"bg-[--card-bg-color]"} />
        </div>
      </ContentWrapper>
    </section>
  );
};

export default OurServices;
