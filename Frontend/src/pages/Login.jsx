import "../styles/Login.css";

export const Login = () => {
  return (
    <>
      <main className="flex justify-center content-center flex-col gap-[3rem] flex-wrap">
        <h1 className="font-['Cairo']  text-center text-[2rem] font-bold text-[#FF007A]">
          LOGIN TO HUDDLE
        </h1>

        <form
          action="post"
          className="w-[35vw] flex justify-center content-center flex-col gap-[3rem] flex-wrap rounded-[10px]"
        >
          <div className="flex justify-center content-center gap-[1.2rem] flex-wrap">
            <label className="text-[1.2rem] text-[#FF007A]" htmlFor="username">
              {" "}
              Username:
            </label>
            <input type="text" name="username" />
          </div>
          <div className="flex justify-center content-center gap-[1.2rem] flex-wrap">
            <label className="text-[1.2rem] text-[#FF007A]" htmlFor="password">
              {" "}
              Password:
            </label>
            <input type="password" name="password" />
          </div>
          <div className="button-holder flex justify-center flex-col content-center gap-[1.5rem] flex-wrap">
            <button
              type="submit"
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
