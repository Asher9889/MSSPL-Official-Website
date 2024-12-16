import { ContentWrapper } from "../../components";
import { cSoftwareDev, wSoftwareDev } from "../../utils/links/links";
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
    pic: cSoftwareDev,
    paragraph1: "Mobile app design",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",

  },
  {
    title: " Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",

  },
  {
    title: " Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",

  },
  {
    title: " Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",

  },
  {
    title: " Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",

  },
  {
    title: " Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",

  },
  {
    title: " Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",

  },
]

const Services = () => {
  return (
    <section className="mt-20">
      <ContentWrapper>
        <div className="">
          <h1 className="poppins-semibold text-[2.5rem] my-8">SERVICES WE OFFER</h1>
          <div className="relative flex flex-row justify-between flex-wrap gap-4">
           {data.map((elem,index) => (
              <div key={index} className="w-[380px] h-[400px] relative text-white bg-gradient-to-t from-black to-transparent ">
              <img
                className="w-full h-full  top-0 absolute object-cover"
                src={elem.pic}
                alt=""
              />
              <div className="flex flex-col gap-6 justify-center mt-6 bg-green-500 px-4 ">
                <div className="relative z-10">
                  <h1 className="w-72 poppins-semibold text-[1.5rem] leading-[2rem] text-wrap ">
                    {elem.title}
                  </h1>
                </div>

                <ul className="w-full  relative z-10">
                  <li className="flex flex-row text-wrap ">
                    <GoSquareFill />
                    {elem.paragraph1}
                  </li>
                  <li className="flex flex-row text-wrap items-center">
                    <GoSquareFill />
                    {elem.paragraph2}
                  </li>
                  <li className="flex flex-row text-wrap items-center">
                    <GoSquareFill />
                    {elem.paragraph3}
                  </li>
                  <li className="flex flex-row text-wrap items-center">
                    <GoSquareFill />
                    {elem.paragraph4}
                  </li>
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
