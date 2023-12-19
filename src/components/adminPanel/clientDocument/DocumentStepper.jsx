import { NavLink, useLocation } from "react-router-dom";

const DocumentStepper = () => {
  const location = useLocation();
  return (
    <ul className='flex flex-row items-center p-[1rem] lg:px-[2.5rem] lg:pt-[2.5rem] w-full whitespace-nowrap overflow-x-auto scrollbar-thumb-[#C5090A] gap-[2.5rem] border-b-[1.5px] border-solid border-[#D1D4D7] pb-[1rem]  '>
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
          Client Documents
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
          to={"callLog"}>
          Pending Client Documents
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
          Reviewer uploaded Documents
        </NavLink>
      </li>
    </ul>
  );
};

export default DocumentStepper;
