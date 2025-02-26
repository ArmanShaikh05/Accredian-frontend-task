import { Logo } from "@/assets";
import { FaLinkedin,FaTwitter,FaInstagram,FaYoutube   } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="max-w-[1360px]  w-[85vw] md:w-[80vw] mx-auto bg-[#282828] text-white py-10 flex flex-col">
      <div className="w-full flex justify-between items-start pb-8 border-b-1 mb-8 border-white">
        <img className="" src={Logo} alt="logo" />
        <div className="flex flex-col justify-center">
          <Button variant={"primary"}>Schedule 1-on-1 Call Now</Button>
          <p className="text-xs text-center font-light">
            Speak with our Learning Advisor
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between border-b border-gray-700 pb-6">
          {/* Left Section - Programs */}
          <div className="mb-6 lg:mb-0 lg:w-[13rem]">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Strategy & Leadership",
                "Senior Management",
                "Fintech",
              ].map((program, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center cursor-pointer h-12 w-full hover:text-gray-400"
                >
                  <span>{program}</span> <span className="text-lg">+</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Section - Contact Us */}
          <div className="mb-6 lg:mb-0 lg:grow lg:ml-14 lg:mr-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm font-light">Email us (For Data Science Queries): admissions@accredian.com</p>
            <p className="text-sm font-light">Email us (For Product Management Queries): pm@accredian.com</p>
            <p className="text-sm font-light">Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
            <p className="text-sm font-light">Product Management Admission Helpline: +91 9625811095</p>
            <p className="text-sm font-light">Enrolled Student Helpline: +91 7969322507</p>
            <p className="text-sm font-light">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </p>
            <h3 className="text-lg font-semibold mt-4">Follow Us</h3>
            <div className="flex items-center gap-6 mt-2">
              <ImFacebook2 size={20} />
              <FaLinkedin size={20} />
              <FaTwitter size={20} />
              <FaInstagram  size={20} />
              <FaYoutube   size={20} />
            </div>
          </div>

          {/* Right Section - Accredian Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accredian</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Career",
                "Blog",
                "Admission Policy",
                "Referral Policy",
                "Privacy Policy",
                "Terms Of Service",
                "Master FAQs",
              ].map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center pt-6 text-gray-400 text-sm">
          <p>
            &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
