import { StepsImage, StepsMobile } from "@/assets";
import { Button } from "./ui/button";
import { useGlobalVariables } from "@/lib/useContext";

const StepsSection = () => {
  const {setOpenForm} = useGlobalVariables()
  return (
    <div className="max-w-[1360px] w-[80vw] mx-auto flex flex-col items-center gap-12 my-8 ">
      <div className="flex items-center gap-2 capitalize text-xl font-semibold mt-8">
        <p>How do i</p>
        <span className="text-[#1A73E8]">Refer?</span>
      </div>
      <img src={StepsImage} alt="" className="hidden md:block"/>
      <img src={StepsMobile} alt="" className=" md:hidden"/>
      <Button variant={"primary"} className={"px-16 py-6"} onClick={()=>setOpenForm(true)}>Refer Now</Button>
    </div>
  );
};

export default StepsSection;
