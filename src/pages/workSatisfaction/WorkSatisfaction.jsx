import { ContentWrapper, DevServiceCard } from "../../components";
import { IoStar } from "react-icons/io5";

const qualities = [
  {
    title: "5 stars",
    icon: <IoStar />,
    description:
      "Our clients give us an average rating of 5 stars . They appreciate our experience and quality.",
  },
  {
    title: "hq office",
    // icon: <IoStar />,
    description:
      "Our Head Quarter office is based in Poland, Warsaw, where we welcome clients to visit us",
  },
  {
    title: "2m+ users",
    icon: "🧑‍💻",
    description:
      "Over 2 million people worldwide use the apps we have developed for our clients",
  },
];
const WorkSatisfaction = () => {
  return (
    <div className="w-full bg-[--main-black-color] pt-32 pb-32">
      <ContentWrapper>
        <div className="w-full">
            <div className="flex flex-row flex-wrap gap-20 md:gap-28">
                <div className="w-full flex-1 ">
                    <h1 className="poppins-bold text-[36px] text-white">
                        <span className="text-[--yellow-color]">
                        MSSPL SOFTWARE PVT LTD
                        </span>
                        <br /> - SOFTWARE DEVELOPMENT COMPANY WITH A <br /> UNIQUE{" "}
                        <span className="text-[--red-strip-color]">APPROACH</span>
                    </h1>
                </div>

                <div className="flex-1 poppins-regular text-[18px] text-white">
                    <p className="text-wrap w-full">
                        In 4+ years of work, we have helped more than 35 companies
                        develop their products and enter the market. We are trusted by
                        companies around the world. We work with
                        the USA USA Europe Europe UAE UAE Australia Australia and other
                        countries.
                    </p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap md:gap-6">
                {qualities.map((quality, index) => (
                <DevServiceCard
                    key={index * 10}
                    title={quality.title}
                    icon={quality.icon}
                    description={quality.description}
                />
                ))}
            </div>
        </div>
        
      </ContentWrapper>
    </div>
  );
};

export default WorkSatisfaction;
