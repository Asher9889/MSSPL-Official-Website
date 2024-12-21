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
      "Our Head Quarter office is based in Gumti No.5, Kanpur Nagar, India. We welcome clients to visit us",
  },
  {
    title: "10 lakhs+ users",
    icon: "🧑‍💻",
    description:
      "Over 10 lakhs+ people in India use the apps and softwares we have developed for our clients",
  },
];
const WorkSatisfaction = () => {
  return (
    <div className="w-full  pt-32 pb-32 ">
      <ContentWrapper>
        <div className="w-full">
            <div className="flex flex-row flex-wrap gap-20 md:gap-28">
                <div className="w-full flex-1 ">
                    <h1 className="poppins-bold text-[32px] text-[--main-text-color]">
                        <span className="text-gradient">
                        Multifacet Software Systems Pvt. Ltd.
                        </span>
                        <br /> - SOFTWARE DEVELOPMENT COMPANY WITH A  UNIQUE APPROACH
                    </h1>
                </div>

                <div className="flex-1 poppins-regular text-[18px] text-[--main-text-color]">
                    <p className="text-wrap w-full font-semibold">
                        In 19+ years of work, we have helped more than 35 companies
                        develop their products. We have successfully completed various projects like Library Management , Vehicle tracking, Mobile Software, Retail sales software, E-commerce Website Design Development and many more can be added to our credit. We are trusted by
                        companies around the India.
                    </p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap md:gap-8">
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
