import { LuDot } from "react-icons/lu";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { accepting_testing } from "../../assets";


const AcceptanceTesting = ()=>{

    const acceptanceTestingData = [
        {
          title: "Definition",
          description:
            "Acceptance Testing is a level of the software testing process where a system is tested for acceptability. The purpose of this test is to evaluate the system's compliance with the business requirements and assess whether it is acceptable for delivery."
        },
        {
          title: "Analogy",
          description:
            "During the process of manufacturing a ballpoint pen, the cap, the body, the tail and clip, the ink cartridge, and the ballpoint are produced separately and unit tested separately. When two or more units are ready, they are assembled and Integration Testing is performed. When the complete pen is integrated, System Testing is performed. Once the System Testing is complete, Acceptance Testing is performed to confirm that the ballpoint pen is ready to be made available to the end-users."
        },
        {
          title: "Method",
          description:
            "Usually, Black Box Testing method is used in Acceptance Testing. Testing does not usually follow a strict procedure and is not scripted but is rather ad-hoc."
        },
        {
          title: "Tasks",
          points: [
            "Acceptance Test Plan",
            "Prepare",
            "Review",
            "Rework",
            "Baseline"
          ]
        },
        {
          title: "Acceptance Test Cases/Checklist",
          points: [
            "Prepare",
            "Review",
            "Rework",
            "Baseline"
          ]
        },
        {
          title: "Acceptance Test",
          points: [
            "Perform"
          ]
        },
        {
          title: "When is it performed?",
          description:
            "Acceptance Testing is performed after System Testing and before making the system available for actual use."
        },
        {
          title: "Who performs it?",
          subPoints: [
            {
              title: "Internal Acceptance Testing (Alpha Testing)",
              description:
                "Performed by members of the organization that developed the software but who are not directly involved in the project (Development or Testing). Usually, it is the members of Product Management, Sales, and/or Customer Support."
            },
            {
              title: "External Acceptance Testing",
              description:
                "Performed by people who are not employees of the organization that developed the software."
            },
            {
              title: "Customer Acceptance Testing",
              description:
                "Performed by the customers of the organization that developed the software. They are the ones who asked the organization to develop the software for them. This applies when the software is not owned by the organization that developed it."
            },
            {
              title: "User Acceptance Testing (Beta Testing)",
              description:
                "Performed by the end users of the software. They can be the customers themselves or the customers’ customers."
            }
          ]
        },
        {
          title: "Definition by ISTQB",
          description:
            "Acceptance testing: Formal testing with respect to user needs, requirements, and business processes conducted to determine whether or not a system satisfies the acceptance criteria and to enable the user, customers, or other authorized entity to determine whether or not to accept the system."
        }
      ];
      
    return (
        <div className="w-full documentation-container my-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
          {"Requirement Analysis Steps while Developing Software".toUpperCase()}
        </h1>
        <img
          className="w-[80vw] mx-auto  border-[1px] border-zinc-200 my-20 drop-shadow-xl hover:scale-[1.02] transition-all duration-300"
          src={accepting_testing}
          alt=""
        />
        {acceptanceTestingData.map((obj, index) => (
          <section key={index * 10} className="mb-8 transition-all duration-200">
            <h2 className=" font-bold mb-4 text-[--main-text-color] poppins-bold flex flex-row items-center text-2xl">
             <LuDot/> {obj.title}
            </h2>
            {obj.description && <p className="text-[18px] hover:scale-[1.009] transition-all duration-200  text-zinc-700 px-10 poppins-regular">
              {obj.description}
            </p>}
            {obj.points && obj.points.map((point, index) => (<ul key={index * 10} className="list-disc ml-5 text-base text-zinc-700 px-10 poppins-regular">
            <li className="">
              <strong>{point}</strong>
            </li>
            
          </ul>))}
          {obj.subPoints &&
              obj.subPoints.map((obj, index) => (
                <ul
                  key={index * 10}
                  className="list-disc ml-5 text-base text-zinc-700 px-10 poppins-regular"
                >
                  <li className="">
                    <strong>{obj.title} </strong>
                    <strong>{obj.description} </strong>
                  </li>
                </ul>
              ))}
        </section>
        ))}
        
      </ContentWrapper>
    </div>
    )
}

export default AcceptanceTesting;