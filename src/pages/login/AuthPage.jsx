import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {useAuth} from '../../stores/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import { AuthURL } from "../../baseUrl/BaseUrl";

import { Icon } from "@iconify/react";

import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ThreeDots } from "react-loader-spinner";
import { useOutletContext } from "react-router-dom";
import loginBanner from "../../assets/loginBanner.png";
import forgotPasswordBanner from "../../assets/forgotPasswordBanner.png";

import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const AuthPage = () => {
  const [loaderBtn, setLoaderBtn] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showForgotPassword, setForgotPasswordStatus] = useState(false);
  const navigate = useNavigate();
  
  const { login, currentUser, resetPassword, saveUserRole, setUserInfo } =
    useAuth();

  const loginHandler = async (data) => {
    console.log("login handler called");
    setLoaderBtn(true);
    try {
      const { email, password } = data;
      const x = await login(email, password);

      const result = await fetch(AuthURL.role.fetchRole, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${x?.user?.accessToken}`,
        },
      });
      const resultJson = await result.json();
      if (!result.ok) {
        throw new Error("Failed to login");
      }

      saveUserRole(resultJson?.response?.role);
      setUserInfo(resultJson?.response);
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    } catch (error) {
      console.log(error.message);
      const errorCode = error.code;
      let errorMsg;
      console.log(errorCode);
      if (errorCode === "auth/wrong-password") {
        errorMsg = "Wrong password.";
      } else if (errorCode === "auth/user-not-found") {
        console.log("yes");
        errorMsg = "User not found.";
      } else {
        errorMsg = "Failed to login.";
      }
      console.log(errorMsg);
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setLoaderBtn(false);
  };
  const forgotPasswordHandler = async (data) => {
    console.log("forgot password called");
    setLoaderBtn(true);
    try {
      const { email } = data;
      await resetPassword(email);
      toast.success("Password reset link has been sent to your email.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      const errorCode = error.code;
      let errorMsg;
      console.log(errorCode);
      if (errorCode === "auth/user-not-found") {
        errorMsg = "User not found.";
      } else {
        errorMsg = "Failed to reset password.";
      }
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setLoaderBtn(false);
  };

  const showUserPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const ForgotPassword = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      reset,
    } = useForm();

    const onSubmit = (data) => {
      forgotPasswordHandler(data);
    };
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=''
        className='w-full flex flex-col gap-[1.5rem]'>
        <div className='group flex flex-col gap-[0.5rem]'>
          <label
            htmlFor='email'
            className='text-[0.9rem] text-[#1A1A1A] font-[600] '>
            Email Address
          </label>
          <div
            className={`flex flex-row text-[0.8rem] text-[#8888A3] group-focus-within:bg-white  group-focus-within:shadow-md border-[0.5px]  ${
              !errors.email ? "border-[#8888A3]" : "border-red-600 "
            } rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem] font-[400] `}>
            <Icon
              icon='ic:round-mail'
              className='text-[#1A1A1A] text-[1.2rem]'
            />

            <input
              type='text'
              name='email'
              placeholder='satyendra@gmail.com'
              className='ml-[1rem] outline-none w-1 placeholder:text-[#8888A3]   border-none flex-grow'
              {...register("email", {
                required: "*This field is required.",
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          {errors.email?.type === "required" && (
            <p className='text-red-600 text-sm'>{errors.email.message}</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className='text-sm text-red-600'>Invalid email</p>
          )}
        </div>

        <div
          className={`flex flex-row justify-start self-start  text-[#1A1A1A] text-[0.8rem] font-[600]`}>
          <button

          type="button"
            onClick={() => setForgotPasswordStatus(false)}
            className={`w-full border-none`}>
            <p className='cursor-pointer'>Back</p>
          </button>
        </div>

        <div className='flex flex-row justify-center'>
          {loaderBtn ? (
            <ThreeDots
              height='50'
              width='50'
              radius='9'
              color='#BE0A23'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClassName=''
              visible={true}
            />
          ) : (
            <button
              type='submit'
              className='w-full bg-[#C5090A] text-white font-[700] text-[1rem] rounded-md px-[1.5rem] py-[0.8rem]'>
              Continue
            </button>
          )}
        </div>
      </form>
    );
  };

  const LoginForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      reset,
    } = useForm();

    const onSubmit = (data) => {
      loginHandler(data);
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-[1.5rem]'>
        <div className='group flex flex-col gap-[0.5rem]'>
          <label
            htmlFor='email'
            className='text-[0.9rem] text-[#1A1A1A] font-[600] '>
            Email Address
          </label>
          <div
            className={`flex flex-row text-[0.8rem] group-focus-within:bg-white  group-focus-within:shadow-md border-[0.5px]  ${
              !errors.email ? "border-[#8888A3]" : "border-red-600 "
            } rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem]   font-[400] `}>
            <Icon
              icon='ic:round-mail'
              className='text-[#1A1A1A] text-[1.2rem]'
            />

            <input
              type='text'
              name='email'
              placeholder='satyendra@gmail.com'
              className='ml-[1rem] outline-none w-1 placeholder:text-[#8888A3] text-[#8888A3]  border-none flex-grow'
              {...register("email", {
                required: "*This field is required.",
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          {errors.email?.type === "required" && (
            <p className='text-red-600 text-sm'>{errors.email.message}</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className='text-sm text-red-600'>Invalid email</p>
          )}
        </div>

        <div className='group flex flex-col gap-[0.5rem] '>
          <label
            htmlFor='password'
            className=' text-[0.9rem]  text-[#1A1A1A] font-[600]'>
            Password
          </label>
          <div
            className={`flex flex-row text-[0.8rem] group-focus-within:bg-white  group-focus-within:shadow-md border-[0.5px]  ${
              !errors.password ? "border-[#8888A3]" : "border-red-600"
            } items-center rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem]  font-[400]`}>
            <Icon
              icon='mdi:password'
              className='text-[#1A1A1A] text-[1.2rem]'
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder='*********'
              name='password'
              className='mx-[1rem] outline-none border-none w-1  placeholder:text-[#8888A3] text-[#8888A3]   flex-grow'
              {...register("password", {
                required: "*This field is required.",
              })}
            />
            <div className='text-[1.2rem] pl-[0.5rem] xs:pl-[1rem]  cursor-pointer '>
              {console.log(showPassword)}
              {showPassword ? (
                <Icon
                  onClick={showUserPassword}
                  icon='mdi:eye'
                  className='text-[#1A1A1A]'
                />
              ) : (
                <Icon
                  onClick={showUserPassword}
                  icon='mdi:eye-off'
                  className='text-[#1A1A1A]'
                />
              )}
            </div>
          </div>
          {errors.password && (
            <p className='text-red-600 text-sm'>{errors.password.message}</p>
          )}
        </div>

        <div
          className={`flex flex-row justify-end self-end text-[#1A1A1A] text-[0.8rem] font-[600]`}>
          <button
            onClick={() => setForgotPasswordStatus(true)}
            className={`w-full border-none`}>
            <p className='cursor-pointer'>Forgot Password?</p>
          </button>
        </div>

        <div className='flex flex-row justify-center'>
          {loaderBtn ? (
            <ThreeDots
              height='50'
              width='50'
              radius='9'
              color='#BE0A23'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClassName=''
              visible={true}
            />
          ) : (
            <button
              type='submit'
              className='w-full bg-[#C5090A] font-[700] text-white text-[1rem] rounded-md px-[1.5rem] py-[0.8rem]'>
              Login
            </button>
          )}
        </div>
      </form>
    );
  };

  const bannerImage = showForgotPassword ? forgotPasswordBanner : loginBanner;
  return (
    <div className='flex flex-row w-full h-screen  xs:min-h-[600px] bg-[#F0F4F9] text-white '>
      <div className='hidden bg-[#EAF1FF] w-[48%] relative lg:flex flex-col justify-center items-center px-[1rem] '>
        <div className='mx-auto w-full flex justify-center'>
          <img src={bannerImage} className='h-auto w-[33rem]' />
        </div>
      </div>
      <div className='w-full lg:w-[52%] bg-[#FFFFFF] flex  justify-center  items-center font-lato'>
        <div
          className='bg-white flex flex-col max-xs:h-screen   max-xs:w-full xs:min-w-[27rem] xl:min-w-[30rem] justify-center items-start px-[1rem]  xs:px-[3rem] py-[1rem] xs:py-[2.5rem] gap-[2.5rem] rounded-sm z-10 '
          style={{
            borderRadius: "6.40357px",
          }}>
          <div className='flex flex-row w-full max-xs:justify-center'>
            <img
              src={logo2}
              alt=''
              className='w-[5rem] xs:w-[6rem] lg:w-[30rem] lg:h-[30rem] h-auto xs:h-auto'
            />
          </div>

          <div>
            <h1 className='text-[#1A1A1A] text-[1rem] xs:text-[1.2rem] lg:text-[1.25rem] font-lato font-[700]'>
              {showForgotPassword ? "Forgot Password" : "Welcome Back"}
            </h1>
            <p
              className={`font-lato text-[0.5rem] lg:text-[0.8rem] ${
                showForgotPassword ? "text-[#8888A3]" : "text-[#1A1A1A]"
              }  font-[500] max-w-[19rem]`}>
              {showForgotPassword
                ? "We  just need your registered email address to reset your password "
                : " Enter your credential to access your account"}
            </p>
          </div>
          {showForgotPassword ? <ForgotPassword /> : <LoginForm />}

          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;