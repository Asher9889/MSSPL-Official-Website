import { LuDot } from "react-icons/lu";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { project_development } from "../../assets";

const ProjectDevelopment = ()=>{

    const softwareDevelopmentProcess = [
        {
          title: "Definition",
          description:
            "A software development process, also known as a software development life-cycle (SDLC), is a structure imposed on the development of a software product. Similar terms include software life cycle and software process. It is often considered a subset of systems development life cycle."
        },
        {
          title: "Purpose",
          description:
            "The process provides a structured approach to a variety of tasks or activities that take place during the development of software."
        },
        {
          title: "Life-Cycle Models",
          description:
            "There are several models for such processes, each describing different approaches to tasks or activities. A life-cycle model is considered a more general term, while a software development process is more specific. For example, specific software development processes can 'fit' the spiral life-cycle model."
        },
        {
          title: "Standardization",
          description:
            "ISO/IEC 12207 is an international standard for software life-cycle processes. It aims to define all the tasks required for developing and maintaining software."
        }
      ];
      
    return (
        <div className="w-full documentation-container my-20">
        <ContentWrapper>
          <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
            {"Project Development".toUpperCase()}
          </h1>
          <img
            className="w-[80vw] mx-auto  border-[1px] border-zinc-200 my-20 drop-shadow-xl hover:scale-[1.02] transition-all duration-300"
            src={project_development}
            alt=""
          />
          {softwareDevelopmentProcess.map((obj, index) => (
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


export default ProjectDevelopment;