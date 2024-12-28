import { CountUpAnimation } from "../../components";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { motion } from "framer-motion";

const Outcome = () => {
  const data = [
    { value: 500, suffix: "+", description: "Developed custom solutions" },
    { value: 110, suffix: "+", description: "Working govt. projects" },
    { value: "Consistent", description: "Client engagement" },
    { value: 70, suffix: "%", description: "Senior engineers" },
    { value: 99.9, suffix: "%", description: "Satisfaction rate" },
  ];

  // Animation settings
  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  return (
    <section className="w-full mt-[10%]">
      <ContentWrapper>
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Animated Paragraph */}
          <motion.p
            className="flex-1 text-center poppins-medium text-[2rem] leading-[2.5rem] md:text-[3rem] md:leading-[4rem] text-[--main-blue-color]"
            {...textAnimation}
          >
            For <b className="text-[--button-bg-color]">19+ years</b> now we
            have been responsible for your projects and we are proud of it!
          </motion.p>

          {/* Animated Data Cards */}
          <div className="flex-1 flex flex-row justify-start justify-center gap-6 flex-wrap">
            {data.map((item, index) => (
              <motion.span
                key={index}
                className="w-64"
                {...textAnimation}
                transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
              >
                {typeof item.value === "number" ? (
                  <div className="flex items-center">
                    <CountUpAnimation
                      from={0}
                      to={item.value}
                      separator=","
                      direction="up"
                      duration={2}
                      className="text-[3rem] poppins-regular text-blue-950"
                    />
                    {item.suffix && (
                      <span className="text-[3rem] poppins-regular text-blue-950">
                        {item.suffix}
                      </span>
                    )}
                  </div>
                ) : (
                  <p className="text-[3rem] poppins-regular text-blue-950">
                    {item.value}
                  </p>
                )}
                <p className="text-zinc-600 text-[1rem] font-semibold">
                  {item.description}
                </p>
              </motion.span>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Outcome;
