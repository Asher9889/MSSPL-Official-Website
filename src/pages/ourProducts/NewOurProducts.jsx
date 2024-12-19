import { ContentWrapper } from "../../components";
import { vwms, elib, vts, dms, attandence } from "../../assets";
import "./style.css";

const NewOurProducts = () => {
  return (
    <div className="">
      <ContentWrapper>
        <div>
          <h1 className="poppins-bold text-[36px] text-[--main-text-color]">
            SOFTWARE PRODUCTS <br />
            <span className="text-[]">WE HAVE:</span>
          </h1>
          <div className="mt-10 flex flex-row flex-wrap gap-4">
            {/* BIG  */}

            <div className="w-[410px] h-[85vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px] ">
                VEHICLE WORKSHOP MANAGEMENT SYSTEM
              </p>
              <div className="w-full   mt-2  p-4 pic-blur drop-shadow-2xl mt-4">
                {/* <img
                  className=" mx-auto rounded-md h-76 object-cover "
                  src={vwms}
                  alt="vwms"
                /> */}

                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="h-[380px] object-cover"
                        src={vwms}
                        alt="vwms"
                      />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeMiterlimit="2" strokeLinejoin="round" fill-rule="evenodd" clip-rule="evenodd"><path fill-rule="nonzero" d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z"></path></svg> */}
                    </div>
                    <div className="content">
                      {/* <p className="heading">Card Hover</p> */}
                      <p className="text-[--main-text-color] poppins-bold">
                        (Vehicle Workshop Management System) Streamline workflow
                        from scheduling and inventory to invoicing, boosting
                        efficiency and profit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SMALL */}
            <div className="w-[410px] h-[85vh] bg-[--pink-color] rounded-3xl px-8 py-16  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px]">
                E-LIBRARY
              </p>
              <div className="w-full  mt-2 mx-auto  p-4 pic-blur drop-shadow-2xl mt-4">
                {/* <img
                  className=" mx-auto rounded-md h-[60vh] object-cover "
                  src={elib}
                  alt="vwms"
                /> */}
                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="w-68 object-fill"
                        src={elib}
                        alt="vwms"
                      />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeMiterlimit="2" strokeLinejoin="round" fill-rule="evenodd" clip-rule="evenodd"><path fill-rule="nonzero" d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z"></path></svg> */}
                    </div>
                    <div className="content">
                      {/* <p className="heading">Card Hover</p> */}
                      <p className="text-[--main-text-color] poppins-bold">
                      Borrow e-books, audiobooks, magazines and and more from your e-library.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BIG  */}
            <div className="w-[410px] h-[85vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px]">
                VEHICLE TRACKING SYSTEM
              </p>
              <div className="w-full  mt-2  p-4 pic-blur drop-shadow-2xl mt-4">
                {/* <img
                  className=" mx-auto rounded-md h-[55vh] object-cover "
                  src={vts}
                  alt="vwms"
                /> */}
                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="h-96 object-fill"
                        src={vts}
                        alt="vts"
                      />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeMiterlimit="2" strokeLinejoin="round" fill-rule="evenodd" clip-rule="evenodd"><path fill-rule="nonzero" d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z"></path></svg> */}
                    </div>
                    <div className="content">
                      {/* <p className="heading">Card Hover</p> */}
                      <p className="text-[--main-text-color] poppins-bold">
                      Uses GPS to monitor location, status, and real-time insights for improved efficiency and security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SMALL */}

            <div className="w-[410px] h-[85vh] bg-[--pink-color] rounded-3xl px-8 py-16  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px]">
                DOCUMENT MANAGEMENT SYSTEM
              </p>
              <div className="w-full  mt-2  p-4 pic-blur drop-shadow-2xl mt-4">
                {/* <img
                  className=" mx-auto rounded-md h-[52vh] object-cover "
                  src={dms}
                  alt="vwms"
                /> */}
                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="h-96 object-fill"
                        src={dms}
                        alt="dms"
                      />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeMiterlimit="2" strokeLinejoin="round" fill-rule="evenodd" clip-rule="evenodd"><path fill-rule="nonzero" d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z"></path></svg> */}
                    </div>
                    <div className="content">
                      {/* <p className="heading">Card Hover</p> */}
                      <p className="text-[--main-text-color] poppins-bold">
                      Organize, store, search and share documents effortlessly with a Document Management System.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BIG  */}

            <div className="w-[410px] h-[85vh] bg-[--heading-blue-color] px-8 py-16 rounded-3xl  cursor-pointer">
              <p className="w-full text-white poppins-bold text-[32px] leading-[36px]">
                ATTENDANCE MANAGEMENT SYSTEM
              </p>
              <div className="w-full  mt-2  p-4 pic-blur drop-shadow-2xl mt-4">
                {/* <img
                  className=" mx-auto rounded-md h-[52vh] object-cover "
                  src={attandence}
                  alt="vwms"
                /> */}
                <div className="card-container mx-auto">
                  <div className="card">
                    <div className="img-content">
                      <img
                        className="h-96 object-fill"
                        src={attandence}
                        alt="attandence"
                      />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeMiterlimit="2" strokeLinejoin="round" fill-rule="evenodd" clip-rule="evenodd"><path fill-rule="nonzero" d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z"></path></svg> */}
                    </div>
                    <div className="content">
                      {/* <p className="heading">Card Hover</p> */}
                      <p className="text-[--main-text-color] poppins-bold">
                      Organize, store, search and share documents effortlessly with a Document Management System.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default NewOurProducts;
