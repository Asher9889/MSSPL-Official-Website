
import "./style.css";
/* eslint-disable */
const ProductCard = ({name, description, img}) => {
  return (
    <>
    
        <div className="card">
          <div className="card__image w-full h-40 flex justify-center items-center">
            <img className="w-52" src={img} alt="" />
          </div>
          <div className="card__content pt-4 flex flex-col gap-2">
              <span className="title">{name}</span>
              <p>{description}</p>
          </div>
        </div>
    </>
  );
};

export default ProductCard;
