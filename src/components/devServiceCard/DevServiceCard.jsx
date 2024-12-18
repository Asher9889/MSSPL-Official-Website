const DevServiceCard = ({title, icon, description}) => {
  return (
    <div className="flex flex-row mt-20 border-[1px] border-zinc-800 rounded-3xl">
      <div className="px-12 bg-[--card-bg-color] w-[400px] h-[300px] rounded-3xl text-[20px] flex flex-col justify-center gap-10">
        <span>
          {/* <icon className="text-yellow-500 text-[24px]" />
          {} */}
       <p className="text-[--main-text-color] text-[24px]">{icon}</p>
          <b className="text-[--main-text-color] poppins-bold">{title.toLocaleUpperCase()}</b>
        </span>
        <p className="poppins-regular text-[--main-text-color] text-[16px]">
          {description}
          
        </p>
      </div>
    </div>
  );
};

export default DevServiceCard;
