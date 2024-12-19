import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "../../assets";
import { Virtual, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
// import { ImGift } from "react-icons/im";

const slides = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
];

const LogoCorousel = () => {
  // Create array with 1000 slides

  return (
    <div className="py-20 pt-[15vh]">
      <p className="text-center poppins-bold text-[--main-text-color] mb-8 text-3xl mb-[10vh]">
        OUR  CLIENTS
      </p>
      <Swiper
        modules={[Virtual, Autoplay]}
        spaceBetween={80}
        slidesPerView={4}
        virtual
        autoplay={{
          delay: 50, // No delay between transitions
          disableOnInteraction: false, // Continue autoplay even when user interacts
        }}
        speed={10000} // Transition speed in milliseconds
        loop={true} // Enable infinite scrolling
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <div className="flex flex-row justify-center">
              <img className="    md:h-[10vw]" src={slideContent} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCorousel;
