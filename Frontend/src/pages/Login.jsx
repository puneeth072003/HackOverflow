import { useState } from "react";

import "../styles/Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function postData(username, password) {
    console.log("Username", username);
    console.log("Password", password);
  }

  return (
    <>
      <main className="flex justify-center content-center flex-col gap-[3rem] flex-wrap">
        <h1 className="font-['Cairo']  text-center text-[2rem] font-bold text-[#FF007A]">
          LOGIN TO HUDDLE
        </h1>

        <form
          action="post"
          className="flex justify-center content-center flex-col gap-[3rem] flex-wrap rounded-[10px]"
        >
          <div className="px-[1.5rem] flex justify-center content-center gap-[1.2rem] flex-wrap">
            <label className="text-[1.2rem] text-[#FF007A]" htmlFor="username">
              {" "}
              Username:
            </label>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              name="username"
            />
          </div>
          <div className="px-[1.5rem] flex justify-center content-center gap-[1.2rem] flex-wrap">
            <label className="text-[1.2rem] text-[#FF007A]" htmlFor="password">
              {" "}
              Password:
            </label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
            />
          </div>
          <div className="button-holder flex justify-center flex-col content-center gap-[1.5rem] flex-wrap">
            <button
              type="submit"
              onClick={postData(username, password)}
              className="font-['Cairo'] py-[0.5rem] px-[1.2rem] text-[1.2rem] text-[#FF007A]"
            >
              LOGIN
            </button>
            <button
              type="button"
              className="font-['Cairo'] py-[0.5rem] px-[1.2rem] text-[1rem] text-[#ccc]"
            >
              LOGIN WITH GOOGLE
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
