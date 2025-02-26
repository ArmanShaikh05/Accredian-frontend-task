import { Logo } from "@/assets";
import { FaChevronDown ,FaAngleRight} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Button } from "./ui/button";
import { useState } from "react";

const navlinks = [
  { id: 1, text: "Refer & Earn" },
  { id: 2, text: "Resources" },
  { id: 3, text: "About us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-[60px] sm:px-4 md:px-8 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4 md:gap-8">
        <img src={Logo} alt="logo" className="h-10" />
        <Button variant={"primary"} className="hidden lg:flex h-full items-center gap-1">
          <p>Courses</p>
          <FaChevronDown />
        </Button>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-4">
        {navlinks.map((item) => (
          <p className="text-[14.75px] leading-6" key={item.id}>{item.text}</p>
        ))}
        <Button variant={"secondary"}>Login</Button>
        <Button variant={"primary"}>Try for free</Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2 relative"  >
        <Button variant={"primary"} className="flex items-center gap-2 lg:hidden">
          <span>Explore</span>
          <FaAngleRight size={20} />
        </Button>
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        <IoMenu size={24} />
      </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed z-50 top-32 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {navlinks.map((item) => (
            <p key={item.id} className="text-[14.75px]">{item.text}</p>
          ))}
          <Button variant={"secondary"}>Login</Button>
          <Button variant={"primary"}>Try for free</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
