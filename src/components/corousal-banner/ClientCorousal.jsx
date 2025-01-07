import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { universityC1, universityC2, universityC3, corporateC1, valuableC1 } from "../../utils/links/links.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const photos = [corporateC1, valuableC1,  universityC1, universityC2, universityC3];

function ClientCorousal() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <ContentWrapper>
       {/* <p className="text-center poppins-bold text-[--main-text-color] mb-8 text-3xl mt-[15vh] mb-[10vh]">
        OUR  CLIENTS
      </p> */}
    
    <div className="hidden lg:block w-full h-[628px] my-20 bg-transparent">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index * 20}>
          <img className="w-[1200px] h-[628px] bg-transparent" src={photo} alt="" />
        </SwiperSlide>
        ))}
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
    </ContentWrapper>
  );
}

export default ClientCorousal;
