import { useState, useRef } from "react";
import { Icon } from "@iconify/react";

import { useForm, Controller } from "react-hook-form";

import { Select, Option } from "@material-tailwind/react";

import PhoneInputWithCountry from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";

import employeeProfile from "../../../assets/employeeProfile.png";

import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";
import { useAuth } from "../../../stores/AuthContext";
import { fi } from "date-fns/locale";

const AdminCreateEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm();

  const imageRef = useRef(null);

  const identityRef = useRef(null);

  const [value, setValue] = useState("");

  const [role, selectRole] = useState("");

  const [employeeImage, setEmployeeImage] = useState();

  const [identityFile, setIdentityFile] = useState();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    console.log(e.dataTransfer.files);

    setEmployeeImage(e.dataTransfer.files[0]);
  };

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const [confirmPassword, setPassword] = useState();

  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { getAccessToken } = useAuth();
  console.log(value);

  const submitData = async (data) => {
    if (data.password !== confirmPassword) {
      setConfirmPasswordError(
        "Password doesn't match please re-enter correctly"
      );
    }

    try {


      console.log(data,"data for creating employee")
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("mobileNumber", value);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("photo", employeeImage);
      formData.append("_IDURL", identityFile);
      formData.append("designation", data.designation);
      formData.append("role", data.role);
      formData.append("identityType", data.identityType);
      formData.append("identityNumber", data.identityNumber);
      formData.append("state", data.state);
      formData.append("zipCode", data.zipCode);

      console.log(formData);

      const token = await getAccessToken();

      console.log(token);

      const url = AdminAuthorURL.employee.createEmployee;

      console.log(url);

      const options = {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      const responseObj = await response.json();

      if (response.ok) {
        toast.success(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
        });

        reset({
          name: "",
          email: "",
          mobileNumber: "",
          password: "",
          photo: "",
          designation: "",
          role: "",
          identifyType: "",
          identityNumber: "",
          state: "",
          zipCode: "",
        });

        setValue("");
        setConfirmPassword("");

        setIdentityFile();
        setEmployeeImage();

        console.log(responseObj);
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
  };

  const contextClass = {
    success: "bg-[#00C041]",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  const fileName =
    identityFile?.name &&
    identityFile.name.split("").slice(0, 10).join("") + ".png";

  console.log(errors);

  return (
    <div
      // style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      className='flex flex-col gap-[2rem] lg:gap-[2.6rem] lg:bg-[#fff] lg:rounded-[0.5rem] lg:shadow-shadow   lg:p-[2.5rem]'>
      <h1 className='text-[0.8rem] text-[#1A1616] font-[700] lg:text-[1rem] '>
        Add New Employee
      </h1>

      <div>
        <form
          action=''
          onSubmit={handleSubmit(submitData)}
          className='flex flex-col gap-[4rem] lg:gap-[9rem]'>
          <div className='xl:flex-row flex flex-col gap-[3rem]'>
            <div className='grid grid-cols-1 gap-[1rem] lg:grid-cols-2  xl:gap-x-[6rem] xl:gap-y-[1.5rem] xl:w-[70%] xl:px-[3rem] shrink-0 '>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Full Name
                </label>
                <input
                  type='text'
                  {...register("name", {
                    required: "This field is required",
                  })}
                  name='name'
                  placeholder='Ex : Manikanta'
                  className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                />
                {errors.name && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.name.message}
                  </p>
                )}
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
                    name='email'
                    {...register("email", {
                      required: "*This field is required.",
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder='Enter Email Address'
                    className='outline-none flex-1 rounded-[0.5rem] border-none px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem]  font-[500] placeholder:text-[#E1D6D5]'
                  />
                </div>
                {errors.email?.type === "required" && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className='text-sm font-bold text-red-600'>
                    Invalid email
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Phone Number
                </label>
                <PhoneInputWithCountry
                  defaultCountry='IN'
                  name='mobileNumber'
                  control={control}
                  onChange={setValue}
                  className='outline-none cursor-pointer rounded-[0.5rem]  border border-solid border-[#D1D4D7] px-[1rem] py-0 text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                  rules={{
                    required: "*This field is required.",
                    validate: isValidPhoneNumber,
                  }}
                  style={{
                    height: "51.2px",
                    outline: "none ",
                  }}
                  placeholder='Enter Mobile Number'
                />

                {errors?.mobileNumber?.type === "required" && (
                  <div className='text-sm font-bold text-[#E92215]'>
                    {errors.mobileNumber.message}
                  </div>
                )}
                {errors?.mobileNumber?.type === "validate" && (
                  <div className='text-sm font-bold text-[#E92215]'>
                    Invalid Mobile Number
                  </div>
                )}
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
                    type={showPassword ? "text" : "password"}
                    name='password'
                    {...register("password", {
                      required: "This filed is required",
                    })}
                    placeholder='Enter password'
                    className='outline-none flex-1  border-none px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                  />

                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='flex items-center pr-[1rem]'>
                    <Icon
                      icon={showPassword ? "mdi:eye" : "mdi:eye-off"}
                      className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.password.message}
                  </p>
                )}
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
                    value={confirmPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder='Enter password'
                    className='outline-none flex-1  border-none px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                  />

                  <button
                    type='button'
                    onClick={() => setConfirmPassword(!showConfirmPassword)}
                    className='flex items-center pr-[1rem]'>
                    <Icon
                      icon={showPassword ? "mdi:eye" : "mdi:eye-off"}
                      className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                    />
                  </button>
                </div>

                {confirmPasswordError !== "" && (
                  <p className='text-[red] text-[0.7rem] font-bold'>
                    {confirmPasswordError}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Role
                </label>

                <Controller
                  rules={{
                    required: "*This field is required.",
                  }}
                  name='designation'
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label={
                        <p className='text-[#E1D6D5] '>Select Role Type</p>
                      }
                      className='text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] text-[#E1D6D5]'
                      size='lg'>
                      <Option value='Caller'>Caller</Option>
                      <Option value='Preparer'>Preparer</Option>
                      <Option value='Reviewer'>Reviewer</Option>
                      <Option value='Final Drafter'>Final Drafter</Option>
                    </Select>
                  )}
                />

                {errors.designation && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.designation.message}
                  </p>
                )}
                {/*
                 */}
              </div>

              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  State
                </label>

                <input
                  type='text'
                  name='state'
                  {...register("state", {
                    required: "This filed is required",
                  })}
                  placeholder='Ex : Texas'
                  className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                />

                {errors.state && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.state.message}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Zipcode
                </label>

                <input
                  type='text'
                  name='zipCode'
                  {...register("zipCode", {
                    required: "This filed is required",
                  })}
                  placeholder='Ex : Texas'
                  className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                />

                {errors.zipCode && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Identify Type
                </label>

                <Controller
                  name='identifyType'
                  rules={{
                    required: "*This field is required.",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label={<p className='text-[#E1D6D5] '>Identify Type</p>}
                      className=' text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem]  font-[500] text-[#E1D6D5]'
                      size='lg'>
                      <Option value='aadhar'>Aadhar</Option>
                      <Option value={"pancard"}>Pancard</Option>
                    </Select>
                  )}
                />

                {errors.identifyType && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.identifyType.message}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-[0.2rem]'>
                <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                  Identify Number
                </label>

                <input
                  type='text'
                  {...register("identityNumber", {
                    required: "This filed is required",
                  })}
                  name='identityNumber'
                  placeholder='Ex : 87XXXXXXXX'
                  className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                />
                {errors.identityNumber && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.identityNumber.message}
                  </p>
                )}
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
                    // name='employeeImage'
                    // {...register("employeeImage",{
                    //   required:"This field is required"
                    // })}
                    rules={{
                      required: "*This field is required.",
                    }}
                    control={control}
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
                    {}
                  </p>
                </div>
                {errors.employeeImage && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.employeeImage.message}
                  </p>
                )}
                <div className='flex flex-col gap-[0.5rem]'>
                  <div className='border border-solid border-[#D1D4D7] shrink-0 py-[0.9rem] px-[1.9rem] xl:px-[1.1rem] xl:py-[1.5rem]  rounded-[1.2rem] flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[0.6rem] '>
                    <button
                      type='button'
                      onClick={() => identityRef.current.click()}
                      className='bg-imageGray rounded-[0.5rem] p-[0.5rem] flex justify-center items-center'>
                      <Icon
                        icon='bxs:image-add'
                        className='h-[1.5rem] w-[1.5rem]  text-[#D1D4D7]'
                      />
                    </button>

                    <input
                      style={{ display: "none" }}
                      type='file'
                      accept='image/*'
                      control={control}
                      // name="identityImage" 
                      // {...register("identityImage", {
                      //   required:"This field is required"
                      // })}
                      onChange={({ target: { files } }) => {
                        console.log(files);
                        if (files[0]) {
                          setIdentityFile(files[0]);
                        }
                      }}
                      ref={identityRef}
                    />

                    <div className='flex flex-row items-center gap-[1rem] text-[#D1D4D7]'>
                      {identityFile ? (
                        <>
                          <p className='text-[0.7rem] font-[400]'>
                            {identityFile.name.split("").slice(0, 10).join("") +
                              ".png"}
                          </p>
                          <button onClick={() => setIdentityFile()}>
                            <Icon
                              icon='basil:cross-outline'
                              className='text-[1.5rem] '
                            />
                          </button>
                        </>
                      ) : (
                        <>
                          <Icon
                            icon='ep:upload-filled'
                            className='text-[1.5rem] '
                          />

                          <p className='text-[0.7rem] font-[400]'>
                            Upload an image of identity .
                          </p>
                        </>
                      )}
                    </div>

                    <p className='text-[0.7rem] text-[#D1D4D7] font-[400]'>
                      File Format <span className='text-[#000] '>pdf</span>{" "}
                      Recommended Size
                      <span className='text-[#000]'>600x600</span>
                      (1:1)
                    </p>
                  </div>
                  {errors.identityImage && (
                  <p className='text-red-600 font-bold text-sm'>
                    {errors.identityImage.message}
                  </p>
                )}
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

export default AdminCreateEmployee;