import { Select, Option } from "@material-tailwind/react";

const MigratingCalls = () => {
  return (
    <div className='lg:px-[7rem] pb-[2.5rem]  font-lato'>
      <form className='max-w-[600px] flex flex-col gap-[2rem] lg:gap-[2.7rem]'>
        <div className='flex flex-col gap-[1rem] lg:gap-[2.5rem]'>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[#1A1616] text-[0.7rem] md:text-[0.8rem] font-[500]'>
              From
            </label>
            <div className='rounded-[0.5rem] border border-solid border-[#D1D4D7] pr-[1rem]'>
              <select className='border-none h-full w-full p-[1rem] text-[#8888A3] outline-none'>
                <option>select</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[#1A1616] text-[0.7rem] md:text-[0.8rem] font-[500]'>
              To
            </label>
            <div className='rounded-[0.5rem] border border-solid border-[#D1D4D7]  pr-[1rem]'>
              <select className='border-none h-full w-full p-[1rem] text-[#8888A3]'>
                <option>select</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[#1A1616] text-[0.7rem] md:text-[0.8rem] font-[500]'>
              Calls type
            </label>
            <div className='rounded-[0.5rem] border border-solid border-[#D1D4D7]  pr-[1rem]'>
              <select className='border-none h-full w-full p-[1rem] text-[#8888A3]'>
                <option>select</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[#1A1616] text-[0.7rem] md:text-[0.8rem] font-[500]'>
              Number of calls
            </label>

            <input
              type='text'
              placeholder='Please enter total number of calls to assign to selected employee'
              className='rounded-[0.5rem] border border-solid border-[#D1D4D7] outline-none  p-[1rem] text-[0.5rem] lg:text-[0.8rem] placeholder:text-[#D1D4D7]'
            />
          </div>
        </div>

        <button className='bg-[#C5090A] rounded-[1.2rem] py-[0.6rem] w-[8.1rem] text-white font-[700] text-[0.6rem] self-end'>
          Update
        </button>
      </form>
    </div>
  );
};

export default MigratingCalls;
