import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logo from '../../assets/logo.svg'
import { Link, useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../../stores/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import eazyRefund from "../../assets/eazyRefund.svg";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = useLocation().pathname.split("/")[2];
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [sidebarCollapse, setSidebarCollapse] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/auth", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout.", {
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
  };

  return (
    <div
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.20)" }}
      className={`bg-white border border-r border-[#DFDFDF] text-[#1A1616]  font-[400]  font-lato relative  h-screen overflow-y-auto  ${
        sidebarCollapse &&
        "w-[40%]  xl:w-[35%] transition ease-in-out delay-250"
      }   lg:top-0 lg:flex lg:flex-col lg:justify-between `}>
      {/* <button
        onClick={() => setSidebarCollapse(!sidebarCollapse)}
        className='overflow-visible absolute top-[1.9rem] right-[-1rem] z-40 outline-none  bg-[#C5090A] rounded-[1.2rem] text-[1rem] text-[#FFFFFF] hidden lg:flex justify-center items-center p-[0.5rem]'>
        <Icon
          icon={
            sidebarCollapse
              ? "ic:round-arrow-forward-ios"
              : "ic:round-arrow-back-ios"
          }
        />
      </button> */}
      <div className='flex flex-col '>
        <div className='flex flex-col  justify-center items-center  top-0 sticky py-[2rem] bg-white z-10   '>
          <div
            className='p-[0.2rem] absolute top-2 right-2 lg:hidden'
            style={{
              background:
                "#C5090A",
              boxShadow: "4px 4px 140px rgba(0, 0, 0, 0.15)",
              borderRadius: "6px",
            }}
            onClick={() => setIsSidebarOpen(false)}>
            <Icon
              icon='material-symbols:close-rounded'
              className='text-[1rem] text-white'
            />
          </div>

          <Link
            to='/'
            className='w-full flex flex-col items-center box-content '>
            <img src={eazyRefund} alt='' className='w-[7rem] h-[6.25]' />
          </Link>
        </div>

        <div className='flex flex-col h-full w-full justify-between overflow-y-auto   gap-[3rem] px-[1.5rem] py-[2.5rem]  '>
          <div className='flex flex-col gap-[1.5rem]'>
            <NavLink to='' end>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${
                  isActive &&
                  "text-[#BE0A23] bg-[#C5090A33]  rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A] font-[700]"
                } p-[0.5rem] cursor-pointer`}>
                  <div>
                    <Icon
                      icon='mdi:view-dashboard'
                      className={`text-[1.3rem]`}
                    />
                  </div>

                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Dashboard</h4>
                  )}
                </div>
              )}
            </NavLink>
            <NavLink to='/employee'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${
                  isActive &&
                  "text-[#BE0A23] bg-[#C5090A33]  rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                } p-[0.5rem] cursor-pointer`}>
                  <Icon
                    icon='clarity:employee-solid'
                    className='text-[1.3rem] '
                  />
                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Employee</h4>
                  )}
                </div>
              )}
            </NavLink>

            <NavLink to='/sub-admin'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${
                  isActive &&
                  "text-[#BE0A23] bg-[#C5090A33] p-[0.5rem] rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                } p-[0.5rem] cursor-pointer`}>
                  <Icon icon='ion:list-sharp' className='text-[1.3rem]' />
                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Sub Admin</h4>
                  )}
                </div>
              )}
            </NavLink>
            <NavLink to='/call-log'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                  ${
                    isActive &&
                    "text-[#BE0A23] bg-[#C5090A33] p-[0.5rem] rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                  } p-[0.5rem] cursor-pointer`}>
                  <Icon
                    icon='material-symbols:call-log'
                    className='text-[1.3rem]'
                  />
                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Call Data</h4>
                  )}
                </div>
              )}
            </NavLink>
            <NavLink to='/client-document'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                  ${
                    isActive &&
                    "text-[#BE0A23] bg-[#C5090A33] p-[0.5rem] rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                  } p-[0.5rem] cursor-pointer`}>
                  <Icon
                    icon='healthicons:i-documents-accepted'
                    className='text-[1.3rem]'
                  />
                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Document</h4>
                  )}
                </div>
              )}
            </NavLink>
            <NavLink to='/tax-type'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                  ${
                    isActive &&
                    "text-[#BE0A23] bg-[#C5090A33] p-[0.5rem] rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                  } p-[0.5rem] cursor-pointer`}>
                  <Icon icon='ion:list-sharp' className='text-[1.3rem]' />
                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Tax type</h4>
                  )}
                </div>
              )}
            </NavLink>

            <NavLink to='/invoice-list'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                  ${
                    isActive &&
                    "text-[#BE0A23] bg-[#C5090A33] p-[0.5rem] rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                  } p-[0.5rem] cursor-pointer`}>
                  <Icon icon='mdi:invoice-minus' className='text-[1.3rem]' />
                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Invoice</h4>
                  )}
                </div>
              )}
            </NavLink>

            <NavLink to='/registered-clients'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                  ${
                    isActive &&
                    "text-[#BE0A23] bg-[#C5090A33] p-[0.5rem] rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                  } p-[0.5rem] cursor-pointer`}>
                  <Icon icon='fa-solid:user-edit' className='text-[1.3rem]' />
                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Registered Clients</h4>
                  )}
                </div>
              )}
            </NavLink>

            <NavLink to='/sms'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                  ${
                    isActive &&
                    "text-[#BE0A23] bg-[#C5090A33] p-[0.5rem] rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                  } p-[0.5rem] cursor-pointer`}>
                  <Icon icon='ic:baseline-textsms' className='text-[1.3rem]' />
                  {!sidebarCollapse && <h4 className='text-[0.9rem]'>SMS</h4>}
                </div>
              )}
            </NavLink>

            <NavLink to='/referal-list'>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                  ${
                    isActive &&
                    "text-[#BE0A23] bg-[#C5090A33] p-[0.5rem] rounded-[0.5rem] border-l-[4px] border-solid border-[#C5090A]  font-[700] "
                  } p-[0.5rem] cursor-pointer`}>
                  <Icon
                    icon='fluent:share-24-filled'
                    className='text-[1.3rem]'
                  />
                  {!sidebarCollapse && (
                    <h4 className='text-[0.9rem]'>Referral</h4>
                  )}
                </div>
              )}
            </NavLink>
          </div>

          <div className='flex flex-col gap-[2.5rem]'>
            <button
              className='flex gap-[0.9rem] items-center  justify-start    rounded-lg w-full hover:text-[#BE0A23] focus:text-[#BE0A23]'
              onClick={handleLogout}>
              <Icon icon='ri:logout-circle-line' className='text-[1.5rem]' />
              {!sidebarCollapse && <h4 className='text-[0.9rem]'>Logout</h4>}

              {/* <Icon
                icon='fluent:share-24-filled'
                rotate={3}
                className='text-[1rem]'
              /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
