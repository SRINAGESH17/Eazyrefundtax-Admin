import React, { useState } from "react";
import { Icon } from "@iconify/react";
import _ from "lodash";

const MultiSelect = ({
    stores,
    setStores,
  options,
  selectedOpt,
 
  selectedIndex,

  isOpen,
  setIsOpen,
  tagName,
}) => {
    
    const handleAddOption = (option) => {
        
        const copyStores = [...stores];
    
        const index = copyStores.indexOf(option);
    
        if (index < 0 && option.trim().length > 0) {
          copyStores.push(option);
          setStores(copyStores);
        }
      };
  return (
    <div className="relative font-manrope font-bold whitespace-nowrap w-full lg:max-xl:min-w-[10rem] xl:min-w-[12rem]">
      <div
        className="flex flex-row items-center w-full gap-[0.8rem] xs:gap-[1.5rem] py-[0.5rem] px-[1rem] bg-white cursor-pointer"
        style={{
          borderRadius: "6px",
          border: "0.6px solid #DFDFDF",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="flex-1 text-[#7B7B7B] font-bold text-[0.8rem]">
          {selectedOpt ? selectedOpt : tagName}
        </span>
        <Icon
          icon="gridicons:dropdown"
          className="text-[#212529] text-[1.5rem] cursor-pointer "
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}

        />
      </div>
      {isOpen && (
        <div className="shadow-lg border border-[#DFDFDF] absolute w-full mt-[10px] bg-white rounded-[6px] z-20 p-[1rem]">
          <ul className="text-[#7B7B7B] font-bold text-[0.8rem] flex flex-row flex-wrap gap-[0.5rem] w-full">
            {options &&
              options.map((option, index) => (
                <li
                key={index}
                className={`rounded-[6px] w-[10rem] px-[1rem] text-center ${
                    _.includes(stores, option)
                    ? "bg-gradient-to-br from-[#BE0A23] to-[#E99F00] text-white"
                    : "bg-white"
                } whitespace-nowrap py-[0.5rem] cursor-pointer hover:bg-gradient-to-br hover:from-[#BE0A23] hover:to-[#E99F00] hover:text-white`}
                onClick={() => {
                 handleAddOption(option)
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

export default MultiSelect;
