import React, { useState } from "react";
import logo from "../../assets/final 5.jpg";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { useOutletContext } from "react-router-dom";

const VendorLoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const showUserPassword = (e) => {
    setShowPassword(!showPassword);
  };
  const { loginHandler, loaderBtn } = useOutletContext();

  const onSubmit = (data) => {
    loginHandler(data);
    //   setLoaderBtn(true);
    // try {
    //   const {email,password}=data;
    //   const result = await login(email,password);
    //   setTimeout(() => {
    //     navigate("/vendor",{replace:true});
    //   }, 500);
    // } catch (error) {
    //    console.log(error.message);
    //    const errorCode = error.code;
    //    let errorMsg;
    //    console.log(errorCode);
    // if (errorCode === 'auth/wrong-password') {
    //   errorMsg ="Wrong password.";
    // } else if (errorCode === 'auth/user-not-found') {
    //   console.log("yes")
    //   errorMsg = "User not found.";
    // } else {
    //   errorMsg="Failed to login.";
    // }
    // console.log(errorMsg)
    //   toast.error(errorMsg, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    // }
    // setLoaderBtn(false);
  };

  return (
    <div
      className="bg-white flex flex-col max-xs:h-screen   max-xs:w-full xs:min-w-[25rem] xl:min-w-[30rem] justify-center items-start px-[1rem]  xs:px-[3rem] py-[1rem] xs:py-[2.5rem] gap-[2.5rem] rounded-sm z-10 "
      style={{
        boxShadow: "0px 6.40357px 70.4393px rgba(0, 0, 0, 0.06)",
        borderRadius: "6.40357px",
      }}
    >
      <Link to="/" className="w-full">
        <div className="flex flex-row w-full max-xs:justify-center">
          <img
            src={logo}
            alt=""
            className="w-[5rem] xs:w-[6rem] h-auto xs:h-auto"
          />
        </div>
      </Link>
      <h1 className="text-[#111111] font-[600] text-[1rem] xs:text-[1.2rem]">
        Login here
      </h1>
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
            Email Address
          </label>
          <div
            className={`flex flex-row text-[0.8rem] group-focus-within:bg-white  group-focus-within:shadow-md border  ${
              !errors.email ? "border-[#D9D9D9]" : "border-red-600 "
            } rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem] placeholder-[#858585] text-[#050505]`}
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
        <div className="group flex flex-col gap-[0.5rem] ">
          <label
            htmlFor="password"
            className=" text-[0.9rem] text-[#000000]/[0.6] font-[600]"
          >
            Password
          </label>
          <div
            className={`flex flex-row text-[0.8rem] group-focus-within:bg-white  group-focus-within:shadow-md border  ${
              !errors.password ? "border-[#D9D9D9]" : "border-red-600 "
            } items-center rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem] text-[#858585]`}
          >
            <RiLockPasswordLine className="text-[1.2rem] text-black" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="*********"
              className="mx-[1rem] outline-none border-none w-1    flex-grow"
              {...register("password", {
                required: "*This field is required.",
              })}
            />
            <div className="text-[1.2rem] pl-[0.5rem] xs:pl-[1rem] text-black cursor-pointer ">
              {showPassword ? (
                <AiOutlineEye onClick={showUserPassword} />
              ) : (
                <AiOutlineEyeInvisible onClick={showUserPassword} />
              )}
            </div>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
          <div className="flex flex-row justify-end text-[#392C64] text-[0.8rem] font-[600]">
            <Link to={"forgotPassword"}>
              <p className=" cursor-pointer">Forgot Password?</p>
            </Link>
          </div>
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
              Login
            </button>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default VendorLoginCard;
