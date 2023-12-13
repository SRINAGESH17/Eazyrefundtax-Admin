import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logo from '../../assets/logo.svg'
import { Link, useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../../stores/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = useLocation().pathname.split("/")[2];
  const { logout } = useAuth();
  const navigate = useNavigate();

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
    <div className="bg-white border border-r border-[#DFDFDF] text-[#212529] font-bold  font-manrope relative h-screen  overflow-y-auto  lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between pb-[2.5rem] ">
      <div>
        <div className="flex flex-col  justify-center items-center sticky top-0 py-[2rem] bg-white z-10   ">
          <div
            className="p-[0.2rem] absolute top-2 right-2 lg:hidden"
            style={{
              background:
                "linear-gradient(91.06deg, #BE0A23 0.01%, #E99F00 100.04%)",
              boxShadow: "4px 4px 140px rgba(0, 0, 0, 0.15)",
              borderRadius: "6px",
            }}
            onClick={() => setIsSidebarOpen(false)}
          >
            <Icon
              icon="material-symbols:close-rounded"
              className="text-[1rem] text-white"
            />
          </div>

          <Link
            to="/"
            className="w-full pl-[3rem]  flex flex-col   items-start "
          >
            <img src={logo} alt="" className="w-[6rem] h-auto" />
          </Link>
        </div>

        <div className="flex flex-col gap-[3rem] px-[2rem] py-[2.5rem] ">
          <div className="flex flex-col gap-[2.5rem]">
            <NavLink to="" end>
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${isActive && "text-[#BE0A23]"} cursor-pointer`}
                >
                  <Icon icon="mdi:view-dashboard" className="text-[1.3rem] " />
                  <h4 className="text-[0.9rem]">Dashboard</h4>
                </div>
              )}
            </NavLink>
            <NavLink to="/myMeetings">
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${isActive && "text-[#BE0A23]"} cursor-pointer`}
                >
                  <Icon icon="uil:calender" className="text-[1.3rem] " />
                  <h4 className="text-[0.9rem]">My Meetings</h4>
                </div>
              )}
            </NavLink>


            <NavLink to="/orders">
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${isActive && "text-[#BE0A23]"} cursor-pointer`}
                >
                  <Icon
                    icon="material-symbols:order-approve-outline-rounded"
                    className="text-[1.3rem]"
                  />
                  <h4 className="text-[0.9rem]">Orders</h4>
                </div>
              )}
            </NavLink>
            <NavLink to="/reports">
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${isActive && "text-[#BE0A23]"} cursor-pointer`}
                >
                  <Icon
                    icon="mdi:report-box-outline"
                    className="text-[1.3rem]"
                  />
                  <h4 className="text-[0.9rem]">Reports</h4>
                </div>
              )}
            </NavLink>
            <NavLink to="/myStore">
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${isActive && "text-[#BE0A23]"} cursor-pointer`}
                >
                  <Icon
                    icon="material-symbols:local-convenience-store-outline"
                    className="text-[1.3rem]"
                  />
                  <h4 className="text-[0.9rem]">My Store</h4>
                </div>
              )}
            </NavLink>
            <NavLink to="/settings">
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${isActive && "text-[#BE0A23]"} cursor-pointer`}
                >
                  <Icon icon="cil:settings" className="text-[1.3rem]" />
                  <h4 className="text-[0.9rem]">Settings</h4>
                </div>
              )}
            </NavLink>
          </div>
          <hr className="border-[#DFDFDF]" />
          <div className="flex flex-col gap-[2.5rem]">
            <NavLink to="/chat">
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                ${isActive && "text-[#BE0A23]"} cursor-pointer`}
                >
                  <Icon
                    icon="material-symbols:mark-unread-chat-alt-outline"
                    className="text-[1.3rem]"
                  />
                  <h4 className="text-[0.9rem]">Chat</h4>
                </div>
              )}
            </NavLink>
            <NavLink to="/support">
              {({ isActive, isPending }) => (
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex gap-[0.9rem] items-center  rounded-md  
                      ${isActive && "text-[#BE0A23]"} cursor-pointer`}
                >
                  <Icon
                    icon="material-symbols:contact-support-outline"
                    className="text-[1.3rem]"
                  />
                  <h4 className="text-[0.9rem]">Support</h4>
                </div>
              )}
            </NavLink>
            

            <button
              className="flex gap-[0.9rem] items-center  justify-start    rounded-lg w-full hover:text-[#BE0A23] focus:text-[#BE0A23]"
              onClick={handleLogout}
            >
              <Icon icon="uiw:logout" className="text-[1.5rem]" />
              <h4 className="text-[0.9rem]" type="button">
                Logout
              </h4>
              <Icon
                icon="ant-design:caret-down-filled"
                rotate={3}
                className="text-[1rem]"
              />
            </button>
          </div>
          <hr className="border-[#DFDFDF]" />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Sidebar;
