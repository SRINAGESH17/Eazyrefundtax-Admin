import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {useAuth} from '../../stores/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import { AuthURL } from "../../baseUrl/BaseUrl";



const AuthPage = () => {
  const [loaderBtn, setLoaderBtn] = useState(false);
  const navigate= useNavigate();
  const {login,currentUser,resetPassword,saveUserRole,setUserInfo} = useAuth();


  const loginHandler = async (data)=>{
    setLoaderBtn(true);
      try {
        const {email,password}=data;
        const x= await login(email,password);
        
        const result= await fetch(AuthURL.role.fetchRole,{
          method:"GET",
          headers:{
           Authorization:`Bearer ${x?.user?.accessToken}`,
          }
        });
        const resultJson = await result.json();
        if (!result.ok) {
          throw new Error("Failed to login");
        }

        saveUserRole(resultJson?.response?.role)
        setUserInfo(resultJson?.response)
        setTimeout(() => {
          navigate("/",{replace:true});
        }, 500);
      } catch (error) {
         console.log(error.message);
         const errorCode = error.code;
         let errorMsg;
         console.log(errorCode);
      if (errorCode === 'auth/wrong-password') {
        errorMsg ="Wrong password.";
      } else if (errorCode === 'auth/user-not-found') {
        console.log("yes")
        errorMsg = "User not found.";
      } else {
        errorMsg="Failed to login.";
      }
      console.log(errorMsg)
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
  }
  const forgotPasswordHandler = async (data)=>{
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
   if (errorCode === 'auth/user-not-found') {
     errorMsg = "User not found.";
   } else {
     errorMsg="Failed to reset password.";
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
  }
  return (
    <div className="flex flex-row w-full h-screen  xs:min-h-[600px] bg-[#F0F4F9] text-white ">
      <div className="hidden bg-[#BE0A23] w-[48%] relative lg:flex flex-col justify-center items-center px-[1rem]  ">
     
        <div className="max-w-[600px] mx-auto w-full">
          <div className=" flex flex-col gap-[4rem]">
            <div>
              <h1 className="text-[2rem] xl:text-[2.5rem] font-bold font-manrope">
                Welcome to ejoy shop
              </h1>
              <p className="font-manrope text-[1rem] xl:text-[1.25rem] font-[500]">
                Your number one place to buy the clothes you need for your every
                day needs .
              </p>
            </div>

            <div className="bg-[#E99F00] rounded-[9px] font-poppins p-[2rem] relative  ">
             
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[52%] flex justify-center items-center font-poppins">
        <Outlet context={{loginHandler,loaderBtn,forgotPasswordHandler}} />
      </div>
    </div>
  );
};

export default AuthPage;
