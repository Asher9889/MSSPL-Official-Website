import { ContentWrapper } from "../../components";

const NewOurProducts = () => {
  return (
    <div className="bg-[--main-black-color]">
      <ContentWrapper>
        <div>
          <h1 className="poppins-bold text-[36px] text-white">
            SOFTWARE PRODUCTS <br />
            <span className="text-[--yellow-color]">WE HAVE:</span>
          </h1>
          <div className="mt-10 flex flex-row flex-wrap gap-4">
            {/* BIG  */}
            <div className="w-[410px] h-[80vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl">
              <p className="w-full text-white poppins-bold text-[36px] leading-[36px]">
                BANKING AND FINANCE
              </p>
            </div>
            {/* SMALL */}
            <div className="w-[410px] h-[40vh] bg-[--pink-color] rounded-3xl px-8 py-16">
              <p className="w-full text-white poppins-bold text-[36px] leading-[36px]">
                SOCIAL MEDIA & VIDEO STREAMING
              </p>
            </div>
            {/* BIG  */}
            <div className="w-[410px] h-[80vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl">
              <p className="w-full text-white poppins-bold text-[36px] leading-[36px]">
                BANKING AND FINANCE
              </p>
            </div>
            {/* SMALL */}
            <div className="w-[410px] h-[40vh] bg-[--pink-color] rounded-3xl px-8 py-16">
              <p className="w-full text-white poppins-bold text-[36px] leading-[36px]">
                SOCIAL MEDIA & VIDEO STREAMING
              </p>
            </div>
            {/* BIG  */}
            <div className="w-[410px] h-[80vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl">
              <p className="w-full text-white poppins-bold text-[36px] leading-[36px]">
                BANKING AND FINANCE
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
  {/* First column */}
  <div className="bg-red-500 h-[80vh] w-[410px]">g</div>

  {/* Second column */}
  <div className="bg-yellow-500 h-[40vh] w-[410px]">ref</div>

  {/* Third column */}
  <div className="bg-pink-500 h-[80vh] w-[410px]">gg</div>

  {/* Item below the second column */}
  <div className="bg-yellow-500 h-[40vh] w-[410px] md:col-start-2">ref</div>

  {/* Item below the third column */}
  <div className="bg-pink-500 h-[80vh] w-[410px]">gg</div>

  {/* Last item below the second column */}
  <div className="bg-yellow-500 h-[40vh] w-[410px] md:col-start-2">ref</div>
</div>

        </div>
      </ContentWrapper>
    </div>
  );
};

export default NewOurProducts;
