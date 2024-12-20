import { LuDot } from "react-icons/lu";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { project_design } from "../../assets";

const ProjectDesign = ()=>{

    const projectDesignData = [
        {
          title: "Definition",
          description:
            "In the Project Design Stage, the Project Manager details how the project will be managed and governed. The Project Plan is targeted at funders, management, and Project Managers. It is used in all later stages to manage the project."
        },
        {
          title: "Key Difference",
          description:
            "Project Design differs from the Operational Planning Stage in that you are thinking at a higher level about managing the project."
        },
        {
          title: "Key Considerations",
          points: [
            "How will decisions be made and who has the authority?",
            "If the Implementation Phase must happen in August, then when does the money have to be secured to start the project?",
            "What staff training is required and when?"
          ]
        }
      ];
      
    return (
        <div className="w-full  my-20">
        <ContentWrapper>
          <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
            {"project design".toUpperCase()}
          </h1>
          <img
            className="w-[80vw] mx-auto  border-[1px] border-zinc-200 my-20 drop-shadow-xl hover:scale-[1.02] transition-all duration-300"
            src={project_design}
            alt=""
          />
          {projectDesignData.map((obj, index) => (
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

export default ProjectDesign;