import { LuDot } from "react-icons/lu";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { project_proposal } from "../../assets";


const projectProposalData = [
    {
      title: "Definition",
      description:
        "A project proposal is written to make an offer and to try to convince a supervisor or a future customer to accept it. In a project proposal, you state that, in exchange for time and/or money, you will give them something that they want (an analysis of a procedure, for example), make something they desire (a prototype of a new product), or do something they wish to have done (redesign an existing structure)."
    },
    {
      title: "Description",
      description:
        "Proposals are directed toward a potential sponsor, such as an organization, a funding agency, etc., to briefly outline:",
      points: [
        "The specific objectives of the project",
        "Technical approach to be used in solving the problem or developing the product",
        "The anticipated results of the project"
      ]
    },
    {
      title: "Questions to Answer",
      points: [
        "Is the problem sufficiently important to justify money, company time, and your effort?",
        "Is the project well defined and realistic?",
        "Have you outlined a sound approach, including your ability to perform the tasks?"
      ]
    }
  ];
  
const ProjectProposal = ()=>{
    return (
        <div className="w-full documentation-container my-20">
        <ContentWrapper>
          <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[1.8rem] underline hover:scale-[1.09] transition-all duration-300">
            {"Requirement Analysis Steps while Developing Software".toUpperCase()}
          </h1>
          <img
            className="w-[80vw] mx-auto  border-[1px] border-zinc-200 my-20 drop-shadow-xl hover:scale-[1.09] transition-all duration-300"
            src={project_proposal}
            alt=""
          />
          {projectProposalData.map((obj, index) => (
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

export default ProjectProposal;