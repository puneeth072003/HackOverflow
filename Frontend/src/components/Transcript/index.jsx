const Final = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-[0.75rem] before:content-[''] after:content-['']">
      <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[2.5rem] py-[0.25rem] font-[600]">
        Transcription
      </h1>
      {!window.executionTime && !window.summary && (
        <>
          <p className="text-justify text-[1.1rem]">
            Upload your Recorded Session to get Summary and Keypoints
            <span className="text-[#FF007A]">{window.executionTime}</span>
          </p>
        </>
      )}
      {window.summary && (
        <h2 className="self-start text-[#FF007A] font-['Cairo'] text-[2rem]">
          Summary
        </h2>
      )}
      <p className="text-justify p-[2rem]">
      {window.summary &&
        window.summary.split(" ").map((e, index) => {
          try {
            return window.eventFollowUp.includes(e) ? (
              <span key={index} className="text-[#ff007a]">
                {e}{" "}
              </span>
            ) : (
              <span key={index} className="text-[#fff]">
                {e}{" "}
              </span>
            );
          } catch (error) {
            console.error("Transcript - eventFollowUp Error", error);
            return null; // or some default value if needed
          }
        })}
        </p>

      {window.executionTime && (
        <p className="text-center text-[1.2rem] pt-2">
          Elapsed time for Transcription Work:
          <span className="text-[#FF007A] text-[1.2rem]">
            {" "}
            {window.executionTime}
          </span>
        </p>
      )}
    </div>
  );
};

export default Final;
