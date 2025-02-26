import { ScholarIcon } from "@/assets";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { useGlobalVariables } from "@/lib/useContext";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrer: 7000,
    referee: 9000,
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrer: 9000,
    referee: 11000,
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Advanced Certification in Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrer: 10000,
    referee: 10000,
  },
];

const categories = [
  "ALL PROGRAMS",
  "PRODUCT MANAGEMENT",
  "STRATEGY & LEADERSHIP",
  "BUSINESS MANAGEMENT",
  "FINTECH",
  "SENIOR MANAGEMENT",
  "DATA SCIENCE",
  "DIGITAL TRANSFORMATION",
  "BUSINESS ANALYTICS",
];

const Benefits = () => {
  const [benefitIndex, setBenefitIndex] = useState(0);
  const {setOpenForm} = useGlobalVariables()

  return (
    <div className="my-10 w-full flex flex-col items-center  " id="benefits">
      <div className="flex items-center gap-2 capitalize text-xl font-semibold mt-8 mb-12" >
        <p>What are the</p>
        <span className="text-[#1A73E8]">Referal Benefits?</span>
      </div>

      {/* Toggle Switch */}
      <div className=" w-full flex items-center justify-end space-x-2 my-4">
        <label htmlFor="enrolled">Enrolled</label>
        <Switch
          className={"data-[state=checked]:bg-[#1A73E8] cursor-pointer"}
          id="enrolled"
        />
      </div>

      {/* Benefits Table */}
      <div className="flex flex-col lg:flex-row gap-6 mx-auto ">
        {/* Sidebar */}
        <div className="w-[95vw] md:w-[80vw] overflow-x-auto lg:w-[20rem] h-max bg-[#FFFFFF] text-[#3C4852] shadow-lg rounded-lg lg:overflow-hidden text-[12px] lg:text-[15px] font-semibold">
          <ul className="flex  lg:flex-col w-full">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setBenefitIndex(index)}
                className={`p-4 border-b last:border-0 border-blue-400 hover:bg-[#1A73E8] hover:text-white cursor-pointer w-full flex justify-between items-center text-center md:text-left ${
                  benefitIndex === index
                    ? "bg-[#1A73E8] text-white"
                    : "bg-[#FFFFFF] text-[#3C4852]"
                }`}
              >
                <p>{category}</p>
                <FaAngleRight className="hidden lg:block" size={20} />
              </li>
            ))}
          </ul>
        </div>
        {/* Table */}
        <div className="grow shadow-lg rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1A73E859] text-[#1350A0] text-sm capitalize">
                <th className="py-3 px-5 border-r-2 border-[#00000038]">
                  Programs
                </th>
                <th className="py-3 px-5 border-r-2 border-[#00000038] w-40 text-center">
                  Referrer Bonus
                </th>
                <th className="py-3 px-5 w-38 text-center">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} className=" bg-[#EBF3FF59] hover:bg-gray-100">
                  <td className="py-4 px-5 flex items-center gap-2 border-r-2 border-[#00000038]">
                    <img src={ScholarIcon} alt="scholar icon" />
                    {program.name}
                  </td>
                  <td className="py-4 px-5 border-r-2 text-center border-[#00000038]">
                    ₹ {program.referrer.toLocaleString()}
                  </td>
                  <td className="py-4 px-5 text-center">
                    ₹ {program.referee.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full flex items-center justify-end my-8">
        <Button variant={"outline"} className={"cursor-pointer border-2"}>
          <span>Show More</span> <IoIosArrowDown />
        </Button>
      </div>

      <Button variant={"primary"} className={"px-16 py-6 my-8"} onClick={()=>setOpenForm(true)}>Refer Now</Button>
    </div>
  );
};

export default Benefits;
