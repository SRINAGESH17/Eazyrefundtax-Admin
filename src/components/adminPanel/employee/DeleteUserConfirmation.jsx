import { useState } from "react";

const DeleteUserConfirmation = ({ close }) => {
  return (
    <div className='bg-[#FFF] rounded-[1rem] lg:rounded-[1.2rem]  lg:w-[31rem] max-w-[560px] p-[1.5rem] lg:p-[2.5rem] flex flex-col gap-[1rem] mx-[2rem]'>
      <div className='flex flex-col gap-[0.5rem]'>
        <h1 className='text-[#1A1A1A] text-[1rem] lg:text-[1.5rem] font-[500]'>
          Are you sure ?
        </h1>
        <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[500]'>
          You are deleting Employee from caller role management
        </p>
      </div>

      <div className='flex flex-col gap-[0.5rem]'>
        <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[500]'>
          Reason For deleting
        </p>

        <textarea
          placeholder='Enter description'
          rows={4}
          className='p-[1rem] placeholder:text-[#8888A3] placeholder:text-[0.5rem] placeholder:lg:text-[0.6rem] outline-none rounded-[0.56rem] border-[0.837px] border-solid border-[#D1D4D7] '
        />
      </div>

      <div className='flex flex-col gap-[0.5rem]'>
        <button className='w-full bg-[#C5090A] rounded-[0.5rem] py-[1rem] text-[#fff] text-[0.5rem] lg:text-[0.7rem]'>
          Delete
        </button>
        <button
          onClick={() => close()}
          className='w-full bg-transparent border border-solid border-[#C5090A] rounded-[0.5rem] py-[1rem] text-[#C5090A] text-[0.5rem] lg:text-[0.7rem]'>
          Close
        </button>
      </div>
    </div>
  );
};

export default DeleteUserConfirmation;
