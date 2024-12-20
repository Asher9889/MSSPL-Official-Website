import ContentWrapper from "../contentWrapper/ContentWrapper";
import { requirement_analysis } from "../../assets";
import { LuDot } from "react-icons/lu";

const requirementsAnalysis = [
  {
    title: "Research on Application Requirements",
    description:
      "This document includes the URLs that are the web application and similar to the current project, which will be used to elicit the requirements. It also contains the necessary user name and password for the research sites, along with the research report where required. This type of document can also include the user questionnaire interviews if necessary.",
  },
  {
    title: "Research on Technical Issues [Developer View]",
    description:
      "This section covers technical issues that developers will need to consider, focusing on the developer’s perspective and resolving challenges related to the application.",
  },
  {
    title: "Application Basic Features [User View ? Top Level]",
    description:
      "This document includes the basic key features for the current project. This describes the application from a very top-level point of view, so that anyone can understand the system very quickly and easily. It also helps the developer to identify and articulate the development process from a very early stage.",
  },
  {
    title: "Use Cases [User/Developer View ? Top Level]",
    description:
      "This includes text and diagrams that illustrate how all the application features and sub-features are acting and communicating through various stages of usage and workflow. It helps the user and developer to understand and identify system processes from a basic, initial, and top-level point of view.",
  },
  {
    title: "User Interface Specification [User/Developer View ? Mid Level]",
    description:
      "This document is useful while building the application. Through this specification, the client gets an initial idea about what the system is, and it becomes easy for the client to verify and confirm whether they are going to get all the required features. We can use Microsoft doc (for wireframes) or simply static HTML layouts to illustrate the UI.",
  },
  {
    title: "User Requirements Specification [User/Developer View ? Low Level]",
    description:
      "This document includes the detailed specification of the application. Basically, this is the detailed description of the basic features that have been identified.",
  },
  {
    title: "Architecture",
    points: [
      "Security model",
      "Skinning and page settings",
      "Global data transfer among pages",
    ],
  },
  {
    title: "Identifying the Modules & Module Boundaries [Top Level]",
    description:
      "It describes the basic, core modules that are being considered to be developed. This is especially useful while working with large-scale projects. Although this is used to define the system boundaries from a top-level view, defining the sub-modules as well makes the future development process more requirement-specific and makes the complex task of integrating the modules and identifying module communication during design time easier.",
  },
  {
    title: "Data Fields [User/Developer View ? Low Level]",
    description:
      "The data fields of the application have been identified in this step. Database schema, relations, and data fields are recognized and validated with the client to ensure that the current requirement analysis grabs all the required things.",
  },
  {
    title: "Time Estimation [Manager View]",
    points: [
      "According to modules",
      "According to development steps",
      "According to developer expert level",
      "According to logical tiers (as well as level of engineering)",
    ],
  },
];

const RequirementAnalysis = () => {
  return (
    <div className="w-full documentation-container my-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[1.8rem] underline hover:scale-[1.09] transition-all duration-300">
          {"Requirement Analysis Steps while Developing Software".toUpperCase()}
        </h1>
        <img
          className="w-[80vw] mx-auto  border-[1px] border-zinc-200 my-20 drop-shadow-xl hover:scale-[1.09] transition-all duration-300"
          src={requirement_analysis}
          alt=""
        />
        {requirementsAnalysis.map((obj, index) => (
          <section
            key={index * 10}
            className="mb-8 transition-all duration-200"
          >
            <h2 className=" font-bold mb-4 text-[--main-text-color] poppins-bold flex flex-row items-center text-2xl">
              <LuDot /> {obj.title}
            </h2>
            {obj.description && (
              <p className="text-[18px] hover:scale-[1.009] transition-all duration-200  text-zinc-700 px-10 poppins-regular">
                {obj.description}
              </p>
            )}
            {obj.points &&
              obj.points.map((point, index) => (
                <ul
                  key={index * 10}
                  className="list-disc ml-5 text-base text-zinc-700 px-10 poppins-regular"
                >
                  <li className="">
                    <strong>{point}</strong>
                  </li>
                </ul>
              ))}
            {obj.subPoints &&
              obj.subPoints.map((obj, index) => (
                <ul
                  key={index * 10}
                  className="list-disc ml-5 text-base text-zinc-700 px-10 poppins-regular"
                >
                  <li className="">
                    <strong>{obj.title}</strong>
                    <strong>{obj.description}</strong>
                  </li>
                </ul>
              ))}
          </section>
        ))}
      </ContentWrapper>
    </div>
  );
};

export default RequirementAnalysis;
