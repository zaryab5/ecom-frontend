

import { FaHome,  FaNewspaper, FaWallet } from "react-icons/fa"



const Stepper = ({ step }: { step: number }) => {


  return (
    <ul className="relative flex flex-row gap-x-2 w-[100vw] md:w-auto">
      <li className="shrink basis-0 flex-1 group">
        <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
          <span
            className={`size-7 flex justify-center items-center flex-shrink-0  font-medium  rounded-full bg-violet-700   text-white`}
          >
            <FaHome />
          </span>
          <div className="ms-2 w-full h-px flex-1  group-last:hidden bg-gray-700 "></div>
        </div>
        <div className="mt-3">
          <span className=" block text-sm font-medium text-gray-800 ">
            Address
          </span>
        </div>
      </li>

      <li className="shrink basis-0 flex-1 group">
        <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
          <span
            className={`${
              step === 2
                ? "bg-violet-700"
                : step === 3
                ? "bg-violet-700"
                : "bg-star-placeholder"
            } size-7 flex justify-center items-center flex-shrink-0  font-medium rounded-full  text-white`}
          >
            <FaWallet />
          </span>
          <div className="ms-2 w-full h-px flex-1  group-last:hidden bg-gray-700"></div>
        </div>
        <div className="mt-3  ">
          <span className=" block text-sm font-medium text-gray-800">
            Payment
          </span>
        </div>
      </li>

      <li className="shrink basis-0 flex-1 group">
        <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
          <span
            className={`${
              step === 3 ? "bg-violet-700" : "bg-star-placeholder"
            } size-7 flex justify-center items-center flex-shrink-0 font-medium  rounded-full  text-white`}
          >
            <FaNewspaper />
          </span>
          <div className="ms-2 w-full h-px flex-1  group-last:hidden bg-gray-700"></div>
        </div>
        <div className="mt-3 text-left">
          <span className="block text-sm font-medium text-gray-800 ">
            Review
          </span>
        </div>
      </li>
    </ul>
  );
};

export default Stepper;
