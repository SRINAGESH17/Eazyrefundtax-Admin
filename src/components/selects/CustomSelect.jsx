import React, { useState } from "react";
import { Icon } from "@iconify/react";

const CustomSelect = ({
  options,
  selectedIndex,
  setSelectedIndex,
  isOpen,
  setIsOpen,
  tagName,
  className
}) => {
   
  return (
    <div className="relative font-manrope font-bold whitespace-nowrap  ">
      <div
        className={`flex flex-row items-center lg:max-xl:min-w-[5rem] xl:min-w-[7rem] gap-[0.8rem] xs:gap-[1.5rem] ${className? className : ""}  bg-white cursor-pointer justify-between`}
        style={{
          borderRadius: "6px",
          border: "0.6px solid #DFDFDF",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className=" text-[#7B7B7B] font-bold text-[0.8rem]">
          {options[selectedIndex] ? options[selectedIndex] : tagName}
        </span>
        

        <Icon
          icon="gridicons:dropdown"
          className="text-[#212529] text-[1.5rem] cursor-pointer shrink-0"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}

        />
      
      </div>
      {isOpen && (
        <div className="shadow-lg border border-[#DFDFDF] absolute w-full mt-[10px] bg-white rounded-[6px] z-20 p-[1rem]">
          <ul className="text-[#7B7B7B] font-bold text-[0.8rem] flex-col">
            {options &&
              options.map((option, index) => (
                <li
                key={index}
                className={`rounded-[6px] w-full px-[1rem] ${
                  selectedIndex === index
                    ? "bg-gradient-to-br from-[#BE0A23] to-[#E99F00] text-white"
                    : "bg-white"
                } whitespace-nowrap py-[0.5rem] cursor-pointer hover:bg-gradient-to-br hover:from-[#BE0A23] hover:to-[#E99F00] hover:text-white`}
                onClick={() => {
                  setSelectedIndex(index);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
              
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
