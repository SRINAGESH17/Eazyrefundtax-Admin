import { Outlet } from "react-router-dom";





const EmployeePanel = () => {
  return (
    <div className='font-lato p-[1.2rem] lg:p-[2.5rem] bg-[#FAFAFA]  '>
      <Outlet />
    </div>
  );
};

export default EmployeePanel;
