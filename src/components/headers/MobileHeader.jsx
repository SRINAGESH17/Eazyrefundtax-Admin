import React from "react";
import { Icon } from "@iconify/react";

import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const MobileHeader = ({ isVendorSidebarOpen, setIsVendorSidebarOpen }) => {
  const {userId, userName} = useSelector((state)=>state.employee);
  return (
    <div className="sm:hidden grid grid-cols-1 gap-[1rem]   px-[1rem]  py-[1rem] border-b border-[#DFDFDF] font-manrope">
      <div className="flex flex-row justify-between items-center gap-[2rem] md:gap-[4rem]">
        <div
          className="px-[0.3rem] rounded-md lg:hidden"
          style={{
            background:
              "linear-gradient(91.06deg, #BE0A23 0.01%, #E99F00 100.04%)",
          }}
          onClick={()=>{setIsVendorSidebarOpen(true)}}
        >
          <Icon icon="ic:outline-menu" className="text-[2rem] text-white" />
        </div>
        
      <div className="flex flex-row items-center gap-[2rem]">
        <Badge color="error" overlap="circular" variant="dot">
          <Icon icon="clarity:notification-line" className="text-[1.3rem]" />
        </Badge>

        <div className="flex flex-row items-center gap-[1rem]">
          {/* <img src={vendorAvatar} alt="" className="w-[2.5rem] h-auto" /> */}
          <div>
            <h3 className="text-[#4D4D4D] text-[0.7rem] font-[600]">
              {userName || "name"}
            </h3>
            <p className="text-[#4D4D4D] text-[0.7rem] font-[500]">{userId || ""}</p>
          </div>
        </div>
      </div>
      </div>
      <div>

      <div
          className="flex flex-row justify-between items-center border rounded-md border-[#DFDFDF] bg-white px-[1rem] py-[0.5rem]"
          style={{ boxShadow: "4px 4px 150px rgba(0, 0, 0, 0.13)" }}
        >
          <input
            type="text"
            className="flex-1 placeholder-[#848484] text-[#848484] text-[0.8rem] font-bold outline-none"
            placeholder="Search in your flow"
          />
          <div
            className="rounded-md h-full text-white p-[0.3rem] text-sm"
            style={{
              background:
                "linear-gradient(91.06deg, #BE0A23 0.01%, #E99F00 100.04%)",
            }}
          >
            <Icon icon="akar-icons:search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
