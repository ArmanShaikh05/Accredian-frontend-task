import Benefits from "./components/Benefits";
import CtaSection from "./components/CtaSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ReferForm from "./components/ReferForm";
import StepsSection from "./components/StepsSection";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* TOP BANNER */}
      <div className="w-full h-[60px] bg-[#1A73E826] md:text-[16px] md:leading-7 flex justify-center gap-2 items-center p-4 md:p-0 text-xs">
        <p>Navigate your ideal career path with tailored expert advice</p>
        <span className="capitalize text-[#1A73E8]">contact expert</span>
      </div>
      {/* MAIN CONTENT */}
      <div className=" flex flex-col items-center   ">
        <div className="max-w-[1360px] w-[95vw] md:w-[80vw]">
          <Navbar />
          <HeroSection />
        </div>
        <div className="bg-[#EEF5FF] w-full">
          <StepsSection />
        </div>
        <div className="max-w-[1360px]  w-[95vw] md:w-[80vw]">
          <Benefits />
          <FAQSection />
          <CtaSection />
        </div>
        <div className="bg-[#282828] w-full">
        <Footer />
        </div>
      </div>

      <ReferForm />
    </div>
  );
};

export default App;
