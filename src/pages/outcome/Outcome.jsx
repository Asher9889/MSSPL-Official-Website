const Outcome = () => {

    const data = [
        {
          value: "200+",
          description: "Developed custom solutions",
        },
        {
          value: "25+",
          description: "Countries, including the USA",
        },
        {
          value: "3+",
          description: "Years’ Client engagement",
        },
        {
          value: "70%",
          description: "Senior engineers",
        },
        {
          value: "98%",
          description: "Satisfaction rate",
        },
      ];
      
      
  return (
    <section className=" w-full mt-[10%]">
      <div className="flex flex-row gap-20  ">
        <p className="flex-1  poppins-medium text-[3rem] leading-[4rem] text-zinc-900">
          For <b className="text-[--contactUs-btn-hover]">12+ years</b> now we
          have been responsible for your projects and we are proud of it!
        </p>
        <div className="flex-1 flex flex-row gap-4 flex-wrap">
            {data.map(data => (
                <span key={data.value} className=" w-40">
                <p className="text-[3rem] poppins-regular text-blue-950">{data.value}</p>
                <p className="text-zinc-600 text-[1rem] font-semibold">{data.description}</p>
            </span>
            ))}
           
        </div>
      </div>
    </section>
  );
};

export default Outcome;
