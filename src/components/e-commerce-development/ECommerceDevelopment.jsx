import ContentWrapper from "../contentWrapper/ContentWrapper";
import { ecommerce } from "../../assets";

const ECommerceDevelopment = () => {
  return (
    <section className="my-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
          {"E-Commerce Development".toUpperCase()}
        </h1>
        <img
          className="w-[80vw] mx-auto  border-[1px] border-zinc-200 my-20 drop-shadow-xl hover:scale-[1.02] transition-all duration-300"
          src={ecommerce}
          alt="mobile_dev"
        />
        <p className="text-[18px] hover:scale-[1.009] transition-all duration-200  text-[--main-text-color] px-10 poppins-regular">
          A project proposal is We build ecommerce Solutions Websites, ecommerce
          shopping cart, ecommerce store front & custom ecommerce websites,
          which helps you to turn visitors into customers. Integrating
          communications, data management and security, we offer Ecommerce
          solutions to businesses. 
        </p> <br />
        <p className="text-[18px] hover:scale-[1.009] transition-all duration-200  text-[--main-text-color] px-10 poppins-regular">E-commerce website design and development
          services to SMEs that can be conveniently implemented without
          compromising anything on the flexibility and operational efficiency of
          your e-commerce store. iSearch Solution helps in building your
          eCommerce Store by implementing some of the best practices and
          features of the industry like Advance Search, Secure Payment Gateway,
          Call to Action Buttons, Smooth Order Process, Help & Tool Tips and
          User Friendly Navigation.</p>
      </ContentWrapper>
    </section>
  );
};

export default ECommerceDevelopment;
