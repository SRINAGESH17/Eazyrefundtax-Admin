import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import VendorSidebar from "../components/sidebars/Sidebar";
import { FaBars } from "react-icons/fa";
import Header from "../components/headers/Header";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import MobileHeader from "../components/headers/MobileHeader";

const AdminPanelLayout = () => {
  const [isVendorSidebarOpen, setIsVendorSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex overflow-y-hidden bg-white">
        <div className="hidden lg:inline-block lg:flex-1 ">
          <VendorSidebar
            isVendorSidebarOpen={isVendorSidebarOpen}
            setIsVendorSidebarOpen={setIsVendorSidebarOpen}
          />
        </div>
        <AnimatePresence mode="wait">
          {isVendorSidebarOpen && (
            <motion.div
              className="absolute top-0 left-0 z-40 lg:hidden flex-1 "
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              exit={{ x: -400, transition: "linear", duration: 1.5 }}
            >
              <VendorSidebar
                isVendorSidebarOpen={isVendorSidebarOpen}
                setIsVendorSidebarOpen={setIsVendorSidebarOpen}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="lg:flex-[5] w-full h-screen overflow-y-auto overflow-x-hidden">
          <div
            className={`h-full  overflow-x-hidden relative flex flex-col `}
          >
             <Header
              isVendorSidebarOpen={isVendorSidebarOpen}
              setIsVendorSidebarOpen={setIsVendorSidebarOpen}
            />
           <MobileHeader
              isVendorSidebarOpen={isVendorSidebarOpen}
              setIsVendorSidebarOpen={setIsVendorSidebarOpen}
            />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelLayout;
