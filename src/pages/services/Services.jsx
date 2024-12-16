import { ContentWrapper } from "../../components";
import { cSoftwareDev, wSoftwareDev, uiux, mobileDev,  qualityAssurance, techSupport, ProjManagment } from "../../utils/links/links";
import { GoSquareFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

const data = [
  {
    title: " Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",
  },
  {
    title: "Web application Development",
    pic: wSoftwareDev,
    paragraph1: "Frontend development",
    paragraph2: "Backend development",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance of lagacy system",
  },
  {
    title: "UI/UX Design",
    pic: uiux,
    paragraph1: "Mobile app design",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",
  },
  {
    title: " Mobile App Development",
    pic: mobileDev,
    paragraph1: "IOS app development",
    paragraph2: "Android App development",
    paragraph3: "Cross Platfrom development",
    // paragraph4: "Maintenance",
  },
  // {
  //   title: "DevOps",
  //   pic: devOps,
  //   paragraph1: "Web and mobile application development",
  //   paragraph2: "Business analysis",
  //   paragraph3: "Software architecture",
  //   paragraph4: "Maintenance",
  // },
  {
    title: "Quality Assurance",
    pic: qualityAssurance,
    paragraph1: "Manual Testing",
    paragraph2: "Automation Testing",
    paragraph3: "Functional Testing",
    paragraph4: "Security Testing",
  },
  {
    title: "Technical Support",
    pic: techSupport,
    paragraph1: "Software Maintenance",
    paragraph2: "Infrastructure Support",
    // paragraph3: "Infrastructure Support",
    // paragraph4: "Maintenance",
  },
  {
    title: "Project Managemnt",
    pic: ProjManagment,
    paragraph1: "Project portfolio management",
    paragraph2: "Change management",
    paragraph3: "Project management consultation",
    paragraph4: "Project scoping and delivary",
  },
  // {
  //   title: " Custom Software Development",
  //   pic: cSoftwareDev,
  //   paragraph1: "Web and mobile application development",
  //   paragraph2: "Business analysis",
  //   paragraph3: "Software architecture",
  //   paragraph4: "Maintenance",
  // },
];

const Services = () => {
  return (
    <section className="w-full mt-20">
      <ContentWrapper>
        <div className="">
          {/* top */}
          <h1 className="poppins-semibold text-[2.5rem] my-8">
            Services we offer
          </h1>
          {/* bottom */}
          <div className="flex flex-row justify-center md:justify-between flex-wrap gap-4 ">
            {data.map((elem, index) => (
              <div
                key={index}
                className="w-[380px] h-[400px] relative text-white bg-red-800"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent" />
                <img
                  className="w-full h-full  top-0 absolute object-cover"
                  src={elem.pic}
                  alt=""
                />

                {/* <div className="bg-geadient-to-t from-black to-transparent"> */}

                <div className="flex flex-col  absolute bottom-0 p-4">
                  <div className="  relative z-10 ">
                    <h1 className="w-72 poppins-semibold text-[1.5rem] leading-[2rem] text-wrap ">
                      {elem.title}
                    </h1>
                  </div>

                  

                  <ul className="w-full   relative z-10 ">
                    <li className="flex flex-row text-wrap ">
                      <GoSquareFill />
                      {elem.paragraph1}
                    </li>
                    <li className="flex flex-row text-wrap items-center">
                      <GoSquareFill />
                      {elem.paragraph2}
                    </li>
                    {elem.paragraph3 && <li className="flex flex-row text-wrap items-center">
                      <GoSquareFill />
                      {elem.paragraph3}
                    </li>}
                    {elem.paragraph4 && <li className="flex flex-row text-wrap items-center">
                      <GoSquareFill />
                      {elem.paragraph4}
                    </li>}
                  </ul>
                  

                  <span className="relative z-10">
                    <p className="flex flex-row gap-4 items-center poppins-regular text-cyan-600">
                      See more <IoIosArrowRoundForward className="text-4xl" />
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Services;
