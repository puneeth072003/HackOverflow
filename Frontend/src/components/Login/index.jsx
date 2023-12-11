import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from "axios";
import Divider from "@mui/material/Divider";
import "./style.css";
import GoogleIcon from "@mui/icons-material/Google";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  // ################################################
  const url = "http://localhost:3500/api/v1/login";

  const handleLogin = async () => {
    try {
      const response = await axios.get(url);
      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      }
    } catch (error) {
      console.error("Error in login:", error);
    }
  };

  // ################################################
  useEffect(() => {
    auth && navigate("/home");
  }, [auth, navigate]);

  return (
    <>
    <div className="video-container">
        <video autoPlay loop muted id="background-video">
          <source src="{}" type="video/mp4" />
        </video>
      </div>

      <main className="flex justify-center items-center flex-col gap-[3rem] flex-wrap">
        <img
          src={logo}
          alt=""
          className="w-[15rem] justify-self-center self-center"
        />
        <h1 className="font-['Cairo'] text-center text-[2rem] font-bold text-[#FF007A]">
          LOGIN TO CONTINUE
        </h1>

        <section
          data-function="form"
          className="flex justify-center items-center flex-col gap-[3rem] flex-wrap rounded-[10px]"
        >
          {/*Form?*/}
          <div className="px-[1.5rem] flex justify-center items-center gap-[1.2rem] flex-wrap">
            <input
              data-function="fetch-username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your Email..."
              className="px-[1rem]"
            />
          </div>
          <div className="button-holder flex justify-center flex-col items-center gap-[1.5rem] flex-wrap">
            <button
              data-function="login"
              onClick={handleLogin}
              className="font-['Cairo'] py-[0.4rem] px-[4rem] text-[1.2rem] text-[#FF007A]"
            >
              LOGIN / SIGNUP
            </button>

            <div className="flex justify-center items-center gap-[0.5rem]">
              <Divider sx={{ borderColor: "#313942", width: "15vw" }} />
              <span>or</span>
              <Divider sx={{ borderColor: "#313942", width: "15vw" }} />
            </div>

            <button
              data-function="google-auth"
              onClick={handleLogin}
              className="flex justify-center items-center gap-[1rem] font-['Cairo'] py-[0.5rem] px-[1.5rem] text-[1rem] text-[#ccc]"
            >
              <GoogleIcon color="#fff" /> <span className="text-[#fff]">GOOGLE</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
