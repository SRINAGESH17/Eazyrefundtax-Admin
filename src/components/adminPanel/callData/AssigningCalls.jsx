import { useState } from "react";

const AssigningCalls = () => {
  return (
    <div className='lg:px-[7rem] pb-[2.5rem] '>
      <form className='max-w-[600px] w-full flex flex-col gap-[2rem] lg:gap-[3.5rem] '>
        <div className='flex flex-col gap-[1.5rem] lg:gap-[2.5rem]'>
          <div className='flex flex-col gap-[0.5rem]'>
            <label
              htmlFor='invoice'
              className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
              Select Employee to Assign the calls
            </label>
            <div className='border border-solid border-[#D1D4D7]  pr-[1rem] text-[#8888A3] '>
              <select className='border-none bg-transparent w-full h-full  p-[1rem] outline-none'>
                <option>select</option>
                <option>Satyendra</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label
              htmlFor='invoice'
              className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
              Number of Calls
            </label>

            <input
              type='text'
              placeholder='Please enter total number of calls to assign to selected employee'
              className='border border-solid border-[#D1D4D7]   p-[1rem] outline-none placeholder:text-[0.8rem] font-[500] placeholder:text-[#D1D4D7]'
            />
          </div>
        </div>
        <button className='bg-[#C5090A] rounded-[1.2rem] py-[0.6rem] px-[1.9rem] text-white text-[0.6rem] self-end'>
          Assign calls
        </button>
      </form>
    </div>
  );
};

export default AssigningCalls;
