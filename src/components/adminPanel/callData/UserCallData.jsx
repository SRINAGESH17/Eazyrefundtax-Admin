import { Outlet } from "react-router-dom";

import CallDataStepper from "./CallDataStepper";

const UserCallData = () => {
  return (
    <div className='font-lato p-[1.2rem] lg:p-[2.5rem] bg-[#FAFAFA]'>
      <div className=' flex flex-col gap-[1rem] lg:gap-[2.5rem] lg:shadow-shadow '>
        <CallDataStepper />
        <Outlet />
      </div>
    </div>
  );
};

export default UserCallData;
