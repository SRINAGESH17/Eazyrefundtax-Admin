import _ from 'lodash';
import React, { useState } from 'react'

const SearchOptions = ({className,searchKey,setIsOpen,tags,tagsError,keyName,handleSelect}) => {
   console.log(tags[0][keyName])
   console.log(keyName)
  return (
    
        <div className={`shadow-[4px_4px_144px_rgba(0,0,0,0.05)] shadow-xl border border-[#D9D9D9] absolute w-full top-[75px] bg-white rounded-[12px] p-[1rem] max-h-[50vh] overflow-auto  ${className ? className : "z-10"}`}>
          <ul className="text-[#212529] font-[600] text-[0.9rem]   flex flex-col gap-[0.5rem] ">
            {tags ?
              tags?.map((tag, index) => (
                <li
                  key={index}
                  className={`  rounded-[20px] w-fit  px-[2rem] whitespace-nowrap py-[0.5rem] cursor-pointer ${
                    _.isEqual(searchKey, tag[keyName])
                      ? "text-white"
                      : "text-[#212529]"
                  } `}
                  style={{
                    background: _.isEqual(searchKey, tag[keyName])
                      ? "linear-gradient(90deg, #9FB947 0%, #739500 100%)"
                      : "transparent",
                  }}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleSelect(index)
                  }}
                >
                  {tag[keyName]}
                </li>
              )): tagsError ? <li>{tagsError}</li>:null}
          </ul>
        </div>
    
  )
}

export default SearchOptions