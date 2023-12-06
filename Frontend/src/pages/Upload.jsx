import Header from "../components/Header";
import Footer from "../components/Footer";

const Upload = () => {
  return (
    <>
  <Header />
  <main className="flex justify-center content-center flex-col gap-[3rem] flex-wrap">
    <h1 className="text-center text-[3rem] text-[#FF007A] font-['Cairo']">Video Summarizer</h1>
    <section className="flex justify-center content-center flex-col gap-[3rem] flex-wrap">
        <h3 className="text-center text-[1.5rem]">Upload Video</h3>
        <input type="file" name="" id="" />
    </section>
    <section>
        <h2 className="text-center text-[2rem] text-[#FF007A] font-['Cairo']">Summary</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, sapiente.</p>
    </section>
  </main>
  <Footer />
    </>
  );
};

export default Upload;
