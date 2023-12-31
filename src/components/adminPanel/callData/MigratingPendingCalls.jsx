import { Select, Option } from "@material-tailwind/react";

import { useOutletContext } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

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

const MigratingPendingCalls = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    control,
    reset,
    watch,
  } = useForm();

  const [activeCallersData] = useOutletContext();

  console.log("migrating calls", activeCallersData);

  const { getAccessToken } = useAuth();

  const submitData = async (data) => {
    try {
      console.log(data);
      const token = await getAccessToken();
      const url = AdminAuthorURL.callData.migratePendingCalls;

      // const formData = new FormData();

      // formData.append("toCallerId", data.toCallerId);
      // formData.append("callType", data.callType);

      // formData.append("numberOfCalls", data.numberOfCalls);

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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='lg:px-[7rem] pb-[2.5rem] font-lato'>
      <form
        onSubmit={handleSubmit(submitData)}
        className='max-w-[600px] flex flex-col gap-[2rem] lg:gap-[2.7rem]'>
        <div className='flex flex-col gap-[1rem] lg:gap-[2.5rem]'>
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
                    className='border-none bg-transparent w-full h-full  p-[1rem] outline-none capitalize'>
                    {statuses.map((type) => (
                      <option className='capitalize' value={type}>
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
              className='rounded-[0.5rem] border border-solid border-[#D1D4D7] outline-none  p-[1rem] text-[0.5rem] lg:text-[0.8rem] placeholder:text-[#D1D4D7]'
            />
            {errors.numberOfCalls && (
              <p className='text-red-600 font-bold text-sm'>
                {errors.numberOfCalls.message}
              </p>
            )}
          </div>
        </div>

        <button
          type='submit'
          className='bg-[#C5090A] rounded-[1.2rem] py-[0.6rem] w-[8.1rem] text-white font-[700] text-[0.6rem] self-end'>
          Update
        </button>
      </form>
    </div>
  );
};

export default MigratingPendingCalls;
