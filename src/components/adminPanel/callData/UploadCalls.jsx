import { useRef, useState } from "react";
import DataTable from "react-data-table-component";

const UploadCalls = () => {
  const [selectedFile, setSelectedFile] = useState();

  const fileRef = useRef(null);
  return (
    <div>
      <div className='flex flex-col gap-[1rem] lg:gap-[2.5rem] lg:px-[2.5rem] lg:pb-[2.5rem]  text-[#1A1616]'>
        <h1 className='text-[0.8rem] font-[700] lg:text-[1rem] '>
          Upload Calls Excel File
        </h1>
        <form className='flex flex-col gap-[1rem] lg:gap-[2.5rem] max-w-[500px]'>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[0.8rem] font-[600]'>Call Category</label>
            <input
              type='text'
              className='bg-transparent border border-solid border-[#D1D4D7] rounded-[0.5rem] outline-none p-[1rem] '
            />
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[0.8rem] font-[600]'>Choose CVS File</label>

            <input
              onChange={(e) => setSelectedFile(e.target.value)}
              ref={fileRef}
              type='file'
              style={{ display: "none" }}
            />

            <div className='bg-transparent border border-solid border-[#D1D4D7] rounded-[0.5rem] p-[1rem] outline-none  lg:px-[1.2rem]  flex flex-row items-center gap-[0.5rem]'>
              <button
                onClick={() => fileRef.current.click()}
                className='bg-[#D1D4D7] rounded-[0.5rem] shrink-0 h-[2rem] w-[7.8rem] text-[#8888A3] text-[0.8rem] font-[600] '>
                Choose File
              </button>
              <span className='text-[#8888A3] text-[0.8rem] font-[500]'>
                {" "}
                No file Chosen
              </span>
            </div>
          </div>

          <button className='bg-[#C5090A] rounded-[1.2rem] h-[2.5rem] w-[9.2rem] lg:h-[3.3rem] lg:w-[11.25rem] self-end text-[0.8rem] font-[500] text-white'>
            Submit
          </button>
        </form>

        <div className='flex flex-row items-center gap-[0.5rem] mt-[1.3rem] lg:mt-[3.3rem]'>
          <p className='text-[0.7rem] lg:text-[1.2rem] text-[#8888A3] font-[500]'>
            You can Download attachment format for uploading calls for employee.
          </p>
          <button className='bg-[#C5090A] text-white text-[0.8rem] rounded-[0.5rem] h-[1.7rem] w-[7rem]'>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCalls;
