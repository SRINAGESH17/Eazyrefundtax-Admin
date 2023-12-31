import { useRef, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";
import { Icon } from "@iconify/react";
import DataTable from "react-data-table-component";

import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";
import { useAuth } from "../../../stores/AuthContext";

const UploadCalls = () => {
  const [selectedFile, setSelectedFile] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm();

  const fileRef = useRef(null);

  const [cvcFile, setCvcFile] = useState();

  const { getAccessToken } = useAuth();

  const submitData = async (data) => {
    try {
      console.log(data,"data received");
      const token = await getAccessToken();

      const url = AdminAuthorURL.callData.bulkUpload;

      const formData = new FormData();

      formData.append("slotName", data.slotName);
      formData.append("excelsheet", cvcFile);

      const options = {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      const responseData = await response.json();

      console.log(response);

      console.log(responseData, "res");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className='flex flex-col gap-[1rem] lg:gap-[2.5rem] lg:px-[2.5rem] lg:pb-[2.5rem]  text-[#1A1616]'>
        <h1 className='text-[0.8rem] font-[700] lg:text-[1rem] '>
          Upload Calls Excel File
        </h1>
        <form
          onSubmit={handleSubmit(submitData)}
          className='flex flex-col gap-[1rem] lg:gap-[2.5rem] max-w-[500px]'>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[0.8rem] font-[600]'>Call Category</label>
            <input
              name='slotName'
              {...register("slotName", {
                required: "This field is required",
              })}
              type='text'
              className='bg-transparent border border-solid border-[#D1D4D7] rounded-[0.5rem] outline-none p-[1rem] '
            />
            {errors.slotName && (
              <p className='text-red-600 font-bold text-sm'>
                {errors.slotName.message}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[0.8rem] font-[600]'>Choose CVS File</label>

            <div className='bg-transparent border border-solid border-[#D1D4D7] rounded-[0.5rem] p-[1rem] outline-none  lg:px-[1.2rem]  flex flex-row items-center gap-[0.5rem]'>
              <button
                type='button'
                onClick={() => fileRef.current.click()}
                className='bg-[#D1D4D7] rounded-[0.5rem] shrink-0 h-[2rem] w-[7.8rem] text-[#8888A3] text-[0.8rem] font-[600] '>
                Choose File
              </button>
              <input
                ref={fileRef}
                type='file'
                accept='.xls, .xlsx'
              
                onChange={({ target: { files } }) => {
                  console.log(files);
                  if (files[0]) {
                    setCvcFile(files[0]);
                  }
                }}
                style={{ display: "none" }}
              />

              {cvcFile ? (
                <div className='flex  flex-row justify-between items-center grow'>
                  <span className='text-[#8888A3] text-[0.8rem] font-[500]'>
                    {" "}
                    {cvcFile.name}
                  </span>
                  <button onClick={() => setCvcFile()} type='button'>
                    <Icon icon='basil:cross-outline' className='text-[1rem]' />
                  </button>
                </div>
              ) : (
                <span className='text-[#8888A3] text-[0.8rem] font-[500]'>
                  {" "}
                  No file Chosen
                </span>
              )}
            </div>
          </div>

          <button
            type='submit'
            className='bg-[#C5090A] rounded-[1.2rem] h-[2.5rem] w-[9.2rem] lg:h-[3.3rem] lg:w-[11.25rem] self-end text-[0.8rem] font-[500] text-white'>
            Submit
          </button>
        </form>

        <div className='flex flex-row items-center gap-[0.5rem] mt-[1.3rem] lg:mt-[3.3rem]'>
          <p className='text-[0.7rem] lg:text-[1.2rem] text-[#8888A3] font-[500]'>
            You can Download attachment format for uploading calls for employee.
          </p>
          <button type="button" className='bg-[#C5090A] text-white text-[0.8rem] rounded-[0.5rem] h-[1.7rem] w-[7rem]'>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCalls;
