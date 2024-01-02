import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { useSelector } from "react-redux";
import profile from "../../assets/profile.png";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { userId, userName } = useSelector((state) => state.employee);

  const [name, setUserName] = useState("james");

  return (
    <div className='hidden relative sm:flex flex-row  justify-between items-center  px-[1rem] md:px-[2rem] lg:px-[4rem] py-[1rem] border-b border-[#DFDFDF] font-lato'>
      <div className='flex flex-row items-center gap-[2rem] md:gap-[4rem]'>
        <div
          className='px-[0.3rem] rounded-md lg:hidden cursor-pointer'
          style={{
            background: "#C5090A",
          }}
          onClick={() => {
            setIsSidebarOpen(true);
          }}>
          <Icon icon='ic:outline-menu' className='text-[2.5rem] text-white ' />
        </div>
        {/* <div
          className="flex flex-row items-center border rounded-md border-[#DFDFDF] bg-white px-[1rem] py-[0.5rem]"
          style={{ boxShadow: "4px 4px 150px rgba(0, 0, 0, 0.13)" }}
        >
          <input
            type="text"
            className="w-[15rem] placeholder-[#848484] text-[#848484] text-[0.8rem] font-bold outline-none"
            placeholder="Search in your flow"
          />
          <div
            className="rounded-md h-full text-white p-[0.3rem] text-sm cursor-pointer"
            style={{
              background:
                "linear-gradient(91.06deg, #BE0A23 0.01%, #E99F00 100.04%)",
            }}
          >
            <Icon icon="akar-icons:search" />
          </div>
        </div> */}
      </div>
      <div className='flex flex-row items-center gap-[1rem] sm:gap-[2rem] md:gap-[4rem]'>
        <Badge color='error' overlap='circular' variant='dot'>
          <Icon
            icon='clarity:notification-line'
            className='text-[1.5rem] text-[#8888A3]'
          />
        </Badge>

        <Menu placement='bottom'>
          <MenuHandler>
            <div className='flex flex-row items-center gap-[1rem]'>
              <img
                src={profile}
                alt=''
                className='w-[3rem]  h-auto rounded-full'
              />
              <div>
                <h3 className='text-[1rem] font-[500] capitalize text-[#1A1616]'>
                  {name}
                </h3>
                <h4 className='text-[#8888A3] text-[0.8rem] font-[500]'>
                  Admin
                </h4>
              </div>
              <button>
                <Icon icon='icon-park-outline:down' />
              </button>
            </div>
          </MenuHandler>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <Link to='forgot-password'>
              <MenuItem>Forgot Password</MenuItem>
            </Link>

            <MenuItem>Settings</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
