import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const categories = ["Eligiblity", "How to use?", "Terms & Conditions"];

const faqs = [
  {
    question:
      "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer:
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "What is the minimum system configuration required?",
    answer:
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
];

const FAQSection = () => {
  return (
    <div className="my-10 w-full flex flex-col items-center  " id="faq">
      <div className="flex items-center gap-2 capitalize text-xl font-semibold mt-8 mb-12">
        <p>Frequently asked</p>
        <span className="text-[#1A73E8]">Questions</span>
      </div>

      {/* FAQs */}
      <div className="w-full flex gap-8 mb-10">
        <div className="w-[18rem] hidden md:flex flex-col gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] border-2 border-[#E2E8F0] px-10 py-6 text-center capitalize rounded-[7px] shadow-lg cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>

        <Accordion type="single" collapsible className="grow">
          {faqs.map((faq, index) => (
            <AccordionItem className={"w-full md:w-[60vw] lg:w-[50rem]"} key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className={"font-semibold text-sm sm:text-[16px] cursor-pointer"}>{faq.question}</AccordionTrigger>
              <AccordionContent className={"text-xs sm:text-[14px]"}>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
