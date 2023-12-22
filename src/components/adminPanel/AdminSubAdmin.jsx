import { useState, useRef } from "react";
import DataTable from "react-data-table-component";
import { Icon } from "@iconify/react";

import { Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import employeeProfile from "../../assets/employeeProfile.png";
import CustomPagination from "../../helpers/CustomPagination";
import PhoneInput from "react-phone-number-input";

const customStyles = {
  headRow: {
    style: {
      fontWeight: "600",
      padding: "10px 20px",
      color: "#1A1616",
      fontFamily: "Amulya",
    },
  },
  head: {
    style: {
      borderRadius: "6px 6px 0px 0px",
      borderBottom: "1px solid #D1D4D7",
      background: "#FFF",

      fontSize: "12px",
      lineHeight: "18px",
    },
  },

  rows: {
    style: {
      borderRadius: "6px 6px 0px 0px",
      borderBottom: "1px solid #D1D4D7",
      background: "#FFF",
      color: "#8888A3",
      fontFamily: "Amulya",
      fontWeight: "400",

      padding: "10px 20px",
      fontSize: "14px",
    },
  },
  pagination: {
    style: {
      boxShadow: "10px 5px 5px #ddd",
      marginBottom: "5px",
    },
  },
  table: {
    style: {
      overflow: "visible",
      minWidth: "1100px",
    },
  },
  tableWrapper: {
    style: {
      overflow: "visible",
    },
  },
  responsiveWrapper: {
    style: {
      overflowX: "auto", // table scroll on x axis
      // for showing shadow
    },
  },
};

const AdminSubAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const [image, selectImage] = useState();

  const imageRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    console.log(e.dataTransfer.files);

    selectImage(e.dataTransfer.files[0]);
  };
  const columns = [
    {
      name: "SL",
      cell: (row, index) => index + 1,
    },
    {
      name: "Sub-admin ID",
      id: "adminId",
      selector: (row) => row.adminId,

      width: "120px",
    },
    {
      name: "Sub-Admin Name",
      cell: (row) => (
        <div className='flex flex-row items-center gap-[1rem]'>
          <img src={row.image} className={"h-[3rem] w-[3rem] rounded-full"} />
          <p>{row.name}</p>
        </div>
      ),
      width: "270px",
    },
    {
      name: "Contact Information",
      cell: (row) => (
        <div className='flex flex-col gap-[0.2rem]'>
          <p>{row.email}</p>
          <p>{row.phoneNumber}</p>
        </div>
      ),
      width: "300px",
    },
    {
      name: "Address",
      id: "address",
      selector: (row) => row.address,
    },
    {
      name: "Pin code",
      id: "pincode",
      selector: (row) => row.pincode,
    },

    {
      name: "Status",
      width: "150px",

      cell: (row) => (
        <div
          className={`${
            row.status === "active"
              ? "bg-[#ECFDF3]  text-[#00C041]"
              : "bg-[#E1D6D5] text-[#8888A3]"
          } w-[4.5rem] py-[2px]  rounded-[1rem] flex flex-row justify-center items-center gap-[6px] `}>
          <Icon
            icon='octicon:dot-fill-16'
            className={`${
              row.status === "active" ? "text-[#00C041]" : "text-[#1A1616]"
            }`}
          />
          <span
            className={`text-[0.7rem] font-[500] leading-3 capitalize ${
              row.status === "active" ? "text-[#00C041]" : "text-[#8888A3]"
            }`}>
            {row.status}
          </span>
        </div>
      ),
    },
    {
      name: "Action",
      center: true,
      cell: (row) => (
        <div className={`flex flex-row items-center gap-[1rem]`}>
          <button
            style={{ border: "0.727px solid #D9D9D9" }}
            className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
            <Icon icon='mdi:eye' />
          </button>

          <button
            // onClick={() => navigate(`/library/edit-resourse/${row._id}`)}
            style={{ border: "0.727px solid #D9D9D9" }}
            className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
            <Icon icon='ic:baseline-edit' />
          </button>
        </div>
      ),
    },
  ];

  const sampleData = [
    {
      adminId: "12345",
      image: employeeProfile,
      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "2711389",
      address: "Telangana",
      pincode: 500084,
      status: "active",
    },
    {
      adminId: "12345",
      image: employeeProfile,
      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "2711389",
      address: "Telangana",
      pincode: 500084,
      status: "active",
    },
    {
      adminId: "12345",
      image: employeeProfile,
      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "2711389",
      address: "Telangana",
      pincode: 500084,
      status: "inActive",
    },
    {
      adminId: "12345",
      image: employeeProfile,
      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "2711389",
      address: "Telangana",
      pincode: 500084,
      status: "inActive",
    },
  ];

  console.log(image);

  return (
    <div className='font-lato p-[1.2rem] lg:p-[2.5rem] bg-[#FAFAFA]'>
      <div className='flex flex-col   lg:bg-[#fff] lg:rounded-[0.5rem] lg:shadow-shadow   '>
        <div>
          <div className='py-[1rem] lg:p-[1.5rem]'>
            <h1 className='text-[0.8rem] text-[#1A1616] font-[700] lg:text-[1rem]'>
              Sub Admin
            </h1>
          </div>

          <div className='flex flex-col gap-[1rem] lg:mx-[1.7rem]  lg:border-solid lg:border-[0.5px] lg:border-[#D1D4D7] lg:rounded-[0.6rem]'>
            <form className='flex flex-col gap-[1rem] lg:gap-[1.5rem] lg:pb-[1.5rem]'>
              <div className='flex flex-row items-center justify-between lg:p-[1.5rem]'>
                <h1 className='text-[0.8rem] text-[#1A1616] font-[700] lg:text-[1rem]'>
                  Adding Sub-admin
                </h1>
                <button
                  type='submit'
                  className='h-[2.3rem] lg:w-[10rem] px-[1rem] flex justify-center items-center bg-[#C5090A] rounded-[0.5rem] text-[#FFF] text-[0.5rem] lg:text-[0.8rem] font-[500]'>
                  Create Sub-Admin
                </button>
              </div>

              <div className='flex flex-col xl:flex-row gap-[1.5rem]'>
                <div className='grid grid-cols-1 gap-[1rem]  lg:grid-cols-2 lg:gap-y-[1.5rem] lg:gap-x-[3rem] lg:px-[5rem] xl:w-[70%]'>
                  <div className='flex flex-col gap-[0.2rem]'>
                    <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      {...register("fullName")}
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
                        {...register("email")}
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
                      name='mobileNumber'
                      defaultCountry='IN'
                      {...register("mobileNumber")}
                      control={control}
                      className='outline-none cursor-pointer rounded-[0.5rem] h-full border border-solid border-[#D1D4D7] px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
                      rules={{
                        required: "*This field is required.",
                        validate: isValidPhoneNumber,
                      }}
                      style={{
                        height: "40px",
                        outline: "none",
                      }}
                      placeholder='Enter Mobile Number'
                    />
                    {/* 
                    <input
                      type='number'
                      placeholder='Ex : 87XXXXXXXX'
                      className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
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
                        {...register("password")}
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
                      Pincode
                    </label>

                    <input
                      type='text'
                      placeholder='Ex : XXXXXXX'
                      className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.6rem] font-[500] placeholder:text-[#E1D6D5]'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-[1rem] lg:px-[5rem] xl:px-0 lg:w-[30rem] xl:w-auto'>
                  <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                    Sub-admin Image
                  </label>

                  <input
                    style={{ display: "none" }}
                    type='file'
                    accept='image/*'
                    ref={imageRef}
                    onChange={({ target: { files } }) => {
                      if (files[0]) {
                        selectImage(files[0]);
                      }
                    }}
                  />
                  <div className='flex flex-col gap-[1rem] md:w-[11rem]  relative '>
                    <button
                      type='button'
                      onClick={() => {
                        console.log("edit button is clicked");
                        imageRef.current.click();
                      }}
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
                      }}
                      className='h-[2rem] w-[2rem] rounded-[1.2rem] bg-[#FFF]   p-[7.23px] absolute top-[-5%] right-[-1%] lg:right-[-1rem] flex justify-center items-center'>
                      <Icon
                        icon='material-symbols:edit'
                        className='text-[1.1rem] text-[#000000]'
                      />
                    </button>
                    <img
                      src={
                        (image && URL.createObjectURL(image)) || employeeProfile
                      }
                      className='h-[9rem]   w-full rounded-[0.5rem] '
                    />
                    <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[700] self-center'>
                      Manikanta
                    </p>
                  </div>

                  {/* <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className='flex flex-col gap-[0.5rem] '>
                    <div className='border border-solid border-[#D1D4D7]  py-[0.9rem] px-[1.9rem] xl:px-[1.1rem] xl:py-[1.5rem]  rounded-[1.2rem] flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[0.6rem] '>
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
                        File Format <span className='text-[#000]'>pdf</span>{" "}
                        Recommended Size
                        <span className='text-[#000]'>600x600</span>
                        (1:1)
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className='lg:px-[5rem] flex flex-col gap-[0.5rem]'>
                <p className='text-[#1A1616] text-[1rem] lg:text-[1.2rem] font-[500]'>
                  Permissions
                </p>

                <div className='lg:border-[1.067px] lg:border-solid lg:border-[#D1D4D7] grid grid-cols-2   sm:flex sm:flex-row items-center sm:flex-wrap gap-[1rem] lg:p-[1.5rem] lg:rounded-[1.2rem]'>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      id='leads'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='leads'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Employee data
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      id='callData'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='callData'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Call data
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      id='document'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='document'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Document
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      id='taxType'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='taxType'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Tax Type
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      id='invoice'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='invoice'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Invoice
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      id='registeredClients'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='registeredClients'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Registered Clients
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      id='SMS'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='SMS'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      SMS
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='py-[3rem] '>
          <div className='lg:px-[1.5rem] lg:py-[1rem] lg:border lg:border-solid lg:border-[#D1D4D7]   flex flex-col gap-[1rem] lg:flex-row lg:items-center  lg:justify-between'>
            <div className='flex flex-row h-[2.5rem] w-full '>
              <input
                type='text'
                className='flex w-full lg:w-[15rem] outline-none border-r-0  border-[0.5px] border-solid border-[#D1D4D7] rounded-s-[0.5rem] px-[1rem] py-[0.5rem] text-black font-[500] text-[0.7rem]  placeholder-[#D1D4D7]'
                placeholder='Search by Name or Phone or Email'
              />
              {/* <input
                  type='text'
                  placeholder='Search by Name or Phone or Email'
                  className='flex-1  items-center   h-full rounded-s-[0.5rem] border-[0.5px] border-solid border-[#D1D4D7] border-r-0 outline-none placeholder:text-[#D1D4D7]'
                /> */}

              <button
                style={{
                  background: "#C5090A",
                }}
                className='h-full px-[1.3rem] rounded-e-[0.5rem]  text-white text-[0.7rem] font-[600]'>
                Search
              </button>
            </div>

            <div className='flex flex-row items-center gap-[1rem]'>
              <select
                className='border-none bg-transparent outline-none text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[500]  shrink-0'
                placeholder='Select Status'>
                <option disabled selected>
                  Select Status
                </option>
                <option>inProgress</option>
                <option>Completed</option>
              </select>

              <button className='rounded-[0.5rem] w-full sm:w-[8rem] flex flex-row justify-center items-center gap-[0.6rem] p-[0.5rem] bg-[#C5090A] text-[#FFF] font-[700] text-[0.7rem] '>
                <Icon
                  icon='humbleicons:download-alt'
                  className='text-[1.5rem]'
                />

                <span>Export</span>
              </button>
            </div>
          </div>

          <div>
            <DataTable
              columns={columns}
              data={sampleData}
              customStyles={customStyles}
              pagination
              paginationComponent={CustomPagination}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubAdmin;
