import ContentWrapper from "../contentWrapper/ContentWrapper";
import { requirement_analysis } from "../../assets";
import { LuDot } from "react-icons/lu";
import { requirementsAnalysis } from "../../utils/values/data";


const RequirementAnalysis = () => {
  return (
    <div className="w-full documentation-container my-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
          {"Requirement Analysis Steps while Developing Software".toUpperCase()}
        </h1>
        <img
          className="w-[80vw] mx-auto  border-[1px] border-zinc-200 my-20 drop-shadow-xl hover:scale-[1.02] transition-all duration-300"
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
