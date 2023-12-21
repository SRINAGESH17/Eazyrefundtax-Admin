import { useState, useRef } from "react";
import { Icon } from "@iconify/react";

import { useForm } from "react-hook-form";

import { Select, Option } from "@material-tailwind/react";

import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import employeeProfile from "../../../assets/employeeProfile.png";

const AdminCreateEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const imageRef = useRef(null);

  const [employeeImage, setEmployeeImage] = useState();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    console.log(e.dataTransfer.files);

    setEmployeeImage(e.dataTransfer.files[0]);
  };

  const [showPassword, setShowPassword] = useState(false);

  console.log(imageRef);

  return (
    <div
      // style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      className='flex flex-col gap-[2rem] lg:gap-[2.6rem] lg:bg-[#fff] lg:rounded-[0.5rem] lg:shadow-shadow   lg:p-[2.5rem]'>
      <h1 className='text-[0.8rem] text-[#1A1616] font-[700] lg:text-[1rem] '>
        Add New Employee
      </h1>

      <div>
        <form className='flex flex-col gap-[4rem] lg:gap-[9rem]'>
          <div className='xl:flex-row flex flex-col gap-[3rem]'>
            <div className='grid grid-cols-1 gap-[1rem] lg:grid-cols-2  xl:gap-x-[6rem] xl:gap-y-[1.5rem] xl:w-[70%] xl:px-[3rem] shrink-0 '>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Full Name
                </label>
                <input
                  type='text'
                  placeholder='Ex : Manikanta'
                  className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
                />
              </div>

              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Email
                </label>

                <div className='flex flex-row  border border-solid border-[#D1D4D7] h-[3.2rem] rounded-[0.5rem] '>
                  <div className='flex items-center pl-[1rem]'>
                    <Icon
                      icon='mdi:email'
                      className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                    />
                  </div>
                  <input
                    type='email'
                    placeholder='Enter Email Address'
                    className='outline-none flex-1 rounded-[0.5rem] border-none px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Phone Number
                </label>

                <PhoneInput
                  initialValueFormat='national'
                  name='mobileNumber'
                  defaultCountry='IN'
                  style={{ outline: "none" }}
                  className='border border-[#AFBACA] rounded-md outline-none px-[1rem] py-[0.5rem] text-[#3D4A5C] text-[0.9rem] placeholder-[#8897AE]'
                />

                {/* <input
                  type='number'
                  placeholder='Ex : 87XXXXXXXX'
                  
                /> */}
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Password
                </label>

                <div className='flex flex-row  border border-solid border-[#D1D4D7] h-[3.2rem] rounded-[0.5rem]'>
                  <div className='flex items-center pl-[1rem]'>
                    <Icon
                      icon='mdi:password'
                      className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                    />
                  </div>
                  <input
                    type='password'
                    placeholder='Enter password'
                    className='outline-none flex-1  border-none px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
                  />

                  <button className='flex items-center pr-[1rem]'>
                    <Icon
                      icon={showPassword ? "mdi:eye" : "mdi:eye-off"}
                      className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                    />
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Role
                </label>

                <Select
                  label={<p className='text-[#E1D6D5] '>Select Role Type</p>}
                  className='border border-solid border-[#D1D4D7] text-[0.6rem] font-[500] text-[#E1D6D5]'
                  size='lg'>
                  <Option>Student</Option>
                  <Option>Employee</Option>
                </Select>
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Confirm Password
                </label>

                <div className='flex flex-row  border border-solid border-[#D1D4D7] rounded-[0.5rem] h-[3.2rem]'>
                  <div className='flex items-center pl-[1rem]'>
                    <Icon
                      icon='mdi:password'
                      className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                    />
                  </div>
                  <input
                    type='password'
                    placeholder='Enter password'
                    className='outline-none flex-1  border-none px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
                  />

                  <button className='flex items-center pr-[1rem]'>
                    <Icon
                      icon={showPassword ? "mdi:eye" : "mdi:eye-off"}
                      className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                    />
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Address
                </label>

                <input
                  type='text'
                  placeholder='Ex : Texas'
                  className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
                />
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Identify Type
                </label>
                <Select
                  label={<p className='text-[#E1D6D5] '>Select Role Type</p>}
                  className='border border-solid border-[#D1D4D7] text-[0.6rem] font-[500] text-[#E1D6D5]'
                  size='lg'>
                  <Option>Student</Option>
                  <Option>Employee</Option>
                </Select>
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Identify Number
                </label>

                <input
                  type='text'
                  placeholder='Ex : 87XXXXXXXX'
                  className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
                />
              </div>
            </div>

            <div className='flex flex-col gap-[0.8rem] lg:gap-[1rem] shrink-0'>
              <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                Employee Image
              </label>

              <div className='flex flex-col md:flex-row xl:flex-col flex-wrap lg:items-center h-auto gap-[1rem]'>
                <div className='flex flex-col gap-[1rem] md:w-[11rem]  relative'>
                  <button
                    type='button'
                    onClick={() => {
                      console.log("edit button clicked");
                      imageRef.current.click();
                    }}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
                    }}
                    className='h-[2rem] w-[2rem] rounded-[1.2rem] bg-[#FFF]   p-[7.23px] absolute top-[-5%] right-[-1rem] flex justify-center items-center'>
                    <Icon
                      icon='material-symbols:edit'
                      className='text-[1.1rem] text-[#000000]'
                    />
                  </button>

                  <input
                    accept='image/*'
                    className=''
                    type='file'
                    onChange={({ target: { files } }) => {
                      console.log(files);
                      if (files[0]) {
                        setEmployeeImage(files[0]);
                      }
                    }}
                    ref={imageRef}
                    style={{ display: "none" }}
                  />
                  <img
                    src={
                      (employeeImage && URL.createObjectURL(employeeImage)) ||
                      employeeProfile
                    }
                    className='h-[9rem]   w-full rounded-[0.5rem] '
                  />
                  <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[700] self-center'>
                    Manikanta
                  </p>
                </div>
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className='flex flex-col gap-[0.5rem]'>
                  <div className='border border-solid border-[#D1D4D7] shrink-0 py-[0.9rem] px-[1.9rem] xl:px-[1.1rem] xl:py-[1.5rem]  rounded-[1.2rem] flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[0.6rem] '>
                    <button className='bg-imageGray rounded-[0.5rem] p-[0.5rem] flex justify-center items-center'>
                      <Icon
                        icon='bxs:image-add'
                        className='h-[1.5rem] w-[1.5rem]  text-[#D1D4D7]'
                      />
                    </button>

                    <div className='flex flex-row items-center gap-[1rem] text-[#D1D4D7]'>
                      <Icon
                        icon='ep:upload-filled'
                        className='text-[1.5rem] '
                      />
                      <p className='text-[0.7rem] font-[400]'>
                        Upload an image of owner.
                      </p>
                    </div>

                    <p className='text-[0.7rem] text-[#D1D4D7] font-[400]'>
                      File Format <span className='text-[#000] '>pdf</span>{" "}
                      Recommended Size
                      <span className='text-[#000]'>600x600</span>
                      (1:1)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[1rem] md:flex-row md:justify-end'>
            <button className='rounded-[1rem] bg-[#D1D4D7] border-none outline-none py-[1rem] w-full lg:w-[11rem] text-[0.8rem] text-[#000] font-[500]'>
              Reset
            </button>
            <button
              type='submit'
              className='rounded-[1rem] bg-[#C5090A] border-none outline-none py-[1rem] w-full lg:w-[11rem] text-[0.8rem] text-white font-[500]'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateEmployee;
