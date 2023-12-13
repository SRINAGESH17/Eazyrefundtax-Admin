import React, { useState } from "react";
import CustomSelect from "../selects/CustomSelect";
import MultiSelect from "../selects/MultiSelect";
import { Icon } from "@iconify/react";
const options = ["Ethnic", "Shirt", "Jeans","vsvsv","jjsjjsj","sjsjssj","jjjduddy","ststtst"];
const StoreCard = ({
  isOpen,
  setIsOpen,
  stores,
  setStores,
  options,
  tagName,
}) => {
  return (
    <div className="font-manrope flex flex-col gap-[1rem]">
      <MultiSelect
        stores={stores}
        setStores={setStores}
        options={options}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tagName={tagName}
      />
      <div className="border-[1px] border-[#DFDFDF] rounded-[6px] w-full h-[30vh]   px-[1rem] sm:px-[2rem] py-[0.5rem] sm:py-[1rem]">
        <div className="w-full flex flex-row flex-wrap   gap-[0.5rem] overflow-y-auto max-h-full ">

        {stores.map((store, index) => (
          <StoreButton
            key={index}
            store={store}
            index={index}
            stores={stores}
            setStores={setStores}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default StoreCard;

const StoreButton = ({ store, stores, setStores, index }) => {
  const handleRemoveStore = (index) => {
    const copyStores = [...stores];

    copyStores.splice(index, 1);
    setStores(copyStores);
  };
  return (
    <div className="flex flex-row rounded-[6px] gap-[1rem] sm:gap-[1.5rem] bg-[#BE0A23] font-bold items-center w-fit text-white px-[1rem] sm:px-[1.5rem] py-[0.5rem] sm:py-[0.6rem] h-fit ">
      <span className="text-[0.7rem] sm:text-[0.8rem]">{store}</span>
      <Icon
        icon="material-symbols:close"
        className="text-[1rem] sm:text-[1.2rem]"
        onClick={() => {
          handleRemoveStore(index);
        }}
      />
    </div>
  );
};
