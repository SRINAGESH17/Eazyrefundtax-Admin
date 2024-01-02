import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";
import { ThreeDots } from "react-loader-spinner";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";
import { useAuth } from "../../../stores/AuthContext";

const AssigningCalls = () => {
  const [activeCallersData] = useOutletContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm();
  const { getAccessToken } = useAuth();
  const [showLoader, setShowLoader] = useState(false);

  const submitData = async (data) => {
    setShowLoader(true);
    try {
      console.log(data, "data received");
      const url = AdminAuthorURL.callData.assignCallToEmployee;

      const token = await getAccessToken();

      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      };

      const response = await fetch(url, options);

      const responseObj = await response.json();

      console.log(responseObj);

      if (response.ok) {
        toast.success(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
        });

        reset();
      } else {
        toast.error(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
    setShowLoader(false);

    console.log(data);
  };

  const contextClass = {
    success: "bg-[#00C041]",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  console.log(activeCallersData);
  return (
    <div className='lg:px-[7rem] pb-[2.5rem] '>
      <form
        onSubmit={handleSubmit(submitData)}
        className='max-w-[600px] w-full flex flex-col gap-[2rem] lg:gap-[3.5rem] '>
        <div className='flex flex-col gap-[1.5rem] lg:gap-[2.5rem]'>
          <div className='flex flex-col gap-[0.5rem]'>
            <label
              htmlFor='invoice'
              className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
              Select Employee to Assign the calls
            </label>
            <div className='border border-solid border-[#D1D4D7] rounded-[0.5rem]  pr-[1rem] text-[#8888A3] '>
              <select
                name='callerMongoId'
                {...register("callerMongoId", {
                  required: "This field is required",
                })}
                className='border-none bg-transparent w-full h-full  p-[1rem] outline-none'>
                <option selected disabled>
                  Select Employee
                </option>
                {activeCallersData.map((data) => (
                  <option key={data._id} value={data._id}>
                    {data?.employeeId + "-" + data?.employeeName}
                  </option>
                ))}
              </select>
              {errors.callerMongoId && (
                <p className='text-red-600 font-bold text-sm'>
                  {errors.callerMongoId.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label
              htmlFor='invoice'
              className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
              Number of Calls
            </label>

            <input
              type='number'
              name='numberOfCalls'
              {...register("numberOfCalls", {
                required: "This field is required",
              })}
              placeholder='Please enter total number of calls to assign to selected employee'
              className='rounded-[0.5rem] border border-solid border-[#D1D4D7] outline-none   p-[1rem] text-[0.5rem] lg:text-[0.8rem] placeholder:text-[#D1D4D7]'
            />
            {errors.numberOfCalls && (
              <p className='text-red-600 font-bold text-sm'>
                {errors.numberOfCalls.message}
              </p>
            )}
          </div>
        </div>
        {showLoader ? (
          <div className='flex justify-center items-center self-end px-[1.9rem]'>
            <ThreeDots
              height='50'
              width='50'
              radius='9'
              color='#C5090A'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClassName=''
              visible={true}
            />
          </div>
        ) : (
          <button
            type='submit'
            className='bg-[#C5090A] rounded-[1.2rem] py-[0.6rem] px-[1.9rem] text-white text-[0.6rem] self-end'>
            Assign calls
          </button>
        )}
      </form>
      <ToastContainer
        icon={true}
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-2 h-[4rem] text-white  text-[1rem] font-[500]  rounded-tr justify-between overflow-hidden cursor-pointer"
        }
      />
    </div>
  );
};

export default AssigningCalls;
