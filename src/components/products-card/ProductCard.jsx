
import "./style.css";
/* eslint-disable */
const ProductCard = ({name, description, img}) => {
  return (
    <>
    
        <div className="card ">
          <div className="card__image w-full h-40 flex justify-center items-center">
            <img className="w-48" src={img} alt="" />
          </div>
          <div className="card__content pt-4 flex flex-col gap-2  hover:scale-[1.03] transition-all duration-300 ">
              <span className="title text-xl w-full poppins-bold">{name}</span>
              <p className="poppins-regular">{description}</p>
          </div>
        </div>
    </>
  );
};

export default ProductCard;
