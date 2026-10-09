import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <div id="wd-ai-icons" className="mt-4">
        <h3 className="text-base font-semibold">AI sampler</h3>
        <div className="flex gap-3 text-4xl text-blue-600">
          <MdOutlineEmail />
          <HiOutlineSparkles />
        </div>
      </div>

      <div id="wd-my-icons" className="mt-4">
        <h3 className="text-base font-semibold">On my own part</h3>
        <div className="flex gap-3 text-4xl text-green-600">
          <BsBook />
          <IoRocketOutline />
        </div>
      </div>
    </div>
  );
}
