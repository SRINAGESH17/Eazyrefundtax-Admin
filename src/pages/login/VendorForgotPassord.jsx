import React, { useState } from "react";
import logo from "../../assets/final 5.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

const VendorForgotPassord = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const { forgotPasswordHandler, loaderBtn } = useOutletContext();

  const onSubmit = async (data) => {
    forgotPasswordHandler(data);
    //   setLoaderBtn(true);
    //   try {
    //     const { email } = data;
    //     await resetPassword(email);
    //     toast.success("Password reset link has been sent to your email.", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   } catch (error) {
    //     console.log(error);
    //     const errorCode = error.code;
    //     let errorMsg;
    //     console.log(errorCode);
    //  if (errorCode === 'auth/user-not-found') {
    //    errorMsg = "User not found.";
    //  } else {
    //    errorMsg="Failed to reset password.";
    //  }
    //     toast.error(errorMsg, {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   }
    //   setLoaderBtn(false);
  };
  return (
    <div
      className="bg-white flex flex-col font-poppins max-xs:h-screen max-xs:w-full    xs:min-width-[25rem] xl:min-w-[30rem]  justify-center items-start px-[1rem]  xs:px-[3rem] py-[1rem] xs:py-[2.5rem] gap-[2.5rem] rounded-sm z-10 "
      style={{
        boxShadow: "0px 6.40357px 70.4393px rgba(0, 0, 0, 0.06)",
        borderRadius: "6.40357px",
      }}
    >
      <Link to="/" className="w-full">
        <div className="flex flex-row w-full max-xs:justify-center ">
          <img src={logo} alt="" className="w-[5rem] xs:w-[6rem] h-auto " />
        </div>
      </Link>
      <div className="flex flex-col gap-[0.8rem] xs:gap-[0.5rem]">
        <h1 className="text-[#111111] font-[600] text-[1rem] xs:text-[1.2rem]">
          Forgot Password?
        </h1>
        <p className="text-[#494949] font-[500] max-w-[305px] xl:max-w-[385px] text-[0.7rem] xs:text-[0.8rem]">
          No worries! Just enter your e-mail and we’ll send you a OTP . then
          verify it and its done .
        </p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[1.5rem]"
      >
        <div className="group flex flex-col gap-[0.5rem]">
          <label
            htmlFor="email"
            className="text-[0.9rem] text-[#000000]/[0.6] font-[600] "
          >
            Email Addresses
          </label>
          <div
            className={`flex flex-row text-[0.8rem] group-focus-within:bg-white  group-focus-within:shadow-md border  ${
              !errors.email ? "border-[#D9D9D9]" : "border-red-600 "
            } rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem] text-[#858585]`}
          >
            <AiOutlineMail className="text-[1.2rem] text-black" />

            <input
              type="text"
              name="email"
              placeholder="satyendra@gmail.com"
              className="ml-[1rem] outline-none w-1   border-none flex-grow"
              {...register("email", {
                required: "*This field is required.",
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-sm text-red-600">Invalid email</p>
          )}
        </div>

        <div className="flex flex-row justify-center">
          {loaderBtn ? (
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="#BE0A23"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <button
              type="submit"
              className="w-full text-white text-[1.1rem] rounded-md px-[1.5rem] py-[0.8rem]"
              style={{
                background:
                  "linear-gradient(91.06deg, #BE0A23 0.01%, #E99F00 100.04%)",
              }}
            >
              Submit
            </button>
          )}
        </div>
      </form>
      <div>
        <Link to={".."}>
          <span className="text-[#392C64] text-[0.9rem] font-[600]">
            Go Back
          </span>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VendorForgotPassord;
