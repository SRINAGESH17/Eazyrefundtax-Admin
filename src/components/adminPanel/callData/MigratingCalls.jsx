import { Select, Option } from "@material-tailwind/react";
import { useOutletContext } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

import { useAuth } from "../../../stores/AuthContext";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";

const statuses = [
  "REGISTERED",
  "CALLBACK",
  "WRONGNUMBER",
  "NOTINTERESTED",
  "DUPLICATE",
  "ALREADYFILED",
  "FIRST",
  "FOREIGNER",
  "INTERESTED",
  "MAILSENT",
  "PENDING",
];

const MigratingCalls = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    control,
    reset,
    watch,
  } = useForm();

  const { getAccessToken } = useAuth();

  const [activeCallersData] = useOutletContext();

  const [showLoader, setShowLoader] = useState(false);

  const submitData = async (data) => {
    setShowLoader(true);
    try {
      console.log(data);
      const token = await getAccessToken();
      const url = AdminAuthorURL.callData.migrateCalls;

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

      if (response.ok) {
        toast.success(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
          autoClose: 5000,
        });
        reset()
      } else {
        toast.error(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
          autoClose: 5000,
        });
      }

      console.log(responseObj);
    } catch (e) {
      console.log(e);
    }
    setShowLoader(false);
  };

  console.log(activeCallersData, "migrant calls");

  const contextClass = {
    success: "bg-[#00C041] ",
    error: "bg-red-600 ",
    info: "bg-gray-600 ",
    warning: "bg-orange-400 ",
    default: "bg-indigo-600 ",
    dark: "bg-white-600 font-gray-300 ",
  };

  return (
    <div className='lg:px-[7rem] pb-[2.5rem]  font-lato'>
      <form
        onSubmit={handleSubmit(submitData)}
        className='max-w-[600px] flex flex-col gap-[2rem] lg:gap-[2.7rem]'>
        <div className='flex flex-col gap-[1rem] lg:gap-[2.5rem]'>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[#1A1616] text-[0.7rem] md:text-[0.8rem] font-[500]'>
              From
            </label>
            <div className='border border-solid border-[#D1D4D7] rounded-[0.5rem]  pr-[1rem] text-[#8888A3] '>
              <Controller
                name='fromCallerId'
                {...register("fromCallerId", {
                  required: "This field is required",
                })}
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className='border-none bg-transparent w-full h-full  p-[1rem] outline-none'>
                    <option selected disabled>
                      Select Employee
                    </option>
                    {activeCallersData?.map((emp) => (
                      <option value={emp._id} key={emp._id}>
                        {emp.employeeId}-{emp.employeeName}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            {errors.fromCallerId && (
              <p className='text-red-600 font-bold text-sm'>
                {errors.fromCallerId.message}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[#1A1616] text-[0.7rem] md:text-[0.8rem] font-[500]'>
              To
            </label>
            <div className='border border-solid border-[#D1D4D7] rounded-[0.5rem]  pr-[1rem] text-[#8888A3] '>
              <Controller
                name='toCallerId'
                {...register("toCallerId", {
                  required: "This field is required",
                })}
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className='border-none bg-transparent w-full h-full  p-[1rem] outline-none'>
                    <option selected disabled>
                      Select Employee
                    </option>
                    {activeCallersData?.map((emp) => (
                      <option value={emp._id} key={emp._id}>
                        {emp.employeeId}-{emp.employeeName}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            {errors.toCallerId && (
              <p className='text-red-600 font-bold text-sm'>
                {errors.toCallerId.message}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[#1A1616] text-[0.7rem] md:text-[0.8rem] font-[500]'>
              Calls type
            </label>
            <div className='border border-solid border-[#D1D4D7] rounded-[0.5rem]  pr-[1rem] text-[#8888A3] '>
              <Controller
                name='callType'
                {...register("callType", {
                  required: "This field is required",
                })}
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className='border-none bg-transparent w-full h-full  p-[1rem] outline-none capitalize '>
                    <option selected disabled>
                      Select Call Type
                    </option>
                    {statuses.map((type) => (
                      <option className='' value={type}>
                        {type.toLowerCase()}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            {errors.callType && (
              <p className='text-red-600 font-bold text-sm'>
                {errors.callType.message}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-[0.5rem]'>
            <label className='text-[#1A1616] text-[0.7rem] md:text-[0.8rem] font-[500]'>
              Number of calls
            </label>

            <input
              name='numberOfCalls'
              {...register("numberOfCalls", {
                required: "This field is required",
              })}
              type='text'
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
          <div className='flex justify-center items-center py-[0.6rem] w-[8.1rem] self-end'>
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
            className='bg-[#C5090A] rounded-[1.2rem] py-[0.6rem] w-[8.1rem] text-white font-[700] text-[0.6rem] self-end'>
            Update
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

export default MigratingCalls;
