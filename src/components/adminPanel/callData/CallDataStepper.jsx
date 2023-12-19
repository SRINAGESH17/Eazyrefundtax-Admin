import { NavLink, useLocation } from "react-router-dom";

const CallDataStepper = () => {
  const location = useLocation();
  return (
    <ul
      id='callData'
      className='flex flex-row items-center p-[1rem] lg:px-[2.5rem] lg:mr-[5rem]   lg:pt-[2.5rem] whitespace-nowrap overflow-x-auto gap-[2.5rem] border-b-[1.5px] border-solid border-[#D1D4D7] pb-[1rem]  '>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive && location.pathname === `/call-log`
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem] shrink-0  `
          }
          to={""}>
          Upload Calls
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem]  `
          }
          to={"callData"}>
          Call Log
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem]  `
          }
          to={"uploadedCalls"}>
          Uploaded calls
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem]  `
          }
          to={"foreignerClients"}>
          Foreigner Clients
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem]  `
          }
          to={"assigningCalls"}>
          Assign calls to Employee
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem]  `
          }
          to={"migratingCalls"}>
          Migrate calls to other Employee
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem]  `
          }
          to={"migratingPendingCalls"}>
          Migrate Pending Calls
        </NavLink>
      </li>
    </ul>
  );
};

export default CallDataStepper;
