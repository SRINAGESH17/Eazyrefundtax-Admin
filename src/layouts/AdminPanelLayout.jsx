import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import VendorSidebar from "../components/sidebars/Sidebar";
import { FaBars } from "react-icons/fa";
import Header from "../components/headers/Header";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import MobileHeader from "../components/headers/MobileHeader";

const AdminPanelLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className='flex  bg-white'>
        <div className='hidden lg:inline-block lg:flex-1 '>
          <VendorSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <AnimatePresence mode='wait'>
          {isSidebarOpen && (
            <motion.div
              className='absolute top-0 left-0 z-40 lg:hidden flex-1 '
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              exit={{ x: -400, transition: "linear", duration: 1.5 }}>
              <VendorSidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className='lg:flex-[4] grow  w-full h-screen overflow-y-auto overflow-x-hidden'>
          <div
            className={`h-full  overflow-x-hidden relative flex flex-col w-full grow `}>
            <Header
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <MobileHeader
              isVendorSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelLayout;
