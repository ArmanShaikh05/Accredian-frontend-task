import { HeroImage, HeroMobile } from "@/assets"
import { Button } from "./ui/button"
import { useGlobalVariables } from "@/lib/useContext"

const HeroSection = () => {
  const {setOpenForm, handleScroll } = useGlobalVariables()
  return (
    <div className="my-10 w-full flex flex-col items-center">

        <div className="max-w-[800px] w-[90vw] sm:w-[70vw] lg:w-[40vw] px-12 flex h-[63px]  items-center justify-between bg-[#1A73E81C] rounded-[36px]">
            <p className="text-[#1A73E8] cursor-pointer text-sm sm:text-lg font-normal">Refer</p>
            <p className="text-sm sm:text-lg cursor-pointer font-normal" onClick={()=>handleScroll("benefits")}>Benefits</p>
            <p className="text-sm sm:text-lg cursor-pointer font-normal" onClick={()=>handleScroll("faq")}>FAQs</p>
            <p className="text-sm sm:text-lg cursor-pointer font-normal">Support</p>
        </div>

        <div className="mt-4 hidden md:block w-full relative ">
            <img  src={HeroImage} alt="hero_image" />
            <Button variant={"primary"} className={"absolute bottom-[20%] left-[10%] px-8 py-4"} onClick={()=>setOpenForm(true)} >
              Refer Now
            </Button>
        </div>
        <div className="mt-4  md:hidden w-[430px] sm:w-full relative ">
            <img  src={HeroMobile} alt="hero_image" className="w-[800px]" />
            <Button variant={"primary"} className={"absolute bottom-[30%] left-[35%] px-8 py-4"} onClick={()=>setOpenForm(true)}>
              Refer Now
            </Button>
        </div>
    </div>
  )
}

export default HeroSection