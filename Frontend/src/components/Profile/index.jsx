import profile_image from "../../assets/test.svg";

const Profile = () => {

  return (
    <div className="flex content-center gap-[0.5rem] border border-[#ff007a] my-[1rem] mx-[0.6rem] px-[0.7rem] py-[0.5rem] rounded-[14px]">
      <img src={profile_image} alt="" className="w-[3.5rem]" />
      <div className="flex flex-col justify-center">
        <h2 className="text-[#fff]">Temp Name</h2>
        <h4 className="text-center text-[#fff]">tempmail@gmail.com</h4>
      </div>
    </div>
  );
};

export default Profile;
