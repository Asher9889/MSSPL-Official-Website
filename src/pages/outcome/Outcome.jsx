import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const Outcome = () => {
  const data = [
    {
      value: "500+",
      description: "Developed custom solutions",
    },
    {
      value: "110+",
      description: "Working govt. projects",
    },
    {
      value: "Consistent",
      description: "Client engagement",
    },
    {
      value: "70%",
      description: "Senior engineers",
    },
    {
      value: "99.9%",
      description: "Satisfaction rate",
    },
  ];

  return (
    <section className=" w-full mt-[10%]">
      <ContentWrapper>
        <div className="flex flex-col  lg:flex-row gap-20 ">
          <p className="flex-1  text-center poppins-medium text-[2rem] leading-[2.5rem] md:text-[3rem] md:leading-[4rem] text-[--main-blue-color]">
            For <b className="text-[--button-bg-color]">19+ years</b> now we
            have been responsible for your projects and we are proud of it!
          </p>
          <div className="flex-1 flex flex-row justify-start justify-center gap-4 flex-wrap ">
            {data.map((data) => (
              <span key={data.value} className="w-64">
                <p className="text-[3rem] poppins-regular text-blue-950">
                  {data.value}
                </p>
                <p className="text-zinc-600 text-[1rem] font-semibold">
                  {data.description}
                </p>
              </span>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Outcome;
