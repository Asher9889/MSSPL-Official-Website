/* eslint-disable */
const DevServices = ({services, img, bg, title, titleColor})=>{
    return(
        <div className={`w-full ${bg} mt-20 rounded-[50px] p-4 py-10 md:p-8`}>
            <span className="flex flex-row items-center gap-4">
              <img className="w-10 inline" src={img} alt="laptop" />
              <h1 className={`poppins-bold text-[26px] ${titleColor} inline`}>
                {title?.toLocaleUpperCase()}
              </h1>
            </span>
            <div className="text-white mt-10  text-[20px]   flex flex-row flex-wrap gap-4">
              {services?.map((service, index) => (
                <span
                  key={index * 10}
                  className="flex flex-row gap-2 items-center bg-[--button-bg-color] hover:bg-[--button-bg-hover-color] transition-all duration-300 w-fit rounded-full  px-4 py-2"
                >
                  <span className="w-8 h-8 rounded-full bg-white" />
                  <p className="poppins-regular hover:scale-[1.009] transition-all duration-300">{service}</p>
                </span>
              ))}
            </div>
          </div>
    )
}

export default DevServices;