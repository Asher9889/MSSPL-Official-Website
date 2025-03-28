import { ContentWrapper } from "../../components";
import vehicle from "../../assets/vehicle.png";
import vWorkShop from "../../assets/vWorkShop.png";

import { docs, smartClass, kiosk, facial, inventory } from "../../assets";

const data = [
    {
        title: " Vehicle Tracking Systems",
        img: vehicle
    },
    {
        title: "Vehicle WorkShop Management System",
        img: vWorkShop
    },
    {
        title: "E-Library Management System",
        img: ""
    },
    {
        title: "Document Management System",
        img: docs
    },
    {
        title: "Smart Class",
        img: smartClass
    },
    {
        title: "Kiosk",
        img: kiosk
    },
    {
        title: "Facial Recognition System",
        img: facial
    },
    {
        title: "Inventory Management System",
        img: inventory
    },
]
const OurProducts = () => {
  return (
    <div className="w-full mt-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[36px] text-[--main-text-color]  ">
          OUR PRODUCTS :
        </h1>
        <div className="w-full flex flex-row flex-wrap gap-[10%] justify-center ">
          {data.map((product)=> (
                <div key={product.title} className="w-[40%]  py-4">
                    <img className="h-40 w-full md:w-full md:h-96" src={product.img} alt="" />
                    <h1 className=" text-xl md:text-5xl text-bold bebas-neue-regular text-center text-gradient ">
                    {product.title}
                    </h1>
              </div>
          ))}
          
        </div>
      </ContentWrapper>
    </div>
  );
};

export default OurProducts;
