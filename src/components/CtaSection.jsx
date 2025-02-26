import { CTA } from "@/assets";
import { Button } from "./ui/button";
import { FaAngleRight } from "react-icons/fa";

const CtaSection = () => {
  return (
    <div className="my-14 w-full sm:flex flex-col items-center hidden  relative">
      <img src={CTA} alt="cta" />
      <Button variant={"secondary"} className={" flex items-center gap-4 absolute right-[5%] top-[40%] bg-[#FFFFFF] hover:bg-[#e9dede] text-[#3B82F6]"}>
        <span>Get in touch</span>
        <FaAngleRight  size={20}/>
      </Button>
    </div>
  );
};

export default CtaSection;
