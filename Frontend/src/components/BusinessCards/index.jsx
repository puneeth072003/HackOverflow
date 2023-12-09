import "./style.css";

const BusinessCards = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[1rem]">
      <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[2.5rem] py-[1rem] font-[600]">
        Features
      </h1>
      <div className="flex justify-center items-center flex-wrap content-center gap-[2.5rem]">
        <div
          data-function="card"
          className="flex justify-center items-center rounded-[14px] w-[20vw] h-[30vh] bg-[#313942] border-[0px] border-[#fff] hover:bg-[#FF007A] hover:border-[1px] "
        >
          <h2 className="font-['Cairo'] font-[600] text-[1.5rem]">Transcription</h2>
        </div>
        <div
          data-function="card"
          className="flex justify-center items-center rounded-[14px] w-[20vw] h-[30vh] bg-[#313942] border-[0px] border-[#fff] hover:bg-[#FF007A] hover:border-[1px] "
        >
          <h2 className="font-['Cairo'] font-[600] text-[1.5rem]">Notification</h2>
        </div>
        <div
          data-function="card"
          className="flex justify-center items-center rounded-[14px] w-[20vw] h-[30vh] bg-[#313942] border-[0px] border-[#fff] hover:bg-[#FF007A] hover:border-[1px] "
        >
          <h2 className="font-['Cairo'] font-[600] text-[1.5rem]"></h2>
        </div>
        <div
          data-function="card"
          className="flex justify-center items-center rounded-[14px] w-[20vw] h-[30vh] bg-[#313942] border-[0px] border-[#fff] hover:bg-[#FF007A] hover:border-[1px] "
        >
          <h2 className="font-['Cairo'] font-[600] text-[1.5rem]"></h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessCards;
