import ContentWrapper from "../contentWrapper/ContentWrapper";
import { mobile_dev } from "../../assets";

const AndroidApps = () => {
  return (
    <section className="my-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
          {"Android Software Development".toUpperCase()}
        </h1>
        <img
          className="w-[80vw] mx-auto  border-[1px] border-zinc-200 my-20 drop-shadow-xl hover:scale-[1.02] transition-all duration-300"
          src={mobile_dev}
          alt="mobile_dev"
        />
        <p className="text-[18px] hover:scale-[1.009] transition-all duration-200  text-[--main-text-color] px-10 poppins-regular">
          The Android Software Development Kit (SDK) is actually a collection of
          tools that will help you make Android apps. There&apos;s more outside
          the SDK that we&apos;ll discuss, but here are some of the most helpful
          tools in the SDK:
        </p>
      </ContentWrapper>
    </section>
  );
};

export default AndroidApps;
